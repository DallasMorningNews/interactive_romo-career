"use strict";$(document).ready(function(){function t(t){console.log(t);var a={top:0,right:50,bottom:40,left:50},n=$("#graphic").width(),o=400,e=d3.scaleLinear().range([0,n-a.left-a.right]),s=d3.scaleLinear().range([o,0]);e.domain([0,100]),s.domain([o,0]);var r=d3.axisBottom().scale(e),i=d3.select("#graphic").data(t).append("svg").attr("width",n+a.left+a.right).attr("height",o+a.top+a.bottom),d=function(t){var a=e(t.spot).toString(),n=e(t.spot+ +t.yards).toString(),r=s(o).toString(),i=s(o-+t.yards/1.25*7).toString(),d=e(t.spot+ +t.yards/4).toString(),l=e(t.spot+ +t.yards-+t.yards/4).toString();return"M "+a+","+r+" C "+d+", "+i+" "+l+", "+i+" "+n+", "+r},l=i.selectAll("g").data(t).enter().append("g").attr("transform","translate( "+a.left+", "+a.top+" )");l.selectAll("path").data(function(t){return console.log(t),t.plays}).enter().append("path").attr("class",function(t){return t.touchdown===!0?"pass touchdown":"pass"}).attr("d",function(t){return d(t)});var c=i.append("g");c.append("line").attr("x1",0).attr("x2",n).attr("y1",o).attr("y2",o),i.append("g").attr("class","x axis").attr("transform","translate("+a.left+", "+o+")").call(r)}$.getJSON("../js/data.json",function(a){t(a)})}),$(document).ready(function(){function t(){$(".open-list").removeClass("open-list"),$(".open-button").removeClass("open-button")}var a=new Date,n=a.getFullYear();$(".copyright").text(n);var o=$(".header-group button");o.click(function(a){o.hasClass("open-button")===!0&&$(this).hasClass("open-button")===!0?t():(t(),$(this).addClass("open-button"),$(this).siblings("ul").addClass("open-list")),a.stopPropagation()}),$("body").click(function(){t()}),document.cookie.indexOf("DMN-P")>=0?$("body").addClass("subscribed"):$("body").removeClass("subscribed")});
//# sourceMappingURL=scripts-bundle.js.map
