$(document).ready(function(){function t(){$(window).width()<768&&$(document).on("click","#bs-example-navbar-collapse-2 ul li a",function(){$(".navbar-toggle").click()})}$("body").scrollspy({target:".header-wrap",offset:115}),$("#sticker").sticky({topSpacing:0}),t(),$(window).resize(function(){t()}),$(".navbar-nav li a").click(function(t){t.preventDefault();var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top-$(".header-wrap").outerHeight(!0)},400)}),$("#myTabs a").click(function(t){t.preventDefault(),$(this).tab("show")}),$(function(){$(".gridder").gridderExpander({scroll:!1,scrollOffset:0,scrollTo:"panel",animationSpeed:400,animationEasing:"easeInOutExpo",showNav:!0,nextText:!1,prevText:!1,closeText:!1,onStart:function(){},onContent:function(){},onClosed:function(){}})})});