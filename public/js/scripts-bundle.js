"use strict";$(document).ready(function(){function t(t,e,s){var o=d3.select(s),a=$(s).outerWidth();o.select(".tt-season").text(e.season),o.select(".tt-opponent").text(e.opp),o.select(".tt-week").text(e.week),o.select(".tt-quarter").text(e.quarter),o.select(".tt-time").text(e.time),o.select(".tt-detail").text(e.detail);var n=$(window).width(),r=0;t.clientX>n/2.1?(r=t.clientX-(a-10),o.attr("class","tooltip")):(r=t.clientX-10,o.attr("class","tooltip"));var c=t.clientY+15;o.attr("style","left: "+r+"px; top: "+c+"px")}function e(t,e){var s={top:0,right:10,bottom:40,left:10},o=$(e).width(),a=o/2,n=a>400?400:a,r=n/100*1.5;"#arc-graphic"!==e&&(n=.75*a,r=n/100*1.7,s.bottom=35);var c=d3.scaleLinear().range([0,o-s.left-s.right]),l=d3.scaleLinear().range([n,0]);c.domain([0,100]),l.domain([n,0]);var i=d3.axisBottom().scale(c).tickValues([0,10,20,30,40,50,60,70,80,90,100]).tickFormat(function(t,e){return e<6?t:t-20*(e-5)}),d=d3.select(e).data(t).append("svg").attr("width",o).attr("height",n+s.top+s.bottom),p=function(t){var e=c(t.spot).toString(),s=c(t.spot+ +t.yards).toString(),o=l(n).toString(),a=l(n-+t.yards/1.25*r).toString(),i=c(t.spot+ +t.yards/4).toString(),d=c(t.spot+ +t.yards-+t.yards/4).toString();return 0===+t.yards&&"complete"===t.result&&(a=l(n-25)),"M "+e+","+o+" C "+i+", "+a+" "+d+", "+a+" "+s+", "+o},u=d.selectAll("g").data(t).enter().append("g").attr("transform","translate( "+s.left+", "+s.top+" )");u.selectAll("path").data(function(t){return t.plays}).enter().append("path").attr("class",function(t){return t.touchdown===!0?"pass touchdown yr-"+t.season+" "+t.opp:"pass yr-"+t.season+" "+t.opp}).attr("d",function(t){return p(t)});var f=d.append("g");f.append("line").attr("x1",0).attr("x2",o).attr("y1",n).attr("y2",n),d.append("g").attr("class","x axis").attr("transform","translate("+s.left+", "+n+")").call(i),d.append("text").attr("class","axis-label").attr("text-anchor","middle").attr("x",c(50)+s.left).attr("y",n+35).attr("class","axis-label").text("Spot on the field (Cowboys moving left to right)")}function s(e){var s=d3.scaleLinear().domain([-10,100]).interpolate(d3.interpolateHcl).range([d3.rgb("#deebf7"),d3.rgb("#08306b")]),o=d3.select("#att-graphic").data(e),a=o.selectAll("div").data(e).enter().append("div").attr("class",function(t){return"season season-"+t.season_year+" clearfix"});a.append("span").attr("class","season-label").html(function(t,e){return"<strong>"+t.season_year+":</strong> "+u[e].comps+"-for-"+u[e].atts+", "+u[e].yds+" yards, "+u[e].tds+" TDs"}),a.selectAll("attempt").data(function(t){return t.plays}).enter().append("span").attr("style",function(t){return"incomplete"!==t.result||t.interception?t.touchdown?"background-color: #e34e36":t.interception?"background-color: #fec44f":"background-color: "+s(+t.yards):"background-color: white; border: 1px solid #d7d7d7"}).attr("class",function(t){return t.interception?"attempt interception":t.touchdown?"attempt touchdown":"incomplete"===t.result?"attempt incomplete":"attempt"}).on("mousemove",function(e){return t(event,e,"#att-tooltip")}).on("mouseout",function(){return d3.select("#att-tooltip").attr("class","tooltip no-show")})}function o(){$("#comp-graphic .pass").addClass("no-show"),"all"!==f&&"all"!==h?$("#comp-graphic .yr-"+f+"."+h).removeClass("no-show"):"all"===f&&"all"!==h?$("#comp-graphic ."+h).removeClass("no-show"):"all"===h&&"all"!==f?$("#comp-graphic .yr-"+f).removeClass("no-show"):$("#comp-graphic .pass").removeClass("no-show")}function a(t){var e=_.find(p,["receiver",t]),s=parseFloat((e.catches/c*100).toFixed(1)),o=parseFloat((e.yards/i*100).toFixed(1)),a=parseFloat((e.touchdowns/l*100).toFixed(1));s=s>0?s:0,o=o>0?o:0,a=a>0?a:0,$("#player-recs").css("width",s+"%"),$("#player-yds").css("width",o+"%"),$("#player-tds").css("width",a+"%"),$("#rec-per").text(s+"%").css("left",s+"%"),$("#yds-per").text(o+"%").css("left",o+"%"),$("#tds-per").text(a+"%").css("left",a+"%");var n=e.yards.toFixed(0);if(n.length>=4){var r=n.slice(0,n.length-3),d=n.slice(-3);n=r+","+d}$("#rec-data").html(e.catches),$("#yds-data").html(n),$("#tds-data").html(e.touchdowns);var u=e.receiver.split(" ").join("");u="_"+u+".jpg",$("#receiver-head-block img").attr("src","images/"+u).attr("alt",e.receiver),$("#receiver-pos").text(e.pos+", "+e.years)}function n(t){d=[],$("#receiver-arcs").html("");for(var s=function(e){var s={season_year:r[e].season_year,plays:[]};$.each(r[e].plays,function(e,o){o.target===t&&s.plays.push(o)}),d.push(s)},o=0;o<r.length;o+=1)s(o);$("#receiver-name").text(t),e(d,"#receiver-arcs"),a(t)}Modernizr.touchevents&&$("body").addClass("touch");var r=[],c=2943,l=256,i=35499,d=[],p=void 0,u=[{season:"2006",comps:237,atts:366,yds:"3,092",tds:20},{season:"2007",comps:353,atts:556,yds:"4,412",tds:37},{season:"2008",comps:276,atts:450,yds:"3,448",tds:26},{season:"2009",comps:392,atts:620,yds:"4,925",tds:28},{season:"2010",comps:148,atts:213,yds:"1,605",tds:11},{season:"2011",comps:346,atts:522,yds:"4,184",tds:31},{season:"2012",comps:425,atts:648,yds:"4,903",tds:28},{season:"2013",comps:342,atts:535,yds:"3,828",tds:31},{season:"2014",comps:338,atts:485,yds:"4,189",tds:38},{season:"2015",comps:83,atts:121,yds:"884",tds:5},{season:"2016",comps:3,atts:4,yds:"29",tds:1}],f="all",h="all";$("#comp-season").change(function(){f=$("#comp-season option:selected").attr("value"),o()}),$("#comp-opp").change(function(){h=$("#comp-opp option:selected").attr("value"),o()}),$("#att-season").change(function(){var t=$("#att-season option:selected").attr("value");"all"!==t?($(".season").addClass("no-show"),$(".season-"+t).removeClass("no-show")):$(".season").removeClass("no-show")}),$("#catchers").change(function(){var t=$("#catchers option:selected").attr("value");n(t)}),$(".tooltip button").click(function(){return $(".tooltip").addClass("no-show")}),$.getJSON("js/data.json",function(t){t.forEach(function(t){var e=t;e.plays=_.orderBy(t.plays,["week","quarter","sort_time"],["asc","asc","desc"]),r.push(e)}),e(r,"#arc-graphic"),s(r),$.getJSON("js/rec-data.json",function(t){p=t,n("Jason Witten")})})}),$(document).ready(function(){function t(){$(".open-list").removeClass("open-list"),$(".open-button").removeClass("open-button")}var e=new Date,s=e.getFullYear();$(".copyright").text(s);var o=$(".header-group button");o.click(function(e){o.hasClass("open-button")===!0&&$(this).hasClass("open-button")===!0?t():(t(),$(this).addClass("open-button"),$(this).siblings("ul").addClass("open-list")),e.stopPropagation()}),$("body").click(function(){t()}),document.cookie.indexOf("DMN-P")>=0?$("body").addClass("subscribed"):$("body").removeClass("subscribed")});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e,s){function o(t,e){return("undefined"==typeof t?"undefined":_typeof(t))===e}function a(){var t,e,s,a,n,r,c;for(var l in d)if(d.hasOwnProperty(l)){if(t=[],e=d[l],e.name&&(t.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)t.push(e.options.aliases[s].toLowerCase());for(a=o(e.fn,"function")?e.fn():e.fn,n=0;n<t.length;n++)r=t[n],c=r.split("."),1===c.length?u[c[0]]=a:(!u[c[0]]||u[c[0]]instanceof Boolean||(u[c[0]]=new Boolean(u[c[0]])),u[c[0]][c[1]]=a),i.push((a?"":"no-")+c.join("-"))}}function n(t){var e=f.className,s=u._config.classPrefix||"";if(h&&(e=e.baseVal),u._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}u._config.enableClasses&&(e+=" "+s+t.join(" "+s),h?f.className.baseVal=e:f.className=e)}function r(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):h?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function c(){var t=e.body;return t||(t=r(h?"svg":"body"),t.fake=!0),t}function l(t,s,o,a){var n,l,i,d,p="modernizr",u=r("div"),h=c();if(parseInt(o,10))for(;o--;)i=r("div"),i.id=a?a[o]:p+(o+1),u.appendChild(i);return n=r("style"),n.type="text/css",n.id="s"+p,(h.fake?h:u).appendChild(n),h.appendChild(u),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(e.createTextNode(t)),u.id=p,h.fake&&(h.style.background="",h.style.overflow="hidden",d=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),l=s(u,t),h.fake?(h.parentNode.removeChild(h),f.style.overflow=d,f.offsetHeight):u.parentNode.removeChild(u),!!l}var i=[],d=[],p={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(t,e){var s=this;setTimeout(function(){e(s[t])},0)},addTest:function(t,e,s){d.push({name:t,fn:e,options:s})},addAsyncTest:function(t){d.push({name:null,fn:t})}},u=function(){};u.prototype=p,u=new u;var f=e.documentElement,h="svg"===f.nodeName.toLowerCase(),m=p._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];p._prefixes=m;var y=p.testStyles=l;u.addTest("touchevents",function(){var s;if("ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch)s=!0;else{var o=["@media (",m.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");y(o,function(t){s=9===t.offsetTop})}return s}),a(),n(i),delete p.addTest,delete p.addAsyncTest;for(var v=0;v<u._q.length;v++)u._q[v]();t.Modernizr=u}(window,document);
//# sourceMappingURL=scripts-bundle.js.map
