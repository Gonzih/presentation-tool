// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__5578__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5578__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__12419_12427 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__12420_12428 = null;
var count__12421_12429 = (0);
var i__12422_12430 = (0);
while(true){
if((i__12422_12430 < count__12421_12429)){
var k_12431 = cljs.core._nth.call(null,chunk__12420_12428,i__12422_12430);
e.setAttribute(cljs.core.name.call(null,k_12431),cljs.core.get.call(null,attrs,k_12431));

var G__12432 = seq__12419_12427;
var G__12433 = chunk__12420_12428;
var G__12434 = count__12421_12429;
var G__12435 = (i__12422_12430 + (1));
seq__12419_12427 = G__12432;
chunk__12420_12428 = G__12433;
count__12421_12429 = G__12434;
i__12422_12430 = G__12435;
continue;
} else {
var temp__4423__auto___12436 = cljs.core.seq.call(null,seq__12419_12427);
if(temp__4423__auto___12436){
var seq__12419_12437__$1 = temp__4423__auto___12436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12419_12437__$1)){
var c__5323__auto___12438 = cljs.core.chunk_first.call(null,seq__12419_12437__$1);
var G__12439 = cljs.core.chunk_rest.call(null,seq__12419_12437__$1);
var G__12440 = c__5323__auto___12438;
var G__12441 = cljs.core.count.call(null,c__5323__auto___12438);
var G__12442 = (0);
seq__12419_12427 = G__12439;
chunk__12420_12428 = G__12440;
count__12421_12429 = G__12441;
i__12422_12430 = G__12442;
continue;
} else {
var k_12443 = cljs.core.first.call(null,seq__12419_12437__$1);
e.setAttribute(cljs.core.name.call(null,k_12443),cljs.core.get.call(null,attrs,k_12443));

var G__12444 = cljs.core.next.call(null,seq__12419_12437__$1);
var G__12445 = null;
var G__12446 = (0);
var G__12447 = (0);
seq__12419_12427 = G__12444;
chunk__12420_12428 = G__12445;
count__12421_12429 = G__12446;
i__12422_12430 = G__12447;
continue;
}
} else {
}
}
break;
}

