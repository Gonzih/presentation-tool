// Compiled by ClojureScript 0.0-3308 {}
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
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11645__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__11645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11646__i = 0, G__11646__a = new Array(arguments.length -  0);
while (G__11646__i < G__11646__a.length) {G__11646__a[G__11646__i] = arguments[G__11646__i + 0]; ++G__11646__i;}
  args = new cljs.core.IndexedSeq(G__11646__a,0);
} 
return G__11645__delegate.call(this,args);};
G__11645.cljs$lang$maxFixedArity = 0;
G__11645.cljs$lang$applyTo = (function (arglist__11647){
var args = cljs.core.seq(arglist__11647);
return G__11645__delegate(args);
});
G__11645.cljs$core$IFn$_invoke$arity$variadic = G__11645__delegate;
return G__11645;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__11648){
var map__11650 = p__11648;
var map__11650__$1 = ((cljs.core.seq_QMARK_.call(null,map__11650))?cljs.core.apply.call(null,cljs.core.hash_map,map__11650):map__11650);
var message = cljs.core.get.call(null,map__11650__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__11650__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4531__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4531__auto__)){
return or__4531__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4519__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4519__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4519__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__7136__auto___11779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___11779,ch){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___11779,ch){
return (function (state_11753){
var state_val_11754 = (state_11753[(1)]);
if((state_val_11754 === (7))){
var inst_11749 = (state_11753[(2)]);
var state_11753__$1 = state_11753;
var statearr_11755_11780 = state_11753__$1;
(statearr_11755_11780[(2)] = inst_11749);

(statearr_11755_11780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11754 === (1))){
var state_11753__$1 = state_11753;
var statearr_11756_11781 = state_11753__$1;
(statearr_11756_11781[(2)] = null);

(statearr_11756_11781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11754 === (4))){
var inst_11717 = (state_11753[(7)]);
var inst_11717__$1 = (state_11753[(2)]);
var state_11753__$1 = (function (){var statearr_11757 = state_11753;
(statearr_11757[(7)] = inst_11717__$1);

return statearr_11757;
})();
if(cljs.core.truth_(inst_11717__$1)){
var statearr_11758_11782 = state_11753__$1;
(statearr_11758_11782[(1)] = (5));

} else {
var statearr_11759_11783 = state_11753__$1;
(statearr_11759_11783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11754 === (13))){
var state_11753__$1 = state_11753;
var statearr_11760_11784 = state_11753__$1;
(statearr_11760_11784[(2)] = null);

(statearr_11760_11784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11754 === (6))){
var state_11753__$1 = state_11753;
var statearr_11761_11785 = state_11753__$1;
(statearr_11761_11785[(2)] = null);

(statearr_11761_11785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11754 === (3))){
var inst_11751 = (state_11753[(2)]);
var state_11753__$1 = state_11753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11753__$1,inst_11751);
} else {
if((state_val_11754 === (12))){
var inst_11724 = (state_11753[(8)]);
var inst_11737 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_11724);
var inst_11738 = cljs.core.first.call(null,inst_11737);
var inst_11739 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_11738);
var inst_11740 = console.warn("Figwheel: Not loading code with warnings - ",inst_11739);
var state_11753__$1 = state_11753;
var statearr_11762_11786 = state_11753__$1;
(statearr_11762_11786[(2)] = inst_11740);

(statearr_11762_11786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11754 === (2))){
var state_11753__$1 = state_11753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11753__$1,(4),ch);
} else {
if((state_val_11754 === (11))){
var inst_11733 = (state_11753[(2)]);
var state_11753__$1 = state_11753;
var statearr_11763_11787 = state_11753__$1;
(statearr_11763_11787[(2)] = inst_11733);

(statearr_11763_11787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11754 === (9))){
var inst_11723 = (state_11753[(9)]);
var inst_11735 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_11723,opts);
var state_11753__$1 = state_11753;
if(cljs.core.truth_(inst_11735)){
var statearr_11764_11788 = state_11753__$1;
(statearr_11764_11788[(1)] = (12));

} else {
var statearr_11765_11789 = state_11753__$1;
(statearr_11765_11789[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11754 === (5))){
var inst_11723 = (state_11753[(9)]);
var inst_11717 = (state_11753[(7)]);
var inst_11719 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_11720 = (new cljs.core.PersistentArrayMap(null,2,inst_11719,null));
var inst_11721 = (new cljs.core.PersistentHashSet(null,inst_11720,null));
var inst_11722 = figwheel.client.focus_msgs.call(null,inst_11721,inst_11717);
var inst_11723__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_11722);
var inst_11724 = cljs.core.first.call(null,inst_11722);
var inst_11725 = figwheel.client.reload_file_state_QMARK_.call(null,inst_11723__$1,opts);
var state_11753__$1 = (function (){var statearr_11766 = state_11753;
(statearr_11766[(9)] = inst_11723__$1);

(statearr_11766[(8)] = inst_11724);

return statearr_11766;
})();
if(cljs.core.truth_(inst_11725)){
var statearr_11767_11790 = state_11753__$1;
(statearr_11767_11790[(1)] = (8));

} else {
var statearr_11768_11791 = state_11753__$1;
(statearr_11768_11791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11754 === (14))){
var inst_11743 = (state_11753[(2)]);
var state_11753__$1 = state_11753;
var statearr_11769_11792 = state_11753__$1;
(statearr_11769_11792[(2)] = inst_11743);

(statearr_11769_11792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11754 === (10))){
var inst_11745 = (state_11753[(2)]);
var state_11753__$1 = (function (){var statearr_11770 = state_11753;
(statearr_11770[(10)] = inst_11745);

return statearr_11770;
})();
var statearr_11771_11793 = state_11753__$1;
(statearr_11771_11793[(2)] = null);

(statearr_11771_11793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11754 === (8))){
var inst_11724 = (state_11753[(8)]);
var inst_11727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11728 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_11724);
var inst_11729 = cljs.core.async.timeout.call(null,(1000));
var inst_11730 = [inst_11728,inst_11729];
var inst_11731 = (new cljs.core.PersistentVector(null,2,(5),inst_11727,inst_11730,null));
var state_11753__$1 = state_11753;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11753__$1,(11),inst_11731);
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
});})(c__7136__auto___11779,ch))
;
return ((function (switch__7074__auto__,c__7136__auto___11779,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__7075__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__7075__auto____0 = (function (){
var statearr_11775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11775[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__7075__auto__);

(statearr_11775[(1)] = (1));

return statearr_11775;
});
var figwheel$client$file_reloader_plugin_$_state_machine__7075__auto____1 = (function (state_11753){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_11753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e11776){if((e11776 instanceof Object)){
var ex__7078__auto__ = e11776;
var statearr_11777_11794 = state_11753;
(statearr_11777_11794[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11795 = state_11753;
state_11753 = G__11795;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__7075__auto__ = function(state_11753){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__7075__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__7075__auto____1.call(this,state_11753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__7075__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__7075__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___11779,ch))
})();
var state__7138__auto__ = (function (){var statearr_11778 = f__7137__auto__.call(null);
(statearr_11778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___11779);

return statearr_11778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___11779,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__11796_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__11796_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_11803 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_11803){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_11801 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_11802 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_11801,_STAR_print_newline_STAR_11802,base_path_11803){
return (function() { 
var G__11804__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__11804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11805__i = 0, G__11805__a = new Array(arguments.length -  0);
while (G__11805__i < G__11805__a.length) {G__11805__a[G__11805__i] = arguments[G__11805__i + 0]; ++G__11805__i;}
  args = new cljs.core.IndexedSeq(G__11805__a,0);
} 
return G__11804__delegate.call(this,args);};
G__11804.cljs$lang$maxFixedArity = 0;
G__11804.cljs$lang$applyTo = (function (arglist__11806){
var args = cljs.core.seq(arglist__11806);
return G__11804__delegate(args);
});
G__11804.cljs$core$IFn$_invoke$arity$variadic = G__11804__delegate;
return G__11804;
})()
;})(_STAR_print_fn_STAR_11801,_STAR_print_newline_STAR_11802,base_path_11803))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11802;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11801;
}}catch (e11800){if((e11800 instanceof Error)){
var e = e11800;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_11803], null));
} else {
var e = e11800;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_11803))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__11807){
var map__11812 = p__11807;
var map__11812__$1 = ((cljs.core.seq_QMARK_.call(null,map__11812))?cljs.core.apply.call(null,cljs.core.hash_map,map__11812):map__11812);
var opts = map__11812__$1;
var build_id = cljs.core.get.call(null,map__11812__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__11812,map__11812__$1,opts,build_id){
return (function (p__11813){
var vec__11814 = p__11813;
var map__11815 = cljs.core.nth.call(null,vec__11814,(0),null);
var map__11815__$1 = ((cljs.core.seq_QMARK_.call(null,map__11815))?cljs.core.apply.call(null,cljs.core.hash_map,map__11815):map__11815);
var msg = map__11815__$1;
var msg_name = cljs.core.get.call(null,map__11815__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__11814,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__11814,map__11815,map__11815__$1,msg,msg_name,_,map__11812,map__11812__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__11814,map__11815,map__11815__$1,msg,msg_name,_,map__11812,map__11812__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__11812,map__11812__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__11819){
var vec__11820 = p__11819;
var map__11821 = cljs.core.nth.call(null,vec__11820,(0),null);
var map__11821__$1 = ((cljs.core.seq_QMARK_.call(null,map__11821))?cljs.core.apply.call(null,cljs.core.hash_map,map__11821):map__11821);
var msg = map__11821__$1;
var msg_name = cljs.core.get.call(null,map__11821__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__11820,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__11822){
var map__11830 = p__11822;
var map__11830__$1 = ((cljs.core.seq_QMARK_.call(null,map__11830))?cljs.core.apply.call(null,cljs.core.hash_map,map__11830):map__11830);
var on_compile_warning = cljs.core.get.call(null,map__11830__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__11830__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__11830,map__11830__$1,on_compile_warning,on_compile_fail){
return (function (p__11831){
var vec__11832 = p__11831;
var map__11833 = cljs.core.nth.call(null,vec__11832,(0),null);
var map__11833__$1 = ((cljs.core.seq_QMARK_.call(null,map__11833))?cljs.core.apply.call(null,cljs.core.hash_map,map__11833):map__11833);
var msg = map__11833__$1;
var msg_name = cljs.core.get.call(null,map__11833__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__11832,(1));
var pred__11834 = cljs.core._EQ_;
var expr__11835 = msg_name;
if(cljs.core.truth_(pred__11834.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__11835))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__11834.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__11835))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__11830,map__11830__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto__,msg_hist,msg_names,msg){
return (function (state_12036){
var state_val_12037 = (state_12036[(1)]);
if((state_val_12037 === (7))){
var inst_11970 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12038_12079 = state_12036__$1;
(statearr_12038_12079[(2)] = inst_11970);

(statearr_12038_12079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (20))){
var inst_11998 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11998)){
var statearr_12039_12080 = state_12036__$1;
(statearr_12039_12080[(1)] = (22));

} else {
var statearr_12040_12081 = state_12036__$1;
(statearr_12040_12081[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (27))){
var inst_12010 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12011 = figwheel.client.heads_up.display_warning.call(null,inst_12010);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12036__$1,(30),inst_12011);
} else {
if((state_val_12037 === (1))){
var inst_11958 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11958)){
var statearr_12041_12082 = state_12036__$1;
(statearr_12041_12082[(1)] = (2));

} else {
var statearr_12042_12083 = state_12036__$1;
(statearr_12042_12083[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (24))){
var inst_12026 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12043_12084 = state_12036__$1;
(statearr_12043_12084[(2)] = inst_12026);

(statearr_12043_12084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (4))){
var inst_12034 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12036__$1,inst_12034);
} else {
if((state_val_12037 === (15))){
var inst_11986 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11987 = figwheel.client.format_messages.call(null,inst_11986);
var inst_11988 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11989 = figwheel.client.heads_up.display_error.call(null,inst_11987,inst_11988);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12036__$1,(18),inst_11989);
} else {
if((state_val_12037 === (21))){
var inst_12028 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12044_12085 = state_12036__$1;
(statearr_12044_12085[(2)] = inst_12028);

(statearr_12044_12085[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (31))){
var inst_12017 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12036__$1,(34),inst_12017);
} else {
if((state_val_12037 === (32))){
var state_12036__$1 = state_12036;
var statearr_12045_12086 = state_12036__$1;
(statearr_12045_12086[(2)] = null);

(statearr_12045_12086[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (33))){
var inst_12022 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12046_12087 = state_12036__$1;
(statearr_12046_12087[(2)] = inst_12022);

(statearr_12046_12087[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (13))){
var inst_11976 = (state_12036[(2)]);
var inst_11977 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11978 = figwheel.client.format_messages.call(null,inst_11977);
var inst_11979 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11980 = figwheel.client.heads_up.display_error.call(null,inst_11978,inst_11979);
var state_12036__$1 = (function (){var statearr_12047 = state_12036;
(statearr_12047[(7)] = inst_11976);

return statearr_12047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12036__$1,(14),inst_11980);
} else {
if((state_val_12037 === (22))){
var inst_12000 = figwheel.client.heads_up.clear.call(null);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12036__$1,(25),inst_12000);
} else {
if((state_val_12037 === (29))){
var inst_12024 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12048_12088 = state_12036__$1;
(statearr_12048_12088[(2)] = inst_12024);

(statearr_12048_12088[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (6))){
var inst_11966 = figwheel.client.heads_up.clear.call(null);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12036__$1,(9),inst_11966);
} else {
if((state_val_12037 === (28))){
var inst_12015 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_12015)){
var statearr_12049_12089 = state_12036__$1;
(statearr_12049_12089[(1)] = (31));

} else {
var statearr_12050_12090 = state_12036__$1;
(statearr_12050_12090[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (25))){
var inst_12002 = (state_12036[(2)]);
var inst_12003 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12004 = figwheel.client.heads_up.display_warning.call(null,inst_12003);
var state_12036__$1 = (function (){var statearr_12051 = state_12036;
(statearr_12051[(8)] = inst_12002);

return statearr_12051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12036__$1,(26),inst_12004);
} else {
if((state_val_12037 === (34))){
var inst_12019 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12052_12091 = state_12036__$1;
(statearr_12052_12091[(2)] = inst_12019);

(statearr_12052_12091[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (17))){
var inst_12030 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12053_12092 = state_12036__$1;
(statearr_12053_12092[(2)] = inst_12030);

(statearr_12053_12092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (3))){
var inst_11972 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11972)){
var statearr_12054_12093 = state_12036__$1;
(statearr_12054_12093[(1)] = (10));

} else {
var statearr_12055_12094 = state_12036__$1;
(statearr_12055_12094[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (12))){
var inst_12032 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12056_12095 = state_12036__$1;
(statearr_12056_12095[(2)] = inst_12032);

(statearr_12056_12095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (2))){
var inst_11960 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11960)){
var statearr_12057_12096 = state_12036__$1;
(statearr_12057_12096[(1)] = (5));

} else {
var statearr_12058_12097 = state_12036__$1;
(statearr_12058_12097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (23))){
var inst_12008 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_12008)){
var statearr_12059_12098 = state_12036__$1;
(statearr_12059_12098[(1)] = (27));

} else {
var statearr_12060_12099 = state_12036__$1;
(statearr_12060_12099[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (19))){
var inst_11995 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11996 = figwheel.client.heads_up.append_message.call(null,inst_11995);
var state_12036__$1 = state_12036;
var statearr_12061_12100 = state_12036__$1;
(statearr_12061_12100[(2)] = inst_11996);

(statearr_12061_12100[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (11))){
var inst_11984 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11984)){
var statearr_12062_12101 = state_12036__$1;
(statearr_12062_12101[(1)] = (15));

} else {
var statearr_12063_12102 = state_12036__$1;
(statearr_12063_12102[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (9))){
var inst_11968 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12064_12103 = state_12036__$1;
(statearr_12064_12103[(2)] = inst_11968);

(statearr_12064_12103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (5))){
var inst_11962 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12036__$1,(8),inst_11962);
} else {
if((state_val_12037 === (14))){
var inst_11982 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12065_12104 = state_12036__$1;
(statearr_12065_12104[(2)] = inst_11982);

(statearr_12065_12104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (26))){
var inst_12006 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12066_12105 = state_12036__$1;
(statearr_12066_12105[(2)] = inst_12006);

(statearr_12066_12105[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (16))){
var inst_11993 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11993)){
var statearr_12067_12106 = state_12036__$1;
(statearr_12067_12106[(1)] = (19));

} else {
var statearr_12068_12107 = state_12036__$1;
(statearr_12068_12107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (30))){
var inst_12013 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12069_12108 = state_12036__$1;
(statearr_12069_12108[(2)] = inst_12013);

(statearr_12069_12108[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (10))){
var inst_11974 = figwheel.client.heads_up.clear.call(null);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12036__$1,(13),inst_11974);
} else {
if((state_val_12037 === (18))){
var inst_11991 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12070_12109 = state_12036__$1;
(statearr_12070_12109[(2)] = inst_11991);

(statearr_12070_12109[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (8))){
var inst_11964 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12071_12110 = state_12036__$1;
(statearr_12071_12110[(2)] = inst_11964);

(statearr_12071_12110[(1)] = (7));


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
}
}
}
}
});})(c__7136__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__7074__auto__,c__7136__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7075__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7075__auto____0 = (function (){
var statearr_12075 = [null,null,null,null,null,null,null,null,null];
(statearr_12075[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7075__auto__);

(statearr_12075[(1)] = (1));

return statearr_12075;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7075__auto____1 = (function (state_12036){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_12036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e12076){if((e12076 instanceof Object)){
var ex__7078__auto__ = e12076;
var statearr_12077_12111 = state_12036;
(statearr_12077_12111[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12112 = state_12036;
state_12036 = G__12112;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7075__auto__ = function(state_12036){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7075__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7075__auto____1.call(this,state_12036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7075__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7075__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto__,msg_hist,msg_names,msg))
})();
var state__7138__auto__ = (function (){var statearr_12078 = f__7137__auto__.call(null);
(statearr_12078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);

return statearr_12078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__,msg_hist,msg_names,msg))
);

return c__7136__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7136__auto___12175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___12175,ch){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___12175,ch){
return (function (state_12158){
var state_val_12159 = (state_12158[(1)]);
if((state_val_12159 === (1))){
var state_12158__$1 = state_12158;
var statearr_12160_12176 = state_12158__$1;
(statearr_12160_12176[(2)] = null);

(statearr_12160_12176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12159 === (2))){
var state_12158__$1 = state_12158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12158__$1,(4),ch);
} else {
if((state_val_12159 === (3))){
var inst_12156 = (state_12158[(2)]);
var state_12158__$1 = state_12158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12158__$1,inst_12156);
} else {
if((state_val_12159 === (4))){
var inst_12146 = (state_12158[(7)]);
var inst_12146__$1 = (state_12158[(2)]);
var state_12158__$1 = (function (){var statearr_12161 = state_12158;
(statearr_12161[(7)] = inst_12146__$1);

return statearr_12161;
})();
if(cljs.core.truth_(inst_12146__$1)){
var statearr_12162_12177 = state_12158__$1;
(statearr_12162_12177[(1)] = (5));

} else {
var statearr_12163_12178 = state_12158__$1;
(statearr_12163_12178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12159 === (5))){
var inst_12146 = (state_12158[(7)]);
var inst_12148 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_12146);
var state_12158__$1 = state_12158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12158__$1,(8),inst_12148);
} else {
if((state_val_12159 === (6))){
var state_12158__$1 = state_12158;
var statearr_12164_12179 = state_12158__$1;
(statearr_12164_12179[(2)] = null);

(statearr_12164_12179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12159 === (7))){
var inst_12154 = (state_12158[(2)]);
var state_12158__$1 = state_12158;
var statearr_12165_12180 = state_12158__$1;
(statearr_12165_12180[(2)] = inst_12154);

(statearr_12165_12180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12159 === (8))){
var inst_12150 = (state_12158[(2)]);
var state_12158__$1 = (function (){var statearr_12166 = state_12158;
(statearr_12166[(8)] = inst_12150);

return statearr_12166;
})();
var statearr_12167_12181 = state_12158__$1;
(statearr_12167_12181[(2)] = null);

(statearr_12167_12181[(1)] = (2));


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
});})(c__7136__auto___12175,ch))
;
return ((function (switch__7074__auto__,c__7136__auto___12175,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__7075__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__7075__auto____0 = (function (){
var statearr_12171 = [null,null,null,null,null,null,null,null,null];
(statearr_12171[(0)] = figwheel$client$heads_up_plugin_$_state_machine__7075__auto__);

(statearr_12171[(1)] = (1));

return statearr_12171;
});
var figwheel$client$heads_up_plugin_$_state_machine__7075__auto____1 = (function (state_12158){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_12158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e12172){if((e12172 instanceof Object)){
var ex__7078__auto__ = e12172;
var statearr_12173_12182 = state_12158;
(statearr_12173_12182[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12183 = state_12158;
state_12158 = G__12183;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__7075__auto__ = function(state_12158){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__7075__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__7075__auto____1.call(this,state_12158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__7075__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__7075__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___12175,ch))
})();
var state__7138__auto__ = (function (){var statearr_12174 = f__7137__auto__.call(null);
(statearr_12174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___12175);

return statearr_12174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___12175,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__7136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto__){
return (function (state_12204){
var state_val_12205 = (state_12204[(1)]);
if((state_val_12205 === (1))){
var inst_12199 = cljs.core.async.timeout.call(null,(3000));
var state_12204__$1 = state_12204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12204__$1,(2),inst_12199);
} else {
if((state_val_12205 === (2))){
var inst_12201 = (state_12204[(2)]);
var inst_12202 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_12204__$1 = (function (){var statearr_12206 = state_12204;
(statearr_12206[(7)] = inst_12201);

return statearr_12206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12204__$1,inst_12202);
} else {
return null;
}
}
});})(c__7136__auto__))
;
return ((function (switch__7074__auto__,c__7136__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__7075__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__7075__auto____0 = (function (){
var statearr_12210 = [null,null,null,null,null,null,null,null];
(statearr_12210[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__7075__auto__);

(statearr_12210[(1)] = (1));

return statearr_12210;
});
var figwheel$client$enforce_project_plugin_$_state_machine__7075__auto____1 = (function (state_12204){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_12204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e12211){if((e12211 instanceof Object)){
var ex__7078__auto__ = e12211;
var statearr_12212_12214 = state_12204;
(statearr_12212_12214[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12215 = state_12204;
state_12204 = G__12215;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__7075__auto__ = function(state_12204){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__7075__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__7075__auto____1.call(this,state_12204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__7075__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__7075__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto__))
})();
var state__7138__auto__ = (function (){var statearr_12213 = f__7137__auto__.call(null);
(statearr_12213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);

return statearr_12213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__))
);

return c__7136__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__12216){
var map__12222 = p__12216;
var map__12222__$1 = ((cljs.core.seq_QMARK_.call(null,map__12222))?cljs.core.apply.call(null,cljs.core.hash_map,map__12222):map__12222);
var ed = map__12222__$1;
var formatted_exception = cljs.core.get.call(null,map__12222__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__12222__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__12222__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__12223_12227 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__12224_12228 = null;
var count__12225_12229 = (0);
var i__12226_12230 = (0);
while(true){
if((i__12226_12230 < count__12225_12229)){
var msg_12231 = cljs.core._nth.call(null,chunk__12224_12228,i__12226_12230);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12231);

var G__12232 = seq__12223_12227;
var G__12233 = chunk__12224_12228;
var G__12234 = count__12225_12229;
var G__12235 = (i__12226_12230 + (1));
seq__12223_12227 = G__12232;
chunk__12224_12228 = G__12233;
count__12225_12229 = G__12234;
i__12226_12230 = G__12235;
continue;
} else {
var temp__4423__auto___12236 = cljs.core.seq.call(null,seq__12223_12227);
if(temp__4423__auto___12236){
var seq__12223_12237__$1 = temp__4423__auto___12236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12223_12237__$1)){
var c__5316__auto___12238 = cljs.core.chunk_first.call(null,seq__12223_12237__$1);
var G__12239 = cljs.core.chunk_rest.call(null,seq__12223_12237__$1);
var G__12240 = c__5316__auto___12238;
var G__12241 = cljs.core.count.call(null,c__5316__auto___12238);
var G__12242 = (0);
seq__12223_12227 = G__12239;
chunk__12224_12228 = G__12240;
count__12225_12229 = G__12241;
i__12226_12230 = G__12242;
continue;
} else {
var msg_12243 = cljs.core.first.call(null,seq__12223_12237__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12243);

var G__12244 = cljs.core.next.call(null,seq__12223_12237__$1);
var G__12245 = null;
var G__12246 = (0);
var G__12247 = (0);
seq__12223_12227 = G__12244;
chunk__12224_12228 = G__12245;
count__12225_12229 = G__12246;
i__12226_12230 = G__12247;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__12248){
var map__12250 = p__12248;
var map__12250__$1 = ((cljs.core.seq_QMARK_.call(null,map__12250))?cljs.core.apply.call(null,cljs.core.hash_map,map__12250):map__12250);
var w = map__12250__$1;
var message = cljs.core.get.call(null,map__12250__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4519__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4519__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4519__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__12257 = cljs.core.seq.call(null,plugins);
var chunk__12258 = null;
var count__12259 = (0);
var i__12260 = (0);
while(true){
if((i__12260 < count__12259)){
var vec__12261 = cljs.core._nth.call(null,chunk__12258,i__12260);
var k = cljs.core.nth.call(null,vec__12261,(0),null);
var plugin = cljs.core.nth.call(null,vec__12261,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12263 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12257,chunk__12258,count__12259,i__12260,pl_12263,vec__12261,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_12263.call(null,msg_hist);
});})(seq__12257,chunk__12258,count__12259,i__12260,pl_12263,vec__12261,k,plugin))
);
} else {
}

var G__12264 = seq__12257;
var G__12265 = chunk__12258;
var G__12266 = count__12259;
var G__12267 = (i__12260 + (1));
seq__12257 = G__12264;
chunk__12258 = G__12265;
count__12259 = G__12266;
i__12260 = G__12267;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__12257);
if(temp__4423__auto__){
var seq__12257__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12257__$1)){
var c__5316__auto__ = cljs.core.chunk_first.call(null,seq__12257__$1);
var G__12268 = cljs.core.chunk_rest.call(null,seq__12257__$1);
var G__12269 = c__5316__auto__;
var G__12270 = cljs.core.count.call(null,c__5316__auto__);
var G__12271 = (0);
seq__12257 = G__12268;
chunk__12258 = G__12269;
count__12259 = G__12270;
i__12260 = G__12271;
continue;
} else {
var vec__12262 = cljs.core.first.call(null,seq__12257__$1);
var k = cljs.core.nth.call(null,vec__12262,(0),null);
var plugin = cljs.core.nth.call(null,vec__12262,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12272 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12257,chunk__12258,count__12259,i__12260,pl_12272,vec__12262,k,plugin,seq__12257__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_12272.call(null,msg_hist);
});})(seq__12257,chunk__12258,count__12259,i__12260,pl_12272,vec__12262,k,plugin,seq__12257__$1,temp__4423__auto__))
);
} else {
}

var G__12273 = cljs.core.next.call(null,seq__12257__$1);
var G__12274 = null;
var G__12275 = (0);
var G__12276 = (0);
seq__12257 = G__12273;
chunk__12258 = G__12274;
count__12259 = G__12275;
i__12260 = G__12276;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__12278 = arguments.length;
switch (G__12278) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
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
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__5571__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5571__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__12281){
var map__12282 = p__12281;
var map__12282__$1 = ((cljs.core.seq_QMARK_.call(null,map__12282))?cljs.core.apply.call(null,cljs.core.hash_map,map__12282):map__12282);
var opts = map__12282__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq12280){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12280));
});

//# sourceMappingURL=client.js.map?rel=1433864683242