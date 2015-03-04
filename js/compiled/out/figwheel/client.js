// Compiled by ClojureScript 0.0-2760 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17578__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__17578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17579__i = 0, G__17579__a = new Array(arguments.length -  0);
while (G__17579__i < G__17579__a.length) {G__17579__a[G__17579__i] = arguments[G__17579__i + 0]; ++G__17579__i;}
  args = new cljs.core.IndexedSeq(G__17579__a,0);
} 
return G__17578__delegate.call(this,args);};
G__17578.cljs$lang$maxFixedArity = 0;
G__17578.cljs$lang$applyTo = (function (arglist__17580){
var args = cljs.core.seq(arglist__17580);
return G__17578__delegate(args);
});
G__17578.cljs$core$IFn$_invoke$arity$variadic = G__17578__delegate;
return G__17578;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__17581){
var map__17583 = p__17581;
var map__17583__$1 = ((cljs.core.seq_QMARK_.call(null,map__17583))?cljs.core.apply.call(null,cljs.core.hash_map,map__17583):map__17583);
var class$ = cljs.core.get.call(null,map__17583__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__17583__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__4001__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4001__auto__)){
return or__4001__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__3989__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3989__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3989__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__6999__auto___17712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___17712,ch){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___17712,ch){
return (function (state_17686){
var state_val_17687 = (state_17686[(1)]);
if((state_val_17687 === (7))){
var inst_17682 = (state_17686[(2)]);
var state_17686__$1 = state_17686;
var statearr_17688_17713 = state_17686__$1;
(statearr_17688_17713[(2)] = inst_17682);

(statearr_17688_17713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17687 === (1))){
var state_17686__$1 = state_17686;
var statearr_17689_17714 = state_17686__$1;
(statearr_17689_17714[(2)] = null);

(statearr_17689_17714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17687 === (4))){
var inst_17650 = (state_17686[(7)]);
var inst_17650__$1 = (state_17686[(2)]);
var state_17686__$1 = (function (){var statearr_17690 = state_17686;
(statearr_17690[(7)] = inst_17650__$1);

return statearr_17690;
})();
if(cljs.core.truth_(inst_17650__$1)){
var statearr_17691_17715 = state_17686__$1;
(statearr_17691_17715[(1)] = (5));

} else {
var statearr_17692_17716 = state_17686__$1;
(statearr_17692_17716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17687 === (13))){
var state_17686__$1 = state_17686;
var statearr_17693_17717 = state_17686__$1;
(statearr_17693_17717[(2)] = null);

(statearr_17693_17717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17687 === (6))){
var state_17686__$1 = state_17686;
var statearr_17694_17718 = state_17686__$1;
(statearr_17694_17718[(2)] = null);

(statearr_17694_17718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17687 === (3))){
var inst_17684 = (state_17686[(2)]);
var state_17686__$1 = state_17686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17686__$1,inst_17684);
} else {
if((state_val_17687 === (12))){
var inst_17657 = (state_17686[(8)]);
var inst_17670 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_17657);
var inst_17671 = cljs.core.first.call(null,inst_17670);
var inst_17672 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_17671);
var inst_17673 = console.warn("Figwheel: Not loading code with warnings - ",inst_17672);
var state_17686__$1 = state_17686;
var statearr_17695_17719 = state_17686__$1;
(statearr_17695_17719[(2)] = inst_17673);

(statearr_17695_17719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17687 === (2))){
var state_17686__$1 = state_17686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17686__$1,(4),ch);
} else {
if((state_val_17687 === (11))){
var inst_17666 = (state_17686[(2)]);
var state_17686__$1 = state_17686;
var statearr_17696_17720 = state_17686__$1;
(statearr_17696_17720[(2)] = inst_17666);

(statearr_17696_17720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17687 === (9))){
var inst_17656 = (state_17686[(9)]);
var inst_17668 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_17656,opts);
var state_17686__$1 = state_17686;
if(inst_17668){
var statearr_17697_17721 = state_17686__$1;
(statearr_17697_17721[(1)] = (12));

} else {
var statearr_17698_17722 = state_17686__$1;
(statearr_17698_17722[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17687 === (5))){
var inst_17656 = (state_17686[(9)]);
var inst_17650 = (state_17686[(7)]);
var inst_17652 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_17653 = (new cljs.core.PersistentArrayMap(null,2,inst_17652,null));
var inst_17654 = (new cljs.core.PersistentHashSet(null,inst_17653,null));
var inst_17655 = figwheel.client.focus_msgs.call(null,inst_17654,inst_17650);
var inst_17656__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_17655);
var inst_17657 = cljs.core.first.call(null,inst_17655);
var inst_17658 = figwheel.client.reload_file_state_QMARK_.call(null,inst_17656__$1,opts);
var state_17686__$1 = (function (){var statearr_17699 = state_17686;
(statearr_17699[(9)] = inst_17656__$1);

(statearr_17699[(8)] = inst_17657);

return statearr_17699;
})();
if(cljs.core.truth_(inst_17658)){
var statearr_17700_17723 = state_17686__$1;
(statearr_17700_17723[(1)] = (8));

} else {
var statearr_17701_17724 = state_17686__$1;
(statearr_17701_17724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17687 === (14))){
var inst_17676 = (state_17686[(2)]);
var state_17686__$1 = state_17686;
var statearr_17702_17725 = state_17686__$1;
(statearr_17702_17725[(2)] = inst_17676);

(statearr_17702_17725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17687 === (10))){
var inst_17678 = (state_17686[(2)]);
var state_17686__$1 = (function (){var statearr_17703 = state_17686;
(statearr_17703[(10)] = inst_17678);

return statearr_17703;
})();
var statearr_17704_17726 = state_17686__$1;
(statearr_17704_17726[(2)] = null);

(statearr_17704_17726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17687 === (8))){
var inst_17657 = (state_17686[(8)]);
var inst_17660 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17661 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_17657);
var inst_17662 = cljs.core.async.timeout.call(null,(1000));
var inst_17663 = [inst_17661,inst_17662];
var inst_17664 = (new cljs.core.PersistentVector(null,2,(5),inst_17660,inst_17663,null));
var state_17686__$1 = state_17686;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17686__$1,(11),inst_17664);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6999__auto___17712,ch))
;
return ((function (switch__6943__auto__,c__6999__auto___17712,ch){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_17708 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17708[(0)] = state_machine__6944__auto__);

(statearr_17708[(1)] = (1));

return statearr_17708;
});
var state_machine__6944__auto____1 = (function (state_17686){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_17686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e17709){if((e17709 instanceof Object)){
var ex__6947__auto__ = e17709;
var statearr_17710_17727 = state_17686;
(statearr_17710_17727[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17728 = state_17686;
state_17686 = G__17728;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_17686){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_17686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___17712,ch))
})();
var state__7001__auto__ = (function (){var statearr_17711 = f__7000__auto__.call(null);
(statearr_17711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___17712);

return statearr_17711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___17712,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__17729_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__17729_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_17734 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_17735 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_17734,_STAR_print_newline_STAR_17735){
return (function() { 
var G__17736__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__17736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17737__i = 0, G__17737__a = new Array(arguments.length -  0);
while (G__17737__i < G__17737__a.length) {G__17737__a[G__17737__i] = arguments[G__17737__i + 0]; ++G__17737__i;}
  args = new cljs.core.IndexedSeq(G__17737__a,0);
} 
return G__17736__delegate.call(this,args);};
G__17736.cljs$lang$maxFixedArity = 0;
G__17736.cljs$lang$applyTo = (function (arglist__17738){
var args = cljs.core.seq(arglist__17738);
return G__17736__delegate(args);
});
G__17736.cljs$core$IFn$_invoke$arity$variadic = G__17736__delegate;
return G__17736;
})()
;})(_STAR_print_fn_STAR_17734,_STAR_print_newline_STAR_17735))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17735;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17734;
}}catch (e17733){if((e17733 instanceof Error)){
var e = e17733;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e17733;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs)){
} else {
cljs = {};
}

