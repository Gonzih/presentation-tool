// Compiled by ClojureScript 0.0-3153 {}
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
var G__11910__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__11910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11911__i = 0, G__11911__a = new Array(arguments.length -  0);
while (G__11911__i < G__11911__a.length) {G__11911__a[G__11911__i] = arguments[G__11911__i + 0]; ++G__11911__i;}
  args = new cljs.core.IndexedSeq(G__11911__a,0);
} 
return G__11910__delegate.call(this,args);};
G__11910.cljs$lang$maxFixedArity = 0;
G__11910.cljs$lang$applyTo = (function (arglist__11912){
var args = cljs.core.seq(arglist__11912);
return G__11910__delegate(args);
});
G__11910.cljs$core$IFn$_invoke$arity$variadic = G__11910__delegate;
return G__11910;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__11913){
var map__11915 = p__11913;
var map__11915__$1 = ((cljs.core.seq_QMARK_.call(null,map__11915))?cljs.core.apply.call(null,cljs.core.hash_map,map__11915):map__11915);
var class$ = cljs.core.get.call(null,map__11915__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__11915__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4316__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4304__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4304__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4304__auto__;
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
var c__6821__auto___12044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___12044,ch){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___12044,ch){
return (function (state_12018){
var state_val_12019 = (state_12018[(1)]);
if((state_val_12019 === (7))){
var inst_12014 = (state_12018[(2)]);
var state_12018__$1 = state_12018;
var statearr_12020_12045 = state_12018__$1;
(statearr_12020_12045[(2)] = inst_12014);

(statearr_12020_12045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12019 === (1))){
var state_12018__$1 = state_12018;
var statearr_12021_12046 = state_12018__$1;
(statearr_12021_12046[(2)] = null);

(statearr_12021_12046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12019 === (4))){
var inst_11982 = (state_12018[(7)]);
var inst_11982__$1 = (state_12018[(2)]);
var state_12018__$1 = (function (){var statearr_12022 = state_12018;
(statearr_12022[(7)] = inst_11982__$1);

return statearr_12022;
})();
if(cljs.core.truth_(inst_11982__$1)){
var statearr_12023_12047 = state_12018__$1;
(statearr_12023_12047[(1)] = (5));

} else {
var statearr_12024_12048 = state_12018__$1;
(statearr_12024_12048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12019 === (13))){
var state_12018__$1 = state_12018;
var statearr_12025_12049 = state_12018__$1;
(statearr_12025_12049[(2)] = null);

(statearr_12025_12049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12019 === (6))){
var state_12018__$1 = state_12018;
var statearr_12026_12050 = state_12018__$1;
(statearr_12026_12050[(2)] = null);

(statearr_12026_12050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12019 === (3))){
var inst_12016 = (state_12018[(2)]);
var state_12018__$1 = state_12018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12018__$1,inst_12016);
} else {
if((state_val_12019 === (12))){
var inst_11989 = (state_12018[(8)]);
var inst_12002 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_11989);
var inst_12003 = cljs.core.first.call(null,inst_12002);
var inst_12004 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_12003);
var inst_12005 = console.warn("Figwheel: Not loading code with warnings - ",inst_12004);
var state_12018__$1 = state_12018;
var statearr_12027_12051 = state_12018__$1;
(statearr_12027_12051[(2)] = inst_12005);

(statearr_12027_12051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12019 === (2))){
var state_12018__$1 = state_12018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12018__$1,(4),ch);
} else {
if((state_val_12019 === (11))){
var inst_11998 = (state_12018[(2)]);
var state_12018__$1 = state_12018;
var statearr_12028_12052 = state_12018__$1;
(statearr_12028_12052[(2)] = inst_11998);

(statearr_12028_12052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12019 === (9))){
var inst_11988 = (state_12018[(9)]);
var inst_12000 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_11988,opts);
var state_12018__$1 = state_12018;
if(inst_12000){
var statearr_12029_12053 = state_12018__$1;
(statearr_12029_12053[(1)] = (12));

} else {
var statearr_12030_12054 = state_12018__$1;
(statearr_12030_12054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12019 === (5))){
var inst_11982 = (state_12018[(7)]);
var inst_11988 = (state_12018[(9)]);
var inst_11984 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_11985 = (new cljs.core.PersistentArrayMap(null,2,inst_11984,null));
var inst_11986 = (new cljs.core.PersistentHashSet(null,inst_11985,null));
var inst_11987 = figwheel.client.focus_msgs.call(null,inst_11986,inst_11982);
var inst_11988__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_11987);
var inst_11989 = cljs.core.first.call(null,inst_11987);
var inst_11990 = figwheel.client.reload_file_state_QMARK_.call(null,inst_11988__$1,opts);
var state_12018__$1 = (function (){var statearr_12031 = state_12018;
(statearr_12031[(8)] = inst_11989);

(statearr_12031[(9)] = inst_11988__$1);

return statearr_12031;
})();
if(cljs.core.truth_(inst_11990)){
var statearr_12032_12055 = state_12018__$1;
(statearr_12032_12055[(1)] = (8));

} else {
var statearr_12033_12056 = state_12018__$1;
(statearr_12033_12056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12019 === (14))){
var inst_12008 = (state_12018[(2)]);
var state_12018__$1 = state_12018;
var statearr_12034_12057 = state_12018__$1;
(statearr_12034_12057[(2)] = inst_12008);

(statearr_12034_12057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12019 === (10))){
var inst_12010 = (state_12018[(2)]);
var state_12018__$1 = (function (){var statearr_12035 = state_12018;
(statearr_12035[(10)] = inst_12010);

return statearr_12035;
})();
var statearr_12036_12058 = state_12018__$1;
(statearr_12036_12058[(2)] = null);

(statearr_12036_12058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12019 === (8))){
var inst_11989 = (state_12018[(8)]);
var inst_11992 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11993 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_11989);
var inst_11994 = cljs.core.async.timeout.call(null,(1000));
var inst_11995 = [inst_11993,inst_11994];
var inst_11996 = (new cljs.core.PersistentVector(null,2,(5),inst_11992,inst_11995,null));
var state_12018__$1 = state_12018;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12018__$1,(11),inst_11996);
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
});})(c__6821__auto___12044,ch))
;
return ((function (switch__6765__auto__,c__6821__auto___12044,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__6766__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__6766__auto____0 = (function (){
var statearr_12040 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12040[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__6766__auto__);

(statearr_12040[(1)] = (1));

return statearr_12040;
});
var figwheel$client$file_reloader_plugin_$_state_machine__6766__auto____1 = (function (state_12018){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_12018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e12041){if((e12041 instanceof Object)){
var ex__6769__auto__ = e12041;
var statearr_12042_12059 = state_12018;
(statearr_12042_12059[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12060 = state_12018;
state_12018 = G__12060;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__6766__auto__ = function(state_12018){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__6766__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__6766__auto____1.call(this,state_12018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__6766__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__6766__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___12044,ch))
})();
var state__6823__auto__ = (function (){var statearr_12043 = f__6822__auto__.call(null);
(statearr_12043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___12044);

return statearr_12043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___12044,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__12061_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__12061_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_12070 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__12063_SHARP_,p2__12062_SHARP_){
return [cljs.core.str(p2__12062_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_12070){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_12068 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_12069 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_12068,_STAR_print_newline_STAR_12069,base_path_12070){
return (function() { 
var G__12071__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__12071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12072__i = 0, G__12072__a = new Array(arguments.length -  0);
while (G__12072__i < G__12072__a.length) {G__12072__a[G__12072__i] = arguments[G__12072__i + 0]; ++G__12072__i;}
  args = new cljs.core.IndexedSeq(G__12072__a,0);
} 
return G__12071__delegate.call(this,args);};
G__12071.cljs$lang$maxFixedArity = 0;
G__12071.cljs$lang$applyTo = (function (arglist__12073){
var args = cljs.core.seq(arglist__12073);
return G__12071__delegate(args);
});
G__12071.cljs$core$IFn$_invoke$arity$variadic = G__12071__delegate;
return G__12071;
})()
;})(_STAR_print_fn_STAR_12068,_STAR_print_newline_STAR_12069,base_path_12070))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12069;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12068;
}}catch (e12067){if((e12067 instanceof Error)){
var e = e12067;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_12070], null));
} else {
var e = e12067;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_12070))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__12074){
var map__12079 = p__12074;
var map__12079__$1 = ((cljs.core.seq_QMARK_.call(null,map__12079))?cljs.core.apply.call(null,cljs.core.hash_map,map__12079):map__12079);
var opts = map__12079__$1;
var build_id = cljs.core.get.call(null,map__12079__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__12079,map__12079__$1,opts,build_id){
return (function (p__12080){
var vec__12081 = p__12080;
var map__12082 = cljs.core.nth.call(null,vec__12081,(0),null);
var map__12082__$1 = ((cljs.core.seq_QMARK_.call(null,map__12082))?cljs.core.apply.call(null,cljs.core.hash_map,map__12082):map__12082);
var msg = map__12082__$1;
var msg_name = cljs.core.get.call(null,map__12082__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12081,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__12081,map__12082,map__12082__$1,msg,msg_name,_,map__12079,map__12079__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__12081,map__12082,map__12082__$1,msg,msg_name,_,map__12079,map__12079__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__12079,map__12079__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__12086){
var vec__12087 = p__12086;
var map__12088 = cljs.core.nth.call(null,vec__12087,(0),null);
var map__12088__$1 = ((cljs.core.seq_QMARK_.call(null,map__12088))?cljs.core.apply.call(null,cljs.core.hash_map,map__12088):map__12088);
var msg = map__12088__$1;
var msg_name = cljs.core.get.call(null,map__12088__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12087,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__12089){
var map__12097 = p__12089;
var map__12097__$1 = ((cljs.core.seq_QMARK_.call(null,map__12097))?cljs.core.apply.call(null,cljs.core.hash_map,map__12097):map__12097);
var on_compile_fail = cljs.core.get.call(null,map__12097__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__12097__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__12097,map__12097__$1,on_compile_fail,on_compile_warning){
return (function (p__12098){
var vec__12099 = p__12098;
var map__12100 = cljs.core.nth.call(null,vec__12099,(0),null);
var map__12100__$1 = ((cljs.core.seq_QMARK_.call(null,map__12100))?cljs.core.apply.call(null,cljs.core.hash_map,map__12100):map__12100);
var msg = map__12100__$1;
var msg_name = cljs.core.get.call(null,map__12100__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12099,(1));
var pred__12101 = cljs.core._EQ_;
var expr__12102 = msg_name;
if(cljs.core.truth_(pred__12101.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__12102))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__12101.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__12102))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__12097,map__12097__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__6821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto__,msg_hist,msg_names,msg){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto__,msg_hist,msg_names,msg){
return (function (state_12299){
var state_val_12300 = (state_12299[(1)]);
if((state_val_12300 === (7))){
var inst_12235 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12301_12342 = state_12299__$1;
(statearr_12301_12342[(2)] = inst_12235);

(statearr_12301_12342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (20))){
var inst_12261 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_12299__$1 = state_12299;
if(inst_12261){
var statearr_12302_12343 = state_12299__$1;
(statearr_12302_12343[(1)] = (22));

} else {
var statearr_12303_12344 = state_12299__$1;
(statearr_12303_12344[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (27))){
var inst_12273 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12274 = figwheel.client.heads_up.display_warning.call(null,inst_12273);
var state_12299__$1 = state_12299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12299__$1,(30),inst_12274);
} else {
if((state_val_12300 === (1))){
var inst_12223 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_12299__$1 = state_12299;
if(cljs.core.truth_(inst_12223)){
var statearr_12304_12345 = state_12299__$1;
(statearr_12304_12345[(1)] = (2));

} else {
var statearr_12305_12346 = state_12299__$1;
(statearr_12305_12346[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (24))){
var inst_12289 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12306_12347 = state_12299__$1;
(statearr_12306_12347[(2)] = inst_12289);

(statearr_12306_12347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (4))){
var inst_12297 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12299__$1,inst_12297);
} else {
if((state_val_12300 === (15))){
var inst_12250 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12251 = figwheel.client.format_messages.call(null,inst_12250);
var inst_12252 = figwheel.client.heads_up.display_error.call(null,inst_12251);
var state_12299__$1 = state_12299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12299__$1,(18),inst_12252);
} else {
if((state_val_12300 === (21))){
var inst_12291 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12307_12348 = state_12299__$1;
(statearr_12307_12348[(2)] = inst_12291);

(statearr_12307_12348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (31))){
var inst_12280 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12299__$1 = state_12299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12299__$1,(34),inst_12280);
} else {
if((state_val_12300 === (32))){
var state_12299__$1 = state_12299;
var statearr_12308_12349 = state_12299__$1;
(statearr_12308_12349[(2)] = null);

(statearr_12308_12349[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (33))){
var inst_12285 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12309_12350 = state_12299__$1;
(statearr_12309_12350[(2)] = inst_12285);

(statearr_12309_12350[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (13))){
var inst_12241 = (state_12299[(2)]);
var inst_12242 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12243 = figwheel.client.format_messages.call(null,inst_12242);
var inst_12244 = figwheel.client.heads_up.display_error.call(null,inst_12243);
var state_12299__$1 = (function (){var statearr_12310 = state_12299;
(statearr_12310[(7)] = inst_12241);

return statearr_12310;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12299__$1,(14),inst_12244);
} else {
if((state_val_12300 === (22))){
var inst_12263 = figwheel.client.heads_up.clear.call(null);
var state_12299__$1 = state_12299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12299__$1,(25),inst_12263);
} else {
if((state_val_12300 === (29))){
var inst_12287 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12311_12351 = state_12299__$1;
(statearr_12311_12351[(2)] = inst_12287);

(statearr_12311_12351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (6))){
var inst_12231 = figwheel.client.heads_up.clear.call(null);
var state_12299__$1 = state_12299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12299__$1,(9),inst_12231);
} else {
if((state_val_12300 === (28))){
var inst_12278 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_12299__$1 = state_12299;
if(inst_12278){
var statearr_12312_12352 = state_12299__$1;
(statearr_12312_12352[(1)] = (31));

} else {
var statearr_12313_12353 = state_12299__$1;
(statearr_12313_12353[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (25))){
var inst_12265 = (state_12299[(2)]);
var inst_12266 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12267 = figwheel.client.heads_up.display_warning.call(null,inst_12266);
var state_12299__$1 = (function (){var statearr_12314 = state_12299;
(statearr_12314[(8)] = inst_12265);

return statearr_12314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12299__$1,(26),inst_12267);
} else {
if((state_val_12300 === (34))){
var inst_12282 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12315_12354 = state_12299__$1;
(statearr_12315_12354[(2)] = inst_12282);

(statearr_12315_12354[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (17))){
var inst_12293 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12316_12355 = state_12299__$1;
(statearr_12316_12355[(2)] = inst_12293);

(statearr_12316_12355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (3))){
var inst_12237 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_12299__$1 = state_12299;
if(inst_12237){
var statearr_12317_12356 = state_12299__$1;
(statearr_12317_12356[(1)] = (10));

} else {
var statearr_12318_12357 = state_12299__$1;
(statearr_12318_12357[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (12))){
var inst_12295 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12319_12358 = state_12299__$1;
(statearr_12319_12358[(2)] = inst_12295);

(statearr_12319_12358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (2))){
var inst_12225 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_12299__$1 = state_12299;
if(cljs.core.truth_(inst_12225)){
var statearr_12320_12359 = state_12299__$1;
(statearr_12320_12359[(1)] = (5));

} else {
var statearr_12321_12360 = state_12299__$1;
(statearr_12321_12360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (23))){
var inst_12271 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_12299__$1 = state_12299;
if(inst_12271){
var statearr_12322_12361 = state_12299__$1;
(statearr_12322_12361[(1)] = (27));

} else {
var statearr_12323_12362 = state_12299__$1;
(statearr_12323_12362[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (19))){
var inst_12258 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12259 = figwheel.client.heads_up.append_message.call(null,inst_12258);
var state_12299__$1 = state_12299;
var statearr_12324_12363 = state_12299__$1;
(statearr_12324_12363[(2)] = inst_12259);

(statearr_12324_12363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (11))){
var inst_12248 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_12299__$1 = state_12299;
if(inst_12248){
var statearr_12325_12364 = state_12299__$1;
(statearr_12325_12364[(1)] = (15));

} else {
var statearr_12326_12365 = state_12299__$1;
(statearr_12326_12365[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (9))){
var inst_12233 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12327_12366 = state_12299__$1;
(statearr_12327_12366[(2)] = inst_12233);

(statearr_12327_12366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (5))){
var inst_12227 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12299__$1 = state_12299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12299__$1,(8),inst_12227);
} else {
if((state_val_12300 === (14))){
var inst_12246 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12328_12367 = state_12299__$1;
(statearr_12328_12367[(2)] = inst_12246);

(statearr_12328_12367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (26))){
var inst_12269 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12329_12368 = state_12299__$1;
(statearr_12329_12368[(2)] = inst_12269);

(statearr_12329_12368[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (16))){
var inst_12256 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_12299__$1 = state_12299;
if(inst_12256){
var statearr_12330_12369 = state_12299__$1;
(statearr_12330_12369[(1)] = (19));

} else {
var statearr_12331_12370 = state_12299__$1;
(statearr_12331_12370[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (30))){
var inst_12276 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12332_12371 = state_12299__$1;
(statearr_12332_12371[(2)] = inst_12276);

(statearr_12332_12371[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (10))){
var inst_12239 = figwheel.client.heads_up.clear.call(null);
var state_12299__$1 = state_12299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12299__$1,(13),inst_12239);
} else {
if((state_val_12300 === (18))){
var inst_12254 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12333_12372 = state_12299__$1;
(statearr_12333_12372[(2)] = inst_12254);

(statearr_12333_12372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12300 === (8))){
var inst_12229 = (state_12299[(2)]);
var state_12299__$1 = state_12299;
var statearr_12334_12373 = state_12299__$1;
(statearr_12334_12373[(2)] = inst_12229);

(statearr_12334_12373[(1)] = (7));


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
});})(c__6821__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__6765__auto__,c__6821__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6766__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6766__auto____0 = (function (){
var statearr_12338 = [null,null,null,null,null,null,null,null,null];
(statearr_12338[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6766__auto__);

(statearr_12338[(1)] = (1));

return statearr_12338;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6766__auto____1 = (function (state_12299){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_12299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e12339){if((e12339 instanceof Object)){
var ex__6769__auto__ = e12339;
var statearr_12340_12374 = state_12299;
(statearr_12340_12374[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12375 = state_12299;
state_12299 = G__12375;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6766__auto__ = function(state_12299){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6766__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6766__auto____1.call(this,state_12299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6766__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6766__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto__,msg_hist,msg_names,msg))
})();
var state__6823__auto__ = (function (){var statearr_12341 = f__6822__auto__.call(null);
(statearr_12341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto__);

return statearr_12341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto__,msg_hist,msg_names,msg))
);

return c__6821__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__6821__auto___12438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___12438,ch){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___12438,ch){
return (function (state_12421){
var state_val_12422 = (state_12421[(1)]);
if((state_val_12422 === (8))){
var inst_12413 = (state_12421[(2)]);
var state_12421__$1 = (function (){var statearr_12423 = state_12421;
(statearr_12423[(7)] = inst_12413);

return statearr_12423;
})();
var statearr_12424_12439 = state_12421__$1;
(statearr_12424_12439[(2)] = null);

(statearr_12424_12439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12422 === (7))){
var inst_12417 = (state_12421[(2)]);
var state_12421__$1 = state_12421;
var statearr_12425_12440 = state_12421__$1;
(statearr_12425_12440[(2)] = inst_12417);

(statearr_12425_12440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12422 === (6))){
var state_12421__$1 = state_12421;
var statearr_12426_12441 = state_12421__$1;
(statearr_12426_12441[(2)] = null);

(statearr_12426_12441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12422 === (5))){
var inst_12409 = (state_12421[(8)]);
var inst_12411 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_12409);
var state_12421__$1 = state_12421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12421__$1,(8),inst_12411);
} else {
if((state_val_12422 === (4))){
var inst_12409 = (state_12421[(8)]);
var inst_12409__$1 = (state_12421[(2)]);
var state_12421__$1 = (function (){var statearr_12427 = state_12421;
(statearr_12427[(8)] = inst_12409__$1);

return statearr_12427;
})();
if(cljs.core.truth_(inst_12409__$1)){
var statearr_12428_12442 = state_12421__$1;
(statearr_12428_12442[(1)] = (5));

} else {
var statearr_12429_12443 = state_12421__$1;
(statearr_12429_12443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12422 === (3))){
var inst_12419 = (state_12421[(2)]);
var state_12421__$1 = state_12421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12421__$1,inst_12419);
} else {
if((state_val_12422 === (2))){
var state_12421__$1 = state_12421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12421__$1,(4),ch);
} else {
if((state_val_12422 === (1))){
var state_12421__$1 = state_12421;
var statearr_12430_12444 = state_12421__$1;
(statearr_12430_12444[(2)] = null);

(statearr_12430_12444[(1)] = (2));


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
});})(c__6821__auto___12438,ch))
;
return ((function (switch__6765__auto__,c__6821__auto___12438,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__6766__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__6766__auto____0 = (function (){
var statearr_12434 = [null,null,null,null,null,null,null,null,null];
(statearr_12434[(0)] = figwheel$client$heads_up_plugin_$_state_machine__6766__auto__);

(statearr_12434[(1)] = (1));

return statearr_12434;
});
var figwheel$client$heads_up_plugin_$_state_machine__6766__auto____1 = (function (state_12421){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_12421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e12435){if((e12435 instanceof Object)){
var ex__6769__auto__ = e12435;
var statearr_12436_12445 = state_12421;
(statearr_12436_12445[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12446 = state_12421;
state_12421 = G__12446;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__6766__auto__ = function(state_12421){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__6766__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__6766__auto____1.call(this,state_12421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__6766__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__6766__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___12438,ch))
})();
var state__6823__auto__ = (function (){var statearr_12437 = f__6822__auto__.call(null);
(statearr_12437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___12438);

return statearr_12437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___12438,ch))
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
var c__6821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto__){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto__){
return (function (state_12467){
var state_val_12468 = (state_12467[(1)]);
if((state_val_12468 === (2))){
var inst_12464 = (state_12467[(2)]);
var inst_12465 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_12467__$1 = (function (){var statearr_12469 = state_12467;
(statearr_12469[(7)] = inst_12464);

return statearr_12469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12467__$1,inst_12465);
} else {
if((state_val_12468 === (1))){
var inst_12462 = cljs.core.async.timeout.call(null,(3000));
var state_12467__$1 = state_12467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12467__$1,(2),inst_12462);
} else {
return null;
}
}
});})(c__6821__auto__))
;
return ((function (switch__6765__auto__,c__6821__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__6766__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__6766__auto____0 = (function (){
var statearr_12473 = [null,null,null,null,null,null,null,null];
(statearr_12473[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__6766__auto__);

(statearr_12473[(1)] = (1));

return statearr_12473;
});
var figwheel$client$enforce_project_plugin_$_state_machine__6766__auto____1 = (function (state_12467){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_12467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e12474){if((e12474 instanceof Object)){
var ex__6769__auto__ = e12474;
var statearr_12475_12477 = state_12467;
(statearr_12475_12477[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12478 = state_12467;
state_12467 = G__12478;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__6766__auto__ = function(state_12467){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__6766__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__6766__auto____1.call(this,state_12467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__6766__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__6766__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto__))
})();
var state__6823__auto__ = (function (){var statearr_12476 = f__6822__auto__.call(null);
(statearr_12476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto__);

return statearr_12476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto__))
);

return c__6821__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__4304__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__4304__auto__)){
return ("CustomEvent" in window);
} else {
return and__4304__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj12482 = {"detail":url};
return obj12482;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__12483){
var map__12489 = p__12483;
var map__12489__$1 = ((cljs.core.seq_QMARK_.call(null,map__12489))?cljs.core.apply.call(null,cljs.core.hash_map,map__12489):map__12489);
var ed = map__12489__$1;
var exception_data = cljs.core.get.call(null,map__12489__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__12489__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__12490_12494 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__12491_12495 = null;
var count__12492_12496 = (0);
var i__12493_12497 = (0);
while(true){
if((i__12493_12497 < count__12492_12496)){
var msg_12498 = cljs.core._nth.call(null,chunk__12491_12495,i__12493_12497);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12498);

var G__12499 = seq__12490_12494;
var G__12500 = chunk__12491_12495;
var G__12501 = count__12492_12496;
var G__12502 = (i__12493_12497 + (1));
seq__12490_12494 = G__12499;
chunk__12491_12495 = G__12500;
count__12492_12496 = G__12501;
i__12493_12497 = G__12502;
continue;
} else {
var temp__4126__auto___12503 = cljs.core.seq.call(null,seq__12490_12494);
if(temp__4126__auto___12503){
var seq__12490_12504__$1 = temp__4126__auto___12503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12490_12504__$1)){
var c__5101__auto___12505 = cljs.core.chunk_first.call(null,seq__12490_12504__$1);
var G__12506 = cljs.core.chunk_rest.call(null,seq__12490_12504__$1);
var G__12507 = c__5101__auto___12505;
var G__12508 = cljs.core.count.call(null,c__5101__auto___12505);
var G__12509 = (0);
seq__12490_12494 = G__12506;
chunk__12491_12495 = G__12507;
count__12492_12496 = G__12508;
i__12493_12497 = G__12509;
continue;
} else {
var msg_12510 = cljs.core.first.call(null,seq__12490_12504__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12510);

var G__12511 = cljs.core.next.call(null,seq__12490_12504__$1);
var G__12512 = null;
var G__12513 = (0);
var G__12514 = (0);
seq__12490_12494 = G__12511;
chunk__12491_12495 = G__12512;
count__12492_12496 = G__12513;
i__12493_12497 = G__12514;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__12515){
var map__12517 = p__12515;
var map__12517__$1 = ((cljs.core.seq_QMARK_.call(null,map__12517))?cljs.core.apply.call(null,cljs.core.hash_map,map__12517):map__12517);
var w = map__12517__$1;
var message = cljs.core.get.call(null,map__12517__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4304__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4304__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4304__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__12524 = cljs.core.seq.call(null,plugins);
var chunk__12525 = null;
var count__12526 = (0);
var i__12527 = (0);
while(true){
if((i__12527 < count__12526)){
var vec__12528 = cljs.core._nth.call(null,chunk__12525,i__12527);
var k = cljs.core.nth.call(null,vec__12528,(0),null);
var plugin = cljs.core.nth.call(null,vec__12528,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12530 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12524,chunk__12525,count__12526,i__12527,pl_12530,vec__12528,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_12530.call(null,msg_hist);
});})(seq__12524,chunk__12525,count__12526,i__12527,pl_12530,vec__12528,k,plugin))
);
} else {
}

var G__12531 = seq__12524;
var G__12532 = chunk__12525;
var G__12533 = count__12526;
var G__12534 = (i__12527 + (1));
seq__12524 = G__12531;
chunk__12525 = G__12532;
count__12526 = G__12533;
i__12527 = G__12534;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12524);
if(temp__4126__auto__){
var seq__12524__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12524__$1)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,seq__12524__$1);
var G__12535 = cljs.core.chunk_rest.call(null,seq__12524__$1);
var G__12536 = c__5101__auto__;
var G__12537 = cljs.core.count.call(null,c__5101__auto__);
var G__12538 = (0);
seq__12524 = G__12535;
chunk__12525 = G__12536;
count__12526 = G__12537;
i__12527 = G__12538;
continue;
} else {
var vec__12529 = cljs.core.first.call(null,seq__12524__$1);
var k = cljs.core.nth.call(null,vec__12529,(0),null);
var plugin = cljs.core.nth.call(null,vec__12529,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12539 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12524,chunk__12525,count__12526,i__12527,pl_12539,vec__12529,k,plugin,seq__12524__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_12539.call(null,msg_hist);
});})(seq__12524,chunk__12525,count__12526,i__12527,pl_12539,vec__12529,k,plugin,seq__12524__$1,temp__4126__auto__))
);
} else {
}

var G__12540 = cljs.core.next.call(null,seq__12524__$1);
var G__12541 = null;
var G__12542 = (0);
var G__12543 = (0);
seq__12524 = G__12540;
chunk__12525 = G__12541;
count__12526 = G__12542;
i__12527 = G__12543;
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
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
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
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__12544){
var map__12546 = p__12544;
var map__12546__$1 = ((cljs.core.seq_QMARK_.call(null,map__12546))?cljs.core.apply.call(null,cljs.core.hash_map,map__12546):map__12546);
var opts = map__12546__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__12544 = null;
if (arguments.length > 0) {
var G__12547__i = 0, G__12547__a = new Array(arguments.length -  0);
while (G__12547__i < G__12547__a.length) {G__12547__a[G__12547__i] = arguments[G__12547__i + 0]; ++G__12547__i;}
  p__12544 = new cljs.core.IndexedSeq(G__12547__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__12544);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__12548){
var p__12544 = cljs.core.seq(arglist__12548);
return figwheel$client$watch_and_reload__delegate(p__12544);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1427723156442