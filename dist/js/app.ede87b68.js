(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],f=0,l=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-335b81bf":"11891a6d","chunk-57efb022":"3942444f","chunk-6ef965cf":"cdc20b02","chunk-e8d16150":"cd255fc4"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-335b81bf":1,"chunk-57efb022":1,"chunk-6ef965cf":1,"chunk-e8d16150":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-335b81bf":"fd573133","chunk-57efb022":"c43352a3","chunk-6ef965cf":"a0fd9adf","chunk-e8d16150":"a0fd9adf"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"1e45":function(e,t,n){n("ed18").config(),e.exports={URL:"http://34.228.247.42:3001"}},"56d7":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],c=(n("034f"),n("2877")),i={},s=Object(c["a"])(i,a,u,!1,null,null,null),f=s.exports,l=(n("45fc"),n("d3b7"),n("8c4f")),d=n("2f62"),p=n("bc3a"),h=n.n(p),g=n("1e45"),m=g.URL,v=function(){return{token:localStorage.getItem("token")||null}},b={isLogin:function(e){return null!==e.token&&"undefined"!==e.token}},k={login:function(e,t){return new Promise((function(e,n){h.a.post("".concat(m,"/api/v1/users/login"),t).then((function(t){localStorage.setItem("token",t.data.data.token),localStorage.setItem("refreshtoken",t.data.data.refreshToken),e(t.data.message)})).catch((function(e){n(e)}))}))},register:function(e,t){return new Promise((function(e,n){h.a.post("".concat(m,"/api/v1/users/register"),t).then((function(t){e(t.data.message)})).catch((function(e){n(e)}))}))},logout:function(e){return new Promise((function(e){localStorage.removeItem("token"),e("Logout Success")}))}},y={namespaced:!0,state:v,getters:b,actions:k},w=(n("99af"),n("1e45")),S=w.URL,L=function(){return{all:{data:[],isLoading:!1}}},P={detailUser:function(e){return e.all}},j={SET_ALL_DATA:function(e,t){e.all.data=t}},A={getDetailUser:function(e,t){var n=localStorage.getItem("name");return new Promise((function(t,r){h.a.get("".concat(S,"/api/v1/users/getdetail/").concat(n)).then((function(t){e.commit("SET_ALL_DATA",t.data.data[0])})).catch((function(e){console.log(e)}))}))},updateProf:function(e,t){var n=localStorage.getItem("name");return new Promise((function(e,r){h.a.patch("".concat(S,"/api/v1/users/updatepatch/").concat(n),t).then((function(t){console.log(t.data.message),e(t.data.message)})).catch((function(e){r(e)}))}))}},O={namespaced:!0,state:L,getters:P,mutations:j,actions:A};o["default"].use(d["a"]);var _=new d["a"].Store({modules:{auth:y,profile:O}});o["default"].use(l["a"]);var x=[{path:"/splash",name:"Splash",component:function(){return n.e("chunk-57efb022").then(n.bind(null,"8f75"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-e8d16150").then(n.bind(null,"a55b"))}},{path:"/signup",name:"Register",component:function(){return n.e("chunk-6ef965cf").then(n.bind(null,"73cf"))}},{path:"/",name:"Chat",meta:{requiresAuth:!0},component:function(){return n.e("chunk-335b81bf").then(n.bind(null,"293a"))}}],E=new l["a"]({mode:"history",base:"",routes:x});E.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?_.getters["auth/isLogin"]?n():n({path:"/login"}):n()}));var T=E,I=n("5f5b"),C=n("b1e0"),U=n("755e"),R=(n("f9e3"),n("2dd8"),n("1e45")),D=R.URL;h.a.defaults.headers={token:localStorage.getItem("token")},h.a.interceptors.response.use((function(e){return e}),function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.response.status,console.log(n),500!==n){e.next=9;break}return r=localStorage.getItem("refreshtoken"),o={refreshToken:r},e.next=7,h.a.post("".concat(D,"/api/v1/users/refresh-token"),o).then((function(e){localStorage.setItem("token",e.data.data.token),window.location="/"})).catch((function(e){console.log(e)}));case 7:e.next=10;break;case 9:window.location="/login";case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o["default"].use(I["a"]),o["default"].use(C["a"]),o["default"].use(U,{load:{key:"AIzaSyBnvxeZuOQ7smsCjUyka9VEXL9rKfl3js8"}}),o["default"].config.productionTip=!1,new o["default"]({router:T,store:_,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.ede87b68.js.map