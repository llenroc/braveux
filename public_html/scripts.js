function initWork(){$(window).width()<800&&$(".work-landing:odd").each(function(){var t=$(this).find(".col").eq(0),e=$(this).find(".col").eq(1);e.insertBefore(t)})}function initApproach(){function t(t){return new Vivus($(".approach-section-icon-svg").eq(t).get(0),{type:"async",start:"inViewport",duration:i},function(){5!=t&&$(".approach-to-next").eq(t).get(0).classList.remove("drawing"),$(".approach-inner-icon").eq(t).velocity({opacity:1},{duration:o,easing:n}),$(".approach-arrowhead").eq(t).velocity({opacity:1},{duration:o,easing:n})})}function e(t){$(".approach-section-icon").eq(t).waypoint(function(e){"down"===e&&5!=t&&$(".approach-to-next").eq(t).get(0).classList.remove("hidden")})}var i=50,o=500,n="ease",r=500,a="linear";$(".approach-section-next").click(function(t){t.preventDefault();var e=$(this).index(".approach-section-next");if(5==e){var i=($(window).height()-$(".approach .cta").outerHeight())/2;$(".approach .cta").velocity("scroll",{offset:-i,duration:r,easing:a})}else{var i=($(window).height()-$(".approach-section").eq(e+1).outerHeight())/2;$(".approach-section").eq(e+1).velocity("scroll",{offset:-i,duration:r,easing:a})}});var s=!$("#ie-test").get(0).classList;if(s)return $(".approach-section-icon-svg").remove(),$(".approach-ie-only").removeClass("hidden"),$(".approach-to-next").removeAttr("class"),!1;$(".approach-inner-icon, .approach-arrowhead").css("opacity","0");for(var l=0;l<=5;l++)t(l),e(l)}function initTeam(){var t=null;$(window).on("hashchange",function(){t=".member-"+location.hash.slice(1),$(t).velocity("scroll",{duration:1e3,axis:"y"})}),window.location.hash&&$(window).trigger("hashchange")}function initEasterEggs(){$(".footer-stars").click(function(t){t.preventDefault(),$(".footer-egg").velocity("scroll",{duration:500,axis:"y",begin:function(){$(".footer").addClass("is-egg"),$(".footer-stars").addClass("is-found")}})})}function initNavBar(){function t(){var t=$(window).scrollTop();if(!(Math.abs(i-t)<=o))return 0===t?($(".menu").removeClass("is-collapsed"),void($(".wrapper.work").length>0&&$(".logo, .menu").addClass("is-home"))):void(t>50&&(t>i?$(".menu").addClass("is-collapsed"):$(".menu").removeClass("is-collapsed"),$(".wrapper.work").length>0&&(t>$(".wrapper.work").offset().top?$(".logo, .menu").removeClass("is-home"):$(".logo, .menu").addClass("is-home")),i=t))}var e,i=0,o=50;$(window).scroll(function(){e=!0}),setInterval(function(){e&&(t(),e=!1)},200)}function initMobileNav(){$(".mobile-menu-toggle").click(function(t){t.preventDefault(),$(".menu, .mobile-menu-toggle").toggleClass("is-expanded")})}function initScrollSpy(){window.sr=new scrollReveal({move:"0px",over:"0.75s",wait:"0s",easing:"ease",scale:{direction:"up",power:"0%"},mobile:!0,delay:"once",vFactor:.3})}!function(t,e,i,o){"use strict";function n(t){var e,i,o,n,r,a,s,l={};for(r=t.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),s=0,a=r.length;a>s&&(i=r[s],-1===i.search(/^(http|https|ftp):\/\//)&&-1!==i.search(":"));s++)e=i.indexOf(":"),o=i.substring(0,e),n=i.substring(e+1),n||(n=void 0),"string"==typeof n&&(n="true"===n||"false"!==n&&n),"string"==typeof n&&(n=isNaN(n)?n:+n),l[o]=n;return null==o&&null==n?t:l}function r(t){t=""+t;var e,i,o,n=t.split(/\s+/),r="50%",a="50%";for(o=0,e=n.length;e>o;o++)i=n[o],"left"===i?r="0%":"right"===i?r="100%":"top"===i?a="0%":"bottom"===i?a="100%":"center"===i?0===o?r="50%":a="50%":0===o?r=i:a=i;return{x:r,y:a}}function a(e,i){var o=function(){i(this.src)};t("<img src='"+e+".gif'>").load(o),t("<img src='"+e+".jpg'>").load(o),t("<img src='"+e+".jpeg'>").load(o),t("<img src='"+e+".png'>").load(o)}function s(e,i,o){if(this.$element=t(e),"string"==typeof i&&(i=n(i)),o?"string"==typeof o&&(o=n(o)):o={},"string"==typeof i)i=i.replace(/\.\w*$/,"");else if("object"==typeof i)for(var r in i)i.hasOwnProperty(r)&&(i[r]=i[r].replace(/\.\w*$/,""));this.settings=t.extend({},c,o),this.path=i,this.init()}var l="vide",c={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0},u=/iPad|iPhone|iPod/i.test(o.userAgent),p=/Android/i.test(o.userAgent);s.prototype.init=function(){var e,i,o=this,n=r(o.settings.position);o.$wrapper=t("<div>").css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-repeat":"no-repeat","background-position":n.x+" "+n.y}),i=o.path,"object"==typeof o.path&&(o.path.poster?i=o.path.poster:o.path.mp4?i=o.path.mp4:o.path.webm?i=o.path.webm:o.path.ogv&&(i=o.path.ogv)),"detect"===o.settings.posterType?a(i,function(t){o.$wrapper.css("background-image","url("+t+")")}):"none"!==o.settings.posterType&&o.$wrapper.css("background-image","url("+i+"."+o.settings.posterType+")"),"static"===o.$element.css("position")&&o.$element.css("position","relative"),o.$element.prepend(o.$wrapper),u||p||(e="","object"==typeof o.path?(o.path.mp4&&(e+="<source src='"+o.path.mp4+".mp4' type='video/mp4'>"),o.path.webm&&(e+="<source src='"+o.path.webm+".webm' type='video/webm'>"),o.path.ogv&&(e+="<source src='"+o.path.ogv+".ogv' type='video/ogv'>"),o.$video=t("<video>"+e+"</video>")):o.$video=t("<video><source src='"+o.path+".mp4' type='video/mp4'><source src='"+o.path+".webm' type='video/webm'><source src='"+o.path+".ogv' type='video/ogg'></video>"),o.$video.css("visibility","hidden"),o.$video.prop({autoplay:o.settings.autoplay,loop:o.settings.loop,volume:o.settings.volume,muted:o.settings.muted,playbackRate:o.settings.playbackRate}),o.$wrapper.append(o.$video),o.$video.css({margin:"auto",position:"absolute","z-index":-1,top:n.y,left:n.x,"-webkit-transform":"translate(-"+n.x+", -"+n.y+")","-ms-transform":"translate(-"+n.x+", -"+n.y+")",transform:"translate(-"+n.x+", -"+n.y+")"}),o.$video.bind("loadedmetadata."+l,function(){o.$video.css("visibility","visible"),o.resize(),o.$wrapper.css("background-image","none")}),o.$element.bind("resize."+l,function(){o.settings.resizing&&o.resize()}))},s.prototype.getVideoObject=function(){return this.$video?this.$video[0]:null},s.prototype.resize=function(){if(this.$video){var t=this.$video[0].videoHeight,e=this.$video[0].videoWidth,i=this.$wrapper.height(),o=this.$wrapper.width();this.$video.css(o/e>i/t?{width:o+2,height:"auto"}:{width:"auto",height:i+2})}},s.prototype.destroy=function(){this.$element.unbind(l),this.$video&&this.$video.unbind(l),delete t[l].lookup[this.index],this.$element.removeData(l),this.$wrapper.remove()},t[l]={lookup:[]},t.fn[l]=function(e,i){var o;return this.each(function(){o=t.data(this,l),o&&o.destroy(),o=new s(this,e,i),o.index=t[l].lookup.push(o)-1,t.data(this,l,o)}),this},t(i).ready(function(){t(e).bind("resize."+l,function(){for(var e,i=t[l].lookup.length,o=0;i>o;o++)e=t[l].lookup[o],e&&e.settings.resizing&&e.resize()}),t(i).find("[data-"+l+"-bg]").each(function(e,i){var o=t(i),n=o.data(l+"-options"),r=o.data(l+"-bg");o[l](r,n)})})}(window.jQuery,window,document,navigator),$(document).ready(function(){$("html").attr("data-user-agent",window.navigator.userAgent),initScrollSpy(),initEasterEggs(),initNavBar(),"/"!==window.location.pathname&&"/index.html"!==window.location.pathname||initWork(),"/approach"!==window.location.pathname&&"/approach.html"!==window.location.pathname||initApproach(),"/team"!==window.location.pathname&&"/team.html"!==window.location.pathname||initTeam(),$(window).width()<=800&&initMobileNav(),console.log("Looking for this? https://github.com/BraveUX/website")}),!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.scrollReveal=e()}(this,function(){return window.scrollReveal=function(t){"use strict";function e(e){r=this,r.elems={},r.serial=1,r.blocked=!1,r.config=o(r.defaults,e),(!r.isMobile()||r.config.mobile)&&(r.config.viewport==t.document.documentElement?(t.addEventListener("scroll",n,!1),t.addEventListener("resize",n,!1)):r.config.viewport.addEventListener("scroll",n,!1),r.init(!0))}var i,o,n,r;return e.prototype={defaults:{enter:"bottom",move:"8px",over:"0.6s",wait:"0s",easing:"ease",scale:{direction:"up",power:"5%"},opacity:0,mobile:!1,reset:!1,viewport:t.document.documentElement,delay:"once",vFactor:.6,complete:function(){}},init:function(t){var e,i,o;o=Array.prototype.slice.call(r.config.viewport.querySelectorAll("[data-sr]")),o.forEach(function(t){e=r.serial++,i=r.elems[e]={domEl:t},i.config=r.configFactory(i),i.styles=r.styleFactory(i),i.seen=!1,t.removeAttribute("data-sr"),t.setAttribute("style",i.styles.inline+i.styles.initial)}),r.scrolled=r.scrollY(),r.animate(t)},animate:function(t){var e,i,o,n;n=function(t){var e=r.elems[t];setTimeout(function(){e.domEl.setAttribute("style",e.styles.inline),e.config.complete(e.domEl),delete r.elems[t]},e.styles.duration)};for(e in r.elems)r.elems.hasOwnProperty(e)&&(i=r.elems[e],o=r.isElemInViewport(i),o&&("always"===r.config.delay||"onload"===r.config.delay&&t||"once"===r.config.delay&&!i.seen?i.domEl.setAttribute("style",i.styles.inline+i.styles.target+i.styles.transition):i.domEl.setAttribute("style",i.styles.inline+i.styles.target+i.styles.reset),i.seen=!0,i.config.reset||i.animating||(i.animating=!0,n(e))),!o&&i.config.reset&&i.domEl.setAttribute("style",i.styles.inline+i.styles.initial+i.styles.reset));r.blocked=!1},configFactory:function(t){var e={},i={},n=t.domEl.getAttribute("data-sr").split(/[, ]+/);return n=r.filter(n),n.forEach(function(t,i){switch(t){case"enter":return void(e.enter=n[i+1]);case"wait":return void(e.wait=n[i+1]);case"move":return void(e.move=n[i+1]);case"ease":return e.move=n[i+1],void(e.ease="ease");case"ease-in":return"up"==n[i+1]||"down"==n[i+1]?(e.scale.direction=n[i+1],e.scale.power=n[i+2],void(e.easing="ease-in")):(e.move=n[i+1],void(e.easing="ease-in"));case"ease-in-out":return"up"==n[i+1]||"down"==n[i+1]?(e.scale.direction=n[i+1],e.scale.power=n[i+2],void(e.easing="ease-in-out")):(e.move=n[i+1],void(e.easing="ease-in-out"));case"ease-out":return"up"==n[i+1]||"down"==n[i+1]?(e.scale.direction=n[i+1],e.scale.power=n[i+2],void(e.easing="ease-out")):(e.move=n[i+1],void(e.easing="ease-out"));case"hustle":return"up"==n[i+1]||"down"==n[i+1]?(e.scale.direction=n[i+1],e.scale.power=n[i+2],void(e.easing="cubic-bezier( 0.6, 0.2, 0.1, 1 )")):(e.move=n[i+1],void(e.easing="cubic-bezier( 0.6, 0.2, 0.1, 1 )"));case"over":return void(e.over=n[i+1]);case"reset":return void(e.reset="no"!=n[i-1]);case"scale":return e.scale={},"up"==n[i+1]||"down"==n[i+1]?(e.scale.direction=n[i+1],void(e.scale.power=n[i+2])):void(e.scale.power=n[i+1]);default:return}}),i=o(i,r.config),i=o(i,e),("top"==i.enter||"bottom"==i.enter)&&(i.axis="Y"),("left"==i.enter||"right"==i.enter)&&(i.axis="X"),"hustle"==i.easing&&(i.easing="cubic-bezier( 0.6, 0.2, 0.1, 1 )"),("top"==i.enter||"left"==i.enter)&&(i.move="-"+i.move),i},styleFactory:function(t){var e,i,o,n,r,a;return r=t.domEl.getAttribute("style")?t.domEl.getAttribute("style")+"; visibility: visible; ":"visibility: visible; ",e="-webkit-transition: -webkit-transform "+t.config.over+" "+t.config.easing+" "+t.config.wait+", opacity "+t.config.over+" "+t.config.easing+" "+t.config.wait+"; transition: transform "+t.config.over+" "+t.config.easing+" "+t.config.wait+", opacity "+t.config.over+" "+t.config.easing+" "+t.config.wait+"; -webkit-perspective: 1000;-webkit-backface-visibility: hidden;",n="-webkit-transition: -webkit-transform "+t.config.over+" "+t.config.easing+" 0s, opacity "+t.config.over+" "+t.config.easing+" 0s; transition: transform "+t.config.over+" "+t.config.easing+" 0s, opacity "+t.config.over+" "+t.config.easing+" 0s; -webkit-perspective: 1000; -webkit-backface-visibility: hidden; ",a=function(){0!=parseInt(t.config.move)&&(i+=" translate"+t.config.axis+"("+t.config.move+")",o+=" translate"+t.config.axis+"(0)"),0!=parseInt(t.config.scale.power)&&("up"==t.config.scale.direction&&(t.config.scale.value=1-.01*parseFloat(t.config.scale.power)),"down"==t.config.scale.direction&&(t.config.scale.value=1+.01*parseFloat(t.config.scale.power)),i+=" scale("+t.config.scale.value+")",o+=" scale(1)"),i+="; opacity: "+t.config.opacity+"; ",o+="; opacity: 1; "},i="transform:",o="transform:",a(),i+="-webkit-transform:",o+="-webkit-transform:",a(),{transition:e,initial:i,target:o,reset:n,inline:r,duration:1e3*(parseFloat(t.config.over)+parseFloat(t.config.wait))}},filter:function(t){var e=[],i=["from","the","and","then","but","with","please"];return t.forEach(function(t){i.indexOf(t)>-1||e.push(t)}),e},getViewportH:function(){var e=r.config.viewport.clientHeight,i=t.innerHeight;return r.config.viewport==t.document.documentElement&&i>e?i:e},scrollY:function(){return r.config.viewport==t.document.documentElement?t.pageYOffset:r.config.viewport.scrollTop+r.config.viewport.offsetTop},getOffset:function(t){var e=0,i=0;do isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(i+=t.offsetLeft);while(t=t.offsetParent);return{top:e,left:i}},isElemInViewport:function(e){var i=e.domEl.offsetHeight,o=r.getOffset(e.domEl).top,n=o+i,a=e.config.vFactor||0;return o+i*a>r.scrolled&&n-i*a<r.scrolled+r.getViewportH()||"fixed"==(e.domEl.currentStyle?e.domEl.currentStyle:t.getComputedStyle(e.domEl,null)).position},isMobile:function(){var e=navigator.userAgent||navigator.vendor||t.opera;return!(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)&&!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))}},n=function(){r.blocked||(r.blocked=!0,r.scrolled=r.scrollY(),i(function(){r.animate()}))},o=function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},i=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(),e}(window),scrollReveal}),!function(){function t(t){if("undefined"==typeof t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(t.constructor!==SVGSVGElement)throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}function e(e,i,o){this.setElement(e),this.setOptions(i),this.setCallback(o),this.frameLength=0,this.currentFrame=0,this.map=[],new t(e),this.mapping(),this.starter()}t.prototype.TYPES=["line","elipse","circle","polygon","polyline","rect"],t.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],t.prototype.scan=function(t){for(var e,i,o,n,r=t.querySelectorAll(this.TYPES.join(",")),a=0;a<r.length;a++)i=r[a],e=this[i.tagName.toLowerCase()+"ToPath"],o=e(this.parseAttr(i.attributes)),n=this.pathMaker(i,o),i.parentNode.replaceChild(n,i)},t.prototype.lineToPath=function(t){var e={};return e.d="M"+t.x1+","+t.y1+"L"+t.x2+","+t.y2,e},t.prototype.rectToPath=function(t){var e={},i=parseFloat(t.x)||0,o=parseFloat(t.y)||0,n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;return e.d="M"+i+" "+o+" ",e.d+="L"+(i+n)+" "+o+" ",e.d+="L"+(i+n)+" "+(o+r)+" ",e.d+="L"+i+" "+(o+r)+" Z",e},t.prototype.polylineToPath=function(t){for(var e={},i=t.points.split(" "),o="M"+i[0],n=1;n<i.length;n++)-1!==i[n].indexOf(",")&&(o+="L"+i[n]);return e.d=o,e},t.prototype.polygonToPath=function(e){var i=t.prototype.polylineToPath(e);return i.d+="Z",i},t.prototype.elipseToPath=function(t){var e=t.cx-t.rx,i=t.cy,o=parseFloat(t.cx)+parseFloat(t.rx),n=t.cy,r={};return r.d="M"+e+","+i+"A"+t.rx+","+t.ry+" 0,1,1 "+o+","+n+"A"+t.rx+","+t.ry+" 0,1,1 "+e+","+n,r},t.prototype.circleToPath=function(t){var e={},i=t.cx-t.r,o=t.cy,n=parseFloat(t.cx)+parseFloat(t.r),r=t.cy;return e.d="M"+i+","+o+"A"+t.r+","+t.r+" 0,1,1 "+n+","+r+"A"+t.r+","+t.r+" 0,1,1 "+i+","+r,e},t.prototype.pathMaker=function(t,e){var i,o,n=document.createElementNS("http://www.w3.org/2000/svg","path");for(i=0;i<t.attributes.length;i++)o=t.attributes[i],-1===this.ATTR_WATCH.indexOf(o.name)&&n.setAttribute(o.name,o.value);for(i in e)n.setAttribute(i,e[i]);return n},t.prototype.parseAttr=function(t){for(var e,i={},o=0;o<t.length;o++){if(e=t[o],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");i[e.name]=e.value}return i};var i,o,n;e.prototype.setElement=function(t){if("undefined"==typeof t)throw new Error('Vivus [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(t.constructor!==SVGSVGElement)throw new Error('Vivus [constructor]: "element" parameter must be a string or a SVGelement');this.el=t},e.prototype.setOptions=function(t){var e=["delayed","async","oneByOne","scenario","scenario-sync"],i=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(t=t||{},t.type&&-1===e.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||e[0],t.start&&-1===i.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||i[0],this.isIE=-1!==navigator.userAgent.indexOf("MSIE"),this.duration=n(t.duration,120),this.delay=n(t.delay,null),this.dashGap=n(t.dashGap,2),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.selfDestroy=!!t.selfDestroy,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},e.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},e.prototype.mapping=function(){var t,e,i,o,r,a,s,l;for(l=a=s=0,e=this.el.querySelectorAll("path"),t=0;t<e.length;t++)i=e[t],r={el:i,length:Math.ceil(i.getTotalLength())},isNaN(r.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",i):(a+=r.length,this.map.push(r),i.style.strokeDasharray=r.length+" "+(r.length+this.dashGap),i.style.strokeDashoffset=r.length,this.isIE&&(r.length+=this.dashGap),this.renderPath(t));for(a=0===a?1:a,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(e.length>1?e.length-1:1),t=0;t<this.map.length;t++){switch(r=this.map[t],this.type){case"delayed":r.startAt=this.delayUnit*t,r.duration=this.duration-this.delay;break;case"oneByOne":r.startAt=s/a*this.duration,r.duration=r.length/a*this.duration;break;case"async":r.startAt=0,r.duration=this.duration;break;case"scenario-sync":i=e[t],o=this.parseAttr(i),r.startAt=l+(n(o["data-delay"],this.delayUnit)||0),r.duration=n(o["data-duration"],this.duration),l=void 0!==o["data-async"]?r.startAt:r.startAt+r.duration,this.frameLength=Math.max(this.frameLength,r.startAt+r.duration);break;case"scenario":i=e[t],o=this.parseAttr(i),r.startAt=n(o["data-start"],this.delayUnit)||0,r.duration=n(o["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,r.startAt+r.duration)}s+=r.length,this.frameLength=this.frameLength||this.duration}},e.prototype.drawer=function(){var t=this;this.currentFrame+=this.speed,this.currentFrame<=0?(this.stop(),this.reset()):this.currentFrame>=this.frameLength?(this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy(),this.callback(this)):(this.trace(),this.handle=i(function(){t.drawer()}))},e.prototype.trace=function(){var t,e,i;for(t=0;t<this.map.length;t++)i=this.map[t],e=(this.currentFrame-i.startAt)/i.duration,e=Math.max(0,Math.min(1,e)),i.progress!==e&&(i.progress=e,i.el.style.strokeDashoffset=Math.floor(i.length*(1-e)),this.renderPath(t))},e.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],i=e.el.cloneNode(!0);e.el.parentNode.replaceChild(i,e.el),e.el=i}},e.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.el,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},e.prototype.reset=function(){return this.currentFrame=0,this.trace(),this},e.prototype.play=function(t){if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return this.speed=t||1,this.handle||this.drawer(),this},e.prototype.stop=function(){return this.handle&&(o(this.handle),delete this.handle),this},e.prototype.destroy=function(){var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},e.prototype.parseAttr=function(t){var e,i={};if(t&&t.attributes)for(var o=0;o<t.attributes.length;o++)e=t.attributes[o],i[e.name]=e.value;return i},e.prototype.isInViewport=function(t,e){var i=this.scrollY(),o=i+this.getViewportH(),n=t.getBoundingClientRect(),r=n.height,a=i+n.top,s=a+r;return e=e||0,o>=a+r*e&&s>=i},e.prototype.docElem=window.document.documentElement,e.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return e>t?e:t},e.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),o=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}(),n=function(t,e){var i=parseInt(t,10);return i>=0?i:e},window.Vivus=e}(),function(){var t=[].indexOf||function(t){for(var e=0,i=this.length;e<i;e++)if(e in this&&this[e]===t)return e;return-1},e=[].slice;!function(t,e){return"function"==typeof define&&define.amd?define("waypoints",["jquery"],function(i){return e(i,t)}):e(t.jQuery,t)}(window,function(i,o){var n,r,a,s,l,c,u,p,h,d,f,m,g,v,w,y;return n=i(o),p=t.call(o,"ontouchstart")>=0,s={horizontal:{},vertical:{}},l=1,u={},c="waypoints-context-id",f="resize.waypoints",m="scroll.waypoints",g=1,v="waypoints-waypoint-ids",w="waypoint",y="waypoints",r=function(){function t(t){var e=this;this.$element=t,this.element=t[0],this.didResize=!1,this.didScroll=!1,this.id="context"+l++,this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()},this.waypoints={horizontal:{},vertical:{}},this.element[c]=this.id,u[this.id]=this,t.bind(m,function(){var t;if(!e.didScroll&&!p)return e.didScroll=!0,t=function(){return e.doScroll(),e.didScroll=!1},o.setTimeout(t,i[y].settings.scrollThrottle)}),t.bind(f,function(){var t;if(!e.didResize)return e.didResize=!0,t=function(){return i[y]("refresh"),e.didResize=!1},o.setTimeout(t,i[y].settings.resizeThrottle)})}return t.prototype.doScroll=function(){var t,e=this;return t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!p||t.vertical.oldScroll&&t.vertical.newScroll||i[y]("refresh"),i.each(t,function(t,o){var n,r,a;return a=[],r=o.newScroll>o.oldScroll,n=r?o.forward:o.backward,i.each(e.waypoints[t],function(t,e){var i,n;return o.oldScroll<(i=e.offset)&&i<=o.newScroll?a.push(e):o.newScroll<(n=e.offset)&&n<=o.oldScroll?a.push(e):void 0}),a.sort(function(t,e){return t.offset-e.offset}),r||a.reverse(),i.each(a,function(t,e){if(e.options.continuous||t===a.length-1)return e.trigger([n])})}),this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.refresh=function(){var t,e,o,n=this;return o=i.isWindow(this.element),e=this.$element.offset(),this.doScroll(),t={horizontal:{contextOffset:o?0:e.left,contextScroll:o?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:o?0:e.top,contextScroll:o?0:this.oldScroll.y,contextDimension:o?i[y]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},i.each(t,function(t,e){return i.each(n.waypoints[t],function(t,o){var n,r,a,s,l;if(n=o.options.offset,a=o.offset,r=i.isWindow(o.element)?0:o.$element.offset()[e.offsetProp],i.isFunction(n)?n=n.apply(o.element):"string"==typeof n&&(n=parseFloat(n),o.options.offset.indexOf("%")>-1&&(n=Math.ceil(e.contextDimension*n/100))),o.offset=r-e.contextOffset+e.contextScroll-n,(!o.options.onlyOnScroll||null==a)&&o.enabled)return null!==a&&a<(s=e.oldScroll)&&s<=o.offset?o.trigger([e.backward]):null!==a&&a>(l=e.oldScroll)&&l>=o.offset?o.trigger([e.forward]):null===a&&e.oldScroll>=o.offset?o.trigger([e.forward]):void 0})})},t.prototype.checkEmpty=function(){if(i.isEmptyObject(this.waypoints.horizontal)&&i.isEmptyObject(this.waypoints.vertical))return this.$element.unbind([f,m].join(" ")),delete u[this.id]},t}(),a=function(){function t(t,e,o){var n,r;"bottom-in-view"===o.offset&&(o.offset=function(){var t;return t=i[y]("viewportHeight"),i.isWindow(e.element)||(t=e.$element.height()),t-i(this).outerHeight()}),this.$element=t,this.element=t[0],this.axis=o.horizontal?"horizontal":"vertical",this.callback=o.handler,this.context=e,this.enabled=o.enabled,this.id="waypoints"+g++,this.offset=null,this.options=o,e.waypoints[this.axis][this.id]=this,s[this.axis][this.id]=this,n=null!=(r=this.element[v])?r:[],n.push(this.id),this.element[v]=n}return t.prototype.trigger=function(t){if(this.enabled)return null!=this.callback&&this.callback.apply(this.element,t),this.options.triggerOnce?this.destroy():void 0},t.prototype.disable=function(){return this.enabled=!1},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},t.prototype.destroy=function(){return delete s[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},t.getWaypointsByElement=function(t){var e,o;return(o=t[v])?(e=i.extend({},s.horizontal,s.vertical),i.map(o,function(t){return e[t]})):[]},t}(),d={init:function(t,e){var o;return e=i.extend({},i.fn[w].defaults,e),null==(o=e.handler)&&(e.handler=t),this.each(function(){var t,o,n,s;return t=i(this),n=null!=(s=e.context)?s:i.fn[w].defaults.context,i.isWindow(n)||(n=t.closest(n)),n=i(n),o=u[n[0][c]],o||(o=new r(n)),new a(t,o,e)}),i[y]("refresh"),this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,i){if(e>0)return t.push(i[e-1])})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,i){if(e<i.length-1)return t.push(i[e+1])})},_traverse:function(t,e,n){var r,a;return null==t&&(t="vertical"),null==e&&(e=o),a=h.aggregate(e),r=[],this.each(function(){var e;return e=i.inArray(this,a[t]),n(r,e,a[t])}),this.pushStack(r)},_invoke:function(t){return this.each(function(){var e;return e=a.getWaypointsByElement(this),i.each(e,function(e,i){return i[t](),!0})}),this}},i.fn[w]=function(){var t,o;return o=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],d[o]?d[o].apply(this,t):i.isFunction(o)?d.init.apply(this,arguments):i.isPlainObject(o)?d.init.apply(this,[null,o]):o?i.error("The "+o+" method does not exist in jQuery Waypoints."):i.error("jQuery Waypoints needs a callback function or handler option.")},i.fn[w].defaults={context:o,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},h={refresh:function(){return i.each(u,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return null!=(t=o.innerHeight)?t:n.height()},aggregate:function(t){var e,o,n;return e=s,t&&(e=null!=(n=u[i(t)[0][c]])?n.waypoints:void 0),e?(o={horizontal:[],vertical:[]},i.each(o,function(t,n){return i.each(e[t],function(t,e){return n.push(e)}),n.sort(function(t,e){return t.offset-e.offset}),o[t]=i.map(n,function(t){return t.element}),o[t]=i.unique(o[t])}),o):[]},above:function(t){return null==t&&(t=o),h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){return null==t&&(t=o),h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){return null==t&&(t=o),h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){return null==t&&(t=o),h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;return e=i.extend({},s.vertical,s.horizontal),i.each(e,function(e,i){return i[t](),!0})},_filter:function(t,e,o){var n,r;return(n=u[i(t)[0][c]])?(r=[],i.each(n.waypoints[e],function(t,e){if(o(n,e))return r.push(e)}),r.sort(function(t,e){return t.offset-e.offset}),i.map(r,function(t){return t.element})):[]}},i[y]=function(){var t,i;return i=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],h[i]?h[i].apply(null,t):h.aggregate.call(null,i)},i[y].settings={resizeThrottle:100,scrollThrottle:30},n.on("load.waypoints",function(){return i[y]("refresh")})})}.call(this);