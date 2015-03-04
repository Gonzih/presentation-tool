// Compiled by ClojureScript 0.0-2760 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__18317_18325 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__18318_18326 = null;
var count__18319_18327 = (0);
var i__18320_18328 = (0);
while(true){
if((i__18320_18328 < count__18319_18327)){
var k_18329 = cljs.core._nth.call(null,chunk__18318_18326,i__18320_18328);
e.setAttribute(cljs.core.name.call(null,k_18329),cljs.core.get.call(null,attrs,k_18329));

var G__18330 = seq__18317_18325;
var G__18331 = chunk__18318_18326;
var G__18332 = count__18319_18327;
var G__18333 = (i__18320_18328 + (1));
seq__18317_18325 = G__18330;
chunk__18318_18326 = G__18331;
count__18319_18327 = G__18332;
i__18320_18328 = G__18333;
continue;
} else {
var temp__4126__auto___18334 = cljs.core.seq.call(null,seq__18317_18325);
if(temp__4126__auto___18334){
var seq__18317_18335__$1 = temp__4126__auto___18334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18317_18335__$1)){
var c__4788__auto___18336 = cljs.core.chunk_first.call(null,seq__18317_18335__$1);
var G__18337 = cljs.core.chunk_rest.call(null,seq__18317_18335__$1);
var G__18338 = c__4788__auto___18336;
var G__18339 = cljs.core.count.call(null,c__4788__auto___18336);
var G__18340 = (0);
seq__18317_18325 = G__18337;
chunk__18318_18326 = G__18338;
count__18319_18327 = G__18339;
i__18320_18328 = G__18340;
continue;
} else {
var k_18341 = cljs.core.first.call(null,seq__18317_18335__$1);
e.setAttribute(cljs.core.name.call(null,k_18341),cljs.core.get.call(null,attrs,k_18341));

var G__18342 = cljs.core.next.call(null,seq__18317_18335__$1);
var G__18343 = null;
var G__18344 = (0);
var G__18345 = (0);
seq__18317_18325 = G__18342;
chunk__18318_18326 = G__18343;
count__18319_18327 = G__18344;
i__18320_18328 = G__18345;
continue;
}
} else {
}
}
break;
}

