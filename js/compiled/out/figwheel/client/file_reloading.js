// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__12728_SHARP_,p2__12729_SHARP_){
var and__4526__auto__ = p1__12728_SHARP_;
if(cljs.core.truth_(and__4526__auto__)){
return p2__12729_SHARP_;
} else {
return and__4526__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4538__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4538__auto__){
return or__4538__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__4538__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4538__auto__){
return or__4538__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__4538__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4538__auto__)){
return or__4538__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__5433__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5434__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5435__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5436__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5437__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5437__auto__,method_table__5433__auto__,prefer_table__5434__auto__,method_cache__5435__auto__,cached_hierarchy__5436__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__12730){
var map__12731 = p__12730;
var map__12731__$1 = ((cljs.core.seq_QMARK_.call(null,map__12731))?cljs.core.apply.call(null,cljs.core.hash_map,map__12731):map__12731);
var file = cljs.core.get.call(null,map__12731__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__12732){
var map__12733 = p__12732;
var map__12733__$1 = ((cljs.core.seq_QMARK_.call(null,map__12733))?cljs.core.apply.call(null,cljs.core.hash_map,map__12733):map__12733);
var namespace = cljs.core.get.call(null,map__12733__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__5433__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5434__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5435__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5436__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5437__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5437__auto__,method_table__5433__auto__,prefer_table__5434__auto__,method_cache__5435__auto__,cached_hierarchy__5436__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e12734){if((e12734 instanceof Error)){
var e = e12734;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e12734;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__12736 = arguments.length;
switch (G__12736) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__12738,callback){
var map__12740 = p__12738;
var map__12740__$1 = ((cljs.core.seq_QMARK_.call(null,map__12740))?cljs.core.apply.call(null,cljs.core.hash_map,map__12740):map__12740);
var file_msg = map__12740__$1;
var request_url = cljs.core.get.call(null,map__12740__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__12740,map__12740__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__12740,map__12740__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__12741){
var map__12743 = p__12741;
var map__12743__$1 = ((cljs.core.seq_QMARK_.call(null,map__12743))?cljs.core.apply.call(null,cljs.core.hash_map,map__12743):map__12743);
var file_msg = map__12743__$1;
var namespace = cljs.core.get.call(null,map__12743__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__12743__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__4538__auto__ = meta_data;
if(cljs.core.truth_(or__4538__auto__)){
return or__4538__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__4526__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__4526__auto__){
var or__4538__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4538__auto__)){
return or__4538__auto__;
} else {
var or__4538__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4538__auto____$1)){
return or__4538__auto____$1;
} else {
var and__4526__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__4526__auto____$1){
var or__4538__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__4538__auto____$2){
return or__4538__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__4526__auto____$1;
}
}
}
} else {
return and__4526__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__12744,callback){
var map__12746 = p__12744;
var map__12746__$1 = ((cljs.core.seq_QMARK_.call(null,map__12746))?cljs.core.apply.call(null,cljs.core.hash_map,map__12746):map__12746);
var file_msg = map__12746__$1;
var request_url = cljs.core.get.call(null,map__12746__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__12746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__7146__auto___12833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto___12833,out){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto___12833,out){
return (function (state_12815){
var state_val_12816 = (state_12815[(1)]);
if((state_val_12816 === (1))){
var inst_12793 = cljs.core.nth.call(null,files,(0),null);
var inst_12794 = cljs.core.nthnext.call(null,files,(1));
var inst_12795 = files;
var state_12815__$1 = (function (){var statearr_12817 = state_12815;
(statearr_12817[(7)] = inst_12795);

(statearr_12817[(8)] = inst_12793);

(statearr_12817[(9)] = inst_12794);

return statearr_12817;
})();
var statearr_12818_12834 = state_12815__$1;
(statearr_12818_12834[(2)] = null);

(statearr_12818_12834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12816 === (2))){
var inst_12795 = (state_12815[(7)]);
var inst_12798 = (state_12815[(10)]);
var inst_12798__$1 = cljs.core.nth.call(null,inst_12795,(0),null);
var inst_12799 = cljs.core.nthnext.call(null,inst_12795,(1));
var inst_12800 = (inst_12798__$1 == null);
var inst_12801 = cljs.core.not.call(null,inst_12800);
var state_12815__$1 = (function (){var statearr_12819 = state_12815;
(statearr_12819[(11)] = inst_12799);

(statearr_12819[(10)] = inst_12798__$1);

return statearr_12819;
})();
if(inst_12801){
var statearr_12820_12835 = state_12815__$1;
(statearr_12820_12835[(1)] = (4));

} else {
var statearr_12821_12836 = state_12815__$1;
(statearr_12821_12836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12816 === (3))){
var inst_12813 = (state_12815[(2)]);
var state_12815__$1 = state_12815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12815__$1,inst_12813);
} else {
if((state_val_12816 === (4))){
var inst_12798 = (state_12815[(10)]);
var inst_12803 = figwheel.client.file_reloading.reload_js_file.call(null,inst_12798);
var state_12815__$1 = state_12815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12815__$1,(7),inst_12803);
} else {
if((state_val_12816 === (5))){
var inst_12809 = cljs.core.async.close_BANG_.call(null,out);
var state_12815__$1 = state_12815;
var statearr_12822_12837 = state_12815__$1;
(statearr_12822_12837[(2)] = inst_12809);

(statearr_12822_12837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12816 === (6))){
var inst_12811 = (state_12815[(2)]);
var state_12815__$1 = state_12815;
var statearr_12823_12838 = state_12815__$1;
(statearr_12823_12838[(2)] = inst_12811);

(statearr_12823_12838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12816 === (7))){
var inst_12799 = (state_12815[(11)]);
var inst_12805 = (state_12815[(2)]);
var inst_12806 = cljs.core.async.put_BANG_.call(null,out,inst_12805);
var inst_12795 = inst_12799;
var state_12815__$1 = (function (){var statearr_12824 = state_12815;
(statearr_12824[(7)] = inst_12795);

(statearr_12824[(12)] = inst_12806);

return statearr_12824;
})();
var statearr_12825_12839 = state_12815__$1;
(statearr_12825_12839[(2)] = null);

(statearr_12825_12839[(1)] = (2));


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
});})(c__7146__auto___12833,out))
;
return ((function (switch__7084__auto__,c__7146__auto___12833,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7085__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7085__auto____0 = (function (){
var statearr_12829 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12829[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7085__auto__);

(statearr_12829[(1)] = (1));

return statearr_12829;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7085__auto____1 = (function (state_12815){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_12815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e12830){if((e12830 instanceof Object)){
var ex__7088__auto__ = e12830;
var statearr_12831_12840 = state_12815;
(statearr_12831_12840[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12841 = state_12815;
state_12815 = G__12841;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7085__auto__ = function(state_12815){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7085__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7085__auto____1.call(this,state_12815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7085__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7085__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto___12833,out))
})();
var state__7148__auto__ = (function (){var statearr_12832 = f__7147__auto__.call(null);
(statearr_12832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto___12833);

return statearr_12832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto___12833,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__12842,p__12843){
var map__12846 = p__12842;
var map__12846__$1 = ((cljs.core.seq_QMARK_.call(null,map__12846))?cljs.core.apply.call(null,cljs.core.hash_map,map__12846):map__12846);
var opts = map__12846__$1;
var url_rewriter = cljs.core.get.call(null,map__12846__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__12847 = p__12843;
var map__12847__$1 = ((cljs.core.seq_QMARK_.call(null,map__12847))?cljs.core.apply.call(null,cljs.core.hash_map,map__12847):map__12847);
var file_msg = map__12847__$1;
var file = cljs.core.get.call(null,map__12847__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__12848){
var map__12851 = p__12848;
var map__12851__$1 = ((cljs.core.seq_QMARK_.call(null,map__12851))?cljs.core.apply.call(null,cljs.core.hash_map,map__12851):map__12851);
var eval_body__$1 = cljs.core.get.call(null,map__12851__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__12851__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4526__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4526__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4526__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e12852){var e = e12852;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__12857,p__12858){
var map__13060 = p__12857;
var map__13060__$1 = ((cljs.core.seq_QMARK_.call(null,map__13060))?cljs.core.apply.call(null,cljs.core.hash_map,map__13060):map__13060);
var opts = map__13060__$1;
var before_jsload = cljs.core.get.call(null,map__13060__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__13060__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__13060__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__13061 = p__12858;
var map__13061__$1 = ((cljs.core.seq_QMARK_.call(null,map__13061))?cljs.core.apply.call(null,cljs.core.hash_map,map__13061):map__13061);
var msg = map__13061__$1;
var files = cljs.core.get.call(null,map__13061__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files){
return (function (state_13186){
var state_val_13187 = (state_13186[(1)]);
if((state_val_13187 === (7))){
var inst_13075 = (state_13186[(7)]);
var inst_13074 = (state_13186[(8)]);
var inst_13073 = (state_13186[(9)]);
var inst_13076 = (state_13186[(10)]);
var inst_13081 = cljs.core._nth.call(null,inst_13074,inst_13076);
var inst_13082 = figwheel.client.file_reloading.eval_body.call(null,inst_13081);
var inst_13083 = (inst_13076 + (1));
var tmp13188 = inst_13075;
var tmp13189 = inst_13074;
var tmp13190 = inst_13073;
var inst_13073__$1 = tmp13190;
var inst_13074__$1 = tmp13189;
var inst_13075__$1 = tmp13188;
var inst_13076__$1 = inst_13083;
var state_13186__$1 = (function (){var statearr_13191 = state_13186;
(statearr_13191[(11)] = inst_13082);

(statearr_13191[(7)] = inst_13075__$1);

(statearr_13191[(8)] = inst_13074__$1);

(statearr_13191[(9)] = inst_13073__$1);

(statearr_13191[(10)] = inst_13076__$1);

return statearr_13191;
})();
var statearr_13192_13261 = state_13186__$1;
(statearr_13192_13261[(2)] = null);

(statearr_13192_13261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (20))){
var inst_13118 = (state_13186[(12)]);
var inst_13123 = (state_13186[(13)]);
var inst_13119 = (state_13186[(14)]);
var inst_13125 = (state_13186[(15)]);
var inst_13122 = (state_13186[(16)]);
var inst_13128 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_13130 = (function (){var all_files = inst_13118;
var files_SINGLEQUOTE_ = inst_13119;
var res_SINGLEQUOTE_ = inst_13122;
var res = inst_13123;
var files_not_loaded = inst_13125;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13118,inst_13123,inst_13119,inst_13125,inst_13122,inst_13128,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files){
return (function (p__13129){
var map__13193 = p__13129;
var map__13193__$1 = ((cljs.core.seq_QMARK_.call(null,map__13193))?cljs.core.apply.call(null,cljs.core.hash_map,map__13193):map__13193);
var namespace = cljs.core.get.call(null,map__13193__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__13193__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13118,inst_13123,inst_13119,inst_13125,inst_13122,inst_13128,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files))
})();
var inst_13131 = cljs.core.map.call(null,inst_13130,inst_13123);
var inst_13132 = cljs.core.pr_str.call(null,inst_13131);
var inst_13133 = figwheel.client.utils.log.call(null,inst_13132);
var inst_13134 = (function (){var all_files = inst_13118;
var files_SINGLEQUOTE_ = inst_13119;
var res_SINGLEQUOTE_ = inst_13122;
var res = inst_13123;
var files_not_loaded = inst_13125;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13118,inst_13123,inst_13119,inst_13125,inst_13122,inst_13128,inst_13130,inst_13131,inst_13132,inst_13133,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13118,inst_13123,inst_13119,inst_13125,inst_13122,inst_13128,inst_13130,inst_13131,inst_13132,inst_13133,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files))
})();
var inst_13135 = setTimeout(inst_13134,(10));
var state_13186__$1 = (function (){var statearr_13194 = state_13186;
(statearr_13194[(17)] = inst_13133);

(statearr_13194[(18)] = inst_13128);

return statearr_13194;
})();
var statearr_13195_13262 = state_13186__$1;
(statearr_13195_13262[(2)] = inst_13135);

(statearr_13195_13262[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (27))){
var inst_13145 = (state_13186[(19)]);
var state_13186__$1 = state_13186;
var statearr_13196_13263 = state_13186__$1;
(statearr_13196_13263[(2)] = inst_13145);

(statearr_13196_13263[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (1))){
var inst_13065 = (state_13186[(20)]);
var inst_13062 = before_jsload.call(null,files);
var inst_13063 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_13064 = (function (){return ((function (inst_13065,inst_13062,inst_13063,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files){
return (function (p1__12853_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__12853_SHARP_);
});
;})(inst_13065,inst_13062,inst_13063,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files))
})();
var inst_13065__$1 = cljs.core.filter.call(null,inst_13064,files);
var inst_13066 = cljs.core.not_empty.call(null,inst_13065__$1);
var state_13186__$1 = (function (){var statearr_13197 = state_13186;
(statearr_13197[(20)] = inst_13065__$1);

(statearr_13197[(21)] = inst_13063);

(statearr_13197[(22)] = inst_13062);

return statearr_13197;
})();
if(cljs.core.truth_(inst_13066)){
var statearr_13198_13264 = state_13186__$1;
(statearr_13198_13264[(1)] = (2));

} else {
var statearr_13199_13265 = state_13186__$1;
(statearr_13199_13265[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (24))){
var state_13186__$1 = state_13186;
var statearr_13200_13266 = state_13186__$1;
(statearr_13200_13266[(2)] = null);

(statearr_13200_13266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (4))){
var inst_13110 = (state_13186[(2)]);
var inst_13111 = (function (){return ((function (inst_13110,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files){
return (function (p1__12854_SHARP_){
var and__4526__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__12854_SHARP_);
if(cljs.core.truth_(and__4526__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__12854_SHARP_));
} else {
return and__4526__auto__;
}
});
;})(inst_13110,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files))
})();
var inst_13112 = cljs.core.filter.call(null,inst_13111,files);
var state_13186__$1 = (function (){var statearr_13201 = state_13186;
(statearr_13201[(23)] = inst_13112);

(statearr_13201[(24)] = inst_13110);

return statearr_13201;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_13202_13267 = state_13186__$1;
(statearr_13202_13267[(1)] = (16));

} else {
var statearr_13203_13268 = state_13186__$1;
(statearr_13203_13268[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (15))){
var inst_13100 = (state_13186[(2)]);
var state_13186__$1 = state_13186;
var statearr_13204_13269 = state_13186__$1;
(statearr_13204_13269[(2)] = inst_13100);

(statearr_13204_13269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (21))){
var state_13186__$1 = state_13186;
var statearr_13205_13270 = state_13186__$1;
(statearr_13205_13270[(2)] = null);

(statearr_13205_13270[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (31))){
var inst_13153 = (state_13186[(25)]);
var inst_13163 = (state_13186[(2)]);
var inst_13164 = cljs.core.not_empty.call(null,inst_13153);
var state_13186__$1 = (function (){var statearr_13206 = state_13186;
(statearr_13206[(26)] = inst_13163);

return statearr_13206;
})();
if(cljs.core.truth_(inst_13164)){
var statearr_13207_13271 = state_13186__$1;
(statearr_13207_13271[(1)] = (32));

} else {
var statearr_13208_13272 = state_13186__$1;
(statearr_13208_13272[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (32))){
var inst_13153 = (state_13186[(25)]);
var inst_13166 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13153);
var inst_13167 = cljs.core.pr_str.call(null,inst_13166);
var inst_13168 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_13167)].join('');
var inst_13169 = figwheel.client.utils.log.call(null,inst_13168);
var state_13186__$1 = state_13186;
var statearr_13209_13273 = state_13186__$1;
(statearr_13209_13273[(2)] = inst_13169);

(statearr_13209_13273[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (33))){
var state_13186__$1 = state_13186;
var statearr_13210_13274 = state_13186__$1;
(statearr_13210_13274[(2)] = null);

(statearr_13210_13274[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (13))){
var inst_13086 = (state_13186[(27)]);
var inst_13090 = cljs.core.chunk_first.call(null,inst_13086);
var inst_13091 = cljs.core.chunk_rest.call(null,inst_13086);
var inst_13092 = cljs.core.count.call(null,inst_13090);
var inst_13073 = inst_13091;
var inst_13074 = inst_13090;
var inst_13075 = inst_13092;
var inst_13076 = (0);
var state_13186__$1 = (function (){var statearr_13211 = state_13186;
(statearr_13211[(7)] = inst_13075);

(statearr_13211[(8)] = inst_13074);

(statearr_13211[(9)] = inst_13073);

(statearr_13211[(10)] = inst_13076);

return statearr_13211;
})();
var statearr_13212_13275 = state_13186__$1;
(statearr_13212_13275[(2)] = null);

(statearr_13212_13275[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (22))){
var inst_13125 = (state_13186[(15)]);
var inst_13138 = (state_13186[(2)]);
var inst_13139 = cljs.core.not_empty.call(null,inst_13125);
var state_13186__$1 = (function (){var statearr_13213 = state_13186;
(statearr_13213[(28)] = inst_13138);

return statearr_13213;
})();
if(cljs.core.truth_(inst_13139)){
var statearr_13214_13276 = state_13186__$1;
(statearr_13214_13276[(1)] = (23));

} else {
var statearr_13215_13277 = state_13186__$1;
(statearr_13215_13277[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (36))){
var state_13186__$1 = state_13186;
var statearr_13216_13278 = state_13186__$1;
(statearr_13216_13278[(2)] = null);

(statearr_13216_13278[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (29))){
var inst_13152 = (state_13186[(29)]);
var inst_13157 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13152);
var inst_13158 = cljs.core.pr_str.call(null,inst_13157);
var inst_13159 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_13158)].join('');
var inst_13160 = figwheel.client.utils.log.call(null,inst_13159);
var state_13186__$1 = state_13186;
var statearr_13217_13279 = state_13186__$1;
(statearr_13217_13279[(2)] = inst_13160);

(statearr_13217_13279[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (6))){
var inst_13107 = (state_13186[(2)]);
var state_13186__$1 = state_13186;
var statearr_13218_13280 = state_13186__$1;
(statearr_13218_13280[(2)] = inst_13107);

(statearr_13218_13280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (28))){
var inst_13152 = (state_13186[(29)]);
var inst_13151 = (state_13186[(2)]);
var inst_13152__$1 = cljs.core.get.call(null,inst_13151,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_13153 = cljs.core.get.call(null,inst_13151,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_13154 = cljs.core.get.call(null,inst_13151,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_13155 = cljs.core.not_empty.call(null,inst_13152__$1);
var state_13186__$1 = (function (){var statearr_13219 = state_13186;
(statearr_13219[(29)] = inst_13152__$1);

(statearr_13219[(25)] = inst_13153);

(statearr_13219[(30)] = inst_13154);

return statearr_13219;
})();
if(cljs.core.truth_(inst_13155)){
var statearr_13220_13281 = state_13186__$1;
(statearr_13220_13281[(1)] = (29));

} else {
var statearr_13221_13282 = state_13186__$1;
(statearr_13221_13282[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (25))){
var inst_13184 = (state_13186[(2)]);
var state_13186__$1 = state_13186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13186__$1,inst_13184);
} else {
if((state_val_13187 === (34))){
var inst_13154 = (state_13186[(30)]);
var inst_13172 = (state_13186[(2)]);
var inst_13173 = cljs.core.not_empty.call(null,inst_13154);
var state_13186__$1 = (function (){var statearr_13222 = state_13186;
(statearr_13222[(31)] = inst_13172);

return statearr_13222;
})();
if(cljs.core.truth_(inst_13173)){
var statearr_13223_13283 = state_13186__$1;
(statearr_13223_13283[(1)] = (35));

} else {
var statearr_13224_13284 = state_13186__$1;
(statearr_13224_13284[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (17))){
var inst_13112 = (state_13186[(23)]);
var state_13186__$1 = state_13186;
var statearr_13225_13285 = state_13186__$1;
(statearr_13225_13285[(2)] = inst_13112);

(statearr_13225_13285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (3))){
var state_13186__$1 = state_13186;
var statearr_13226_13286 = state_13186__$1;
(statearr_13226_13286[(2)] = null);

(statearr_13226_13286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (12))){
var inst_13103 = (state_13186[(2)]);
var state_13186__$1 = state_13186;
var statearr_13227_13287 = state_13186__$1;
(statearr_13227_13287[(2)] = inst_13103);

(statearr_13227_13287[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (2))){
var inst_13065 = (state_13186[(20)]);
var inst_13072 = cljs.core.seq.call(null,inst_13065);
var inst_13073 = inst_13072;
var inst_13074 = null;
var inst_13075 = (0);
var inst_13076 = (0);
var state_13186__$1 = (function (){var statearr_13228 = state_13186;
(statearr_13228[(7)] = inst_13075);

(statearr_13228[(8)] = inst_13074);

(statearr_13228[(9)] = inst_13073);

(statearr_13228[(10)] = inst_13076);

return statearr_13228;
})();
var statearr_13229_13288 = state_13186__$1;
(statearr_13229_13288[(2)] = null);

(statearr_13229_13288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (23))){
var inst_13118 = (state_13186[(12)]);
var inst_13123 = (state_13186[(13)]);
var inst_13119 = (state_13186[(14)]);
var inst_13145 = (state_13186[(19)]);
var inst_13125 = (state_13186[(15)]);
var inst_13122 = (state_13186[(16)]);
var inst_13141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_13144 = (function (){var all_files = inst_13118;
var files_SINGLEQUOTE_ = inst_13119;
var res_SINGLEQUOTE_ = inst_13122;
var res = inst_13123;
var files_not_loaded = inst_13125;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13118,inst_13123,inst_13119,inst_13145,inst_13125,inst_13122,inst_13141,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files){
return (function (p__13143){
var map__13230 = p__13143;
var map__13230__$1 = ((cljs.core.seq_QMARK_.call(null,map__13230))?cljs.core.apply.call(null,cljs.core.hash_map,map__13230):map__13230);
var meta_data = cljs.core.get.call(null,map__13230__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13118,inst_13123,inst_13119,inst_13145,inst_13125,inst_13122,inst_13141,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files))
})();
var inst_13145__$1 = cljs.core.group_by.call(null,inst_13144,inst_13125);
var inst_13146 = cljs.core.seq_QMARK_.call(null,inst_13145__$1);
var state_13186__$1 = (function (){var statearr_13231 = state_13186;
(statearr_13231[(32)] = inst_13141);

(statearr_13231[(19)] = inst_13145__$1);

return statearr_13231;
})();
if(inst_13146){
var statearr_13232_13289 = state_13186__$1;
(statearr_13232_13289[(1)] = (26));

} else {
var statearr_13233_13290 = state_13186__$1;
(statearr_13233_13290[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (35))){
var inst_13154 = (state_13186[(30)]);
var inst_13175 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13154);
var inst_13176 = cljs.core.pr_str.call(null,inst_13175);
var inst_13177 = [cljs.core.str("not required: "),cljs.core.str(inst_13176)].join('');
var inst_13178 = figwheel.client.utils.log.call(null,inst_13177);
var state_13186__$1 = state_13186;
var statearr_13234_13291 = state_13186__$1;
(statearr_13234_13291[(2)] = inst_13178);

(statearr_13234_13291[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (19))){
var inst_13118 = (state_13186[(12)]);
var inst_13123 = (state_13186[(13)]);
var inst_13119 = (state_13186[(14)]);
var inst_13122 = (state_13186[(16)]);
var inst_13122__$1 = (state_13186[(2)]);
var inst_13123__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_13122__$1);
var inst_13124 = (function (){var all_files = inst_13118;
var files_SINGLEQUOTE_ = inst_13119;
var res_SINGLEQUOTE_ = inst_13122__$1;
var res = inst_13123__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_13118,inst_13123,inst_13119,inst_13122,inst_13122__$1,inst_13123__$1,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files){
return (function (p1__12856_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__12856_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_13118,inst_13123,inst_13119,inst_13122,inst_13122__$1,inst_13123__$1,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files))
})();
var inst_13125 = cljs.core.filter.call(null,inst_13124,inst_13122__$1);
var inst_13126 = cljs.core.not_empty.call(null,inst_13123__$1);
var state_13186__$1 = (function (){var statearr_13235 = state_13186;
(statearr_13235[(13)] = inst_13123__$1);

(statearr_13235[(15)] = inst_13125);

(statearr_13235[(16)] = inst_13122__$1);

return statearr_13235;
})();
if(cljs.core.truth_(inst_13126)){
var statearr_13236_13292 = state_13186__$1;
(statearr_13236_13292[(1)] = (20));

} else {
var statearr_13237_13293 = state_13186__$1;
(statearr_13237_13293[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (11))){
var state_13186__$1 = state_13186;
var statearr_13238_13294 = state_13186__$1;
(statearr_13238_13294[(2)] = null);

(statearr_13238_13294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (9))){
var inst_13105 = (state_13186[(2)]);
var state_13186__$1 = state_13186;
var statearr_13239_13295 = state_13186__$1;
(statearr_13239_13295[(2)] = inst_13105);

(statearr_13239_13295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (5))){
var inst_13075 = (state_13186[(7)]);
var inst_13076 = (state_13186[(10)]);
var inst_13078 = (inst_13076 < inst_13075);
var inst_13079 = inst_13078;
var state_13186__$1 = state_13186;
if(cljs.core.truth_(inst_13079)){
var statearr_13240_13296 = state_13186__$1;
(statearr_13240_13296[(1)] = (7));

} else {
var statearr_13241_13297 = state_13186__$1;
(statearr_13241_13297[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (14))){
var inst_13086 = (state_13186[(27)]);
var inst_13095 = cljs.core.first.call(null,inst_13086);
var inst_13096 = figwheel.client.file_reloading.eval_body.call(null,inst_13095);
var inst_13097 = cljs.core.next.call(null,inst_13086);
var inst_13073 = inst_13097;
var inst_13074 = null;
var inst_13075 = (0);
var inst_13076 = (0);
var state_13186__$1 = (function (){var statearr_13242 = state_13186;
(statearr_13242[(33)] = inst_13096);

(statearr_13242[(7)] = inst_13075);

(statearr_13242[(8)] = inst_13074);

(statearr_13242[(9)] = inst_13073);

(statearr_13242[(10)] = inst_13076);

return statearr_13242;
})();
var statearr_13243_13298 = state_13186__$1;
(statearr_13243_13298[(2)] = null);

(statearr_13243_13298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (26))){
var inst_13145 = (state_13186[(19)]);
var inst_13148 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13145);
var state_13186__$1 = state_13186;
var statearr_13244_13299 = state_13186__$1;
(statearr_13244_13299[(2)] = inst_13148);

(statearr_13244_13299[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (16))){
var inst_13112 = (state_13186[(23)]);
var inst_13114 = (function (){var all_files = inst_13112;
return ((function (all_files,inst_13112,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files){
return (function (p1__12855_SHARP_){
return cljs.core.update_in.call(null,p1__12855_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_13112,state_val_13187,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files))
})();
var inst_13115 = cljs.core.map.call(null,inst_13114,inst_13112);
var state_13186__$1 = state_13186;
var statearr_13245_13300 = state_13186__$1;
(statearr_13245_13300[(2)] = inst_13115);

(statearr_13245_13300[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (30))){
var state_13186__$1 = state_13186;
var statearr_13246_13301 = state_13186__$1;
(statearr_13246_13301[(2)] = null);

(statearr_13246_13301[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (10))){
var inst_13086 = (state_13186[(27)]);
var inst_13088 = cljs.core.chunked_seq_QMARK_.call(null,inst_13086);
var state_13186__$1 = state_13186;
if(inst_13088){
var statearr_13247_13302 = state_13186__$1;
(statearr_13247_13302[(1)] = (13));

} else {
var statearr_13248_13303 = state_13186__$1;
(statearr_13248_13303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (18))){
var inst_13118 = (state_13186[(12)]);
var inst_13119 = (state_13186[(14)]);
var inst_13118__$1 = (state_13186[(2)]);
var inst_13119__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_13118__$1);
var inst_13120 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_13119__$1);
var state_13186__$1 = (function (){var statearr_13249 = state_13186;
(statearr_13249[(12)] = inst_13118__$1);

(statearr_13249[(14)] = inst_13119__$1);

return statearr_13249;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13186__$1,(19),inst_13120);
} else {
if((state_val_13187 === (37))){
var inst_13181 = (state_13186[(2)]);
var state_13186__$1 = state_13186;
var statearr_13250_13304 = state_13186__$1;
(statearr_13250_13304[(2)] = inst_13181);

(statearr_13250_13304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13187 === (8))){
var inst_13086 = (state_13186[(27)]);
var inst_13073 = (state_13186[(9)]);
var inst_13086__$1 = cljs.core.seq.call(null,inst_13073);
var state_13186__$1 = (function (){var statearr_13251 = state_13186;
(statearr_13251[(27)] = inst_13086__$1);

return statearr_13251;
})();
if(inst_13086__$1){
var statearr_13252_13305 = state_13186__$1;
(statearr_13252_13305[(1)] = (10));

} else {
var statearr_13253_13306 = state_13186__$1;
(statearr_13253_13306[(1)] = (11));

}

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
}
}
}
});})(c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files))
;
return ((function (switch__7084__auto__,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7085__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7085__auto____0 = (function (){
var statearr_13257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13257[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__7085__auto__);

(statearr_13257[(1)] = (1));

return statearr_13257;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7085__auto____1 = (function (state_13186){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_13186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e13258){if((e13258 instanceof Object)){
var ex__7088__auto__ = e13258;
var statearr_13259_13307 = state_13186;
(statearr_13259_13307[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13308 = state_13186;
state_13186 = G__13308;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__7085__auto__ = function(state_13186){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7085__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7085__auto____1.call(this,state_13186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7085__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7085__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files))
})();
var state__7148__auto__ = (function (){var statearr_13260 = f__7147__auto__.call(null);
(statearr_13260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto__);

return statearr_13260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto__,map__13060,map__13060__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13061,map__13061__$1,msg,files))
);

return c__7146__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__13311,link){
var map__13313 = p__13311;
var map__13313__$1 = ((cljs.core.seq_QMARK_.call(null,map__13313))?cljs.core.apply.call(null,cljs.core.hash_map,map__13313):map__13313);
var file = cljs.core.get.call(null,map__13313__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__13313,map__13313__$1,file){
return (function (p1__13309_SHARP_,p2__13310_SHARP_){
if(cljs.core._EQ_.call(null,p1__13309_SHARP_,p2__13310_SHARP_)){
return p1__13309_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__13313,map__13313__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__13317){
var map__13318 = p__13317;
var map__13318__$1 = ((cljs.core.seq_QMARK_.call(null,map__13318))?cljs.core.apply.call(null,cljs.core.hash_map,map__13318):map__13318);
var match_length = cljs.core.get.call(null,map__13318__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__13318__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__13314_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__13314_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__13320 = arguments.length;
switch (G__13320) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__13322){
var map__13324 = p__13322;
var map__13324__$1 = ((cljs.core.seq_QMARK_.call(null,map__13324))?cljs.core.apply.call(null,cljs.core.hash_map,map__13324):map__13324);
var f_data = map__13324__$1;
var file = cljs.core.get.call(null,map__13324__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__13324__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__4538__auto__ = request_url;
if(cljs.core.truth_(or__4538__auto__)){
return or__4538__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__13325,files_msg){
var map__13347 = p__13325;
var map__13347__$1 = ((cljs.core.seq_QMARK_.call(null,map__13347))?cljs.core.apply.call(null,cljs.core.hash_map,map__13347):map__13347);
var opts = map__13347__$1;
var on_cssload = cljs.core.get.call(null,map__13347__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__13348_13368 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__13349_13369 = null;
var count__13350_13370 = (0);
var i__13351_13371 = (0);
while(true){
if((i__13351_13371 < count__13350_13370)){
var f_13372 = cljs.core._nth.call(null,chunk__13349_13369,i__13351_13371);
figwheel.client.file_reloading.reload_css_file.call(null,f_13372);

var G__13373 = seq__13348_13368;
var G__13374 = chunk__13349_13369;
var G__13375 = count__13350_13370;
var G__13376 = (i__13351_13371 + (1));
seq__13348_13368 = G__13373;
chunk__13349_13369 = G__13374;
count__13350_13370 = G__13375;
i__13351_13371 = G__13376;
continue;
} else {
var temp__4423__auto___13377 = cljs.core.seq.call(null,seq__13348_13368);
if(temp__4423__auto___13377){
var seq__13348_13378__$1 = temp__4423__auto___13377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13348_13378__$1)){
var c__5323__auto___13379 = cljs.core.chunk_first.call(null,seq__13348_13378__$1);
var G__13380 = cljs.core.chunk_rest.call(null,seq__13348_13378__$1);
var G__13381 = c__5323__auto___13379;
var G__13382 = cljs.core.count.call(null,c__5323__auto___13379);
var G__13383 = (0);
seq__13348_13368 = G__13380;
chunk__13349_13369 = G__13381;
count__13350_13370 = G__13382;
i__13351_13371 = G__13383;
continue;
} else {
var f_13384 = cljs.core.first.call(null,seq__13348_13378__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_13384);

var G__13385 = cljs.core.next.call(null,seq__13348_13378__$1);
var G__13386 = null;
var G__13387 = (0);
var G__13388 = (0);
seq__13348_13368 = G__13385;
chunk__13349_13369 = G__13386;
count__13350_13370 = G__13387;
i__13351_13371 = G__13388;
continue;
}
} else {
}
}
break;
}

var c__7146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7146__auto__,map__13347,map__13347__$1,opts,on_cssload){
return (function (){
var f__7147__auto__ = (function (){var switch__7084__auto__ = ((function (c__7146__auto__,map__13347,map__13347__$1,opts,on_cssload){
return (function (state_13358){
var state_val_13359 = (state_13358[(1)]);
if((state_val_13359 === (1))){
var inst_13352 = cljs.core.async.timeout.call(null,(100));
var state_13358__$1 = state_13358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13358__$1,(2),inst_13352);
} else {
if((state_val_13359 === (2))){
var inst_13354 = (state_13358[(2)]);
var inst_13355 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_13356 = on_cssload.call(null,inst_13355);
var state_13358__$1 = (function (){var statearr_13360 = state_13358;
(statearr_13360[(7)] = inst_13354);

return statearr_13360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13358__$1,inst_13356);
} else {
return null;
}
}
});})(c__7146__auto__,map__13347,map__13347__$1,opts,on_cssload))
;
return ((function (switch__7084__auto__,c__7146__auto__,map__13347,map__13347__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7085__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7085__auto____0 = (function (){
var statearr_13364 = [null,null,null,null,null,null,null,null];
(statearr_13364[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__7085__auto__);

(statearr_13364[(1)] = (1));

return statearr_13364;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7085__auto____1 = (function (state_13358){
while(true){
var ret_value__7086__auto__ = (function (){try{while(true){
var result__7087__auto__ = switch__7084__auto__.call(null,state_13358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7087__auto__;
}
break;
}
}catch (e13365){if((e13365 instanceof Object)){
var ex__7088__auto__ = e13365;
var statearr_13366_13389 = state_13358;
(statearr_13366_13389[(5)] = ex__7088__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13390 = state_13358;
state_13358 = G__13390;
continue;
} else {
return ret_value__7086__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__7085__auto__ = function(state_13358){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7085__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7085__auto____1.call(this,state_13358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__7085__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__7085__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__7085__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7085__auto__;
})()
;})(switch__7084__auto__,c__7146__auto__,map__13347,map__13347__$1,opts,on_cssload))
})();
var state__7148__auto__ = (function (){var statearr_13367 = f__7147__auto__.call(null);
(statearr_13367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7146__auto__);

return statearr_13367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7148__auto__);
});})(c__7146__auto__,map__13347,map__13347__$1,opts,on_cssload))
);

return c__7146__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1434226598702