if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__17739){
var map__17744 = p__17739;
var map__17744__$1 = ((cljs.core.seq_QMARK_.call(null,map__17744))?cljs.core.apply.call(null,cljs.core.hash_map,map__17744):map__17744);
var opts = map__17744__$1;
var build_id = cljs.core.get.call(null,map__17744__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__17744,map__17744__$1,opts,build_id){
return (function (p__17745){
var vec__17746 = p__17745;
var map__17747 = cljs.core.nth.call(null,vec__17746,(0),null);
var map__17747__$1 = ((cljs.core.seq_QMARK_.call(null,map__17747))?cljs.core.apply.call(null,cljs.core.hash_map,map__17747):map__17747);
var msg = map__17747__$1;
var msg_name = cljs.core.get.call(null,map__17747__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17746,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__17746,map__17747,map__17747__$1,msg,msg_name,_,map__17744,map__17744__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__17746,map__17747,map__17747__$1,msg,msg_name,_,map__17744,map__17744__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__17744,map__17744__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__17751){
var vec__17752 = p__17751;
var map__17753 = cljs.core.nth.call(null,vec__17752,(0),null);
var map__17753__$1 = ((cljs.core.seq_QMARK_.call(null,map__17753))?cljs.core.apply.call(null,cljs.core.hash_map,map__17753):map__17753);
var msg = map__17753__$1;
var msg_name = cljs.core.get.call(null,map__17753__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17752,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__17754){
var map__17762 = p__17754;
var map__17762__$1 = ((cljs.core.seq_QMARK_.call(null,map__17762))?cljs.core.apply.call(null,cljs.core.hash_map,map__17762):map__17762);
var on_compile_fail = cljs.core.get.call(null,map__17762__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__17762__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__17762,map__17762__$1,on_compile_fail,on_compile_warning){
return (function (p__17763){
var vec__17764 = p__17763;
var map__17765 = cljs.core.nth.call(null,vec__17764,(0),null);
var map__17765__$1 = ((cljs.core.seq_QMARK_.call(null,map__17765))?cljs.core.apply.call(null,cljs.core.hash_map,map__17765):map__17765);
var msg = map__17765__$1;
var msg_name = cljs.core.get.call(null,map__17765__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17764,(1));
var pred__17766 = cljs.core._EQ_;
var expr__17767 = msg_name;
if(cljs.core.truth_(pred__17766.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__17767))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__17766.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__17767))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__17762,map__17762__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__6999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto__,msg_hist,msg_names,msg){
return (function (state_17944){
var state_val_17945 = (state_17944[(1)]);
if((state_val_17945 === (7))){
var inst_17893 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_17944__$1 = state_17944;
if(inst_17893){
var statearr_17946_17983 = state_17944__$1;
(statearr_17946_17983[(1)] = (11));

} else {
var statearr_17947_17984 = state_17944__$1;
(statearr_17947_17984[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (20))){
var inst_17934 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17948_17985 = state_17944__$1;
(statearr_17948_17985[(2)] = inst_17934);

(statearr_17948_17985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (27))){
var inst_17925 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17944__$1 = state_17944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17944__$1,(30),inst_17925);
} else {
if((state_val_17945 === (1))){
var inst_17876 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_17944__$1 = state_17944;
if(cljs.core.truth_(inst_17876)){
var statearr_17949_17986 = state_17944__$1;
(statearr_17949_17986[(1)] = (2));

} else {
var statearr_17950_17987 = state_17944__$1;
(statearr_17950_17987[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (24))){
var inst_17923 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_17944__$1 = state_17944;
if(inst_17923){
var statearr_17951_17988 = state_17944__$1;
(statearr_17951_17988[(1)] = (27));

} else {
var statearr_17952_17989 = state_17944__$1;
(statearr_17952_17989[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (4))){
var inst_17942 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17944__$1,inst_17942);
} else {
if((state_val_17945 === (15))){
var inst_17903 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17904 = figwheel.client.heads_up.append_message.call(null,inst_17903);
var state_17944__$1 = state_17944;
var statearr_17953_17990 = state_17944__$1;
(statearr_17953_17990[(2)] = inst_17904);

(statearr_17953_17990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (21))){
var inst_17910 = (state_17944[(2)]);
var inst_17911 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17912 = figwheel.client.heads_up.display_warning.call(null,inst_17911);
var state_17944__$1 = (function (){var statearr_17954 = state_17944;
(statearr_17954[(7)] = inst_17910);

return statearr_17954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17944__$1,(22),inst_17912);
} else {
if((state_val_17945 === (13))){
var inst_17938 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17955_17991 = state_17944__$1;
(statearr_17955_17991[(2)] = inst_17938);

(statearr_17955_17991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (22))){
var inst_17914 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17956_17992 = state_17944__$1;
(statearr_17956_17992[(2)] = inst_17914);

(statearr_17956_17992[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (29))){
var inst_17930 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17957_17993 = state_17944__$1;
(statearr_17957_17993[(2)] = inst_17930);

(statearr_17957_17993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (6))){
var inst_17884 = figwheel.client.heads_up.clear.call(null);
var state_17944__$1 = state_17944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17944__$1,(9),inst_17884);
} else {
if((state_val_17945 === (28))){
var state_17944__$1 = state_17944;
var statearr_17958_17994 = state_17944__$1;
(statearr_17958_17994[(2)] = null);

(statearr_17958_17994[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (25))){
var inst_17932 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17959_17995 = state_17944__$1;
(statearr_17959_17995[(2)] = inst_17932);

(statearr_17959_17995[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (17))){
var inst_17936 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17960_17996 = state_17944__$1;
(statearr_17960_17996[(2)] = inst_17936);

(statearr_17960_17996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (3))){
var inst_17882 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_17944__$1 = state_17944;
if(inst_17882){
var statearr_17961_17997 = state_17944__$1;
(statearr_17961_17997[(1)] = (6));

} else {
var statearr_17962_17998 = state_17944__$1;
(statearr_17962_17998[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (12))){
var inst_17901 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_17944__$1 = state_17944;
if(inst_17901){
var statearr_17963_17999 = state_17944__$1;
(statearr_17963_17999[(1)] = (15));

} else {
var statearr_17964_18000 = state_17944__$1;
(statearr_17964_18000[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (2))){
var inst_17878 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17944__$1 = state_17944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17944__$1,(5),inst_17878);
} else {
if((state_val_17945 === (23))){
var inst_17918 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17919 = figwheel.client.heads_up.display_warning.call(null,inst_17918);
var state_17944__$1 = state_17944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17944__$1,(26),inst_17919);
} else {
if((state_val_17945 === (19))){
var inst_17916 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_17944__$1 = state_17944;
if(inst_17916){
var statearr_17965_18001 = state_17944__$1;
(statearr_17965_18001[(1)] = (23));

} else {
var statearr_17966_18002 = state_17944__$1;
(statearr_17966_18002[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (11))){
var inst_17895 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17896 = figwheel.client.format_messages.call(null,inst_17895);
var inst_17897 = figwheel.client.heads_up.display_error.call(null,inst_17896);
var state_17944__$1 = state_17944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17944__$1,(14),inst_17897);
} else {
if((state_val_17945 === (9))){
var inst_17886 = (state_17944[(2)]);
var inst_17887 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17888 = figwheel.client.format_messages.call(null,inst_17887);
var inst_17889 = figwheel.client.heads_up.display_error.call(null,inst_17888);
var state_17944__$1 = (function (){var statearr_17967 = state_17944;
(statearr_17967[(8)] = inst_17886);

return statearr_17967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17944__$1,(10),inst_17889);
} else {
if((state_val_17945 === (5))){
var inst_17880 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17968_18003 = state_17944__$1;
(statearr_17968_18003[(2)] = inst_17880);

(statearr_17968_18003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (14))){
var inst_17899 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17969_18004 = state_17944__$1;
(statearr_17969_18004[(2)] = inst_17899);

(statearr_17969_18004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (26))){
var inst_17921 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17970_18005 = state_17944__$1;
(statearr_17970_18005[(2)] = inst_17921);

(statearr_17970_18005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (16))){
var inst_17906 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_17944__$1 = state_17944;
if(inst_17906){
var statearr_17971_18006 = state_17944__$1;
(statearr_17971_18006[(1)] = (18));

} else {
var statearr_17972_18007 = state_17944__$1;
(statearr_17972_18007[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (30))){
var inst_17927 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17973_18008 = state_17944__$1;
(statearr_17973_18008[(2)] = inst_17927);

(statearr_17973_18008[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (10))){
var inst_17891 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17974_18009 = state_17944__$1;
(statearr_17974_18009[(2)] = inst_17891);

(statearr_17974_18009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17945 === (18))){
var inst_17908 = figwheel.client.heads_up.clear.call(null);
var state_17944__$1 = state_17944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17944__$1,(21),inst_17908);
} else {
if((state_val_17945 === (8))){
var inst_17940 = (state_17944[(2)]);
var state_17944__$1 = state_17944;
var statearr_17975_18010 = state_17944__$1;
(statearr_17975_18010[(2)] = inst_17940);

(statearr_17975_18010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6999__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__6943__auto__,c__6999__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_17979 = [null,null,null,null,null,null,null,null,null];
(statearr_17979[(0)] = state_machine__6944__auto__);

(statearr_17979[(1)] = (1));

return statearr_17979;
});
var state_machine__6944__auto____1 = (function (state_17944){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_17944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e17980){if((e17980 instanceof Object)){
var ex__6947__auto__ = e17980;
var statearr_17981_18011 = state_17944;
(statearr_17981_18011[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18012 = state_17944;
state_17944 = G__18012;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_17944){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_17944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto__,msg_hist,msg_names,msg))
})();
var state__7001__auto__ = (function (){var statearr_17982 = f__7000__auto__.call(null);
(statearr_17982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto__);

return statearr_17982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto__,msg_hist,msg_names,msg))
);

return c__6999__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__6999__auto___18075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___18075,ch){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___18075,ch){
return (function (state_18058){
var state_val_18059 = (state_18058[(1)]);
if((state_val_18059 === (8))){
var inst_18050 = (state_18058[(2)]);
var state_18058__$1 = (function (){var statearr_18060 = state_18058;
(statearr_18060[(7)] = inst_18050);

return statearr_18060;
})();
var statearr_18061_18076 = state_18058__$1;
(statearr_18061_18076[(2)] = null);

(statearr_18061_18076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (7))){
var inst_18054 = (state_18058[(2)]);
var state_18058__$1 = state_18058;
var statearr_18062_18077 = state_18058__$1;
(statearr_18062_18077[(2)] = inst_18054);

(statearr_18062_18077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (6))){
var state_18058__$1 = state_18058;
var statearr_18063_18078 = state_18058__$1;
(statearr_18063_18078[(2)] = null);

(statearr_18063_18078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (5))){
var inst_18046 = (state_18058[(8)]);
var inst_18048 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_18046);
var state_18058__$1 = state_18058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18058__$1,(8),inst_18048);
} else {
if((state_val_18059 === (4))){
var inst_18046 = (state_18058[(8)]);
var inst_18046__$1 = (state_18058[(2)]);
var state_18058__$1 = (function (){var statearr_18064 = state_18058;
(statearr_18064[(8)] = inst_18046__$1);

return statearr_18064;
})();
if(cljs.core.truth_(inst_18046__$1)){
var statearr_18065_18079 = state_18058__$1;
(statearr_18065_18079[(1)] = (5));

} else {
var statearr_18066_18080 = state_18058__$1;
(statearr_18066_18080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18059 === (3))){
var inst_18056 = (state_18058[(2)]);
var state_18058__$1 = state_18058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18058__$1,inst_18056);
} else {
if((state_val_18059 === (2))){
var state_18058__$1 = state_18058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18058__$1,(4),ch);
} else {
if((state_val_18059 === (1))){
var state_18058__$1 = state_18058;
var statearr_18067_18081 = state_18058__$1;
(statearr_18067_18081[(2)] = null);

(statearr_18067_18081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__6999__auto___18075,ch))
;
return ((function (switch__6943__auto__,c__6999__auto___18075,ch){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_18071 = [null,null,null,null,null,null,null,null,null];
(statearr_18071[(0)] = state_machine__6944__auto__);

(statearr_18071[(1)] = (1));

return statearr_18071;
});
var state_machine__6944__auto____1 = (function (state_18058){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_18058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e18072){if((e18072 instanceof Object)){
var ex__6947__auto__ = e18072;
var statearr_18073_18082 = state_18058;
(statearr_18073_18082[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18083 = state_18058;
state_18058 = G__18083;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_18058){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_18058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___18075,ch))
})();
var state__7001__auto__ = (function (){var statearr_18074 = f__7000__auto__.call(null);
(statearr_18074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___18075);

return statearr_18074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___18075,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__6999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto__){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto__){
return (function (state_18104){
var state_val_18105 = (state_18104[(1)]);
if((state_val_18105 === (2))){
var inst_18101 = (state_18104[(2)]);
var inst_18102 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_18104__$1 = (function (){var statearr_18106 = state_18104;
(statearr_18106[(7)] = inst_18101);

return statearr_18106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18104__$1,inst_18102);
} else {
if((state_val_18105 === (1))){
var inst_18099 = cljs.core.async.timeout.call(null,(3000));
var state_18104__$1 = state_18104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18104__$1,(2),inst_18099);
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
var statearr_18110 = [null,null,null,null,null,null,null,null];
(statearr_18110[(0)] = state_machine__6944__auto__);

(statearr_18110[(1)] = (1));

return statearr_18110;
});
var state_machine__6944__auto____1 = (function (state_18104){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_18104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e18111){if((e18111 instanceof Object)){
var ex__6947__auto__ = e18111;
var statearr_18112_18114 = state_18104;
(statearr_18112_18114[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18115 = state_18104;
state_18104 = G__18115;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_18104){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_18104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto__))
})();
var state__7001__auto__ = (function (){var statearr_18113 = f__7000__auto__.call(null);
(statearr_18113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto__);

return statearr_18113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto__))
);

return c__6999__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__3989__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__3989__auto__)){
return ("CustomEvent" in window);
} else {
return and__3989__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj18119 = {"detail":url};
return obj18119;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__18120){
var map__18126 = p__18120;
var map__18126__$1 = ((cljs.core.seq_QMARK_.call(null,map__18126))?cljs.core.apply.call(null,cljs.core.hash_map,map__18126):map__18126);
var ed = map__18126__$1;
var exception_data = cljs.core.get.call(null,map__18126__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__18126__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__18127_18131 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__18128_18132 = null;
var count__18129_18133 = (0);
var i__18130_18134 = (0);
while(true){
if((i__18130_18134 < count__18129_18133)){
var msg_18135 = cljs.core._nth.call(null,chunk__18128_18132,i__18130_18134);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_18135);

var G__18136 = seq__18127_18131;
var G__18137 = chunk__18128_18132;
var G__18138 = count__18129_18133;
var G__18139 = (i__18130_18134 + (1));
seq__18127_18131 = G__18136;
chunk__18128_18132 = G__18137;
count__18129_18133 = G__18138;
i__18130_18134 = G__18139;
continue;
} else {
var temp__4126__auto___18140 = cljs.core.seq.call(null,seq__18127_18131);
if(temp__4126__auto___18140){
var seq__18127_18141__$1 = temp__4126__auto___18140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18127_18141__$1)){
var c__4788__auto___18142 = cljs.core.chunk_first.call(null,seq__18127_18141__$1);
var G__18143 = cljs.core.chunk_rest.call(null,seq__18127_18141__$1);
var G__18144 = c__4788__auto___18142;
var G__18145 = cljs.core.count.call(null,c__4788__auto___18142);
var G__18146 = (0);
seq__18127_18131 = G__18143;
chunk__18128_18132 = G__18144;
count__18129_18133 = G__18145;
i__18130_18134 = G__18146;
continue;
} else {
var msg_18147 = cljs.core.first.call(null,seq__18127_18141__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_18147);

var G__18148 = cljs.core.next.call(null,seq__18127_18141__$1);
var G__18149 = null;
var G__18150 = (0);
var G__18151 = (0);
seq__18127_18131 = G__18148;
chunk__18128_18132 = G__18149;
count__18129_18133 = G__18150;
i__18130_18134 = G__18151;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__18152){
var map__18154 = p__18152;
var map__18154__$1 = ((cljs.core.seq_QMARK_.call(null,map__18154))?cljs.core.apply.call(null,cljs.core.hash_map,map__18154):map__18154);
var w = map__18154__$1;
var message = cljs.core.get.call(null,map__18154__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
if(cljs.core.truth_((function (){var and__3989__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3989__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3989__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$1;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__18161 = cljs.core.seq.call(null,plugins);
var chunk__18162 = null;
var count__18163 = (0);
var i__18164 = (0);
while(true){
if((i__18164 < count__18163)){
var vec__18165 = cljs.core._nth.call(null,chunk__18162,i__18164);
var k = cljs.core.nth.call(null,vec__18165,(0),null);
var plugin = cljs.core.nth.call(null,vec__18165,(1),null);
if(cljs.core.truth_(plugin)){
var pl_18167 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__18161,chunk__18162,count__18163,i__18164,pl_18167,vec__18165,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_18167.call(null,msg_hist);
});})(seq__18161,chunk__18162,count__18163,i__18164,pl_18167,vec__18165,k,plugin))
);
} else {
}

var G__18168 = seq__18161;
var G__18169 = chunk__18162;
var G__18170 = count__18163;
var G__18171 = (i__18164 + (1));
seq__18161 = G__18168;
chunk__18162 = G__18169;
count__18163 = G__18170;
i__18164 = G__18171;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18161);
if(temp__4126__auto__){
var seq__18161__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18161__$1)){
var c__4788__auto__ = cljs.core.chunk_first.call(null,seq__18161__$1);
var G__18172 = cljs.core.chunk_rest.call(null,seq__18161__$1);
var G__18173 = c__4788__auto__;
var G__18174 = cljs.core.count.call(null,c__4788__auto__);
var G__18175 = (0);
seq__18161 = G__18172;
chunk__18162 = G__18173;
count__18163 = G__18174;
i__18164 = G__18175;
continue;
} else {
var vec__18166 = cljs.core.first.call(null,seq__18161__$1);
var k = cljs.core.nth.call(null,vec__18166,(0),null);
var plugin = cljs.core.nth.call(null,vec__18166,(1),null);
if(cljs.core.truth_(plugin)){
var pl_18176 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__18161,chunk__18162,count__18163,i__18164,pl_18176,vec__18166,k,plugin,seq__18161__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_18176.call(null,msg_hist);
});})(seq__18161,chunk__18162,count__18163,i__18164,pl_18176,vec__18166,k,plugin,seq__18161__$1,temp__4126__auto__))
);
} else {
}

var G__18177 = cljs.core.next.call(null,seq__18161__$1);
var G__18178 = null;
var G__18179 = (0);
var G__18180 = (0);
seq__18161 = G__18177;
chunk__18162 = G__18178;
count__18163 = G__18179;
i__18164 = G__18180;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__18181){
var map__18183 = p__18181;
var map__18183__$1 = ((cljs.core.seq_QMARK_.call(null,map__18183))?cljs.core.apply.call(null,cljs.core.hash_map,map__18183):map__18183);
var opts = map__18183__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__18181 = null;
if (arguments.length > 0) {
var G__18184__i = 0, G__18184__a = new Array(arguments.length -  0);
while (G__18184__i < G__18184__a.length) {G__18184__a[G__18184__i] = arguments[G__18184__i + 0]; ++G__18184__i;}
  p__18181 = new cljs.core.IndexedSeq(G__18184__a,0);
} 
return watch_and_reload__delegate.call(this,p__18181);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__18185){
var p__18181 = cljs.core.seq(arglist__18185);
return watch_and_reload__delegate(p__18181);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1425473466802