var seq__18321_18346 = cljs.core.seq.call(null,children);
var chunk__18322_18347 = null;
var count__18323_18348 = (0);
var i__18324_18349 = (0);
while(true){
if((i__18324_18349 < count__18323_18348)){
var ch_18350 = cljs.core._nth.call(null,chunk__18322_18347,i__18324_18349);
e.appendChild(ch_18350);

var G__18351 = seq__18321_18346;
var G__18352 = chunk__18322_18347;
var G__18353 = count__18323_18348;
var G__18354 = (i__18324_18349 + (1));
seq__18321_18346 = G__18351;
chunk__18322_18347 = G__18352;
count__18323_18348 = G__18353;
i__18324_18349 = G__18354;
continue;
} else {
var temp__4126__auto___18355 = cljs.core.seq.call(null,seq__18321_18346);
if(temp__4126__auto___18355){
var seq__18321_18356__$1 = temp__4126__auto___18355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18321_18356__$1)){
var c__4788__auto___18357 = cljs.core.chunk_first.call(null,seq__18321_18356__$1);
var G__18358 = cljs.core.chunk_rest.call(null,seq__18321_18356__$1);
var G__18359 = c__4788__auto___18357;
var G__18360 = cljs.core.count.call(null,c__4788__auto___18357);
var G__18361 = (0);
seq__18321_18346 = G__18358;
chunk__18322_18347 = G__18359;
count__18323_18348 = G__18360;
i__18324_18349 = G__18361;
continue;
} else {
var ch_18362 = cljs.core.first.call(null,seq__18321_18356__$1);
e.appendChild(ch_18362);

var G__18363 = cljs.core.next.call(null,seq__18321_18356__$1);
var G__18364 = null;
var G__18365 = (0);
var G__18366 = (0);
seq__18321_18346 = G__18363;
chunk__18322_18347 = G__18364;
count__18323_18348 = G__18365;
i__18324_18349 = G__18366;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__18367__i = 0, G__18367__a = new Array(arguments.length -  2);
while (G__18367__i < G__18367__a.length) {G__18367__a[G__18367__i] = arguments[G__18367__i + 2]; ++G__18367__i;}
  children = new cljs.core.IndexedSeq(G__18367__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__18368){
var t = cljs.core.first(arglist__18368);
arglist__18368 = cljs.core.next(arglist__18368);
var attrs = cljs.core.first(arglist__18368);
var children = cljs.core.rest(arglist__18368);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4898__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4899__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4900__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4901__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4902__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4898__auto__,prefer_table__4899__auto__,method_cache__4900__auto__,cached_hierarchy__4901__auto__,hierarchy__4902__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4898__auto__,prefer_table__4899__auto__,method_cache__4900__auto__,cached_hierarchy__4901__auto__,hierarchy__4902__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4902__auto__,method_table__4898__auto__,prefer_table__4899__auto__,method_cache__4900__auto__,cached_hierarchy__4901__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__18369,st_map){
var map__18373 = p__18369;
var map__18373__$1 = ((cljs.core.seq_QMARK_.call(null,map__18373))?cljs.core.apply.call(null,cljs.core.hash_map,map__18373):map__18373);
var container_el = cljs.core.get.call(null,map__18373__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__18373,map__18373__$1,container_el){
return (function (p__18374){
var vec__18375 = p__18374;
var k = cljs.core.nth.call(null,vec__18375,(0),null);
var v = cljs.core.nth.call(null,vec__18375,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__18373,map__18373__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__18376,dom_str){
var map__18378 = p__18376;
var map__18378__$1 = ((cljs.core.seq_QMARK_.call(null,map__18378))?cljs.core.apply.call(null,cljs.core.hash_map,map__18378):map__18378);
var c = map__18378__$1;
var content_area_el = cljs.core.get.call(null,map__18378__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__18379){
var map__18381 = p__18379;
var map__18381__$1 = ((cljs.core.seq_QMARK_.call(null,map__18381))?cljs.core.apply.call(null,cljs.core.hash_map,map__18381):map__18381);
var content_area_el = cljs.core.get.call(null,map__18381__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__6999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto__){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto__){
return (function (state_18423){
var state_val_18424 = (state_18423[(1)]);
if((state_val_18424 === (2))){
var inst_18408 = (state_18423[(7)]);
var inst_18417 = (state_18423[(2)]);
var inst_18418 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_18419 = ["auto"];
var inst_18420 = cljs.core.PersistentHashMap.fromArrays(inst_18418,inst_18419);
var inst_18421 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_18408,inst_18420);
var state_18423__$1 = (function (){var statearr_18425 = state_18423;
(statearr_18425[(8)] = inst_18417);

return statearr_18425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18423__$1,inst_18421);
} else {
if((state_val_18424 === (1))){
var inst_18408 = (state_18423[(7)]);
var inst_18408__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_18409 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_18410 = ["10px","10px","100%","68px","1.0"];
var inst_18411 = cljs.core.PersistentHashMap.fromArrays(inst_18409,inst_18410);
var inst_18412 = cljs.core.merge.call(null,inst_18411,style);
var inst_18413 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_18408__$1,inst_18412);
var inst_18414 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_18408__$1,msg);
var inst_18415 = cljs.core.async.timeout.call(null,(300));
var state_18423__$1 = (function (){var statearr_18426 = state_18423;
(statearr_18426[(7)] = inst_18408__$1);

(statearr_18426[(9)] = inst_18414);

(statearr_18426[(10)] = inst_18413);

return statearr_18426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18423__$1,(2),inst_18415);
} else {
return null;
}
}
});})(c__6999__auto__))
;
return ((function (switch__6943__auto__,c__6999__auto__){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_18430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18430[(0)] = state_machine__6944__auto__);

(statearr_18430[(1)] = (1));

return statearr_18430;
});
var state_machine__6944__auto____1 = (function (state_18423){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_18423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e18431){if((e18431 instanceof Object)){
var ex__6947__auto__ = e18431;
var statearr_18432_18434 = state_18423;
(statearr_18432_18434[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18435 = state_18423;
state_18423 = G__18435;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_18423){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_18423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto__))
})();
var state__7001__auto__ = (function (){var statearr_18433 = f__7000__auto__.call(null);
(statearr_18433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto__);

return statearr_18433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto__))
);

return c__6999__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__18437 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__18437,(0),null);
var ln = cljs.core.nth.call(null,vec__18437,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__18440 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__18440,(0),null);
var file_line = cljs.core.nth.call(null,vec__18440,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__18440,file_name,file_line){
return (function (p1__18438_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__18438_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__18440,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__18442 = figwheel.client.heads_up.ensure_container.call(null);
var map__18442__$1 = ((cljs.core.seq_QMARK_.call(null,map__18442))?cljs.core.apply.call(null,cljs.core.hash_map,map__18442):map__18442);
var content_area_el = cljs.core.get.call(null,map__18442__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__6999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto__){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto__){
return (function (state_18489){
var state_val_18490 = (state_18489[(1)]);
if((state_val_18490 === (3))){
var inst_18472 = (state_18489[(7)]);
var inst_18486 = (state_18489[(2)]);
var inst_18487 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_18472,"");
var state_18489__$1 = (function (){var statearr_18491 = state_18489;
(statearr_18491[(8)] = inst_18486);

return statearr_18491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18489__$1,inst_18487);
} else {
if((state_val_18490 === (2))){
var inst_18472 = (state_18489[(7)]);
var inst_18479 = (state_18489[(2)]);
var inst_18480 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_18481 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_18482 = cljs.core.PersistentHashMap.fromArrays(inst_18480,inst_18481);
var inst_18483 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_18472,inst_18482);
var inst_18484 = cljs.core.async.timeout.call(null,(200));
var state_18489__$1 = (function (){var statearr_18492 = state_18489;
(statearr_18492[(9)] = inst_18483);

(statearr_18492[(10)] = inst_18479);

return statearr_18492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18489__$1,(3),inst_18484);
} else {
if((state_val_18490 === (1))){
var inst_18472 = (state_18489[(7)]);
var inst_18472__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_18473 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_18474 = ["0.0"];
var inst_18475 = cljs.core.PersistentHashMap.fromArrays(inst_18473,inst_18474);
var inst_18476 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_18472__$1,inst_18475);
var inst_18477 = cljs.core.async.timeout.call(null,(300));
var state_18489__$1 = (function (){var statearr_18493 = state_18489;
(statearr_18493[(7)] = inst_18472__$1);

(statearr_18493[(11)] = inst_18476);

return statearr_18493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18489__$1,(2),inst_18477);
} else {
return null;
}
}
}
});})(c__6999__auto__))
;
return ((function (switch__6943__auto__,c__6999__auto__){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_18497 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18497[(0)] = state_machine__6944__auto__);

(statearr_18497[(1)] = (1));

return statearr_18497;
});
var state_machine__6944__auto____1 = (function (state_18489){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_18489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e18498){if((e18498 instanceof Object)){
var ex__6947__auto__ = e18498;
var statearr_18499_18501 = state_18489;
(statearr_18499_18501[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18502 = state_18489;
state_18489 = G__18502;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_18489){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_18489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto__))
})();
var state__7001__auto__ = (function (){var statearr_18500 = f__7000__auto__.call(null);
(statearr_18500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto__);

return statearr_18500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto__))
);

return c__6999__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__6999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto__){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto__){
return (function (state_18534){
var state_val_18535 = (state_18534[(1)]);
if((state_val_18535 === (4))){
var inst_18532 = (state_18534[(2)]);
var state_18534__$1 = state_18534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18534__$1,inst_18532);
} else {
if((state_val_18535 === (3))){
var inst_18529 = (state_18534[(2)]);
var inst_18530 = figwheel.client.heads_up.clear.call(null);
var state_18534__$1 = (function (){var statearr_18536 = state_18534;
(statearr_18536[(7)] = inst_18529);

return statearr_18536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18534__$1,(4),inst_18530);
} else {
if((state_val_18535 === (2))){
var inst_18526 = (state_18534[(2)]);
var inst_18527 = cljs.core.async.timeout.call(null,(400));
var state_18534__$1 = (function (){var statearr_18537 = state_18534;
(statearr_18537[(8)] = inst_18526);

return statearr_18537;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18534__$1,(3),inst_18527);
} else {
if((state_val_18535 === (1))){
var inst_18524 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_18534__$1 = state_18534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18534__$1,(2),inst_18524);
} else {
return null;
}
}
}
}
});})(c__6999__auto__))
;
return ((function (switch__6943__auto__,c__6999__auto__){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_18541 = [null,null,null,null,null,null,null,null,null];
(statearr_18541[(0)] = state_machine__6944__auto__);

(statearr_18541[(1)] = (1));

return statearr_18541;
});
var state_machine__6944__auto____1 = (function (state_18534){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_18534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e18542){if((e18542 instanceof Object)){
var ex__6947__auto__ = e18542;
var statearr_18543_18545 = state_18534;
(statearr_18543_18545[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18546 = state_18534;
state_18534 = G__18546;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_18534){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_18534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto__))
})();
var state__7001__auto__ = (function (){var statearr_18544 = f__7000__auto__.call(null);
(statearr_18544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto__);

return statearr_18544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto__))
);

return c__6999__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1425480882012