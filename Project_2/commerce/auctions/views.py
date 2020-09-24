from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django import forms
from datetime import datetime

from .models import User
from .models import Category
from .models import Listing


def index(request):
    return render(request, "auctions/index.html", {
        "listings": Listing.objects.all()
    })


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "auctions/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "auctions/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "auctions/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "auctions/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "auctions/register.html")

@login_required(login_url='/login')
def new_listing(request):
    if request.method == "POST":
        form = NewListingForm(request.POST)
        if form.is_valid():
            new_listing = Listing(user=request.user, title=request.POST["title"], description=request.POST["description"], startBid=request.POST["startBid"])
            if request.POST["category"] != "":
                new_listing.category = Category.objects.get(id=request.POST["category"])
                new_listing.dateTime = datetime.now()
            if request.POST["image"] != "":
                new_listing.image = request.POST["image"]
            new_listing.save()
            return index(request)
        else:
            return render(request, "auctions/new_listing.html", {
                "form": form
            })
    else:
        return render(request, "auctions/new_listing.html", {
            "form": NewListingForm()
        })

def listing(request, title):
    l = Listing.objects.filter(title=title).first()
    if l is not None:
        return render(request, "auctions/listing.html", {
            "listing": l
        })
    else:
        return HttpResponse("error!")

class NewListingForm(forms.Form):
    title = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Title'}))
    description = forms.CharField(widget=forms.Textarea)
    startBid = forms.DecimalField(label="Start Bid", max_digits=10, decimal_places=2, localize=True)
    image = forms.URLField(label="Image's URL", required=False)
    #category = forms.ModelChoiceField(queryset=Category.objects.order_by('name').values_list('name', flat=True), required=False)
    category = forms.ModelChoiceField(queryset=Category.objects.order_by('name'), required=False)