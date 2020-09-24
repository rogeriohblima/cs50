from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class Category(models.Model):
	name = models.CharField(max_length=32)
	def __str__(self):
		return f"{self.name}"

class Listing(models.Model):
	title = models.CharField(max_length=64)
	description = models.TextField()
	dateTime = models.DateTimeField(auto_now_add=True)  # default widget form: DateTimeInput
	startBid = models.DecimalField(max_digits=10, decimal_places=2)  # default widget form: NumberInput when localize is False
	image = models.URLField()  # validate by URLValidator. Widget form: URLInput
	category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="listings_by_category", default="")
	user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="listings_by_user")

class Bids(models.Model):
	value = models.DecimalField(max_digits=10, decimal_places=2)
	user = models.ManyToManyField(User, related_name="bids")
	listing = models.ForeignKey(Listing, on_delete=models.CASCADE, related_name="bids")

class Comment(models.Model):
	text = models.TextField()
	dateTime = models.DateTimeField(auto_now_add=True)
	listing = models.ForeignKey(Listing, on_delete=models.CASCADE, related_name="commentsByListing")
	user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="commentsByUser")