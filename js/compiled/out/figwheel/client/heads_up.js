// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19127__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19127__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__21585_21593 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__21586_21594 = null;
var count__21587_21595 = (0);
var i__21588_21596 = (0);
while(true){
if((i__21588_21596 < count__21587_21595)){
var k_21597 = cljs.core._nth.call(null,chunk__21586_21594,i__21588_21596);
e.setAttribute(cljs.core.name.call(null,k_21597),cljs.core.get.call(null,attrs,k_21597));

var G__21598 = seq__21585_21593;
var G__21599 = chunk__21586_21594;
var G__21600 = count__21587_21595;
var G__21601 = (i__21588_21596 + (1));
seq__21585_21593 = G__21598;
chunk__21586_21594 = G__21599;
count__21587_21595 = G__21600;
i__21588_21596 = G__21601;
continue;
} else {
var temp__4423__auto___21602 = cljs.core.seq.call(null,seq__21585_21593);
if(temp__4423__auto___21602){
var seq__21585_21603__$1 = temp__4423__auto___21602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21585_21603__$1)){
var c__18872__auto___21604 = cljs.core.chunk_first.call(null,seq__21585_21603__$1);
var G__21605 = cljs.core.chunk_rest.call(null,seq__21585_21603__$1);
var G__21606 = c__18872__auto___21604;
var G__21607 = cljs.core.count.call(null,c__18872__auto___21604);
var G__21608 = (0);
seq__21585_21593 = G__21605;
chunk__21586_21594 = G__21606;
count__21587_21595 = G__21607;
i__21588_21596 = G__21608;
continue;
} else {
var k_21609 = cljs.core.first.call(null,seq__21585_21603__$1);
e.setAttribute(cljs.core.name.call(null,k_21609),cljs.core.get.call(null,attrs,k_21609));

var G__21610 = cljs.core.next.call(null,seq__21585_21603__$1);
var G__21611 = null;
var G__21612 = (0);
var G__21613 = (0);
seq__21585_21593 = G__21610;
chunk__21586_21594 = G__21611;
count__21587_21595 = G__21612;
i__21588_21596 = G__21613;
continue;
}
} else {
}
}
break;
}

