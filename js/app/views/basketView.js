define(["require","exports","module","view/moduleView"],function(e,t){function i(){$("#metro-pivot").data("controller").goToItemByName("Modules")}var n=e("view/moduleView"),r=$("#basket-scroll");t.init=function(){r.tooltip({placement:"right",selector:"span[rel=tooltip]"}),r.sortable({cursor:"move",containment:"parent",tolerance:"pointer",handle:".info",forcePlaceholderSize:!0,update:function(e,t){$.publish("module:sequence",[r.sortable("toArray")])}})},$.subscribe(planner.list.modules+":addOne",function(e,t){i(),r.append(n.render(t))}),$.subscribe("module:fetching",function(e,t){i(),r.prepend(n.loading(t))}),$.subscribe(planner.list.modules+":duplicatedExamDate",function(e,t,n){var r=t.get("code"),i=n.get("code");$("#"+r).trigger("clash.add",[i]),$("#"+i).trigger("clash.add",[r]),$.publish("message:warning",["Exam Date ("+t.get("examDate")+") clashes between "+i+" "+n.get("title")+" and "+r+" "+t.get("title")+"."])})});