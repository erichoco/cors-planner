define(["require","exports","module"],function(e,t){(function(e){var t="planner_",n="slot",r=e("#tt-grid"),i=e("#basket-scroll"),s=function(t,n){this.$elem=e(t),this.init(n)};s.prototype={constructor:s,init:function(e){this.code=e.code,this.type=e.type,this.slot=e.slot,this.data=e.module,this.id=this.$elem.attr("id"),this.sid=this.id.substr(0,this.id.lastIndexOf("-")),this.updateElem(),this.attachEvents(e.droppable),this.attachDragDrop(e.droppable)},get:function(e){return this.data.get(e)},updateElem:function(){var t=this;this.$elem.data("span")<3&&(this.code.length>6||this.type==="labs")&&(this.$elem.addClass("small"),e.subscribe("app:fullsize",function(e,n){n?t.$elem.removeClass("small"):t.$elem.addClass("small")}))},attachEvents:function(t){if(t)return;var n=this;this.$elem.on("mouseenter",function(){r.find(".slot[id^="+n.code+"-]").addClass("hover"),i.find(".module[id="+n.code+"]").addClass("hover")}),this.$elem.on("mouseleave",function(){r.find(".slot[id^="+n.code+"-]").removeClass("hover"),i.find(".module[id="+n.code+"]").removeClass("hover")}),this.$elem.on("click",function(){e.publish("module:preview",n.code),e("#metro-pivot").data("controller").goToItemByName("Detail")})},attachDragDrop:function(t){var n=this;this.dragOpts={helper:"clone",opacity:.3,cursorAt:{top:20,left:20},revert:"invalid",revertDuration:200,zIndex:1e3,start:e.proxy(n.dragStart,n),stop:e.proxy(n.dragStop,n)},this.dropOpts={activeClass:"highlight",hoverClass:"hover",tolerance:"pointer",over:e.proxy(n.dropOver,n),out:e.proxy(n.dropOut,n),drop:e.proxy(n.dropEvent,n)},t?this.$elem.droppable(this.dropOpts):this.$elem.draggable(this.dragOpts)},dragStart:function(){e.publish("grid:module:droppable",[this.slot,this.type,this.data])},dragStop:function(){r.find(".ui-droppable").remove(),e.publish("grid:rows:clearEmpty")},dropEvent:function(t,n){this.$elem.trigger("mouseleave"),r.find(".slot[id^="+this.code+"-"+this.type+"-]").remove(),e.publish("grid:module:allocate",[this.slot,this.type,this.data]),setTimeout(function(){e.publish("grid:rows:clearEmpty")},10)},dropOver:function(){r.find(".slot[id^="+this.sid+"-]").addClass("hover")},dropOut:function(){r.find(".slot[id^="+this.sid+"-]").removeClass("hover")}},e.fn.slot=function(r){return this.each(function(){e.data(this,t+n)||e.data(this,t+n,new s(this,r))})}})(jQuery)});