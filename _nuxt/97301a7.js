(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{377:function(t,e,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("6ebd2b5a",content,!0,{sourceMap:!1})},394:function(t,e,n){"use strict";n(377)},395:function(t,e,n){var o=n(10)(!1);o.push([t.i,".section-nav{padding-left:0;border-left:2px dashed #efefef}.section-nav a{text-decoration:none;display:block;padding:.125rem 0;color:#000;transition:all 50ms ease-in-out}.section-nav a:focus,.section-nav a:hover{color:#666}.section-nav li.active>a{color:#f2765d;font-weight:500}main>nav{position:sticky;top:2rem;align-self:start}ol.bullet-list,ul.bullet-list{list-style:none;margin:0;padding:0}li{margin-left:1rem}main{display:grid;grid-template-columns:1fr 7em;width:100%;margin:0 auto}section{margin-bottom:50rem}",""]),t.exports=o},406:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{idPage:this.$route.params.id,observer:null}},created:function(){this.observer=new IntersectionObserver(this.onElementObserved,{root:this.$el,threshold:.22})},mounted:function(){var t=this;this.$el.querySelectorAll("section[id]").forEach((function(section){t.observer.observe(section)}))},beforeDestroy:function(){this.observer.disconnect()},methods:{onElementObserved:function(t){var e=this;t.forEach((function(t){var n=t.target,o=t.isIntersecting,r=n.getAttribute("id");o?e.$el.querySelector('nav li a[href="#'.concat(r,'"]')).parentElement.classList.add("active"):e.$el.querySelector('nav li a[href="#'.concat(r,'"]')).parentElement.classList.remove("active")}))}}},r=(n(394),n(32)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main",[n("div",[n("h1",[t._v(t._s(t.name))]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),n("nav",{staticClass:"section-nav"},[n("ol",{staticClass:"bullet-list"},[n("li",[n("router-link",{attrs:{to:"/blog/detail/"+t.idPage+"/#introduction"}},[t._v("Introduction")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/blog/detail/"+t.idPage+"/#about"}},[t._v("About")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/blog/detail/"+t.idPage+"/#contact"}},[t._v("Contact")])],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"introduction"}},[n("h2",[t._v("Introduction")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"about"}},[n("h2",[t._v("About Section")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"contact"}},[n("h2",[t._v("Contact Section")])])}],!1,null,null,null);e.default=component.exports}}]);