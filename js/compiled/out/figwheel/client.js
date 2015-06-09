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
var G__10806__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__10806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10807__i = 0, G__10807__a = new Array(arguments.length -  0);
while (G__10807__i < G__10807__a.length) {G__10807__a[G__10807__i] = arguments[G__10807__i + 0]; ++G__10807__i;}
  args = new cljs.core.IndexedSeq(G__10807__a,0);
} 
return G__10806__delegate.call(this,args);};
G__10806.cljs$lang$maxFixedArity = 0;
G__10806.cljs$lang$applyTo = (function (arglist__10808){
var args = cljs.core.seq(arglist__10808);
return G__10806__delegate(args);
});
G__10806.cljs$core$IFn$_invoke$arity$variadic = G__10806__delegate;
return G__10806;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__10809){
var map__10811 = p__10809;
var map__10811__$1 = ((cljs.core.seq_QMARK_.call(null,map__10811))?cljs.core.apply.call(null,cljs.core.hash_map,map__10811):map__10811);
var message = cljs.core.get.call(null,map__10811__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__10811__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__7402__auto___10940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___10940,ch){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___10940,ch){
return (function (state_10914){
var state_val_10915 = (state_10914[(1)]);
if((state_val_10915 === (7))){
var inst_10910 = (state_10914[(2)]);
var state_10914__$1 = state_10914;
var statearr_10916_10941 = state_10914__$1;
(statearr_10916_10941[(2)] = inst_10910);

(statearr_10916_10941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10915 === (1))){
var state_10914__$1 = state_10914;
var statearr_10917_10942 = state_10914__$1;
(statearr_10917_10942[(2)] = null);

(statearr_10917_10942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10915 === (4))){
var inst_10878 = (state_10914[(7)]);
var inst_10878__$1 = (state_10914[(2)]);
var state_10914__$1 = (function (){var statearr_10918 = state_10914;
(statearr_10918[(7)] = inst_10878__$1);

return statearr_10918;
})();
if(cljs.core.truth_(inst_10878__$1)){
var statearr_10919_10943 = state_10914__$1;
(statearr_10919_10943[(1)] = (5));

} else {
var statearr_10920_10944 = state_10914__$1;
(statearr_10920_10944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10915 === (13))){
var state_10914__$1 = state_10914;
var statearr_10921_10945 = state_10914__$1;
(statearr_10921_10945[(2)] = null);

(statearr_10921_10945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10915 === (6))){
var state_10914__$1 = state_10914;
var statearr_10922_10946 = state_10914__$1;
(statearr_10922_10946[(2)] = null);

(statearr_10922_10946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10915 === (3))){
var inst_10912 = (state_10914[(2)]);
var state_10914__$1 = state_10914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10914__$1,inst_10912);
} else {
if((state_val_10915 === (12))){
var inst_10885 = (state_10914[(8)]);
var inst_10898 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_10885);
var inst_10899 = cljs.core.first.call(null,inst_10898);
var inst_10900 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_10899);
var inst_10901 = console.warn("Figwheel: Not loading code with warnings - ",inst_10900);
var state_10914__$1 = state_10914;
var statearr_10923_10947 = state_10914__$1;
(statearr_10923_10947[(2)] = inst_10901);

(statearr_10923_10947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10915 === (2))){
var state_10914__$1 = state_10914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10914__$1,(4),ch);
} else {
if((state_val_10915 === (11))){
var inst_10894 = (state_10914[(2)]);
var state_10914__$1 = state_10914;
var statearr_10924_10948 = state_10914__$1;
(statearr_10924_10948[(2)] = inst_10894);

(statearr_10924_10948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10915 === (9))){
var inst_10884 = (state_10914[(9)]);
var inst_10896 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_10884,opts);
var state_10914__$1 = state_10914;
if(cljs.core.truth_(inst_10896)){
var statearr_10925_10949 = state_10914__$1;
(statearr_10925_10949[(1)] = (12));

} else {
var statearr_10926_10950 = state_10914__$1;
(statearr_10926_10950[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10915 === (5))){
var inst_10878 = (state_10914[(7)]);
var inst_10884 = (state_10914[(9)]);
var inst_10880 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_10881 = (new cljs.core.PersistentArrayMap(null,2,inst_10880,null));
var inst_10882 = (new cljs.core.PersistentHashSet(null,inst_10881,null));
var inst_10883 = figwheel.client.focus_msgs.call(null,inst_10882,inst_10878);
var inst_10884__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_10883);
var inst_10885 = cljs.core.first.call(null,inst_10883);
var inst_10886 = figwheel.client.reload_file_state_QMARK_.call(null,inst_10884__$1,opts);
var state_10914__$1 = (function (){var statearr_10927 = state_10914;
(statearr_10927[(8)] = inst_10885);

(statearr_10927[(9)] = inst_10884__$1);

return statearr_10927;
})();
if(cljs.core.truth_(inst_10886)){
var statearr_10928_10951 = state_10914__$1;
(statearr_10928_10951[(1)] = (8));

} else {
var statearr_10929_10952 = state_10914__$1;
(statearr_10929_10952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10915 === (14))){
var inst_10904 = (state_10914[(2)]);
var state_10914__$1 = state_10914;
var statearr_10930_10953 = state_10914__$1;
(statearr_10930_10953[(2)] = inst_10904);

(statearr_10930_10953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10915 === (10))){
var inst_10906 = (state_10914[(2)]);
var state_10914__$1 = (function (){var statearr_10931 = state_10914;
(statearr_10931[(10)] = inst_10906);

return statearr_10931;
})();
var statearr_10932_10954 = state_10914__$1;
(statearr_10932_10954[(2)] = null);

(statearr_10932_10954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10915 === (8))){
var inst_10885 = (state_10914[(8)]);
var inst_10888 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10889 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_10885);
var inst_10890 = cljs.core.async.timeout.call(null,(1000));
var inst_10891 = [inst_10889,inst_10890];
var inst_10892 = (new cljs.core.PersistentVector(null,2,(5),inst_10888,inst_10891,null));
var state_10914__$1 = state_10914;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10914__$1,(11),inst_10892);
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
});})(c__7402__auto___10940,ch))
;
return ((function (switch__7340__auto__,c__7402__auto___10940,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__7341__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__7341__auto____0 = (function (){
var statearr_10936 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10936[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__7341__auto__);

(statearr_10936[(1)] = (1));

return statearr_10936;
});
var figwheel$client$file_reloader_plugin_$_state_machine__7341__auto____1 = (function (state_10914){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_10914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e10937){if((e10937 instanceof Object)){
var ex__7344__auto__ = e10937;
var statearr_10938_10955 = state_10914;
(statearr_10938_10955[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10956 = state_10914;
state_10914 = G__10956;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__7341__auto__ = function(state_10914){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__7341__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__7341__auto____1.call(this,state_10914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__7341__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__7341__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___10940,ch))
})();
var state__7404__auto__ = (function (){var statearr_10939 = f__7403__auto__.call(null);
(statearr_10939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___10940);

return statearr_10939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___10940,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__10957_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__10957_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_10964 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_10964){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_10962 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_10963 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_10962,_STAR_print_newline_STAR_10963,base_path_10964){
return (function() { 
var G__10965__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__10965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10966__i = 0, G__10966__a = new Array(arguments.length -  0);
while (G__10966__i < G__10966__a.length) {G__10966__a[G__10966__i] = arguments[G__10966__i + 0]; ++G__10966__i;}
  args = new cljs.core.IndexedSeq(G__10966__a,0);
} 
return G__10965__delegate.call(this,args);};
G__10965.cljs$lang$maxFixedArity = 0;
G__10965.cljs$lang$applyTo = (function (arglist__10967){
var args = cljs.core.seq(arglist__10967);
return G__10965__delegate(args);
});
G__10965.cljs$core$IFn$_invoke$arity$variadic = G__10965__delegate;
return G__10965;
})()
;})(_STAR_print_fn_STAR_10962,_STAR_print_newline_STAR_10963,base_path_10964))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10963;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10962;
}}catch (e10961){if((e10961 instanceof Error)){
var e = e10961;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_10964], null));
} else {
var e = e10961;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_10964))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__10968){
var map__10973 = p__10968;
var map__10973__$1 = ((cljs.core.seq_QMARK_.call(null,map__10973))?cljs.core.apply.call(null,cljs.core.hash_map,map__10973):map__10973);
var opts = map__10973__$1;
var build_id = cljs.core.get.call(null,map__10973__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__10973,map__10973__$1,opts,build_id){
return (function (p__10974){
var vec__10975 = p__10974;
var map__10976 = cljs.core.nth.call(null,vec__10975,(0),null);
var map__10976__$1 = ((cljs.core.seq_QMARK_.call(null,map__10976))?cljs.core.apply.call(null,cljs.core.hash_map,map__10976):map__10976);
var msg = map__10976__$1;
var msg_name = cljs.core.get.call(null,map__10976__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__10975,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__10975,map__10976,map__10976__$1,msg,msg_name,_,map__10973,map__10973__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__10975,map__10976,map__10976__$1,msg,msg_name,_,map__10973,map__10973__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__10973,map__10973__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__10980){
var vec__10981 = p__10980;
var map__10982 = cljs.core.nth.call(null,vec__10981,(0),null);
var map__10982__$1 = ((cljs.core.seq_QMARK_.call(null,map__10982))?cljs.core.apply.call(null,cljs.core.hash_map,map__10982):map__10982);
var msg = map__10982__$1;
var msg_name = cljs.core.get.call(null,map__10982__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__10981,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__10983){
var map__10991 = p__10983;
var map__10991__$1 = ((cljs.core.seq_QMARK_.call(null,map__10991))?cljs.core.apply.call(null,cljs.core.hash_map,map__10991):map__10991);
var on_compile_warning = cljs.core.get.call(null,map__10991__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__10991__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__10991,map__10991__$1,on_compile_warning,on_compile_fail){
return (function (p__10992){
var vec__10993 = p__10992;
var map__10994 = cljs.core.nth.call(null,vec__10993,(0),null);
var map__10994__$1 = ((cljs.core.seq_QMARK_.call(null,map__10994))?cljs.core.apply.call(null,cljs.core.hash_map,map__10994):map__10994);
var msg = map__10994__$1;
var msg_name = cljs.core.get.call(null,map__10994__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__10993,(1));
var pred__10995 = cljs.core._EQ_;
var expr__10996 = msg_name;
if(cljs.core.truth_(pred__10995.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__10996))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__10995.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__10996))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__10991,map__10991__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto__,msg_hist,msg_names,msg){
return (function (state_11197){
var state_val_11198 = (state_11197[(1)]);
if((state_val_11198 === (7))){
var inst_11131 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11199_11240 = state_11197__$1;
(statearr_11199_11240[(2)] = inst_11131);

(statearr_11199_11240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (20))){
var inst_11159 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_11197__$1 = state_11197;
if(cljs.core.truth_(inst_11159)){
var statearr_11200_11241 = state_11197__$1;
(statearr_11200_11241[(1)] = (22));

} else {
var statearr_11201_11242 = state_11197__$1;
(statearr_11201_11242[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (27))){
var inst_11171 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11172 = figwheel.client.heads_up.display_warning.call(null,inst_11171);
var state_11197__$1 = state_11197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11197__$1,(30),inst_11172);
} else {
if((state_val_11198 === (1))){
var inst_11119 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_11197__$1 = state_11197;
if(cljs.core.truth_(inst_11119)){
var statearr_11202_11243 = state_11197__$1;
(statearr_11202_11243[(1)] = (2));

} else {
var statearr_11203_11244 = state_11197__$1;
(statearr_11203_11244[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (24))){
var inst_11187 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11204_11245 = state_11197__$1;
(statearr_11204_11245[(2)] = inst_11187);

(statearr_11204_11245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (4))){
var inst_11195 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11197__$1,inst_11195);
} else {
if((state_val_11198 === (15))){
var inst_11147 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11148 = figwheel.client.format_messages.call(null,inst_11147);
var inst_11149 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11150 = figwheel.client.heads_up.display_error.call(null,inst_11148,inst_11149);
var state_11197__$1 = state_11197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11197__$1,(18),inst_11150);
} else {
if((state_val_11198 === (21))){
var inst_11189 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11205_11246 = state_11197__$1;
(statearr_11205_11246[(2)] = inst_11189);

(statearr_11205_11246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (31))){
var inst_11178 = figwheel.client.heads_up.flash_loaded.call(null);
var state_11197__$1 = state_11197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11197__$1,(34),inst_11178);
} else {
if((state_val_11198 === (32))){
var state_11197__$1 = state_11197;
var statearr_11206_11247 = state_11197__$1;
(statearr_11206_11247[(2)] = null);

(statearr_11206_11247[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (33))){
var inst_11183 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11207_11248 = state_11197__$1;
(statearr_11207_11248[(2)] = inst_11183);

(statearr_11207_11248[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (13))){
var inst_11137 = (state_11197[(2)]);
var inst_11138 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11139 = figwheel.client.format_messages.call(null,inst_11138);
var inst_11140 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11141 = figwheel.client.heads_up.display_error.call(null,inst_11139,inst_11140);
var state_11197__$1 = (function (){var statearr_11208 = state_11197;
(statearr_11208[(7)] = inst_11137);

return statearr_11208;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11197__$1,(14),inst_11141);
} else {
if((state_val_11198 === (22))){
var inst_11161 = figwheel.client.heads_up.clear.call(null);
var state_11197__$1 = state_11197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11197__$1,(25),inst_11161);
} else {
if((state_val_11198 === (29))){
var inst_11185 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11209_11249 = state_11197__$1;
(statearr_11209_11249[(2)] = inst_11185);

(statearr_11209_11249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (6))){
var inst_11127 = figwheel.client.heads_up.clear.call(null);
var state_11197__$1 = state_11197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11197__$1,(9),inst_11127);
} else {
if((state_val_11198 === (28))){
var inst_11176 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_11197__$1 = state_11197;
if(cljs.core.truth_(inst_11176)){
var statearr_11210_11250 = state_11197__$1;
(statearr_11210_11250[(1)] = (31));

} else {
var statearr_11211_11251 = state_11197__$1;
(statearr_11211_11251[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (25))){
var inst_11163 = (state_11197[(2)]);
var inst_11164 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11165 = figwheel.client.heads_up.display_warning.call(null,inst_11164);
var state_11197__$1 = (function (){var statearr_11212 = state_11197;
(statearr_11212[(8)] = inst_11163);

return statearr_11212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11197__$1,(26),inst_11165);
} else {
if((state_val_11198 === (34))){
var inst_11180 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11213_11252 = state_11197__$1;
(statearr_11213_11252[(2)] = inst_11180);

(statearr_11213_11252[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (17))){
var inst_11191 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11214_11253 = state_11197__$1;
(statearr_11214_11253[(2)] = inst_11191);

(statearr_11214_11253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (3))){
var inst_11133 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_11197__$1 = state_11197;
if(cljs.core.truth_(inst_11133)){
var statearr_11215_11254 = state_11197__$1;
(statearr_11215_11254[(1)] = (10));

} else {
var statearr_11216_11255 = state_11197__$1;
(statearr_11216_11255[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (12))){
var inst_11193 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11217_11256 = state_11197__$1;
(statearr_11217_11256[(2)] = inst_11193);

(statearr_11217_11256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (2))){
var inst_11121 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_11197__$1 = state_11197;
if(cljs.core.truth_(inst_11121)){
var statearr_11218_11257 = state_11197__$1;
(statearr_11218_11257[(1)] = (5));

} else {
var statearr_11219_11258 = state_11197__$1;
(statearr_11219_11258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (23))){
var inst_11169 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_11197__$1 = state_11197;
if(cljs.core.truth_(inst_11169)){
var statearr_11220_11259 = state_11197__$1;
(statearr_11220_11259[(1)] = (27));

} else {
var statearr_11221_11260 = state_11197__$1;
(statearr_11221_11260[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (19))){
var inst_11156 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11157 = figwheel.client.heads_up.append_message.call(null,inst_11156);
var state_11197__$1 = state_11197;
var statearr_11222_11261 = state_11197__$1;
(statearr_11222_11261[(2)] = inst_11157);

(statearr_11222_11261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (11))){
var inst_11145 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_11197__$1 = state_11197;
if(cljs.core.truth_(inst_11145)){
var statearr_11223_11262 = state_11197__$1;
(statearr_11223_11262[(1)] = (15));

} else {
var statearr_11224_11263 = state_11197__$1;
(statearr_11224_11263[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (9))){
var inst_11129 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11225_11264 = state_11197__$1;
(statearr_11225_11264[(2)] = inst_11129);

(statearr_11225_11264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (5))){
var inst_11123 = figwheel.client.heads_up.flash_loaded.call(null);
var state_11197__$1 = state_11197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11197__$1,(8),inst_11123);
} else {
if((state_val_11198 === (14))){
var inst_11143 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11226_11265 = state_11197__$1;
(statearr_11226_11265[(2)] = inst_11143);

(statearr_11226_11265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (26))){
var inst_11167 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11227_11266 = state_11197__$1;
(statearr_11227_11266[(2)] = inst_11167);

(statearr_11227_11266[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (16))){
var inst_11154 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_11197__$1 = state_11197;
if(cljs.core.truth_(inst_11154)){
var statearr_11228_11267 = state_11197__$1;
(statearr_11228_11267[(1)] = (19));

} else {
var statearr_11229_11268 = state_11197__$1;
(statearr_11229_11268[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (30))){
var inst_11174 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11230_11269 = state_11197__$1;
(statearr_11230_11269[(2)] = inst_11174);

(statearr_11230_11269[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (10))){
var inst_11135 = figwheel.client.heads_up.clear.call(null);
var state_11197__$1 = state_11197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11197__$1,(13),inst_11135);
} else {
if((state_val_11198 === (18))){
var inst_11152 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11231_11270 = state_11197__$1;
(statearr_11231_11270[(2)] = inst_11152);

(statearr_11231_11270[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11198 === (8))){
var inst_11125 = (state_11197[(2)]);
var state_11197__$1 = state_11197;
var statearr_11232_11271 = state_11197__$1;
(statearr_11232_11271[(2)] = inst_11125);

(statearr_11232_11271[(1)] = (7));


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
});})(c__7402__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__7340__auto__,c__7402__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7341__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7341__auto____0 = (function (){
var statearr_11236 = [null,null,null,null,null,null,null,null,null];
(statearr_11236[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7341__auto__);

(statearr_11236[(1)] = (1));

return statearr_11236;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7341__auto____1 = (function (state_11197){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_11197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e11237){if((e11237 instanceof Object)){
var ex__7344__auto__ = e11237;
var statearr_11238_11272 = state_11197;
(statearr_11238_11272[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11273 = state_11197;
state_11197 = G__11273;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7341__auto__ = function(state_11197){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7341__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7341__auto____1.call(this,state_11197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7341__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7341__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto__,msg_hist,msg_names,msg))
})();
var state__7404__auto__ = (function (){var statearr_11239 = f__7403__auto__.call(null);
(statearr_11239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto__);

return statearr_11239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto__,msg_hist,msg_names,msg))
);

return c__7402__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7402__auto___11336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto___11336,ch){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto___11336,ch){
return (function (state_11319){
var state_val_11320 = (state_11319[(1)]);
if((state_val_11320 === (1))){
var state_11319__$1 = state_11319;
var statearr_11321_11337 = state_11319__$1;
(statearr_11321_11337[(2)] = null);

(statearr_11321_11337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (2))){
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11319__$1,(4),ch);
} else {
if((state_val_11320 === (3))){
var inst_11317 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11319__$1,inst_11317);
} else {
if((state_val_11320 === (4))){
var inst_11307 = (state_11319[(7)]);
var inst_11307__$1 = (state_11319[(2)]);
var state_11319__$1 = (function (){var statearr_11322 = state_11319;
(statearr_11322[(7)] = inst_11307__$1);

return statearr_11322;
})();
if(cljs.core.truth_(inst_11307__$1)){
var statearr_11323_11338 = state_11319__$1;
(statearr_11323_11338[(1)] = (5));

} else {
var statearr_11324_11339 = state_11319__$1;
(statearr_11324_11339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (5))){
var inst_11307 = (state_11319[(7)]);
var inst_11309 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_11307);
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11319__$1,(8),inst_11309);
} else {
if((state_val_11320 === (6))){
var state_11319__$1 = state_11319;
var statearr_11325_11340 = state_11319__$1;
(statearr_11325_11340[(2)] = null);

(statearr_11325_11340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (7))){
var inst_11315 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11326_11341 = state_11319__$1;
(statearr_11326_11341[(2)] = inst_11315);

(statearr_11326_11341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (8))){
var inst_11311 = (state_11319[(2)]);
var state_11319__$1 = (function (){var statearr_11327 = state_11319;
(statearr_11327[(8)] = inst_11311);

return statearr_11327;
})();
var statearr_11328_11342 = state_11319__$1;
(statearr_11328_11342[(2)] = null);

(statearr_11328_11342[(1)] = (2));


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
});})(c__7402__auto___11336,ch))
;
return ((function (switch__7340__auto__,c__7402__auto___11336,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__7341__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__7341__auto____0 = (function (){
var statearr_11332 = [null,null,null,null,null,null,null,null,null];
(statearr_11332[(0)] = figwheel$client$heads_up_plugin_$_state_machine__7341__auto__);

(statearr_11332[(1)] = (1));

return statearr_11332;
});
var figwheel$client$heads_up_plugin_$_state_machine__7341__auto____1 = (function (state_11319){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_11319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e11333){if((e11333 instanceof Object)){
var ex__7344__auto__ = e11333;
var statearr_11334_11343 = state_11319;
(statearr_11334_11343[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11344 = state_11319;
state_11319 = G__11344;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__7341__auto__ = function(state_11319){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__7341__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__7341__auto____1.call(this,state_11319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__7341__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__7341__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto___11336,ch))
})();
var state__7404__auto__ = (function (){var statearr_11335 = f__7403__auto__.call(null);
(statearr_11335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto___11336);

return statearr_11335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto___11336,ch))
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
var c__7402__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7402__auto__){
return (function (){
var f__7403__auto__ = (function (){var switch__7340__auto__ = ((function (c__7402__auto__){
return (function (state_11365){
var state_val_11366 = (state_11365[(1)]);
if((state_val_11366 === (1))){
var inst_11360 = cljs.core.async.timeout.call(null,(3000));
var state_11365__$1 = state_11365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11365__$1,(2),inst_11360);
} else {
if((state_val_11366 === (2))){
var inst_11362 = (state_11365[(2)]);
var inst_11363 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_11365__$1 = (function (){var statearr_11367 = state_11365;
(statearr_11367[(7)] = inst_11362);

return statearr_11367;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11365__$1,inst_11363);
} else {
return null;
}
}
});})(c__7402__auto__))
;
return ((function (switch__7340__auto__,c__7402__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__7341__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__7341__auto____0 = (function (){
var statearr_11371 = [null,null,null,null,null,null,null,null];
(statearr_11371[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__7341__auto__);

(statearr_11371[(1)] = (1));

return statearr_11371;
});
var figwheel$client$enforce_project_plugin_$_state_machine__7341__auto____1 = (function (state_11365){
while(true){
var ret_value__7342__auto__ = (function (){try{while(true){
var result__7343__auto__ = switch__7340__auto__.call(null,state_11365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7343__auto__;
}
break;
}
}catch (e11372){if((e11372 instanceof Object)){
var ex__7344__auto__ = e11372;
var statearr_11373_11375 = state_11365;
(statearr_11373_11375[(5)] = ex__7344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11376 = state_11365;
state_11365 = G__11376;
continue;
} else {
return ret_value__7342__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__7341__auto__ = function(state_11365){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__7341__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__7341__auto____1.call(this,state_11365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__7341__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__7341__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__7341__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__7341__auto__;
})()
;})(switch__7340__auto__,c__7402__auto__))
})();
var state__7404__auto__ = (function (){var statearr_11374 = f__7403__auto__.call(null);
(statearr_11374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7402__auto__);

return statearr_11374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7404__auto__);
});})(c__7402__auto__))
);

return c__7402__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__11377){
var map__11383 = p__11377;
var map__11383__$1 = ((cljs.core.seq_QMARK_.call(null,map__11383))?cljs.core.apply.call(null,cljs.core.hash_map,map__11383):map__11383);
var ed = map__11383__$1;
var formatted_exception = cljs.core.get.call(null,map__11383__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__11383__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__11383__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__11384_11388 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__11385_11389 = null;
var count__11386_11390 = (0);
var i__11387_11391 = (0);
while(true){
if((i__11387_11391 < count__11386_11390)){
var msg_11392 = cljs.core._nth.call(null,chunk__11385_11389,i__11387_11391);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_11392);

var G__11393 = seq__11384_11388;
var G__11394 = chunk__11385_11389;
var G__11395 = count__11386_11390;
var G__11396 = (i__11387_11391 + (1));
seq__11384_11388 = G__11393;
chunk__11385_11389 = G__11394;
count__11386_11390 = G__11395;
i__11387_11391 = G__11396;
continue;
} else {
var temp__4423__auto___11397 = cljs.core.seq.call(null,seq__11384_11388);
if(temp__4423__auto___11397){
var seq__11384_11398__$1 = temp__4423__auto___11397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11384_11398__$1)){
var c__5316__auto___11399 = cljs.core.chunk_first.call(null,seq__11384_11398__$1);
var G__11400 = cljs.core.chunk_rest.call(null,seq__11384_11398__$1);
var G__11401 = c__5316__auto___11399;
var G__11402 = cljs.core.count.call(null,c__5316__auto___11399);
var G__11403 = (0);
seq__11384_11388 = G__11400;
chunk__11385_11389 = G__11401;
count__11386_11390 = G__11402;
i__11387_11391 = G__11403;
continue;
} else {
var msg_11404 = cljs.core.first.call(null,seq__11384_11398__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_11404);

var G__11405 = cljs.core.next.call(null,seq__11384_11398__$1);
var G__11406 = null;
var G__11407 = (0);
var G__11408 = (0);
seq__11384_11388 = G__11405;
chunk__11385_11389 = G__11406;
count__11386_11390 = G__11407;
i__11387_11391 = G__11408;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__11409){
var map__11411 = p__11409;
var map__11411__$1 = ((cljs.core.seq_QMARK_.call(null,map__11411))?cljs.core.apply.call(null,cljs.core.hash_map,map__11411):map__11411);
var w = map__11411__$1;
var message = cljs.core.get.call(null,map__11411__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__11418 = cljs.core.seq.call(null,plugins);
var chunk__11419 = null;
var count__11420 = (0);
var i__11421 = (0);
while(true){
if((i__11421 < count__11420)){
var vec__11422 = cljs.core._nth.call(null,chunk__11419,i__11421);
var k = cljs.core.nth.call(null,vec__11422,(0),null);
var plugin = cljs.core.nth.call(null,vec__11422,(1),null);
if(cljs.core.truth_(plugin)){
var pl_11424 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__11418,chunk__11419,count__11420,i__11421,pl_11424,vec__11422,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_11424.call(null,msg_hist);
});})(seq__11418,chunk__11419,count__11420,i__11421,pl_11424,vec__11422,k,plugin))
);
} else {
}

var G__11425 = seq__11418;
var G__11426 = chunk__11419;
var G__11427 = count__11420;
var G__11428 = (i__11421 + (1));
seq__11418 = G__11425;
chunk__11419 = G__11426;
count__11420 = G__11427;
i__11421 = G__11428;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__11418);
if(temp__4423__auto__){
var seq__11418__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11418__$1)){
var c__5316__auto__ = cljs.core.chunk_first.call(null,seq__11418__$1);
var G__11429 = cljs.core.chunk_rest.call(null,seq__11418__$1);
var G__11430 = c__5316__auto__;
var G__11431 = cljs.core.count.call(null,c__5316__auto__);
var G__11432 = (0);
seq__11418 = G__11429;
chunk__11419 = G__11430;
count__11420 = G__11431;
i__11421 = G__11432;
continue;
} else {
var vec__11423 = cljs.core.first.call(null,seq__11418__$1);
var k = cljs.core.nth.call(null,vec__11423,(0),null);
var plugin = cljs.core.nth.call(null,vec__11423,(1),null);
if(cljs.core.truth_(plugin)){
var pl_11433 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__11418,chunk__11419,count__11420,i__11421,pl_11433,vec__11423,k,plugin,seq__11418__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_11433.call(null,msg_hist);
});})(seq__11418,chunk__11419,count__11420,i__11421,pl_11433,vec__11423,k,plugin,seq__11418__$1,temp__4423__auto__))
);
} else {
}

var G__11434 = cljs.core.next.call(null,seq__11418__$1);
var G__11435 = null;
var G__11436 = (0);
var G__11437 = (0);
seq__11418 = G__11434;
chunk__11419 = G__11435;
count__11420 = G__11436;
i__11421 = G__11437;
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
var G__11439 = arguments.length;
switch (G__11439) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__11442){
var map__11443 = p__11442;
var map__11443__$1 = ((cljs.core.seq_QMARK_.call(null,map__11443))?cljs.core.apply.call(null,cljs.core.hash_map,map__11443):map__11443);
var opts = map__11443__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq11441){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11441));
});

//# sourceMappingURL=client.js.map?rel=1433863733188figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21456));
});

//# sourceMappingURL=client.js.map?rel=1433863731155