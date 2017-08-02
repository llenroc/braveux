function initMobileNav(){$(".menu-mobile-toggle").click(function(t){t.preventDefault(),$(".menu, .menu-mobile-toggle").toggleClass("is-active")})}function initNavHide(){var t=0,e=$(window),o=$(".menu");e.on("scroll",function(){var i=e.scrollTop();i>t&&$(document).scrollTop()>=300?(o.addClass("hidden"),t=i):(o.removeClass("hidden"),t=i)})}function homeHeroNav(){"/"!=window.location.pathname&&"/index.html"!=window.location.pathname&&"/braveux/"!=window.location.pathname&&"/braveux/index.html"!=window.location.pathname||$(".menu-home-trigger").waypoint(function(t){"down"===t?$(".menu-home").removeClass("active"):$(".menu-home").addClass("active")})}function initEgg(){var t=$(".footer-stars");t.click(function(e){e.preventDefault(),$(".footer").toggleClass("footer-egg"),$("html, body").animate({scrollTop:t.offset().top},900)})}function toggleSection(t){var e=$(t+"-btn"),o=$(t+"-box");e.click(function(t){t.stopPropagation(),t.preventDefault(),$(this).toggleClass("is-active"),$(this).hasClass("is-active")?$(o).css("max-height",$(o).get(0).scrollHeight):$(o).css("max-height",0)})}function sectionJump(){$("a.btn").click(function(t){var e=$("html").find(this).attr("href");"#"==e[0]&&(t.preventDefault(),t.stopPropagation(),$("html, body").animate({scrollTop:$(e).offset().top},900))})}function caseTeaseNext(){var t=$(".cta-button-right");t.waypoint({handler:function(e){"down"===e?t.addClass("is-expanded"):t.removeClass("is-expanded")},offset:"bottom-in-view"})}function scrollReveal(){window.sr=ScrollReveal();var t={duration:600,distance:"60px",easing:"ease-in-out",origin:"top",scale:1,viewFactor:.5},e={duration:700,distance:"30%",easing:"ease-in-out",origin:"right",scale:1,viewFactor:.5},o={duration:700,distance:"30%",easing:"ease-in-out",origin:"bottom",viewFactor:.5},i={duration:700,distance:"30%",easing:"ease-in-out",origin:"left",scale:1,viewFactor:.5},n={duration:700,distance:"40px",easing:"ease-in-out",origin:"bottom",scale:1,viewFactor:.9},r={duration:700,distance:"0",easing:"ease-in-out",scale:1,viewFactor:.5},s={duration:700,distance:"30px",easing:"ease-in-out",rotate:{z:10},scale:1.1,viewFactor:.6};sr.reveal(".case-referral-quote-icon",{duration:1e3,distance:"40px",easing:"ease-out",origin:"top",scale:1,viewFactor:.9}),sr.reveal(".pin",{duration:700,distance:"40px",easing:"ease-out",origin:"top",scale:1,viewFactor:.9},300),sr.reveal(".work-card",{duration:600,distance:"60px",easing:"ease-out",origin:"bottom",scale:1,viewFactor:.5,beforeReveal:function(t){t.classList.add("is-visible")}},150),sr.reveal(".work-card img",{duration:1e3,scale:1.05,origin:"bottom",distance:"25%",easing:"ease-out",viewFactor:.5},150),sr.reveal(".case-study .inner-block-content",n),sr.reveal(".case-exec-summary-text",r),sr.reveal(".sr-delay",{delay:300}),sr.reveal(".sr-delay-double",{delay:600}),sr.reveal(".sr-delay-tripple",{delay:900}),sr.reveal(".sr-reveal",r),sr.reveal(".sr-rotate",s),sr.reveal(".sr-top",t),sr.reveal(".sr-right",e),sr.reveal(".sr-bottom",o),sr.reveal(".sr-left",i),sr.reveal(".case-breakdown-box",n,200),sr.reveal(".sr-stagger-rotate",s,200),sr.reveal(".sr-stagger-reveal",r,200),sr.reveal(".sr-stagger-top",t,200),sr.reveal(".sr-stagger-right",e,200),sr.reveal(".sr-stagger-bottom",o,150),sr.reveal(".sr-stagger-left",i,200),sr.reveal(".unbox-forklift .inner-block-image:nth-of-type(1)",{distance:"50px",origin:"bottom"}),sr.reveal(".unbox-forklift .inner-block-image:nth-of-type(2)",{distance:"100px",origin:"left",delay:"500"}),sr.reveal(".unbox-forklift .inner-block-image:nth-of-type(3)",{distance:"50px",origin:"right",delay:"1000"}),sr.reveal(".unbox-forklift .inner-block-image:nth-of-type(4)",{distance:"20px",origin:"top",delay:"1500"})}function videoPlay(){var t=$("video");t.waypoint({handler:function(e){"down"===e?(console.log("play"),t[0].play()):(console.log("pause"),t[0].pause())},offset:"bottom-in-view"})}!function(){"use strict";function t(i){if(!i)throw new Error("No options passed to Waypoint constructor");if(!i.element)throw new Error("No element option passed to Waypoint constructor");if(!i.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,i),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=i.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),o[this.key]=this,e+=1}var e=0,o={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete o[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var i in o)e.push(o[i]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in o)o[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+o,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,i[t.waypointContextKey]=this,o+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var o=0,i={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),o=this.element==this.element.window;t&&e&&!o&&(this.adapter.off(".waypoints"),delete i[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var o in e){var i=e[o],n=i.newScroll>i.oldScroll,r=n?i.forward:i.backward;for(var s in this.waypoints[o]){var a=this.waypoints[o][s];if(null!==a.triggerPoint){var l=i.oldScroll<a.triggerPoint,c=i.newScroll>=a.triggerPoint,h=l&&c,p=!l&&!c;(h||p)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var d in t)t[d].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var o in this.waypoints[e])t.push(this.waypoints[e][o]);for(var i=0,n=t.length;n>i;i++)t[i].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,o=e?void 0:this.adapter.offset(),i={};this.handleScroll(),t={horizontal:{contextOffset:e?0:o.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:o.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,c,h,p,d,u=this.waypoints[r][a],f=u.options.offset,w=u.triggerPoint,g=0,y=null==w;u.element!==u.element.window&&(g=u.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(u):"string"==typeof f&&(f=parseFloat(f),u.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,u.triggerPoint=Math.floor(g+l-f),c=w<s.oldScroll,h=u.triggerPoint>=s.oldScroll,p=c&&h,d=!c&&!h,!y&&p?(u.queueTrigger(s.backward),i[u.group.id]=u.group):!y&&d?(u.queueTrigger(s.forward),i[u.group.id]=u.group):y&&s.oldScroll>=u.triggerPoint&&(u.queueTrigger(s.forward),i[u.group.id]=u.group)}}return n.requestAnimationFrame(function(){for(var t in i)i[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in i)i[t].refresh()},e.findByElement=function(t){return i[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function o(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),i[this.axis][this.name]=this}var i={vertical:{},horizontal:{}},n=window.Waypoint;o.prototype.add=function(t){this.waypoints.push(t)},o.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},o.prototype.flushTriggers=function(){for(var o in this.triggerQueues){var i=this.triggerQueues[o],n="up"===o||"left"===o;i.sort(n?e:t);for(var r=0,s=i.length;s>r;r+=1){var a=i[r];(a.options.continuous||r===i.length-1)&&a.trigger([o])}}this.clearTriggerQueues()},o.prototype.next=function(e){this.waypoints.sort(t);var o=n.Adapter.inArray(e,this.waypoints);return o===this.waypoints.length-1?null:this.waypoints[o+1]},o.prototype.previous=function(e){this.waypoints.sort(t);var o=n.Adapter.inArray(e,this.waypoints);return o?this.waypoints[o-1]:null},o.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},o.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},o.prototype.first=function(){return this.waypoints[0]},o.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},o.findOrCreate=function(t){return i[t.axis][t.name]||new o(t)},n.Group=o}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,o=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,o){t.prototype[o]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[o].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(o,i){t[i]=e[i]}),o.adapters.push({name:"jquery",Adapter:t}),o.Adapter=t}(),function(){"use strict";function t(t){return function(){var o=[],i=arguments[0];return t.isFunction(arguments[0])&&(i=t.extend({},arguments[1]),i.handler=arguments[0]),this.each(function(){var n=t.extend({},i,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),o.push(new e(n))}),o}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}(),function(){"use strict";function t(){}function e(t){this.options=o.Adapter.extend({},e.defaults,t),this.axis=this.options.horizontal?"horizontal":"vertical",this.waypoints=[],this.element=this.options.element,this.createWaypoints()}var o=window.Waypoint;e.prototype.createWaypoints=function(){for(var t={vertical:[{down:"enter",up:"exited",offset:"100%"},{down:"entered",up:"exit",offset:"bottom-in-view"},{down:"exit",up:"entered",offset:0},{down:"exited",up:"enter",offset:function(){return-this.adapter.outerHeight()}}],horizontal:[{right:"enter",left:"exited",offset:"100%"},{right:"entered",left:"exit",offset:"right-in-view"},{right:"exit",left:"entered",offset:0},{right:"exited",left:"enter",offset:function(){return-this.adapter.outerWidth()}}]},e=0,o=t[this.axis].length;o>e;e++){var i=t[this.axis][e];this.createWaypoint(i)}},e.prototype.createWaypoint=function(t){var e=this;this.waypoints.push(new o({context:this.options.context,element:this.options.element,enabled:this.options.enabled,handler:function(t){return function(o){e.options[t[o]].call(e,o)}}(t),offset:t.offset,horizontal:this.options.horizontal}))},e.prototype.destroy=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].destroy();this.waypoints=[]},e.prototype.disable=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].disable()},e.prototype.enable=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].enable()},e.defaults={context:window,enabled:!0,enter:t,entered:t,exit:t,exited:t},o.Inview=e}(),function(){var t,e=$(window),o=$(".contact-letter");if(o.length)var i=o.offset().top;e.resize(function(){t=i}),e.scroll(function(){var n=e.scrollTop();t=i,n>=t/4?o.addClass("is-flipped"):o.removeClass("is-flipped")})}(),$(document).ready(function(){initMobileNav(),homeHeroNav(),initNavHide(),initEgg(),caseTeaseNext(),scrollReveal(),toggleSection(".career"),sectionJump(),videoPlay(),console.log("Looking for this? https://github.com/BraveUX/braveux")});