var seq__12423_12448 = cljs.core.seq.call(null,children);
var chunk__12424_12449 = null;
var count__12425_12450 = (0);
var i__12426_12451 = (0);
while(true){
if((i__12426_12451 < count__12425_12450)){
var ch_12452 = cljs.core._nth.call(null,chunk__12424_12449,i__12426_12451);
e.appendChild(ch_12452);

var G__12453 = seq__12423_12448;
var G__12454 = chunk__12424_12449;
var G__12455 = count__12425_12450;
var G__12456 = (i__12426_12451 + (1));
seq__12423_12448 = G__12453;
chunk__12424_12449 = G__12454;
count__12425_12450 = G__12455;
i__12426_12451 = G__12456;
continue;
} else {
var temp__4423__auto___12457 = cljs.core.seq.call(null,seq__12423_12448);
if(temp__4423__auto___12457){
var seq__12423_12458__$1 = temp__4423__auto___12457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12423_12458__$1)){
var c__5323__auto___12459 = cljs.core.chunk_first.call(null,seq__12423_12458__$1);
var G__12460 = cljs.core.chunk_rest.call(null,seq__12423_12458__$1);
var G__12461 = c__5323__auto___12459;
var G__12462 = cljs.core.count.call(null,c__5323__auto___12459);
var G__12463 = (0);
seq__12423_12448 = G__12460;
chunk__12424_12449 = G__12461;
count__12425_12450 = G__12462;
i__12426_12451 = G__12463;
continue;
} else {
var ch_12464 = cljs.core.first.call(null,seq__12423_12458__$1);
e.appendChild(ch_12464);

var G__12465 = cljs.core.next.call(null,seq__12423_12458__$1);
var G__12466 = null;
var G__12467 = (0);
var G__12468 = (0);
seq__12423_12448 = G__12465;
chunk__12424_12449 = G__12466;
count__12425_12450 = G__12467;
i__12426_12451 = G__12468;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq12416){
var G__12417 = cljs.core.first.call(null,seq12416);
var seq12416__$1 = cljs.core.next.call(null,seq12416);
var G__12418 = cljs.core.first.call(null,seq12416__$1);
var seq12416__$2 = cljs.core.next.call(null,seq12416__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__12417,G__12418,seq12416__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5433__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5434__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5435__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5436__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5437__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__5433__auto__,prefer_table__5434__auto__,method_cache__5435__auto__,cached_hierarchy__5436__auto__,hierarchy__5437__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__5433__auto__,prefer_table__5434__auto__,method_cache__5435__auto__,cached_hierarchy__5436__auto__,hierarchy__5437__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5437__auto__,method_table__5433__auto__,prefer_table__5434__auto__,method_cache__5435__auto__,cached_hierarchy__5436__auto__));
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
var el_12469 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_12469.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_12469.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_12469.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_12469);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__12470,st_map){
var map__12474 = p__12470;
var map__12474__$1 = ((cljs.core.seq_QMARK_.call(null,map__12474))?cljs.core.apply.call(null,cljs.core.hash_map,map__12474):map__12474);
var container_el = cljs.core.get.call(null,map__12474__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__12474,map__12474__$1,container_el){
return (function (p__12475){
var vec__12476 = p__12475;
var k = cljs.core.nth.call(null,vec__12476,(0),null);
var v = cljs.core.nth.call(null,vec__12476,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__12474,map__12474__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__12477,dom_str){
var map__12479 = p__12477;
var map__12479__$1 = ((cljs.core.seq_QMARK_.call(null,map__12479))?cljs.core.apply.call(null,cljs.core.hash_map,map__12479):map__12479);
var c = map__12479__$1;
var content_area_el = cljs.core.get.call(null,map__12479__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__12480){
var map__12482 = p__12480;
var map__12482__$1 = ((cljs.core.seq_QMARK_.call(null,map__12482))?cljs.core.apply.call(null,cljs.core.hash_map,map__12482):map__12482);
var content_area_el = cljs.core.get.call(null,map__12482__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__7146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto__){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto__){
return (function (state_12524){
var state_val_12525 = (state_12524[(1)]);
if((state_val_12525 === (1))){
var inst_12509 = (state_12524[(7)]);
var inst_12509__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_12510 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_12511 = ["10px","10px","100%","68px","1.0"];
var inst_12512 = cljs.core.PersistentHashMap.fromArrays(inst_12510,inst_12511);
var inst_12513 = cljs.core.merge.call(null,inst_12512,style);
var inst_12514 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12509__$1,inst_12513);
var inst_12515 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_12509__$1,msg);
var inst_12516 = cljs.core.async.timeout.call(null,(300));
var state_12524__$1 = (function (){var statearr_12526 = state_12524;
(statearr_12526[(8)] = inst_12514);

(statearr_12526[(9)] = inst_12515);

(statearr_12526[(7)] = inst_12509__$1);

return statearr_12526;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12524__$1,(2),inst_12516);
} else {
if((state_val_12525 === (2))){
var inst_12509 = (state_12524[(7)]);
var inst_12518 = (state_12524[(2)]);
var inst_12519 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_12520 = ["auto"];
var inst_12521 = cljs.core.PersistentHashMap.fromArrays(inst_12519,inst_12520);
var inst_12522 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12509,inst_12521);
var state_12524__$1 = (function (){var statearr_12527 = state_12524;
(statearr_12527[(10)] = inst_12518);

return statearr_12527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12524__$1,inst_12522);
} else {
return null;
}
}
});})(c__7146__auto__))
;
return ((function (switch__7084__auto__,c__7146__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__7085__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__7085__auto____0 = (function (){
var statearr_12531 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12531[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__7085__auto__);

(statearr_12531[(1)] = (1));

return statearr_12531;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__7085__auto____1 = (function (state_12524){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_12524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e12532){if((e12532 instanceof Object)){
var ex__7088__auto__ = e12532;
var statearr_12533_12535 = state_12524;
(statearr_12533_12535[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12536 = state_12524;
state_12524 = G__12536;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__7085__auto__ = function(state_12524){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7085__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7085__auto____1.call(this,state_12524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__7085__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__7085__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto__))
})();
var state__7148__auto__ = (function (){var statearr_12534 = f__7147__auto__.call(null);
(statearr_12534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto__);

return statearr_12534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto__))
);

return c__7146__auto__;
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
var vec__12538 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__12538,(0),null);
var ln = cljs.core.nth.call(null,vec__12538,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__12541 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__12541,(0),null);
var file_line = cljs.core.nth.call(null,vec__12541,(1),null);
var file_column = cljs.core.nth.call(null,vec__12541,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__12541,file_name,file_line,file_column){
return (function (p1__12539_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__12539_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__12541,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__4538__auto__ = file_line;
if(cljs.core.truth_(or__4538__auto__)){
return or__4538__auto__;
} else {
var and__4526__auto__ = cause;
if(cljs.core.truth_(and__4526__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__4526__auto__;
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
var map__12543 = figwheel.client.heads_up.ensure_container.call(null);
var map__12543__$1 = ((cljs.core.seq_QMARK_.call(null,map__12543))?cljs.core.apply.call(null,cljs.core.hash_map,map__12543):map__12543);
var content_area_el = cljs.core.get.call(null,map__12543__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__7146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto__){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto__){
return (function (state_12590){
var state_val_12591 = (state_12590[(1)]);
if((state_val_12591 === (1))){
var inst_12573 = (state_12590[(7)]);
var inst_12573__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_12574 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_12575 = ["0.0"];
var inst_12576 = cljs.core.PersistentHashMap.fromArrays(inst_12574,inst_12575);
var inst_12577 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12573__$1,inst_12576);
var inst_12578 = cljs.core.async.timeout.call(null,(300));
var state_12590__$1 = (function (){var statearr_12592 = state_12590;
(statearr_12592[(7)] = inst_12573__$1);

(statearr_12592[(8)] = inst_12577);

return statearr_12592;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12590__$1,(2),inst_12578);
} else {
if((state_val_12591 === (2))){
var inst_12573 = (state_12590[(7)]);
var inst_12580 = (state_12590[(2)]);
var inst_12581 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_12582 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_12583 = cljs.core.PersistentHashMap.fromArrays(inst_12581,inst_12582);
var inst_12584 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12573,inst_12583);
var inst_12585 = cljs.core.async.timeout.call(null,(200));
var state_12590__$1 = (function (){var statearr_12593 = state_12590;
(statearr_12593[(9)] = inst_12584);

(statearr_12593[(10)] = inst_12580);

return statearr_12593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12590__$1,(3),inst_12585);
} else {
if((state_val_12591 === (3))){
var inst_12573 = (state_12590[(7)]);
var inst_12587 = (state_12590[(2)]);
var inst_12588 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_12573,"");
var state_12590__$1 = (function (){var statearr_12594 = state_12590;
(statearr_12594[(11)] = inst_12587);

return statearr_12594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12590__$1,inst_12588);
} else {
return null;
}
}
}
});})(c__7146__auto__))
;
return ((function (switch__7084__auto__,c__7146__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__7085__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__7085__auto____0 = (function (){
var statearr_12598 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12598[(0)] = figwheel$client$heads_up$clear_$_state_machine__7085__auto__);

(statearr_12598[(1)] = (1));

return statearr_12598;
});
var figwheel$client$heads_up$clear_$_state_machine__7085__auto____1 = (function (state_12590){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_12590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e12599){if((e12599 instanceof Object)){
var ex__7088__auto__ = e12599;
var statearr_12600_12602 = state_12590;
(statearr_12600_12602[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12603 = state_12590;
state_12590 = G__12603;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__7085__auto__ = function(state_12590){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__7085__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__7085__auto____1.call(this,state_12590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__7085__auto____0;
figwheel$client$heads_up$clear_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__7085__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto__))
})();
var state__7148__auto__ = (function (){var statearr_12601 = f__7147__auto__.call(null);
(statearr_12601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto__);

return statearr_12601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto__))
);

return c__7146__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__7146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto__){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto__){
return (function (state_12635){
var state_val_12636 = (state_12635[(1)]);
if((state_val_12636 === (1))){
var inst_12625 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_12635__$1 = state_12635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12635__$1,(2),inst_12625);
} else {
if((state_val_12636 === (2))){
var inst_12627 = (state_12635[(2)]);
var inst_12628 = cljs.core.async.timeout.call(null,(400));
var state_12635__$1 = (function (){var statearr_12637 = state_12635;
(statearr_12637[(7)] = inst_12627);

return statearr_12637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12635__$1,(3),inst_12628);
} else {
if((state_val_12636 === (3))){
var inst_12630 = (state_12635[(2)]);
var inst_12631 = figwheel.client.heads_up.clear.call(null);
var state_12635__$1 = (function (){var statearr_12638 = state_12635;
(statearr_12638[(8)] = inst_12630);

return statearr_12638;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12635__$1,(4),inst_12631);
} else {
if((state_val_12636 === (4))){
var inst_12633 = (state_12635[(2)]);
var state_12635__$1 = state_12635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12635__$1,inst_12633);
} else {
return null;
}
}
}
}
});})(c__7146__auto__))
;
return ((function (switch__7084__auto__,c__7146__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__7085__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__7085__auto____0 = (function (){
var statearr_12642 = [null,null,null,null,null,null,null,null,null];
(statearr_12642[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__7085__auto__);

(statearr_12642[(1)] = (1));

return statearr_12642;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__7085__auto____1 = (function (state_12635){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_12635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e12643){if((e12643 instanceof Object)){
var ex__7088__auto__ = e12643;
var statearr_12644_12646 = state_12635;
(statearr_12644_12646[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12647 = state_12635;
state_12635 = G__12647;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__7085__auto__ = function(state_12635){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7085__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7085__auto____1.call(this,state_12635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__7085__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__7085__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto__))
})();
var state__7148__auto__ = (function (){var statearr_12645 = f__7147__auto__.call(null);
(statearr_12645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto__);

return statearr_12645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto__))
);

return c__7146__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1434226597766