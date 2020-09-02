/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.17.1
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t=t||self).jQuery)}(this,(function(t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var r=function(t){return t&&t.Math==Math&&t},o=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},u=!i((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),c={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,f={f:a&&!c.call({1:2},1)?function(t){var e=a(this,t);return!!e&&e.enumerable}:c},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},s={}.toString,h=function(t){return s.call(t).slice(8,-1)},p="".split,d=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==h(t)?p.call(t,""):Object(t)}:Object,y=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},g=function(t){return d(y(t))},v=function(t){return"object"==typeof t?null!==t:"function"==typeof t},m=function(t,e){if(!v(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!v(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!v(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!v(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},w={}.hasOwnProperty,b=function(t,e){return w.call(t,e)},O=o.document,S=v(O)&&v(O.createElement),T=function(t){return S?O.createElement(t):{}},j=!u&&!i((function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a})),E=Object.getOwnPropertyDescriptor,L={f:u?E:function(t,e){if(t=g(t),e=m(e,!0),j)try{return E(t,e)}catch(t){}if(b(t,e))return l(!f.f.call(t,e),t[e])}},P=function(t){if(!v(t))throw TypeError(String(t)+" is not an object");return t},x=Object.defineProperty,C={f:u?x:function(t,e,n){if(P(t),e=m(e,!0),P(n),j)try{return x(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},M=u?function(t,e,n){return C.f(t,e,l(1,n))}:function(t,e,n){return t[e]=n,t},V=function(t,e){try{M(o,t,e)}catch(n){o[t]=e}return e},_=o["__core-js_shared__"]||V("__core-js_shared__",{}),k=Function.toString;"function"!=typeof _.inspectSource&&(_.inspectSource=function(t){return k.call(t)});var A,H,R,I=_.inspectSource,W=o.WeakMap,F="function"==typeof W&&/native code/.test(I(W)),N=n((function(t){(t.exports=function(t,e){return _[t]||(_[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.0",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),D=0,G=Math.random(),q=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++D+G).toString(36)},z=N("keys"),B=function(t){return z[t]||(z[t]=q(t))},X={},K=o.WeakMap;if(F){var Q=new K,U=Q.get,Y=Q.has,J=Q.set;A=function(t,e){return J.call(Q,t,e),e},H=function(t){return U.call(Q,t)||{}},R=function(t){return Y.call(Q,t)}}else{var Z=B("state");X[Z]=!0,A=function(t,e){return M(t,Z,e),e},H=function(t){return b(t,Z)?t[Z]:{}},R=function(t){return b(t,Z)}}var $,tt,et={set:A,get:H,has:R,enforce:function(t){return R(t)?H(t):A(t,{})},getterFor:function(t){return function(e){var n;if(!v(e)||(n=H(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},nt=n((function(t){var e=et.get,n=et.enforce,r=String(String).split("String");(t.exports=function(t,e,i,u){var c=!!u&&!!u.unsafe,a=!!u&&!!u.enumerable,f=!!u&&!!u.noTargetGet;"function"==typeof i&&("string"!=typeof e||b(i,"name")||M(i,"name",e),n(i).source=r.join("string"==typeof e?e:"")),t!==o?(c?!f&&t[e]&&(a=!0):delete t[e],a?t[e]=i:M(t,e,i)):a?t[e]=i:V(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||I(this)}))})),rt=o,ot=function(t){return"function"==typeof t?t:void 0},it=function(t,e){return arguments.length<2?ot(rt[t])||ot(o[t]):rt[t]&&rt[t][e]||o[t]&&o[t][e]},ut=Math.ceil,ct=Math.floor,at=function(t){return isNaN(t=+t)?0:(t>0?ct:ut)(t)},ft=Math.min,lt=function(t){return t>0?ft(at(t),9007199254740991):0},st=Math.max,ht=Math.min,pt=function(t){return function(e,n,r){var o,i=g(e),u=lt(i.length),c=function(t,e){var n=at(t);return n<0?st(n+e,0):ht(n,e)}(r,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},dt={includes:pt(!0),indexOf:pt(!1)},yt=dt.indexOf,gt=function(t,e){var n,r=g(t),o=0,i=[];for(n in r)!b(X,n)&&b(r,n)&&i.push(n);for(;e.length>o;)b(r,n=e[o++])&&(~yt(i,n)||i.push(n));return i},vt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],mt=vt.concat("length","prototype"),wt={f:Object.getOwnPropertyNames||function(t){return gt(t,mt)}},bt={f:Object.getOwnPropertySymbols},Ot=it("Reflect","ownKeys")||function(t){var e=wt.f(P(t)),n=bt.f;return n?e.concat(n(t)):e},St=function(t,e){for(var n=Ot(e),r=C.f,o=L.f,i=0;i<n.length;i++){var u=n[i];b(t,u)||r(t,u,o(e,u))}},Tt=/#|\.prototype\./,jt=function(t,e){var n=Lt[Et(t)];return n==xt||n!=Pt&&("function"==typeof e?i(e):!!e)},Et=jt.normalize=function(t){return String(t).replace(Tt,".").toLowerCase()},Lt=jt.data={},Pt=jt.NATIVE="N",xt=jt.POLYFILL="P",Ct=jt,Mt=L.f,Vt=function(t,e){var n,r,i,u,c,a=t.target,f=t.global,l=t.stat;if(n=f?o:l?o[a]||V(a,{}):(o[a]||{}).prototype)for(r in e){if(u=e[r],i=t.noTargetGet?(c=Mt(n,r))&&c.value:n[r],!Ct(f?r:a+(l?".":"#")+r,t.forced)&&void 0!==i){if(typeof u==typeof i)continue;St(u,i)}(t.sham||i&&i.sham)&&M(u,"sham",!0),nt(n,r,u,t)}},_t=Array.isArray||function(t){return"Array"==h(t)},kt=function(t){return Object(y(t))},At=function(t,e,n){var r=m(e);r in t?C.f(t,r,l(0,n)):t[r]=n},Ht=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),Rt=Ht&&!Symbol.sham&&"symbol"==typeof Symbol(),It=N("wks"),Wt=o.Symbol,Ft=Rt?Wt:q,Nt=function(t){return b(It,t)||(Ht&&b(Wt,t)?It[t]=Wt[t]:It[t]=Ft("Symbol."+t)),It[t]},Dt=Nt("species"),Gt=function(t,e){var n;return _t(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!_t(n.prototype)?v(n)&&null===(n=n[Dt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},qt=it("navigator","userAgent")||"",zt=o.process,Bt=zt&&zt.versions,Xt=Bt&&Bt.v8;Xt?tt=($=Xt.split("."))[0]+$[1]:qt&&(!($=qt.match(/Edge\/(\d+)/))||$[1]>=74)&&($=qt.match(/Chrome\/(\d+)/))&&(tt=$[1]);var Kt,Qt=tt&&+tt,Ut=Nt("species"),Yt=Nt("isConcatSpreadable"),Jt=Qt>=51||!i((function(){var t=[];return t[Yt]=!1,t.concat()[0]!==t})),Zt=(Kt="concat",Qt>=51||!i((function(){var t=[];return(t.constructor={})[Ut]=function(){return{foo:1}},1!==t[Kt](Boolean).foo}))),$t=function(t){if(!v(t))return!1;var e=t[Yt];return void 0!==e?!!e:_t(t)};Vt({target:"Array",proto:!0,forced:!Jt||!Zt},{concat:function(t){var e,n,r,o,i,u=kt(this),c=Gt(u,0),a=0;for(e=-1,r=arguments.length;e<r;e++)if($t(i=-1===e?u:arguments[e])){if(a+(o=lt(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,a++)n in i&&At(c,a,i[n])}else{if(a>=9007199254740991)throw TypeError("Maximum allowed index exceeded");At(c,a++,i)}return c.length=a,c}});var te,ee=Object.keys||function(t){return gt(t,vt)},ne=u?Object.defineProperties:function(t,e){P(t);for(var n,r=ee(e),o=r.length,i=0;o>i;)C.f(t,n=r[i++],e[n]);return t},re=it("document","documentElement"),oe=B("IE_PROTO"),ie=function(){},ue=function(t){return"<script>"+t+"<\/script>"},ce=function(){try{te=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;ce=te?function(t){t.write(ue("")),t.close();var e=t.parentWindow.Object;return t=null,e}(te):((e=T("iframe")).style.display="none",re.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(ue("document.F=Object")),t.close(),t.F);for(var n=vt.length;n--;)delete ce.prototype[vt[n]];return ce()};X[oe]=!0;var ae=Object.create||function(t,e){var n;return null!==t?(ie.prototype=P(t),n=new ie,ie.prototype=null,n[oe]=t):n=ce(),void 0===e?n:ne(n,e)},fe=Nt("unscopables"),le=Array.prototype;null==le[fe]&&C.f(le,fe,{configurable:!0,value:ae(null)});var se,he=dt.includes;Vt({target:"Array",proto:!0},{includes:function(t){return he(this,t,arguments.length>1?arguments[1]:void 0)}}),se="includes",le[fe][se]=!0;var pe=Nt("match"),de=function(t){if(function(t){var e;return v(t)&&(void 0!==(e=t[pe])?!!e:"RegExp"==h(t))}(t))throw TypeError("The method doesn't accept regular expressions");return t},ye=Nt("match");Vt({target:"String",proto:!0,forced:!function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[ye]=!1,"/./"[t](e)}catch(t){}}return!1}("includes")},{includes:function(t){return!!~String(y(this)).indexOf(de(t),arguments.length>1?arguments[1]:void 0)}});var ge=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},ve=[].push,me=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,u=5==t||i;return function(c,a,f,l){for(var s,h,p=kt(c),y=d(p),g=ge(a,f,3),v=lt(y.length),m=0,w=l||Gt,b=e?w(c,v):n?w(c,0):void 0;v>m;m++)if((u||m in y)&&(h=g(s=y[m],m,p),t))if(e)b[m]=h;else if(h)switch(t){case 3:return!0;case 5:return s;case 6:return m;case 2:ve.call(b,s)}else if(o)return!1;return i?-1:r||o?o:b}},we={forEach:me(0),map:me(1),filter:me(2),some:me(3),every:me(4),find:me(5),findIndex:me(6)}.forEach,be=function(t,e){var n=[][t];return!n||!i((function(){n.call(null,e||function(){throw 1},1)}))}("forEach")?function(t){return we(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach;for(var Oe in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Se=o[Oe],Te=Se&&Se.prototype;if(Te&&Te.forEach!==be)try{M(Te,"forEach",be)}catch(t){Te.forEach=be}}function je(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ee(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Le(t){return(Le=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Pe(t,e){return(Pe=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function xe(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Ce(t,e,n){return(Ce="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Le(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}var Me=function(t,e){var n=0;return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var u=function(){n=0,t.apply(void 0,o)};clearTimeout(n),n=setTimeout(u,e)}};t.extend(t.fn.bootstrapTable.defaults,{mobileResponsive:!1,minWidth:562,minHeight:void 0,heightThreshold:100,checkOnInit:!0,columnsHidden:[]}),t.BootstrapTable=function(e){function n(){return je(this,n),xe(this,Le(n).apply(this,arguments))}var r,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Pe(t,e)}(n,e),r=n,(o=[{key:"init",value:function(){for(var e,r=this,o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];if((e=Ce(Le(n.prototype),"init",this)).call.apply(e,[this].concat(i)),this.options.mobileResponsive&&this.options.minWidth){this.options.minWidth<100&&this.options.resizable&&(console.info("The minWidth when the resizable extension is active should be greater or equal than 100"),this.options.minWidth=100);var c={width:t(window).width(),height:t(window).height()};if(t(window).on("resize orientationchange",Me((function(){var e=t(window).width(),n=t(window).height(),o=t(document.activeElement);o.length&&["INPUT","SELECT","TEXTAREA"].includes(o.prop("nodeName"))||(Math.abs(c.height-n)>r.options.heightThreshold||c.width!==e)&&(r.changeView(e,n),c={width:e,height:n})}),200)),this.options.checkOnInit){var a=t(window).width(),f=t(window).height();this.changeView(a,f),c={width:a,height:f}}}}},{key:"conditionCardView",value:function(){this.changeTableView(!1),this.showHideColumns(!1)}},{key:"conditionFullView",value:function(){this.changeTableView(!0),this.showHideColumns(!0)}},{key:"changeTableView",value:function(t){this.options.cardView=t,this.toggleView()}},{key:"showHideColumns",value:function(t){var e=this;this.options.columnsHidden.length>0&&this.columns.forEach((function(n){e.options.columnsHidden.includes(n.field)&&n.visible!==t&&e._toggleColumn(e.fieldsColumnsIndex[n.field],t,!0)}))}},{key:"changeView",value:function(t,e){this.options.minHeight?t<=this.options.minWidth&&e<=this.options.minHeight?this.conditionCardView():t>this.options.minWidth&&e>this.options.minHeight&&this.conditionFullView():t<=this.options.minWidth?this.conditionCardView():t>this.options.minWidth&&this.conditionFullView(),this.resetView()}}])&&Ee(r.prototype,o),i&&Ee(r,i),n}(t.BootstrapTable)}));
