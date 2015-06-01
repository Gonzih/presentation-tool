// Compiled by ClojureScript 0.0-3153 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
 * @param {...*} var_args
 */
figwheel.client.heads_up.node = (function() { 
var figwheel$client$heads_up$node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__12680_12688 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__12681_12689 = null;
var count__12682_12690 = (0);
var i__12683_12691 = (0);
while(true){
if((i__12683_12691 < count__12682_12690)){
var k_12692 = cljs.core._nth.call(null,chunk__12681_12689,i__12683_12691);
e.setAttribute(cljs.core.name.call(null,k_12692),cljs.core.get.call(null,attrs,k_12692));

var G__12693 = seq__12680_12688;
var G__12694 = chunk__12681_12689;
var G__12695 = count__12682_12690;
var G__12696 = (i__12683_12691 + (1));
seq__12680_12688 = G__12693;
chunk__12681_12689 = G__12694;
count__12682_12690 = G__12695;
i__12683_12691 = G__12696;
continue;
} else {
var temp__4126__auto___12697 = cljs.core.seq.call(null,seq__12680_12688);
if(temp__4126__auto___12697){
var seq__12680_12698__$1 = temp__4126__auto___12697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12680_12698__$1)){
var c__5101__auto___12699 = cljs.core.chunk_first.call(null,seq__12680_12698__$1);
var G__12700 = cljs.core.chunk_rest.call(null,seq__12680_12698__$1);
var G__12701 = c__5101__auto___12699;
var G__12702 = cljs.core.count.call(null,c__5101__auto___12699);
var G__12703 = (0);
seq__12680_12688 = G__12700;
chunk__12681_12689 = G__12701;
count__12682_12690 = G__12702;
i__12683_12691 = G__12703;
continue;
} else {
var k_12704 = cljs.core.first.call(null,seq__12680_12698__$1);
e.setAttribute(cljs.core.name.call(null,k_12704),cljs.core.get.call(null,attrs,k_12704));

var G__12705 = cljs.core.next.call(null,seq__12680_12698__$1);
var G__12706 = null;
var G__12707 = (0);
var G__12708 = (0);
seq__12680_12688 = G__12705;
chunk__12681_12689 = G__12706;
count__12682_12690 = G__12707;
i__12683_12691 = G__12708;
continue;
}
} else {
}
}
break;
}

var seq__12684_12709 = cljs.core.seq.call(null,children);
var chunk__12685_12710 = null;
var count__12686_12711 = (0);
var i__12687_12712 = (0);
while(true){
if((i__12687_12712 < count__12686_12711)){
var ch_12713 = cljs.core._nth.call(null,chunk__12685_12710,i__12687_12712);
e.appendChild(ch_12713);

var G__12714 = seq__12684_12709;
var G__12715 = chunk__12685_12710;
var G__12716 = count__12686_12711;
var G__12717 = (i__12687_12712 + (1));
seq__12684_12709 = G__12714;
chunk__12685_12710 = G__12715;
count__12686_12711 = G__12716;
i__12687_12712 = G__12717;
continue;
} else {
var temp__4126__auto___12718 = cljs.core.seq.call(null,seq__12684_12709);
if(temp__4126__auto___12718){
var seq__12684_12719__$1 = temp__4126__auto___12718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12684_12719__$1)){
var c__5101__auto___12720 = cljs.core.chunk_first.call(null,seq__12684_12719__$1);
var G__12721 = cljs.core.chunk_rest.call(null,seq__12684_12719__$1);
var G__12722 = c__5101__auto___12720;
var G__12723 = cljs.core.count.call(null,c__5101__auto___12720);
var G__12724 = (0);
seq__12684_12709 = G__12721;
chunk__12685_12710 = G__12722;
count__12686_12711 = G__12723;
i__12687_12712 = G__12724;
continue;
} else {
var ch_12725 = cljs.core.first.call(null,seq__12684_12719__$1);
e.appendChild(ch_12725);

var G__12726 = cljs.core.next.call(null,seq__12684_12719__$1);
var G__12727 = null;
var G__12728 = (0);
var G__12729 = (0);
seq__12684_12709 = G__12726;
chunk__12685_12710 = G__12727;
count__12686_12711 = G__12728;
i__12687_12712 = G__12729;
continue;
}
} else {
}
}
break;
}