var seq__21589_21614 = cljs.core.seq.call(null,children);
var chunk__21590_21615 = null;
var count__21591_21616 = (0);
var i__21592_21617 = (0);
while(true){
if((i__21592_21617 < count__21591_21616)){
var ch_21618 = cljs.core._nth.call(null,chunk__21590_21615,i__21592_21617);
e.appendChild(ch_21618);

var G__21619 = seq__21589_21614;
var G__21620 = chunk__21590_21615;
var G__21621 = count__21591_21616;
var G__21622 = (i__21592_21617 + (1));
seq__21589_21614 = G__21619;
chunk__21590_21615 = G__21620;
count__21591_21616 = G__21621;
i__21592_21617 = G__21622;
continue;
} else {
var temp__4423__auto___21623 = cljs.core.seq.call(null,seq__21589_21614);
if(temp__4423__auto___21623){
var seq__21589_21624__$1 = temp__4423__auto___21623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21589_21624__$1)){
var c__18872__auto___21625 = cljs.core.chunk_first.call(null,seq__21589_21624__$1);
var G__21626 = cljs.core.chunk_rest.call(null,seq__21589_21624__$1);
var G__21627 = c__18872__auto___21625;
var G__21628 = cljs.core.count.call(null,c__18872__auto___21625);
var G__21629 = (0);
seq__21589_21614 = G__21626;
chunk__21590_21615 = G__21627;
count__21591_21616 = G__21628;
i__21592_21617 = G__21629;
continue;
} else {
var ch_21630 = cljs.core.first.call(null,seq__21589_21624__$1);
e.appendChild(ch_21630);

var G__21631 = cljs.core.next.call(null,seq__21589_21624__$1);
var G__21632 = null;
var G__21633 = (0);
var G__21634 = (0);
seq__21589_21614 = G__21631;
chunk__21590_21615 = G__21632;
count__21591_21616 = G__21633;
i__21592_21617 = G__21634;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq21582){
var G__21583 = cljs.core.first.call(null,seq21582);
var seq21582__$1 = cljs.core.next.call(null,seq21582);
var G__21584 = cljs.core.first.call(null,seq21582__$1);
var seq21582__$2 = cljs.core.next.call(null,seq21582__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__21583,G__21584,seq21582__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18986__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__,hierarchy__18986__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__,hierarchy__18986__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18986__auto__,method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_21635 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_21635.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_21635.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_21635.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_21635);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__21636,st_map){
var map__21640 = p__21636;
var map__21640__$1 = ((cljs.core.seq_QMARK_.call(null,map__21640))?cljs.core.apply.call(null,cljs.core.hash_map,map__21640):map__21640);
var container_el = cljs.core.get.call(null,map__21640__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__21640,map__21640__$1,container_el){
return (function (p__21641){
var vec__21642 = p__21641;
var k = cljs.core.nth.call(null,vec__21642,(0),null);
var v = cljs.core.nth.call(null,vec__21642,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__21640,map__21640__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__21643,dom_str){
var map__21645 = p__21643;
var map__21645__$1 = ((cljs.core.seq_QMARK_.call(null,map__21645))?cljs.core.apply.call(null,cljs.core.hash_map,map__21645):map__21645);
var c = map__21645__$1;
var content_area_el = cljs.core.get.call(null,map__21645__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__21646){
var map__21648 = p__21646;
var map__21648__$1 = ((cljs.core.seq_QMARK_.call(null,map__21648))?cljs.core.apply.call(null,cljs.core.hash_map,map__21648):map__21648);
var content_area_el = cljs.core.get.call(null,map__21648__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto__){
return (function (){
var f__20373__auto__ = (function (){var switch__20351__auto__ = ((function (c__20372__auto__){
return (function (state_21690){
var state_val_21691 = (state_21690[(1)]);
if((state_val_21691 === (1))){
var inst_21675 = (state_21690[(7)]);
var inst_21675__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21676 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21677 = ["10px","10px","100%","68px","1.0"];
var inst_21678 = cljs.core.PersistentHashMap.fromArrays(inst_21676,inst_21677);
var inst_21679 = cljs.core.merge.call(null,inst_21678,style);
var inst_21680 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21675__$1,inst_21679);
var inst_21681 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21675__$1,msg);
var inst_21682 = cljs.core.async.timeout.call(null,(300));
var state_21690__$1 = (function (){var statearr_21692 = state_21690;
(statearr_21692[(7)] = inst_21675__$1);

(statearr_21692[(8)] = inst_21681);

(statearr_21692[(9)] = inst_21680);

return statearr_21692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21690__$1,(2),inst_21682);
} else {
if((state_val_21691 === (2))){
var inst_21675 = (state_21690[(7)]);
var inst_21684 = (state_21690[(2)]);
var inst_21685 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_21686 = ["auto"];
var inst_21687 = cljs.core.PersistentHashMap.fromArrays(inst_21685,inst_21686);
var inst_21688 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21675,inst_21687);
var state_21690__$1 = (function (){var statearr_21693 = state_21690;
(statearr_21693[(10)] = inst_21684);

return statearr_21693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21690__$1,inst_21688);
} else {
return null;
}
}
});})(c__20372__auto__))
;
return ((function (switch__20351__auto__,c__20372__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20352__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20352__auto____0 = (function (){
var statearr_21697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21697[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20352__auto__);

(statearr_21697[(1)] = (1));

return statearr_21697;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20352__auto____1 = (function (state_21690){
while(true){
var ret_value__20353__auto__ = (function (){try{while(true){
var result__20354__auto__ = switch__20351__auto__.call(null,state_21690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20354__auto__;
}
break;
}
}catch (e21698){if((e21698 instanceof Object)){
var ex__20355__auto__ = e21698;
var statearr_21699_21701 = state_21690;
(statearr_21699_21701[(5)] = ex__20355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21702 = state_21690;
state_21690 = G__21702;
continue;
} else {
return ret_value__20353__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20352__auto__ = function(state_21690){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20352__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20352__auto____1.call(this,state_21690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20352__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20352__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20352__auto__;
})()
;})(switch__20351__auto__,c__20372__auto__))
})();
var state__20374__auto__ = (function (){var statearr_21700 = f__20373__auto__.call(null);
(statearr_21700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto__);

return statearr_21700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto__))
);

return c__20372__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__21704 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__21704,(0),null);
var ln = cljs.core.nth.call(null,vec__21704,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__21707 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__21707,(0),null);
var file_line = cljs.core.nth.call(null,vec__21707,(1),null);
var file_column = cljs.core.nth.call(null,vec__21707,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__21707,file_name,file_line,file_column){
return (function (p1__21705_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__21705_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__21707,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18087__auto__ = file_line;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
var and__18075__auto__ = cause;
if(cljs.core.truth_(and__18075__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18075__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__21709 = figwheel.client.heads_up.ensure_container.call(null);
var map__21709__$1 = ((cljs.core.seq_QMARK_.call(null,map__21709))?cljs.core.apply.call(null,cljs.core.hash_map,map__21709):map__21709);
var content_area_el = cljs.core.get.call(null,map__21709__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto__){
return (function (){
var f__20373__auto__ = (function (){var switch__20351__auto__ = ((function (c__20372__auto__){
return (function (state_21756){
var state_val_21757 = (state_21756[(1)]);
if((state_val_21757 === (1))){
var inst_21739 = (state_21756[(7)]);
var inst_21739__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_21740 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_21741 = ["0.0"];
var inst_21742 = cljs.core.PersistentHashMap.fromArrays(inst_21740,inst_21741);
var inst_21743 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21739__$1,inst_21742);
var inst_21744 = cljs.core.async.timeout.call(null,(300));
var state_21756__$1 = (function (){var statearr_21758 = state_21756;
(statearr_21758[(7)] = inst_21739__$1);

(statearr_21758[(8)] = inst_21743);

return statearr_21758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21756__$1,(2),inst_21744);
} else {
if((state_val_21757 === (2))){
var inst_21739 = (state_21756[(7)]);
var inst_21746 = (state_21756[(2)]);
var inst_21747 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_21748 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_21749 = cljs.core.PersistentHashMap.fromArrays(inst_21747,inst_21748);
var inst_21750 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_21739,inst_21749);
var inst_21751 = cljs.core.async.timeout.call(null,(200));
var state_21756__$1 = (function (){var statearr_21759 = state_21756;
(statearr_21759[(9)] = inst_21746);

(statearr_21759[(10)] = inst_21750);

return statearr_21759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21756__$1,(3),inst_21751);
} else {
if((state_val_21757 === (3))){
var inst_21739 = (state_21756[(7)]);
var inst_21753 = (state_21756[(2)]);
var inst_21754 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_21739,"");
var state_21756__$1 = (function (){var statearr_21760 = state_21756;
(statearr_21760[(11)] = inst_21753);

return statearr_21760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21756__$1,inst_21754);
} else {
return null;
}
}
}
});})(c__20372__auto__))
;
return ((function (switch__20351__auto__,c__20372__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20352__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20352__auto____0 = (function (){
var statearr_21764 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21764[(0)] = figwheel$client$heads_up$clear_$_state_machine__20352__auto__);

(statearr_21764[(1)] = (1));

return statearr_21764;
});
var figwheel$client$heads_up$clear_$_state_machine__20352__auto____1 = (function (state_21756){
while(true){
var ret_value__20353__auto__ = (function (){try{while(true){
var result__20354__auto__ = switch__20351__auto__.call(null,state_21756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20354__auto__;
}
break;
}
}catch (e21765){if((e21765 instanceof Object)){
var ex__20355__auto__ = e21765;
var statearr_21766_21768 = state_21756;
(statearr_21766_21768[(5)] = ex__20355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21769 = state_21756;
state_21756 = G__21769;
continue;
} else {
return ret_value__20353__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20352__auto__ = function(state_21756){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20352__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20352__auto____1.call(this,state_21756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20352__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20352__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20352__auto__;
})()
;})(switch__20351__auto__,c__20372__auto__))
})();
var state__20374__auto__ = (function (){var statearr_21767 = f__20373__auto__.call(null);
(statearr_21767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto__);

return statearr_21767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto__))
);

return c__20372__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto__){
return (function (){
var f__20373__auto__ = (function (){var switch__20351__auto__ = ((function (c__20372__auto__){
return (function (state_21801){
var state_val_21802 = (state_21801[(1)]);
if((state_val_21802 === (1))){
var inst_21791 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_21801__$1 = state_21801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21801__$1,(2),inst_21791);
} else {
if((state_val_21802 === (2))){
var inst_21793 = (state_21801[(2)]);
var inst_21794 = cljs.core.async.timeout.call(null,(400));
var state_21801__$1 = (function (){var statearr_21803 = state_21801;
(statearr_21803[(7)] = inst_21793);

return statearr_21803;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21801__$1,(3),inst_21794);
} else {
if((state_val_21802 === (3))){
var inst_21796 = (state_21801[(2)]);
var inst_21797 = figwheel.client.heads_up.clear.call(null);
var state_21801__$1 = (function (){var statearr_21804 = state_21801;
(statearr_21804[(8)] = inst_21796);

return statearr_21804;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21801__$1,(4),inst_21797);
} else {
if((state_val_21802 === (4))){
var inst_21799 = (state_21801[(2)]);
var state_21801__$1 = state_21801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21801__$1,inst_21799);
} else {
return null;
}
}
}
}
});})(c__20372__auto__))
;
return ((function (switch__20351__auto__,c__20372__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20352__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20352__auto____0 = (function (){
var statearr_21808 = [null,null,null,null,null,null,null,null,null];
(statearr_21808[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20352__auto__);

(statearr_21808[(1)] = (1));

return statearr_21808;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20352__auto____1 = (function (state_21801){
while(true){
var ret_value__20353__auto__ = (function (){try{while(true){
var result__20354__auto__ = switch__20351__auto__.call(null,state_21801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20354__auto__;
}
break;
}
}catch (e21809){if((e21809 instanceof Object)){
var ex__20355__auto__ = e21809;
var statearr_21810_21812 = state_21801;
(statearr_21810_21812[(5)] = ex__20355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21813 = state_21801;
state_21801 = G__21813;
continue;
} else {
return ret_value__20353__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20352__auto__ = function(state_21801){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20352__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20352__auto____1.call(this,state_21801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20352__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20352__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20352__auto__;
})()
;})(switch__20351__auto__,c__20372__auto__))
})();
var state__20374__auto__ = (function (){var statearr_21811 = f__20373__auto__.call(null);
(statearr_21811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto__);

return statearr_21811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto__))
);

return c__20372__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1433863731930