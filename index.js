"use strict";var transition={};transition.install=function(t,n){function e(){var t=this.$el.classList;if(t){var n=[];Object.keys(t).forEach(function(e){n.push(t[e])});var e=!1;if(n.map(function(t){"animated"===t&&(e=!0)}),e){var i=document.createElement("div");i.id="vueg-background";var a=m.default;if(a){var o=document.getElementById("vueg-background");o||(a.$el.parentElement.appendChild(i),o=i),o.innerHTML="",o.classList=[],o.appendChild(this.$el)}}}}function i(){return this.vuegConfig&&!1===this.vuegConfig.disable?(this.$el.style.boxShadow="initial",!0):!m||!m.default||m.default._uid===this._uid}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(i.call(t)&&t&&!1!==l.value&&d){var n=this.$el;if(n&&n.parentElement){s(),Object.keys(r).forEach(function(t){f[t]=r[t]});var e=this.$data.vuegConfig;e&&Object.keys(e).forEach(function(t){f[t]=e[t]}),"first"===u&&(n.style.animationDuration=f.firstEntryDuration+"s",n.classList.add("fadeIn")),u&&(n.style.animationDuration=f.duration+"s"),n.classList.add("animated");var a=["touchPoint"],o=void 0;switch(u){case"forward":o=f.forwardAnim;break;case"back":o=f.backAnim}o&&n.classList.add(o);var c=void 0,m=document.head||document.getElementsByTagName("head")[0],v=void 0;if((c=document.getElementById("vueg-style"))||((c=document.createElement("style")).type="text/css",c.id="vueg-style",m.appendChild(c)),-1!==a.findIndex(function(t){return t===o}))switch(o){case"touchPoint":var p={x:document.documentElement.clientWidth/2,y:document.documentElement.clientHeight/2};v=".touchPoint{\n                                height:"+document.documentElement.clientHeight+"px!important;\n                                overflow:hidden;\n                                animation-timing-function:ease-in;\n                                animation-name:touchPoint;\n                                position: relative;\n                            }\n                            @keyframes touchPoint {\n                                from {\n                                    opacity:0.8;\n                                    transform: scale(0, 0);\n                                    left:"+(-p.x+h.x)+"px;\n                                    top:"+(-p.y+h.y)+"px;\n                                }\n                                to{\n                                    left:0;\n                                    top:0;\n                                }\n                            }";var b=document.createTextNode(v);c.appendChild(b)}setTimeout(function(){n.classList.remove(f.forwardAnim),n.classList.remove(f.backAnim),n.style.animationDuration="0s";var t=document.getElementById("vueg-background");t&&(t.innerHTML=""),-1!==a.findIndex(function(t){return t===o})&&(c.innerHTML="")},1e3*f.duration),setTimeout(function(){n.classList.remove("fadeIn")},1e3*f.firstEntryDuration)}}}function o(t){h.x=t.touches[0].clientX,h.y=t.touches[0].clientY}function s(){f={duration:"0.3",firstEntryDisable:!1,firstEntryDuration:".6",forwardAnim:"fadeInRight",backAnim:"fadeInLeft",sameDepthDisable:!1,tabs:[],tabsDisable:!1,disable:!1}}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},d=void 0,c=void 0,u=void 0,l={},f=void 0,m=void 0,h={x:0,y:0};s(),t.directive("transition",{bind:function(t,n,e,i){l=n}}),t.mixin({mounted:a,activated:a,beforeDestroy:e,deactivated:e}),n.afterEach(function(t,n){d=t;var e=t.path.split("/").length,i=n.path.split("/").length;if("/"!==t.path.charAt(t.path.length-1)&&(e+=1),"/"!==n.path.charAt(n.path.length-1)&&(i+=1),u=e>i?"forward":"back",e===i&&(u=c===t.path?"back":"forward",f.sameDepthDisable&&(u=""),c=n.path),t.path===n.path&&t.path===c&&(u="first"),f.firstEntryDisable&&(u=""),n.name&&t.name){var a=f.tabs.findIndex(function(t){return t.name===n.name}),o=f.tabs.findIndex(function(n){return n.name===t.name});f.tabsDisable||-1===a||-1===o?-1!==a&&-1!==o&&(u=""):(o>a&&(u="forward"),o<a&&(u="back"),o===a&&(transition=""))}f.disable&&(transition="");var s=t.matched[0];m=s&&s.instances?s.instances:null}),document.addEventListener("touchstart",o)},module.exports=transition;