return e;
};
var figwheel$client$heads_up$node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__12730__i = 0, G__12730__a = new Array(arguments.length -  2);
while (G__12730__i < G__12730__a.length) {G__12730__a[G__12730__i] = arguments[G__12730__i + 2]; ++G__12730__i;}
  children = new cljs.core.IndexedSeq(G__12730__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__12731){
var t = cljs.core.first(arglist__12731);
arglist__12731 = cljs.core.next(arglist__12731);
var attrs = cljs.core.first(arglist__12731);
var children = cljs.core.rest(arglist__12731);
return figwheel$client$heads_up$node__delegate(t,attrs,children);
});
figwheel$client$heads_up$node.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$heads_up$node__delegate;
return figwheel$client$heads_up$node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5211__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5212__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5213__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5214__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5215__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__5211__auto__,prefer_table__5212__auto__,method_cache__5213__auto__,cached_hierarchy__5214__auto__,hierarchy__5215__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__5211__auto__,prefer_table__5212__auto__,method_cache__5213__auto__,cached_hierarchy__5214__auto__,hierarchy__5215__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5215__auto__,method_table__5211__auto__,prefer_table__5212__auto__,method_cache__5213__auto__,cached_hierarchy__5214__auto__));
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
var el_12732 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_12732.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_12732.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_12732.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_12732);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__12733,st_map){
var map__12737 = p__12733;
var map__12737__$1 = ((cljs.core.seq_QMARK_.call(null,map__12737))?cljs.core.apply.call(null,cljs.core.hash_map,map__12737):map__12737);
var container_el = cljs.core.get.call(null,map__12737__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__12737,map__12737__$1,container_el){
return (function (p__12738){
var vec__12739 = p__12738;
var k = cljs.core.nth.call(null,vec__12739,(0),null);
var v = cljs.core.nth.call(null,vec__12739,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__12737,map__12737__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__12740,dom_str){
var map__12742 = p__12740;
var map__12742__$1 = ((cljs.core.seq_QMARK_.call(null,map__12742))?cljs.core.apply.call(null,cljs.core.hash_map,map__12742):map__12742);
var c = map__12742__$1;
var content_area_el = cljs.core.get.call(null,map__12742__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__12743){
var map__12745 = p__12743;
var map__12745__$1 = ((cljs.core.seq_QMARK_.call(null,map__12745))?cljs.core.apply.call(null,cljs.core.hash_map,map__12745):map__12745);
var content_area_el = cljs.core.get.call(null,map__12745__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__6821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto__){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto__){
return (function (state_12787){
var state_val_12788 = (state_12787[(1)]);
if((state_val_12788 === (2))){
var inst_12772 = (state_12787[(7)]);
var inst_12781 = (state_12787[(2)]);
var inst_12782 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_12783 = ["auto"];
var inst_12784 = cljs.core.PersistentHashMap.fromArrays(inst_12782,inst_12783);
var inst_12785 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12772,inst_12784);
var state_12787__$1 = (function (){var statearr_12789 = state_12787;
(statearr_12789[(8)] = inst_12781);

return statearr_12789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12787__$1,inst_12785);
} else {
if((state_val_12788 === (1))){
var inst_12772 = (state_12787[(7)]);
var inst_12772__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_12773 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_12774 = ["10px","10px","100%","68px","1.0"];
var inst_12775 = cljs.core.PersistentHashMap.fromArrays(inst_12773,inst_12774);
var inst_12776 = cljs.core.merge.call(null,inst_12775,style);
var inst_12777 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12772__$1,inst_12776);
var inst_12778 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_12772__$1,msg);
var inst_12779 = cljs.core.async.timeout.call(null,(300));
var state_12787__$1 = (function (){var statearr_12790 = state_12787;
(statearr_12790[(9)] = inst_12777);

(statearr_12790[(10)] = inst_12778);

(statearr_12790[(7)] = inst_12772__$1);

return statearr_12790;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12787__$1,(2),inst_12779);
} else {
return null;
}
}
});})(c__6821__auto__))
;
return ((function (switch__6765__auto__,c__6821__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__6766__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__6766__auto____0 = (function (){
var statearr_12794 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12794[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__6766__auto__);

(statearr_12794[(1)] = (1));

return statearr_12794;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__6766__auto____1 = (function (state_12787){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_12787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e12795){if((e12795 instanceof Object)){
var ex__6769__auto__ = e12795;
var statearr_12796_12798 = state_12787;
(statearr_12796_12798[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12799 = state_12787;
state_12787 = G__12799;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__6766__auto__ = function(state_12787){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__6766__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__6766__auto____1.call(this,state_12787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__6766__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__6766__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto__))
})();
var state__6823__auto__ = (function (){var statearr_12797 = f__6822__auto__.call(null);
(statearr_12797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto__);

return statearr_12797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto__))
);

return c__6821__auto__;
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
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__12801 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__12801,(0),null);
var ln = cljs.core.nth.call(null,vec__12801,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__12804 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__12804,(0),null);
var file_line = cljs.core.nth.call(null,vec__12804,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__12804,file_name,file_line){
return (function (p1__12802_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__12802_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__12804,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__12806 = figwheel.client.heads_up.ensure_container.call(null);
var map__12806__$1 = ((cljs.core.seq_QMARK_.call(null,map__12806))?cljs.core.apply.call(null,cljs.core.hash_map,map__12806):map__12806);
var content_area_el = cljs.core.get.call(null,map__12806__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__6821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto__){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto__){
return (function (state_12853){
var state_val_12854 = (state_12853[(1)]);
if((state_val_12854 === (3))){
var inst_12836 = (state_12853[(7)]);
var inst_12850 = (state_12853[(2)]);
var inst_12851 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_12836,"");
var state_12853__$1 = (function (){var statearr_12855 = state_12853;
(statearr_12855[(8)] = inst_12850);

return statearr_12855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12853__$1,inst_12851);
} else {
if((state_val_12854 === (2))){
var inst_12836 = (state_12853[(7)]);
var inst_12843 = (state_12853[(2)]);
var inst_12844 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_12845 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_12846 = cljs.core.PersistentHashMap.fromArrays(inst_12844,inst_12845);
var inst_12847 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12836,inst_12846);
var inst_12848 = cljs.core.async.timeout.call(null,(200));
var state_12853__$1 = (function (){var statearr_12856 = state_12853;
(statearr_12856[(9)] = inst_12847);

(statearr_12856[(10)] = inst_12843);

return statearr_12856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12853__$1,(3),inst_12848);
} else {
if((state_val_12854 === (1))){
var inst_12836 = (state_12853[(7)]);
var inst_12836__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_12837 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_12838 = ["0.0"];
var inst_12839 = cljs.core.PersistentHashMap.fromArrays(inst_12837,inst_12838);
var inst_12840 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12836__$1,inst_12839);
var inst_12841 = cljs.core.async.timeout.call(null,(300));
var state_12853__$1 = (function (){var statearr_12857 = state_12853;
(statearr_12857[(7)] = inst_12836__$1);

(statearr_12857[(11)] = inst_12840);

return statearr_12857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12853__$1,(2),inst_12841);
} else {
return null;
}
}
}
});})(c__6821__auto__))
;
return ((function (switch__6765__auto__,c__6821__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__6766__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__6766__auto____0 = (function (){
var statearr_12861 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12861[(0)] = figwheel$client$heads_up$clear_$_state_machine__6766__auto__);

(statearr_12861[(1)] = (1));

return statearr_12861;
});
var figwheel$client$heads_up$clear_$_state_machine__6766__auto____1 = (function (state_12853){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_12853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e12862){if((e12862 instanceof Object)){
var ex__6769__auto__ = e12862;
var statearr_12863_12865 = state_12853;
(statearr_12863_12865[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12866 = state_12853;
state_12853 = G__12866;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__6766__auto__ = function(state_12853){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__6766__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__6766__auto____1.call(this,state_12853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__6766__auto____0;
figwheel$client$heads_up$clear_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__6766__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto__))
})();
var state__6823__auto__ = (function (){var statearr_12864 = f__6822__auto__.call(null);
(statearr_12864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto__);

return statearr_12864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto__))
);

return c__6821__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__6821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto__){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto__){
return (function (state_12898){
var state_val_12899 = (state_12898[(1)]);
if((state_val_12899 === (4))){
var inst_12896 = (state_12898[(2)]);
var state_12898__$1 = state_12898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12898__$1,inst_12896);
} else {
if((state_val_12899 === (3))){
var inst_12893 = (state_12898[(2)]);
var inst_12894 = figwheel.client.heads_up.clear.call(null);
var state_12898__$1 = (function (){var statearr_12900 = state_12898;
(statearr_12900[(7)] = inst_12893);

return statearr_12900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12898__$1,(4),inst_12894);
} else {
if((state_val_12899 === (2))){
var inst_12890 = (state_12898[(2)]);
var inst_12891 = cljs.core.async.timeout.call(null,(400));
var state_12898__$1 = (function (){var statearr_12901 = state_12898;
(statearr_12901[(8)] = inst_12890);

return statearr_12901;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12898__$1,(3),inst_12891);
} else {
if((state_val_12899 === (1))){
var inst_12888 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_12898__$1 = state_12898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12898__$1,(2),inst_12888);
} else {
return null;
}
}
}
}
});})(c__6821__auto__))
;
return ((function (switch__6765__auto__,c__6821__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__6766__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__6766__auto____0 = (function (){
var statearr_12905 = [null,null,null,null,null,null,null,null,null];
(statearr_12905[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__6766__auto__);

(statearr_12905[(1)] = (1));

return statearr_12905;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__6766__auto____1 = (function (state_12898){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_12898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e12906){if((e12906 instanceof Object)){
var ex__6769__auto__ = e12906;
var statearr_12907_12909 = state_12898;
(statearr_12907_12909[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12910 = state_12898;
state_12898 = G__12910;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__6766__auto__ = function(state_12898){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__6766__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__6766__auto____1.call(this,state_12898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__6766__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__6766__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto__))
})();
var state__6823__auto__ = (function (){var statearr_12908 = f__6822__auto__.call(null);
(statearr_12908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto__);

return statearr_12908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto__))
);

return c__6821__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1433163730949