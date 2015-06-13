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
var G__11655__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__11655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11656__i = 0, G__11656__a = new Array(arguments.length -  0);
while (G__11656__i < G__11656__a.length) {G__11656__a[G__11656__i] = arguments[G__11656__i + 0]; ++G__11656__i;}
  args = new cljs.core.IndexedSeq(G__11656__a,0);
} 
return G__11655__delegate.call(this,args);};
G__11655.cljs$lang$maxFixedArity = 0;
G__11655.cljs$lang$applyTo = (function (arglist__11657){
var args = cljs.core.seq(arglist__11657);
return G__11655__delegate(args);
});
G__11655.cljs$core$IFn$_invoke$arity$variadic = G__11655__delegate;
return G__11655;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__11658){
var map__11660 = p__11658;
var map__11660__$1 = ((cljs.core.seq_QMARK_.call(null,map__11660))?cljs.core.apply.call(null,cljs.core.hash_map,map__11660):map__11660);
var message = cljs.core.get.call(null,map__11660__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__11660__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4538__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4538__auto__)){
return or__4538__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4526__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4526__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4526__auto__;
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
var c__7146__auto___11789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___11789,ch){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___11789,ch){
return (function (state_11763){
var state_val_11764 = (state_11763[(1)]);
if((state_val_11764 === (7))){
var inst_11759 = (state_11763[(2)]);
var state_11763__$1 = state_11763;
var statearr_11765_11790 = state_11763__$1;
(statearr_11765_11790[(2)] = inst_11759);

(statearr_11765_11790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (1))){
var state_11763__$1 = state_11763;
var statearr_11766_11791 = state_11763__$1;
(statearr_11766_11791[(2)] = null);

(statearr_11766_11791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (4))){
var inst_11727 = (state_11763[(7)]);
var inst_11727__$1 = (state_11763[(2)]);
var state_11763__$1 = (function (){var statearr_11767 = state_11763;
(statearr_11767[(7)] = inst_11727__$1);

return statearr_11767;
})();
if(cljs.core.truth_(inst_11727__$1)){
var statearr_11768_11792 = state_11763__$1;
(statearr_11768_11792[(1)] = (5));

} else {
var statearr_11769_11793 = state_11763__$1;
(statearr_11769_11793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (13))){
var state_11763__$1 = state_11763;
var statearr_11770_11794 = state_11763__$1;
(statearr_11770_11794[(2)] = null);

(statearr_11770_11794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (6))){
var state_11763__$1 = state_11763;
var statearr_11771_11795 = state_11763__$1;
(statearr_11771_11795[(2)] = null);

(statearr_11771_11795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (3))){
var inst_11761 = (state_11763[(2)]);
var state_11763__$1 = state_11763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11763__$1,inst_11761);
} else {
if((state_val_11764 === (12))){
var inst_11734 = (state_11763[(8)]);
var inst_11747 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_11734);
var inst_11748 = cljs.core.first.call(null,inst_11747);
var inst_11749 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_11748);
var inst_11750 = console.warn("Figwheel: Not loading code with warnings - ",inst_11749);
var state_11763__$1 = state_11763;
var statearr_11772_11796 = state_11763__$1;
(statearr_11772_11796[(2)] = inst_11750);

(statearr_11772_11796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (2))){
var state_11763__$1 = state_11763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11763__$1,(4),ch);
} else {
if((state_val_11764 === (11))){
var inst_11743 = (state_11763[(2)]);
var state_11763__$1 = state_11763;
var statearr_11773_11797 = state_11763__$1;
(statearr_11773_11797[(2)] = inst_11743);

(statearr_11773_11797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (9))){
var inst_11733 = (state_11763[(9)]);
var inst_11745 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_11733,opts);
var state_11763__$1 = state_11763;
if(cljs.core.truth_(inst_11745)){
var statearr_11774_11798 = state_11763__$1;
(statearr_11774_11798[(1)] = (12));

} else {
var statearr_11775_11799 = state_11763__$1;
(statearr_11775_11799[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (5))){
var inst_11727 = (state_11763[(7)]);
var inst_11733 = (state_11763[(9)]);
var inst_11729 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_11730 = (new cljs.core.PersistentArrayMap(null,2,inst_11729,null));
var inst_11731 = (new cljs.core.PersistentHashSet(null,inst_11730,null));
var inst_11732 = figwheel.client.focus_msgs.call(null,inst_11731,inst_11727);
var inst_11733__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_11732);
var inst_11734 = cljs.core.first.call(null,inst_11732);
var inst_11735 = figwheel.client.reload_file_state_QMARK_.call(null,inst_11733__$1,opts);
var state_11763__$1 = (function (){var statearr_11776 = state_11763;
(statearr_11776[(8)] = inst_11734);

(statearr_11776[(9)] = inst_11733__$1);

return statearr_11776;
})();
if(cljs.core.truth_(inst_11735)){
var statearr_11777_11800 = state_11763__$1;
(statearr_11777_11800[(1)] = (8));

} else {
var statearr_11778_11801 = state_11763__$1;
(statearr_11778_11801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (14))){
var inst_11753 = (state_11763[(2)]);
var state_11763__$1 = state_11763;
var statearr_11779_11802 = state_11763__$1;
(statearr_11779_11802[(2)] = inst_11753);

(statearr_11779_11802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (10))){
var inst_11755 = (state_11763[(2)]);
var state_11763__$1 = (function (){var statearr_11780 = state_11763;
(statearr_11780[(10)] = inst_11755);

return statearr_11780;
})();
var statearr_11781_11803 = state_11763__$1;
(statearr_11781_11803[(2)] = null);

(statearr_11781_11803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11764 === (8))){
var inst_11734 = (state_11763[(8)]);
var inst_11737 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11738 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_11734);
var inst_11739 = cljs.core.async.timeout.call(null,(1000));
var inst_11740 = [inst_11738,inst_11739];
var inst_11741 = (new cljs.core.PersistentVector(null,2,(5),inst_11737,inst_11740,null));
var state_11763__$1 = state_11763;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11763__$1,(11),inst_11741);
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
});})(c__7146__auto___11789,ch))
;
return ((function (switch__7084__auto__,c__7146__auto___11789,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__7085__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__7085__auto____0 = (function (){
var statearr_11785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11785[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__7085__auto__);

(statearr_11785[(1)] = (1));

return statearr_11785;
});
var figwheel$client$file_reloader_plugin_$_state_machine__7085__auto____1 = (function (state_11763){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_11763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e11786){if((e11786 instanceof Object)){
var ex__7088__auto__ = e11786;
var statearr_11787_11804 = state_11763;
(statearr_11787_11804[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11805 = state_11763;
state_11763 = G__11805;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__7085__auto__ = function(state_11763){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__7085__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__7085__auto____1.call(this,state_11763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__7085__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__7085__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___11789,ch))
})();
var state__7148__auto__ = (function (){var statearr_11788 = f__7147__auto__.call(null);
(statearr_11788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___11789);

return statearr_11788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___11789,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__11806_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__11806_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_11813 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_11813){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_11811 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_11812 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_11811,_STAR_print_newline_STAR_11812,base_path_11813){
return (function() { 
var G__11814__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__11814 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11815__i = 0, G__11815__a = new Array(arguments.length -  0);
while (G__11815__i < G__11815__a.length) {G__11815__a[G__11815__i] = arguments[G__11815__i + 0]; ++G__11815__i;}
  args = new cljs.core.IndexedSeq(G__11815__a,0);
} 
return G__11814__delegate.call(this,args);};
G__11814.cljs$lang$maxFixedArity = 0;
G__11814.cljs$lang$applyTo = (function (arglist__11816){
var args = cljs.core.seq(arglist__11816);
return G__11814__delegate(args);
});
G__11814.cljs$core$IFn$_invoke$arity$variadic = G__11814__delegate;
return G__11814;
})()
;})(_STAR_print_fn_STAR_11811,_STAR_print_newline_STAR_11812,base_path_11813))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11812;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11811;
}}catch (e11810){if((e11810 instanceof Error)){
var e = e11810;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_11813], null));
} else {
var e = e11810;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_11813))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__11817){
var map__11822 = p__11817;
var map__11822__$1 = ((cljs.core.seq_QMARK_.call(null,map__11822))?cljs.core.apply.call(null,cljs.core.hash_map,map__11822):map__11822);
var opts = map__11822__$1;
var build_id = cljs.core.get.call(null,map__11822__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__11822,map__11822__$1,opts,build_id){
return (function (p__11823){
var vec__11824 = p__11823;
var map__11825 = cljs.core.nth.call(null,vec__11824,(0),null);
var map__11825__$1 = ((cljs.core.seq_QMARK_.call(null,map__11825))?cljs.core.apply.call(null,cljs.core.hash_map,map__11825):map__11825);
var msg = map__11825__$1;
var msg_name = cljs.core.get.call(null,map__11825__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__11824,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__11824,map__11825,map__11825__$1,msg,msg_name,_,map__11822,map__11822__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__11824,map__11825,map__11825__$1,msg,msg_name,_,map__11822,map__11822__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__11822,map__11822__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__11829){
var vec__11830 = p__11829;
var map__11831 = cljs.core.nth.call(null,vec__11830,(0),null);
var map__11831__$1 = ((cljs.core.seq_QMARK_.call(null,map__11831))?cljs.core.apply.call(null,cljs.core.hash_map,map__11831):map__11831);
var msg = map__11831__$1;
var msg_name = cljs.core.get.call(null,map__11831__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__11830,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__11832){
var map__11840 = p__11832;
var map__11840__$1 = ((cljs.core.seq_QMARK_.call(null,map__11840))?cljs.core.apply.call(null,cljs.core.hash_map,map__11840):map__11840);
var on_compile_warning = cljs.core.get.call(null,map__11840__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__11840__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__11840,map__11840__$1,on_compile_warning,on_compile_fail){
return (function (p__11841){
var vec__11842 = p__11841;
var map__11843 = cljs.core.nth.call(null,vec__11842,(0),null);
var map__11843__$1 = ((cljs.core.seq_QMARK_.call(null,map__11843))?cljs.core.apply.call(null,cljs.core.hash_map,map__11843):map__11843);
var msg = map__11843__$1;
var msg_name = cljs.core.get.call(null,map__11843__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__11842,(1));
var pred__11844 = cljs.core._EQ_;
var expr__11845 = msg_name;
if(cljs.core.truth_(pred__11844.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__11845))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__11844.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__11845))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__11840,map__11840__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto__,msg_hist,msg_names,msg){
return (function (state_12046){
var state_val_12047 = (state_12046[(1)]);
if((state_val_12047 === (7))){
var inst_11980 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12048_12089 = state_12046__$1;
(statearr_12048_12089[(2)] = inst_11980);

(statearr_12048_12089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (20))){
var inst_12008 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_12008)){
var statearr_12049_12090 = state_12046__$1;
(statearr_12049_12090[(1)] = (22));

} else {
var statearr_12050_12091 = state_12046__$1;
(statearr_12050_12091[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (27))){
var inst_12020 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12021 = figwheel.client.heads_up.display_warning.call(null,inst_12020);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12046__$1,(30),inst_12021);
} else {
if((state_val_12047 === (1))){
var inst_11968 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_11968)){
var statearr_12051_12092 = state_12046__$1;
(statearr_12051_12092[(1)] = (2));

} else {
var statearr_12052_12093 = state_12046__$1;
(statearr_12052_12093[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (24))){
var inst_12036 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12053_12094 = state_12046__$1;
(statearr_12053_12094[(2)] = inst_12036);

(statearr_12053_12094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (4))){
var inst_12044 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12046__$1,inst_12044);
} else {
if((state_val_12047 === (15))){
var inst_11996 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11997 = figwheel.client.format_messages.call(null,inst_11996);
var inst_11998 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11999 = figwheel.client.heads_up.display_error.call(null,inst_11997,inst_11998);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12046__$1,(18),inst_11999);
} else {
if((state_val_12047 === (21))){
var inst_12038 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12054_12095 = state_12046__$1;
(statearr_12054_12095[(2)] = inst_12038);

(statearr_12054_12095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (31))){
var inst_12027 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12046__$1,(34),inst_12027);
} else {
if((state_val_12047 === (32))){
var state_12046__$1 = state_12046;
var statearr_12055_12096 = state_12046__$1;
(statearr_12055_12096[(2)] = null);

(statearr_12055_12096[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (33))){
var inst_12032 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12056_12097 = state_12046__$1;
(statearr_12056_12097[(2)] = inst_12032);

(statearr_12056_12097[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (13))){
var inst_11986 = (state_12046[(2)]);
var inst_11987 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11988 = figwheel.client.format_messages.call(null,inst_11987);
var inst_11989 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_11990 = figwheel.client.heads_up.display_error.call(null,inst_11988,inst_11989);
var state_12046__$1 = (function (){var statearr_12057 = state_12046;
(statearr_12057[(7)] = inst_11986);

return statearr_12057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12046__$1,(14),inst_11990);
} else {
if((state_val_12047 === (22))){
var inst_12010 = figwheel.client.heads_up.clear.call(null);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12046__$1,(25),inst_12010);
} else {
if((state_val_12047 === (29))){
var inst_12034 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12058_12098 = state_12046__$1;
(statearr_12058_12098[(2)] = inst_12034);

(statearr_12058_12098[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (6))){
var inst_11976 = figwheel.client.heads_up.clear.call(null);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12046__$1,(9),inst_11976);
} else {
if((state_val_12047 === (28))){
var inst_12025 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_12025)){
var statearr_12059_12099 = state_12046__$1;
(statearr_12059_12099[(1)] = (31));

} else {
var statearr_12060_12100 = state_12046__$1;
(statearr_12060_12100[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (25))){
var inst_12012 = (state_12046[(2)]);
var inst_12013 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12014 = figwheel.client.heads_up.display_warning.call(null,inst_12013);
var state_12046__$1 = (function (){var statearr_12061 = state_12046;
(statearr_12061[(8)] = inst_12012);

return statearr_12061;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12046__$1,(26),inst_12014);
} else {
if((state_val_12047 === (34))){
var inst_12029 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12062_12101 = state_12046__$1;
(statearr_12062_12101[(2)] = inst_12029);

(statearr_12062_12101[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (17))){
var inst_12040 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12063_12102 = state_12046__$1;
(statearr_12063_12102[(2)] = inst_12040);

(statearr_12063_12102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (3))){
var inst_11982 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_11982)){
var statearr_12064_12103 = state_12046__$1;
(statearr_12064_12103[(1)] = (10));

} else {
var statearr_12065_12104 = state_12046__$1;
(statearr_12065_12104[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (12))){
var inst_12042 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12066_12105 = state_12046__$1;
(statearr_12066_12105[(2)] = inst_12042);

(statearr_12066_12105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (2))){
var inst_11970 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_11970)){
var statearr_12067_12106 = state_12046__$1;
(statearr_12067_12106[(1)] = (5));

} else {
var statearr_12068_12107 = state_12046__$1;
(statearr_12068_12107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (23))){
var inst_12018 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_12018)){
var statearr_12069_12108 = state_12046__$1;
(statearr_12069_12108[(1)] = (27));

} else {
var statearr_12070_12109 = state_12046__$1;
(statearr_12070_12109[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (19))){
var inst_12005 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12006 = figwheel.client.heads_up.append_message.call(null,inst_12005);
var state_12046__$1 = state_12046;
var statearr_12071_12110 = state_12046__$1;
(statearr_12071_12110[(2)] = inst_12006);

(statearr_12071_12110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (11))){
var inst_11994 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_11994)){
var statearr_12072_12111 = state_12046__$1;
(statearr_12072_12111[(1)] = (15));

} else {
var statearr_12073_12112 = state_12046__$1;
(statearr_12073_12112[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (9))){
var inst_11978 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12074_12113 = state_12046__$1;
(statearr_12074_12113[(2)] = inst_11978);

(statearr_12074_12113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (5))){
var inst_11972 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12046__$1,(8),inst_11972);
} else {
if((state_val_12047 === (14))){
var inst_11992 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12075_12114 = state_12046__$1;
(statearr_12075_12114[(2)] = inst_11992);

(statearr_12075_12114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (26))){
var inst_12016 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12076_12115 = state_12046__$1;
(statearr_12076_12115[(2)] = inst_12016);

(statearr_12076_12115[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (16))){
var inst_12003 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_12003)){
var statearr_12077_12116 = state_12046__$1;
(statearr_12077_12116[(1)] = (19));

} else {
var statearr_12078_12117 = state_12046__$1;
(statearr_12078_12117[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (30))){
var inst_12023 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12079_12118 = state_12046__$1;
(statearr_12079_12118[(2)] = inst_12023);

(statearr_12079_12118[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (10))){
var inst_11984 = figwheel.client.heads_up.clear.call(null);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12046__$1,(13),inst_11984);
} else {
if((state_val_12047 === (18))){
var inst_12001 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12080_12119 = state_12046__$1;
(statearr_12080_12119[(2)] = inst_12001);

(statearr_12080_12119[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12047 === (8))){
var inst_11974 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12081_12120 = state_12046__$1;
(statearr_12081_12120[(2)] = inst_11974);

(statearr_12081_12120[(1)] = (7));


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
});})(c__7146__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__7084__auto__,c__7146__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7085__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7085__auto____0 = (function (){
var statearr_12085 = [null,null,null,null,null,null,null,null,null];
(statearr_12085[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7085__auto__);

(statearr_12085[(1)] = (1));

return statearr_12085;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7085__auto____1 = (function (state_12046){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_12046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e12086){if((e12086 instanceof Object)){
var ex__7088__auto__ = e12086;
var statearr_12087_12121 = state_12046;
(statearr_12087_12121[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12122 = state_12046;
state_12046 = G__12122;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7085__auto__ = function(state_12046){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7085__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7085__auto____1.call(this,state_12046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7085__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7085__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto__,msg_hist,msg_names,msg))
})();
var state__7148__auto__ = (function (){var statearr_12088 = f__7147__auto__.call(null);
(statearr_12088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto__);

return statearr_12088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto__,msg_hist,msg_names,msg))
);

return c__7146__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7146__auto___12185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___12185,ch){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___12185,ch){
return (function (state_12168){
var state_val_12169 = (state_12168[(1)]);
if((state_val_12169 === (1))){
var state_12168__$1 = state_12168;
var statearr_12170_12186 = state_12168__$1;
(statearr_12170_12186[(2)] = null);

(statearr_12170_12186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12169 === (2))){
var state_12168__$1 = state_12168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12168__$1,(4),ch);
} else {
if((state_val_12169 === (3))){
var inst_12166 = (state_12168[(2)]);
var state_12168__$1 = state_12168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12168__$1,inst_12166);
} else {
if((state_val_12169 === (4))){
var inst_12156 = (state_12168[(7)]);
var inst_12156__$1 = (state_12168[(2)]);
var state_12168__$1 = (function (){var statearr_12171 = state_12168;
(statearr_12171[(7)] = inst_12156__$1);

return statearr_12171;
})();
if(cljs.core.truth_(inst_12156__$1)){
var statearr_12172_12187 = state_12168__$1;
(statearr_12172_12187[(1)] = (5));

} else {
var statearr_12173_12188 = state_12168__$1;
(statearr_12173_12188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12169 === (5))){
var inst_12156 = (state_12168[(7)]);
var inst_12158 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_12156);
var state_12168__$1 = state_12168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12168__$1,(8),inst_12158);
} else {
if((state_val_12169 === (6))){
var state_12168__$1 = state_12168;
var statearr_12174_12189 = state_12168__$1;
(statearr_12174_12189[(2)] = null);

(statearr_12174_12189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12169 === (7))){
var inst_12164 = (state_12168[(2)]);
var state_12168__$1 = state_12168;
var statearr_12175_12190 = state_12168__$1;
(statearr_12175_12190[(2)] = inst_12164);

(statearr_12175_12190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12169 === (8))){
var inst_12160 = (state_12168[(2)]);
var state_12168__$1 = (function (){var statearr_12176 = state_12168;
(statearr_12176[(8)] = inst_12160);

return statearr_12176;
})();
var statearr_12177_12191 = state_12168__$1;
(statearr_12177_12191[(2)] = null);

(statearr_12177_12191[(1)] = (2));


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
});})(c__7146__auto___12185,ch))
;
return ((function (switch__7084__auto__,c__7146__auto___12185,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__7085__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__7085__auto____0 = (function (){
var statearr_12181 = [null,null,null,null,null,null,null,null,null];
(statearr_12181[(0)] = figwheel$client$heads_up_plugin_$_state_machine__7085__auto__);

(statearr_12181[(1)] = (1));

return statearr_12181;
});
var figwheel$client$heads_up_plugin_$_state_machine__7085__auto____1 = (function (state_12168){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_12168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e12182){if((e12182 instanceof Object)){
var ex__7088__auto__ = e12182;
var statearr_12183_12192 = state_12168;
(statearr_12183_12192[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12193 = state_12168;
state_12168 = G__12193;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__7085__auto__ = function(state_12168){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__7085__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__7085__auto____1.call(this,state_12168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__7085__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__7085__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___12185,ch))
})();
var state__7148__auto__ = (function (){var statearr_12184 = f__7147__auto__.call(null);
(statearr_12184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___12185);

return statearr_12184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___12185,ch))
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
var c__7146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto__){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto__){
return (function (state_12214){
var state_val_12215 = (state_12214[(1)]);
if((state_val_12215 === (1))){
var inst_12209 = cljs.core.async.timeout.call(null,(3000));
var state_12214__$1 = state_12214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12214__$1,(2),inst_12209);
} else {
if((state_val_12215 === (2))){
var inst_12211 = (state_12214[(2)]);
var inst_12212 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_12214__$1 = (function (){var statearr_12216 = state_12214;
(statearr_12216[(7)] = inst_12211);

return statearr_12216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12214__$1,inst_12212);
} else {
return null;
}
}
});})(c__7146__auto__))
;
return ((function (switch__7084__auto__,c__7146__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__7085__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__7085__auto____0 = (function (){
var statearr_12220 = [null,null,null,null,null,null,null,null];
(statearr_12220[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__7085__auto__);

(statearr_12220[(1)] = (1));

return statearr_12220;
});
var figwheel$client$enforce_project_plugin_$_state_machine__7085__auto____1 = (function (state_12214){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_12214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e12221){if((e12221 instanceof Object)){
var ex__7088__auto__ = e12221;
var statearr_12222_12224 = state_12214;
(statearr_12222_12224[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12225 = state_12214;
state_12214 = G__12225;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__7085__auto__ = function(state_12214){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__7085__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__7085__auto____1.call(this,state_12214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__7085__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__7085__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto__))
})();
var state__7148__auto__ = (function (){var statearr_12223 = f__7147__auto__.call(null);
(statearr_12223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto__);

return statearr_12223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto__))
);

return c__7146__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__12226){
var map__12232 = p__12226;
var map__12232__$1 = ((cljs.core.seq_QMARK_.call(null,map__12232))?cljs.core.apply.call(null,cljs.core.hash_map,map__12232):map__12232);
var ed = map__12232__$1;
var formatted_exception = cljs.core.get.call(null,map__12232__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__12232__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__12232__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__12233_12237 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__12234_12238 = null;
var count__12235_12239 = (0);
var i__12236_12240 = (0);
while(true){
if((i__12236_12240 < count__12235_12239)){
var msg_12241 = cljs.core._nth.call(null,chunk__12234_12238,i__12236_12240);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12241);

var G__12242 = seq__12233_12237;
var G__12243 = chunk__12234_12238;
var G__12244 = count__12235_12239;
var G__12245 = (i__12236_12240 + (1));
seq__12233_12237 = G__12242;
chunk__12234_12238 = G__12243;
count__12235_12239 = G__12244;
i__12236_12240 = G__12245;
continue;
} else {
var temp__4423__auto___12246 = cljs.core.seq.call(null,seq__12233_12237);
if(temp__4423__auto___12246){
var seq__12233_12247__$1 = temp__4423__auto___12246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12233_12247__$1)){
var c__5323__auto___12248 = cljs.core.chunk_first.call(null,seq__12233_12247__$1);
var G__12249 = cljs.core.chunk_rest.call(null,seq__12233_12247__$1);
var G__12250 = c__5323__auto___12248;
var G__12251 = cljs.core.count.call(null,c__5323__auto___12248);
var G__12252 = (0);
seq__12233_12237 = G__12249;
chunk__12234_12238 = G__12250;
count__12235_12239 = G__12251;
i__12236_12240 = G__12252;
continue;
} else {
var msg_12253 = cljs.core.first.call(null,seq__12233_12247__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12253);

var G__12254 = cljs.core.next.call(null,seq__12233_12247__$1);
var G__12255 = null;
var G__12256 = (0);
var G__12257 = (0);
seq__12233_12237 = G__12254;
chunk__12234_12238 = G__12255;
count__12235_12239 = G__12256;
i__12236_12240 = G__12257;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__12258){
var map__12260 = p__12258;
var map__12260__$1 = ((cljs.core.seq_QMARK_.call(null,map__12260))?cljs.core.apply.call(null,cljs.core.hash_map,map__12260):map__12260);
var w = map__12260__$1;
var message = cljs.core.get.call(null,map__12260__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__4526__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4526__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4526__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__12267 = cljs.core.seq.call(null,plugins);
var chunk__12268 = null;
var count__12269 = (0);
var i__12270 = (0);
while(true){
if((i__12270 < count__12269)){
var vec__12271 = cljs.core._nth.call(null,chunk__12268,i__12270);
var k = cljs.core.nth.call(null,vec__12271,(0),null);
var plugin = cljs.core.nth.call(null,vec__12271,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12273 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12267,chunk__12268,count__12269,i__12270,pl_12273,vec__12271,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_12273.call(null,msg_hist);
});})(seq__12267,chunk__12268,count__12269,i__12270,pl_12273,vec__12271,k,plugin))
);
} else {
}

var G__12274 = seq__12267;
var G__12275 = chunk__12268;
var G__12276 = count__12269;
var G__12277 = (i__12270 + (1));
seq__12267 = G__12274;
chunk__12268 = G__12275;
count__12269 = G__12276;
i__12270 = G__12277;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__12267);
if(temp__4423__auto__){
var seq__12267__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12267__$1)){
var c__5323__auto__ = cljs.core.chunk_first.call(null,seq__12267__$1);
var G__12278 = cljs.core.chunk_rest.call(null,seq__12267__$1);
var G__12279 = c__5323__auto__;
var G__12280 = cljs.core.count.call(null,c__5323__auto__);
var G__12281 = (0);
seq__12267 = G__12278;
chunk__12268 = G__12279;
count__12269 = G__12280;
i__12270 = G__12281;
continue;
} else {
var vec__12272 = cljs.core.first.call(null,seq__12267__$1);
var k = cljs.core.nth.call(null,vec__12272,(0),null);
var plugin = cljs.core.nth.call(null,vec__12272,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12282 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12267,chunk__12268,count__12269,i__12270,pl_12282,vec__12272,k,plugin,seq__12267__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_12282.call(null,msg_hist);
});})(seq__12267,chunk__12268,count__12269,i__12270,pl_12282,vec__12272,k,plugin,seq__12267__$1,temp__4423__auto__))
);
} else {
}

var G__12283 = cljs.core.next.call(null,seq__12267__$1);
var G__12284 = null;
var G__12285 = (0);
var G__12286 = (0);
seq__12267 = G__12283;
chunk__12268 = G__12284;
count__12269 = G__12285;
i__12270 = G__12286;
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
var G__12288 = arguments.length;
switch (G__12288) {
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
var argseq__5578__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5578__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__12291){
var map__12292 = p__12291;
var map__12292__$1 = ((cljs.core.seq_QMARK_.call(null,map__12292))?cljs.core.apply.call(null,cljs.core.hash_map,map__12292):map__12292);
var opts = map__12292__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq12290){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12290));
});

//# sourceMappingURL=client.js.map?rel=1434226596555