define(["require","exports","module","view/addModuleView","view/basketView","view/detailView","view/messageView","view/plannerView"],function(e,t){function u(){$("#nav").tooltip({placement:"bottom",selector:"a[rel=tooltip]"}),$("#misc-btns").tooltip({placement:"bottom",selector:"a[rel=tooltip]"}),$("#footer").tooltip({placement:"top",selector:"a[rel=tooltip]"}),$("#version").text(planner.version),$("#metro-pivot").metroPivot(),$("#planner").css("min-height",$("#primary").height()),$(window).bind("resize",function(e){var t=$(this).height(),n=$("#primary").height(),r=t>n?t:n;$("#sidebar").height(r-20);var i=$("h1").first().height(),s=$("#metro-pivot").find(".pivotItem");s.height(r-i-143),s.find(".info").width(s.width()-43),$.publish("app:window:resize",[t,$(this).width()])}).trigger("resize"),$("#fullsize").on("click",function(){var e=!1;return function(){$.publish("app:fullsize",e=!e)}}())}var n=e("view/addModuleView"),r=e("view/basketView"),i=e("view/detailView"),s=e("view/messageView"),o=e("view/plannerView");t.init=function(){n.init(),o.init(),r.init(),i.init(),s.init(),u()},$.subscribe("app:fullsize",function(e,t){var n=$("#primary"),r=$("#secondary");t?(r.hide(),n.removeClass("span26").addClass("offset1 span32")):(r.show(),n.removeClass("offset1 span32").addClass("span26")),$(window).resize()})});