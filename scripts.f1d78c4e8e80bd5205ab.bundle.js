!function(){"use strict";var e,t;function n(t){return"undefined"==typeof this||Object.getPrototypeOf(this)!==n.prototype?new n(t):((e=this).version="3.3.6",e.tools=new y,e.isSupported()?(e.tools.extend(e.defaults,t||{}),e.defaults.container=i(e.defaults),e.store={elements:{},containers:[]},e.sequences={},e.history=[],e.uid=0,e.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),e)}function i(t){if(t&&t.container){if("string"==typeof t.container)return window.document.documentElement.querySelector(t.container);if(e.tools.isNode(t.container))return t.container;console.log('ScrollReveal: invalid container "'+t.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return e.defaults.container}function o(){return++e.uid}function s(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function r(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function a(){if(e.isSupported()){c();for(var t=0;t<e.store.containers.length;t++)e.store.containers[t].addEventListener("scroll",l),e.store.containers[t].addEventListener("resize",l);e.initialized||(window.addEventListener("scroll",l),window.addEventListener("resize",l),e.initialized=!0)}return e}function l(){t(c)}function c(){var t,n,i,o;e.tools.forOwn(e.sequences,function(t){o=e.sequences[t],i=!1;for(var n=0;n<o.elemIds.length;n++)u(e.store.elements[o.elemIds[n]])&&!i&&(i=!0);o.active=i}),e.tools.forOwn(e.store.elements,function(i){var o,s,r,a,c,f,y,m;t="always"===(s=(o=n=e.store.elements[i]).config.useDelay)||"onload"===s&&!e.initialized||"once"===s&&!o.seen,function(t){if(t.sequence){var n=e.sequences[t.sequence.id];return n.active&&!n.blocked&&!t.revealing&&!t.disabled}return u(t)&&!t.revealing&&!t.disabled}(n)?(n.config.beforeReveal(n.domEl),n.domEl.setAttribute("style",t?n.styles.inline+n.styles.transform.target+n.styles.transition.delayed:n.styles.inline+n.styles.transform.target+n.styles.transition.instant),d("reveal",n,t),n.revealing=!0,n.seen=!0,n.sequence&&(c=t,f=0,y=0,(m=e.sequences[(a=n).sequence.id]).blocked=!0,c&&"onload"===a.config.useDelay&&(y=a.config.delay),a.sequence.timer&&(f=Math.abs(a.sequence.timer.started-new Date),window.clearTimeout(a.sequence.timer)),a.sequence.timer={started:new Date},a.sequence.timer.clock=window.setTimeout(function(){m.blocked=!1,a.sequence.timer=null,l()},Math.abs(m.interval)+y-f))):((r=n).sequence?!e.sequences[r.sequence.id].active&&r.config.reset&&r.revealing&&!r.disabled:!u(r)&&r.config.reset&&r.revealing&&!r.disabled)&&(n.config.beforeReset(n.domEl),n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.initial+n.styles.transition.instant),d("reset",n),n.revealing=!1)})}function d(e,t,n){var i=0,o=0,s="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),s+="Reveal";break;case"reset":o=t.config.duration,s+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[s](t.domEl),t.timer=null},o-i)}function f(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do{isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent}while(e);return{top:t,left:n,height:i,width:o}}function u(e){var t,n=f(e.domEl),i=(t=e.config.container).clientWidth,o=t.clientHeight,s=function(e){if(e&&e!==window.document.documentElement){var t=f(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}(e.config.container),r=e.config.viewFactor,a=n.height,l=n.width,c=n.top,d=n.left;return c+a*r<s.y-e.config.viewOffset.bottom+o&&c+a-a*r>s.y+e.config.viewOffset.top&&d+l*r<s.x-e.config.viewOffset.right+i&&d+l-l*r>s.x+e.config.viewOffset.left||"fixed"===window.getComputedStyle(e.domEl).position}function y(){}n.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},n.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},n.prototype.reveal=function(t,n,l,c){var d,f,u,y,m,p,g,w,v,b,h,q,x,E,O;if(void 0!==n&&"number"==typeof n?(l=n,n={}):void 0!==n&&null!==n||(n={}),!(g=t,w=d=i(n),f="string"==typeof g?Array.prototype.slice.call(w.querySelectorAll(g)):e.tools.isNode(g)?[g]:e.tools.isNodeList(g)?Array.prototype.slice.call(g):[]).length)return console.log('ScrollReveal: reveal on "'+t+'" failed, no elements found.'),e;l&&"number"==typeof l&&(p=o(),m=e.sequences[p]={id:p,interval:l,elemIds:[],active:!1});for(var S=0;S<f.length;S++)(y=f[S].getAttribute("data-sr-id"))?u=e.store.elements[y]:(u={id:o(),domEl:f[S],seen:!1,revealing:!1}).domEl.setAttribute("data-sr-id",u.id),m&&(u.sequence={id:m.id,index:m.elemIds.length},m.elemIds.push(u.id)),x=u,E=n,O=d,E.container&&(E.container=O),x.config=e.tools.extendClone(x.config?x.config:e.defaults,E),x.config.axis="top"===x.config.origin||"bottom"===x.config.origin?"Y":"X",h=u,q=window.getComputedStyle(h.domEl),h.styles||(h.styles={transition:{},transform:{},computed:{}},h.styles.inline=h.domEl.getAttribute("style")||"",h.styles.inline+="; visibility: visible; ",h.styles.computed.opacity=q.opacity,h.styles.computed.transition=q.transition&&"all 0s ease 0s"!==q.transition?q.transition+", ":""),h.styles.transition.instant=s(h,0),h.styles.transition.delayed=s(h,h.config.delay),h.styles.transform.initial=" -webkit-transform:",h.styles.transform.target=" -webkit-transform:",r(h),h.styles.transform.initial+="transform:",h.styles.transform.target+="transform:",r(h),v=u,b=v.config.container,b&&-1===e.store.containers.indexOf(b)&&e.store.containers.push(v.config.container),e.store.elements[v.id]=v,e.tools.isMobile()&&!u.config.mobile||!e.isSupported()?(u.domEl.setAttribute("style",u.styles.inline),u.disabled=!0):u.revealing||u.domEl.setAttribute("style",u.styles.inline+u.styles.transform.initial);return!c&&e.isSupported()&&(e.history.push({target:t,config:n,interval:l}),e.initTimeout&&window.clearTimeout(e.initTimeout),e.initTimeout=window.setTimeout(a,0)),e},n.prototype.sync=function(){if(e.history.length&&e.isSupported()){for(var t=0;t<e.history.length;t++){var n=e.history[t];e.reveal(n.target,n.config,n.interval,!0)}a()}else console.log("ScrollReveal: sync failed, no reveals found.");return e},y.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},y.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},y.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e);return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},y.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},y.prototype.extend=function(e,t){return this.forOwn(t,(function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}).bind(this)),e},y.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},y.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return n}):"undefined"!=typeof module&&module.exports?module.exports=n:window.ScrollReveal=n}();