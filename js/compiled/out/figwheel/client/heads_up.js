// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__5571__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5571__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__12409_12417 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__12410_12418 = null;
var count__12411_12419 = (0);
var i__12412_12420 = (0);
while(true){
if((i__12412_12420 < count__12411_12419)){
var k_12421 = cljs.core._nth.call(null,chunk__12410_12418,i__12412_12420);
e.setAttribute(cljs.core.name.call(null,k_12421),cljs.core.get.call(null,attrs,k_12421));

var G__12422 = seq__12409_12417;
var G__12423 = chunk__12410_12418;
var G__12424 = count__12411_12419;
var G__12425 = (i__12412_12420 + (1));
seq__12409_12417 = G__12422;
chunk__12410_12418 = G__12423;
count__12411_12419 = G__12424;
i__12412_12420 = G__12425;
continue;
} else {
var temp__4423__auto___12426 = cljs.core.seq.call(null,seq__12409_12417);
if(temp__4423__auto___12426){
var seq__12409_12427__$1 = temp__4423__auto___12426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12409_12427__$1)){
var c__5316__auto___12428 = cljs.core.chunk_first.call(null,seq__12409_12427__$1);
var G__12429 = cljs.core.chunk_rest.call(null,seq__12409_12427__$1);
var G__12430 = c__5316__auto___12428;
var G__12431 = cljs.core.count.call(null,c__5316__auto___12428);
var G__12432 = (0);
seq__12409_12417 = G__12429;
chunk__12410_12418 = G__12430;
count__12411_12419 = G__12431;
i__12412_12420 = G__12432;
continue;
} else {
var k_12433 = cljs.core.first.call(null,seq__12409_12427__$1);
e.setAttribute(cljs.core.name.call(null,k_12433),cljs.core.get.call(null,attrs,k_12433));

var G__12434 = cljs.core.next.call(null,seq__12409_12427__$1);
var G__12435 = null;
var G__12436 = (0);
var G__12437 = (0);
seq__12409_12417 = G__12434;
chunk__12410_12418 = G__12435;
count__12411_12419 = G__12436;
i__12412_12420 = G__12437;
continue;
}
} else {
}
}
break;
}

var seq__12413_12438 = cljs.core.seq.call(null,children);
var chunk__12414_12439 = null;
var count__12415_12440 = (0);
var i__12416_12441 = (0);
while(true){
if((i__12416_12441 < count__12415_12440)){
var ch_12442 = cljs.core._nth.call(null,chunk__12414_12439,i__12416_12441);
e.appendChild(ch_12442);

var G__12443 = seq__12413_12438;
var G__12444 = chunk__12414_12439;
var G__12445 = count__12415_12440;
var G__12446 = (i__12416_12441 + (1));
seq__12413_12438 = G__12443;
chunk__12414_12439 = G__12444;
count__12415_12440 = G__12445;
i__12416_12441 = G__12446;
continue;
} else {
var temp__4423__auto___12447 = cljs.core.seq.call(null,seq__12413_12438);
if(temp__4423__auto___12447){
var seq__12413_12448__$1 = temp__4423__auto___12447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12413_12448__$1)){
var c__5316__auto___12449 = cljs.core.chunk_first.call(null,seq__12413_12448__$1);
var G__12450 = cljs.core.chunk_rest.call(null,seq__12413_12448__$1);
var G__12451 = c__5316__auto___12449;
var G__12452 = cljs.core.count.call(null,c__5316__auto___12449);
var G__12453 = (0);
seq__12413_12438 = G__12450;
chunk__12414_12439 = G__12451;
count__12415_12440 = G__12452;
i__12416_12441 = G__12453;
continue;
} else {
var ch_12454 = cljs.core.first.call(null,seq__12413_12448__$1);
e.appendChild(ch_12454);

var G__12455 = cljs.core.next.call(null,seq__12413_12448__$1);
var G__12456 = null;
var G__12457 = (0);
var G__12458 = (0);
seq__12413_12438 = G__12455;
chunk__12414_12439 = G__12456;
count__12415_12440 = G__12457;
i__12416_12441 = G__12458;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq12406){
var G__12407 = cljs.core.first.call(null,seq12406);
var seq12406__$1 = cljs.core.next.call(null,seq12406);
var G__12408 = cljs.core.first.call(null,seq12406__$1);
var seq12406__$2 = cljs.core.next.call(null,seq12406__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__12407,G__12408,seq12406__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5426__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5427__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5428__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5430__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__5426__auto__,prefer_table__5427__auto__,method_cache__5428__auto__,cached_hierarchy__5429__auto__,hierarchy__5430__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__5426__auto__,prefer_table__5427__auto__,method_cache__5428__auto__,cached_hierarchy__5429__auto__,hierarchy__5430__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5430__auto__,method_table__5426__auto__,prefer_table__5427__auto__,method_cache__5428__auto__,cached_hierarchy__5429__auto__));
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
var el_12459 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_12459.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_12459.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_12459.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_12459);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__12460,st_map){
var map__12464 = p__12460;
var map__12464__$1 = ((cljs.core.seq_QMARK_.call(null,map__12464))?cljs.core.apply.call(null,cljs.core.hash_map,map__12464):map__12464);
var container_el = cljs.core.get.call(null,map__12464__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__12464,map__12464__$1,container_el){
return (function (p__12465){
var vec__12466 = p__12465;
var k = cljs.core.nth.call(null,vec__12466,(0),null);
var v = cljs.core.nth.call(null,vec__12466,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__12464,map__12464__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__12467,dom_str){
var map__12469 = p__12467;
var map__12469__$1 = ((cljs.core.seq_QMARK_.call(null,map__12469))?cljs.core.apply.call(null,cljs.core.hash_map,map__12469):map__12469);
var c = map__12469__$1;
var content_area_el = cljs.core.get.call(null,map__12469__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__12470){
var map__12472 = p__12470;
var map__12472__$1 = ((cljs.core.seq_QMARK_.call(null,map__12472))?cljs.core.apply.call(null,cljs.core.hash_map,map__12472):map__12472);
var content_area_el = cljs.core.get.call(null,map__12472__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__7136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto__){
return (function (state_12514){
var state_val_12515 = (state_12514[(1)]);
if((state_val_12515 === (1))){
var inst_12499 = (state_12514[(7)]);
var inst_12499__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_12500 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_12501 = ["10px","10px","100%","68px","1.0"];
var inst_12502 = cljs.core.PersistentHashMap.fromArrays(inst_12500,inst_12501);
var inst_12503 = cljs.core.merge.call(null,inst_12502,style);
var inst_12504 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12499__$1,inst_12503);
var inst_12505 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_12499__$1,msg);
var inst_12506 = cljs.core.async.timeout.call(null,(300));
var state_12514__$1 = (function (){var statearr_12516 = state_12514;
(statearr_12516[(8)] = inst_12505);

(statearr_12516[(7)] = inst_12499__$1);

(statearr_12516[(9)] = inst_12504);

return statearr_12516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12514__$1,(2),inst_12506);
} else {
if((state_val_12515 === (2))){
var inst_12499 = (state_12514[(7)]);
var inst_12508 = (state_12514[(2)]);
var inst_12509 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_12510 = ["auto"];
var inst_12511 = cljs.core.PersistentHashMap.fromArrays(inst_12509,inst_12510);
var inst_12512 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12499,inst_12511);
var state_12514__$1 = (function (){var statearr_12517 = state_12514;
(statearr_12517[(10)] = inst_12508);

return statearr_12517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12514__$1,inst_12512);
} else {
return null;
}
}
});})(c__7136__auto__))
;
return ((function (switch__7074__auto__,c__7136__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__7075__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__7075__auto____0 = (function (){
var statearr_12521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12521[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__7075__auto__);

(statearr_12521[(1)] = (1));

return statearr_12521;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__7075__auto____1 = (function (state_12514){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_12514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e12522){if((e12522 instanceof Object)){
var ex__7078__auto__ = e12522;
var statearr_12523_12525 = state_12514;
(statearr_12523_12525[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12526 = state_12514;
state_12514 = G__12526;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__7075__auto__ = function(state_12514){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7075__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7075__auto____1.call(this,state_12514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__7075__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__7075__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto__))
})();
var state__7138__auto__ = (function (){var statearr_12524 = f__7137__auto__.call(null);
(statearr_12524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);

return statearr_12524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__))
);

return c__7136__auto__;
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
var vec__12528 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__12528,(0),null);
var ln = cljs.core.nth.call(null,vec__12528,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__12531 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__12531,(0),null);
var file_line = cljs.core.nth.call(null,vec__12531,(1),null);
var file_column = cljs.core.nth.call(null,vec__12531,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__12531,file_name,file_line,file_column){
return (function (p1__12529_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__12529_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__12531,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__4531__auto__ = file_line;
if(cljs.core.truth_(or__4531__auto__)){
return or__4531__auto__;
} else {
var and__4519__auto__ = cause;
if(cljs.core.truth_(and__4519__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__4519__auto__;
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
var map__12533 = figwheel.client.heads_up.ensure_container.call(null);
var map__12533__$1 = ((cljs.core.seq_QMARK_.call(null,map__12533))?cljs.core.apply.call(null,cljs.core.hash_map,map__12533):map__12533);
var content_area_el = cljs.core.get.call(null,map__12533__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__7136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto__){
return (function (state_12580){
var state_val_12581 = (state_12580[(1)]);
if((state_val_12581 === (1))){
var inst_12563 = (state_12580[(7)]);
var inst_12563__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_12564 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_12565 = ["0.0"];
var inst_12566 = cljs.core.PersistentHashMap.fromArrays(inst_12564,inst_12565);
var inst_12567 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12563__$1,inst_12566);
var inst_12568 = cljs.core.async.timeout.call(null,(300));
var state_12580__$1 = (function (){var statearr_12582 = state_12580;
(statearr_12582[(8)] = inst_12567);

(statearr_12582[(7)] = inst_12563__$1);

return statearr_12582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12580__$1,(2),inst_12568);
} else {
if((state_val_12581 === (2))){
var inst_12563 = (state_12580[(7)]);
var inst_12570 = (state_12580[(2)]);
var inst_12571 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_12572 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_12573 = cljs.core.PersistentHashMap.fromArrays(inst_12571,inst_12572);
var inst_12574 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12563,inst_12573);
var inst_12575 = cljs.core.async.timeout.call(null,(200));
var state_12580__$1 = (function (){var statearr_12583 = state_12580;
(statearr_12583[(9)] = inst_12574);

(statearr_12583[(10)] = inst_12570);

return statearr_12583;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12580__$1,(3),inst_12575);
} else {
if((state_val_12581 === (3))){
var inst_12563 = (state_12580[(7)]);
var inst_12577 = (state_12580[(2)]);
var inst_12578 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_12563,"");
var state_12580__$1 = (function (){var statearr_12584 = state_12580;
(statearr_12584[(11)] = inst_12577);

return statearr_12584;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12580__$1,inst_12578);
} else {
return null;
}
}
}
});})(c__7136__auto__))
;
return ((function (switch__7074__auto__,c__7136__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__7075__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__7075__auto____0 = (function (){
var statearr_12588 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12588[(0)] = figwheel$client$heads_up$clear_$_state_machine__7075__auto__);

(statearr_12588[(1)] = (1));

return statearr_12588;
});
var figwheel$client$heads_up$clear_$_state_machine__7075__auto____1 = (function (state_12580){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_12580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e12589){if((e12589 instanceof Object)){
var ex__7078__auto__ = e12589;
var statearr_12590_12592 = state_12580;
(statearr_12590_12592[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12593 = state_12580;
state_12580 = G__12593;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__7075__auto__ = function(state_12580){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__7075__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__7075__auto____1.call(this,state_12580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__7075__auto____0;
figwheel$client$heads_up$clear_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__7075__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto__))
})();
var state__7138__auto__ = (function (){var statearr_12591 = f__7137__auto__.call(null);
(statearr_12591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);

return statearr_12591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__))
);

return c__7136__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__7136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto__){
return (function (state_12625){
var state_val_12626 = (state_12625[(1)]);
if((state_val_12626 === (1))){
var inst_12615 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_12625__$1 = state_12625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12625__$1,(2),inst_12615);
} else {
if((state_val_12626 === (2))){
var inst_12617 = (state_12625[(2)]);
var inst_12618 = cljs.core.async.timeout.call(null,(400));
var state_12625__$1 = (function (){var statearr_12627 = state_12625;
(statearr_12627[(7)] = inst_12617);

return statearr_12627;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12625__$1,(3),inst_12618);
} else {
if((state_val_12626 === (3))){
var inst_12620 = (state_12625[(2)]);
var inst_12621 = figwheel.client.heads_up.clear.call(null);
var state_12625__$1 = (function (){var statearr_12628 = state_12625;
(statearr_12628[(8)] = inst_12620);

return statearr_12628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12625__$1,(4),inst_12621);
} else {
if((state_val_12626 === (4))){
var inst_12623 = (state_12625[(2)]);
var state_12625__$1 = state_12625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12625__$1,inst_12623);
} else {
return null;
}
}
}
}
});})(c__7136__auto__))
;
return ((function (switch__7074__auto__,c__7136__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__7075__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__7075__auto____0 = (function (){
var statearr_12632 = [null,null,null,null,null,null,null,null,null];
(statearr_12632[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__7075__auto__);

(statearr_12632[(1)] = (1));

return statearr_12632;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__7075__auto____1 = (function (state_12625){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_12625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e12633){if((e12633 instanceof Object)){
var ex__7078__auto__ = e12633;
var statearr_12634_12636 = state_12625;
(statearr_12634_12636[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12637 = state_12625;
state_12625 = G__12637;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__7075__auto__ = function(state_12625){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7075__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7075__auto____1.call(this,state_12625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__7075__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__7075__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto__))
})();
var state__7138__auto__ = (function (){var statearr_12635 = f__7137__auto__.call(null);
(statearr_12635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);

return statearr_12635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__))
);

return c__7136__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1433591624297