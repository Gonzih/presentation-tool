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
return cljs.core.reduce.call(null,(function (p1__12718_SHARP_,p2__12719_SHARP_){
var and__4519__auto__ = p1__12718_SHARP_;
if(cljs.core.truth_(and__4519__auto__)){
return p2__12719_SHARP_;
} else {
return and__4519__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4531__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4531__auto__){
return or__4531__auto__;
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
if(cljs.core.truth_((function (){var or__4531__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4531__auto__){
return or__4531__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__4531__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4531__auto__)){
return or__4531__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__5426__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5427__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5428__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5430__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5430__auto__,method_table__5426__auto__,prefer_table__5427__auto__,method_cache__5428__auto__,cached_hierarchy__5429__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__12720){
var map__12721 = p__12720;
var map__12721__$1 = ((cljs.core.seq_QMARK_.call(null,map__12721))?cljs.core.apply.call(null,cljs.core.hash_map,map__12721):map__12721);
var file = cljs.core.get.call(null,map__12721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__12722){
var map__12723 = p__12722;
var map__12723__$1 = ((cljs.core.seq_QMARK_.call(null,map__12723))?cljs.core.apply.call(null,cljs.core.hash_map,map__12723):map__12723);
var namespace = cljs.core.get.call(null,map__12723__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__5426__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5427__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5428__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5430__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5430__auto__,method_table__5426__auto__,prefer_table__5427__auto__,method_cache__5428__auto__,cached_hierarchy__5429__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e12724){if((e12724 instanceof Error)){
var e = e12724;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e12724;

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
var G__12726 = arguments.length;
switch (G__12726) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__12728,callback){
var map__12730 = p__12728;
var map__12730__$1 = ((cljs.core.seq_QMARK_.call(null,map__12730))?cljs.core.apply.call(null,cljs.core.hash_map,map__12730):map__12730);
var file_msg = map__12730__$1;
var request_url = cljs.core.get.call(null,map__12730__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__12730,map__12730__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__12730,map__12730__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__12731){
var map__12733 = p__12731;
var map__12733__$1 = ((cljs.core.seq_QMARK_.call(null,map__12733))?cljs.core.apply.call(null,cljs.core.hash_map,map__12733):map__12733);
var file_msg = map__12733__$1;
var namespace = cljs.core.get.call(null,map__12733__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__12733__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__4531__auto__ = meta_data;
if(cljs.core.truth_(or__4531__auto__)){
return or__4531__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__4519__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__4519__auto__){
var or__4531__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4531__auto__)){
return or__4531__auto__;
} else {
var or__4531__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4531__auto____$1)){
return or__4531__auto____$1;
} else {
var and__4519__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__4519__auto____$1){
var or__4531__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__4531__auto____$2){
return or__4531__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__4519__auto____$1;
}
}
}
} else {
return and__4519__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__12734,callback){
var map__12736 = p__12734;
var map__12736__$1 = ((cljs.core.seq_QMARK_.call(null,map__12736))?cljs.core.apply.call(null,cljs.core.hash_map,map__12736):map__12736);
var file_msg = map__12736__$1;
var request_url = cljs.core.get.call(null,map__12736__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__12736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__7136__auto___12823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto___12823,out){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto___12823,out){
return (function (state_12805){
var state_val_12806 = (state_12805[(1)]);
if((state_val_12806 === (1))){
var inst_12783 = cljs.core.nth.call(null,files,(0),null);
var inst_12784 = cljs.core.nthnext.call(null,files,(1));
var inst_12785 = files;
var state_12805__$1 = (function (){var statearr_12807 = state_12805;
(statearr_12807[(7)] = inst_12783);

(statearr_12807[(8)] = inst_12784);

(statearr_12807[(9)] = inst_12785);

return statearr_12807;
})();
var statearr_12808_12824 = state_12805__$1;
(statearr_12808_12824[(2)] = null);

(statearr_12808_12824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (2))){
var inst_12788 = (state_12805[(10)]);
var inst_12785 = (state_12805[(9)]);
var inst_12788__$1 = cljs.core.nth.call(null,inst_12785,(0),null);
var inst_12789 = cljs.core.nthnext.call(null,inst_12785,(1));
var inst_12790 = (inst_12788__$1 == null);
var inst_12791 = cljs.core.not.call(null,inst_12790);
var state_12805__$1 = (function (){var statearr_12809 = state_12805;
(statearr_12809[(11)] = inst_12789);

(statearr_12809[(10)] = inst_12788__$1);

return statearr_12809;
})();
if(inst_12791){
var statearr_12810_12825 = state_12805__$1;
(statearr_12810_12825[(1)] = (4));

} else {
var statearr_12811_12826 = state_12805__$1;
(statearr_12811_12826[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (3))){
var inst_12803 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12805__$1,inst_12803);
} else {
if((state_val_12806 === (4))){
var inst_12788 = (state_12805[(10)]);
var inst_12793 = figwheel.client.file_reloading.reload_js_file.call(null,inst_12788);
var state_12805__$1 = state_12805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12805__$1,(7),inst_12793);
} else {
if((state_val_12806 === (5))){
var inst_12799 = cljs.core.async.close_BANG_.call(null,out);
var state_12805__$1 = state_12805;
var statearr_12812_12827 = state_12805__$1;
(statearr_12812_12827[(2)] = inst_12799);

(statearr_12812_12827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (6))){
var inst_12801 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
var statearr_12813_12828 = state_12805__$1;
(statearr_12813_12828[(2)] = inst_12801);

(statearr_12813_12828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (7))){
var inst_12789 = (state_12805[(11)]);
var inst_12795 = (state_12805[(2)]);
var inst_12796 = cljs.core.async.put_BANG_.call(null,out,inst_12795);
var inst_12785 = inst_12789;
var state_12805__$1 = (function (){var statearr_12814 = state_12805;
(statearr_12814[(12)] = inst_12796);

(statearr_12814[(9)] = inst_12785);

return statearr_12814;
})();
var statearr_12815_12829 = state_12805__$1;
(statearr_12815_12829[(2)] = null);

(statearr_12815_12829[(1)] = (2));


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
});})(c__7136__auto___12823,out))
;
return ((function (switch__7074__auto__,c__7136__auto___12823,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7075__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7075__auto____0 = (function (){
var statearr_12819 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12819[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7075__auto__);

(statearr_12819[(1)] = (1));

return statearr_12819;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7075__auto____1 = (function (state_12805){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_12805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e12820){if((e12820 instanceof Object)){
var ex__7078__auto__ = e12820;
var statearr_12821_12830 = state_12805;
(statearr_12821_12830[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12831 = state_12805;
state_12805 = G__12831;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7075__auto__ = function(state_12805){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7075__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7075__auto____1.call(this,state_12805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7075__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7075__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto___12823,out))
})();
var state__7138__auto__ = (function (){var statearr_12822 = f__7137__auto__.call(null);
(statearr_12822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto___12823);

return statearr_12822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto___12823,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__12832,p__12833){
var map__12836 = p__12832;
var map__12836__$1 = ((cljs.core.seq_QMARK_.call(null,map__12836))?cljs.core.apply.call(null,cljs.core.hash_map,map__12836):map__12836);
var opts = map__12836__$1;
var url_rewriter = cljs.core.get.call(null,map__12836__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__12837 = p__12833;
var map__12837__$1 = ((cljs.core.seq_QMARK_.call(null,map__12837))?cljs.core.apply.call(null,cljs.core.hash_map,map__12837):map__12837);
var file_msg = map__12837__$1;
var file = cljs.core.get.call(null,map__12837__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__12838){
var map__12841 = p__12838;
var map__12841__$1 = ((cljs.core.seq_QMARK_.call(null,map__12841))?cljs.core.apply.call(null,cljs.core.hash_map,map__12841):map__12841);
var eval_body__$1 = cljs.core.get.call(null,map__12841__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__12841__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4519__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4519__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4519__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e12842){var e = e12842;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__12847,p__12848){
var map__13050 = p__12847;
var map__13050__$1 = ((cljs.core.seq_QMARK_.call(null,map__13050))?cljs.core.apply.call(null,cljs.core.hash_map,map__13050):map__13050);
var opts = map__13050__$1;
var before_jsload = cljs.core.get.call(null,map__13050__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__13050__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__13050__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__13051 = p__12848;
var map__13051__$1 = ((cljs.core.seq_QMARK_.call(null,map__13051))?cljs.core.apply.call(null,cljs.core.hash_map,map__13051):map__13051);
var msg = map__13051__$1;
var files = cljs.core.get.call(null,map__13051__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files){
return (function (state_13176){
var state_val_13177 = (state_13176[(1)]);
if((state_val_13177 === (7))){
var inst_13066 = (state_13176[(7)]);
var inst_13064 = (state_13176[(8)]);
var inst_13065 = (state_13176[(9)]);
var inst_13063 = (state_13176[(10)]);
var inst_13071 = cljs.core._nth.call(null,inst_13064,inst_13066);
var inst_13072 = figwheel.client.file_reloading.eval_body.call(null,inst_13071);
var inst_13073 = (inst_13066 + (1));
var tmp13178 = inst_13064;
var tmp13179 = inst_13065;
var tmp13180 = inst_13063;
var inst_13063__$1 = tmp13180;
var inst_13064__$1 = tmp13178;
var inst_13065__$1 = tmp13179;
var inst_13066__$1 = inst_13073;
var state_13176__$1 = (function (){var statearr_13181 = state_13176;
(statearr_13181[(7)] = inst_13066__$1);

(statearr_13181[(8)] = inst_13064__$1);

(statearr_13181[(9)] = inst_13065__$1);

(statearr_13181[(10)] = inst_13063__$1);

(statearr_13181[(11)] = inst_13072);

return statearr_13181;
})();
var statearr_13182_13251 = state_13176__$1;
(statearr_13182_13251[(2)] = null);

(statearr_13182_13251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (20))){
var inst_13109 = (state_13176[(12)]);
var inst_13113 = (state_13176[(13)]);
var inst_13115 = (state_13176[(14)]);
var inst_13108 = (state_13176[(15)]);
var inst_13112 = (state_13176[(16)]);
var inst_13118 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_13120 = (function (){var all_files = inst_13108;
var files_SINGLEQUOTE_ = inst_13109;
var res_SINGLEQUOTE_ = inst_13112;
var res = inst_13113;
var files_not_loaded = inst_13115;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13109,inst_13113,inst_13115,inst_13108,inst_13112,inst_13118,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files){
return (function (p__13119){
var map__13183 = p__13119;
var map__13183__$1 = ((cljs.core.seq_QMARK_.call(null,map__13183))?cljs.core.apply.call(null,cljs.core.hash_map,map__13183):map__13183);
var namespace = cljs.core.get.call(null,map__13183__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__13183__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13109,inst_13113,inst_13115,inst_13108,inst_13112,inst_13118,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files))
})();
var inst_13121 = cljs.core.map.call(null,inst_13120,inst_13113);
var inst_13122 = cljs.core.pr_str.call(null,inst_13121);
var inst_13123 = figwheel.client.utils.log.call(null,inst_13122);
var inst_13124 = (function (){var all_files = inst_13108;
var files_SINGLEQUOTE_ = inst_13109;
var res_SINGLEQUOTE_ = inst_13112;
var res = inst_13113;
var files_not_loaded = inst_13115;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13109,inst_13113,inst_13115,inst_13108,inst_13112,inst_13118,inst_13120,inst_13121,inst_13122,inst_13123,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13109,inst_13113,inst_13115,inst_13108,inst_13112,inst_13118,inst_13120,inst_13121,inst_13122,inst_13123,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files))
})();
var inst_13125 = setTimeout(inst_13124,(10));
var state_13176__$1 = (function (){var statearr_13184 = state_13176;
(statearr_13184[(17)] = inst_13118);

(statearr_13184[(18)] = inst_13123);

return statearr_13184;
})();
var statearr_13185_13252 = state_13176__$1;
(statearr_13185_13252[(2)] = inst_13125);

(statearr_13185_13252[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (27))){
var inst_13135 = (state_13176[(19)]);
var state_13176__$1 = state_13176;
var statearr_13186_13253 = state_13176__$1;
(statearr_13186_13253[(2)] = inst_13135);

(statearr_13186_13253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (1))){
var inst_13055 = (state_13176[(20)]);
var inst_13052 = before_jsload.call(null,files);
var inst_13053 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_13054 = (function (){return ((function (inst_13055,inst_13052,inst_13053,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files){
return (function (p1__12843_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__12843_SHARP_);
});
;})(inst_13055,inst_13052,inst_13053,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files))
})();
var inst_13055__$1 = cljs.core.filter.call(null,inst_13054,files);
var inst_13056 = cljs.core.not_empty.call(null,inst_13055__$1);
var state_13176__$1 = (function (){var statearr_13187 = state_13176;
(statearr_13187[(21)] = inst_13053);

(statearr_13187[(22)] = inst_13052);

(statearr_13187[(20)] = inst_13055__$1);

return statearr_13187;
})();
if(cljs.core.truth_(inst_13056)){
var statearr_13188_13254 = state_13176__$1;
(statearr_13188_13254[(1)] = (2));

} else {
var statearr_13189_13255 = state_13176__$1;
(statearr_13189_13255[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (24))){
var state_13176__$1 = state_13176;
var statearr_13190_13256 = state_13176__$1;
(statearr_13190_13256[(2)] = null);

(statearr_13190_13256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (4))){
var inst_13100 = (state_13176[(2)]);
var inst_13101 = (function (){return ((function (inst_13100,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files){
return (function (p1__12844_SHARP_){
var and__4519__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__12844_SHARP_);
if(cljs.core.truth_(and__4519__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__12844_SHARP_));
} else {
return and__4519__auto__;
}
});
;})(inst_13100,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files))
})();
var inst_13102 = cljs.core.filter.call(null,inst_13101,files);
var state_13176__$1 = (function (){var statearr_13191 = state_13176;
(statearr_13191[(23)] = inst_13100);

(statearr_13191[(24)] = inst_13102);

return statearr_13191;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_13192_13257 = state_13176__$1;
(statearr_13192_13257[(1)] = (16));

} else {
var statearr_13193_13258 = state_13176__$1;
(statearr_13193_13258[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (15))){
var inst_13090 = (state_13176[(2)]);
var state_13176__$1 = state_13176;
var statearr_13194_13259 = state_13176__$1;
(statearr_13194_13259[(2)] = inst_13090);

(statearr_13194_13259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (21))){
var state_13176__$1 = state_13176;
var statearr_13195_13260 = state_13176__$1;
(statearr_13195_13260[(2)] = null);

(statearr_13195_13260[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (31))){
var inst_13143 = (state_13176[(25)]);
var inst_13153 = (state_13176[(2)]);
var inst_13154 = cljs.core.not_empty.call(null,inst_13143);
var state_13176__$1 = (function (){var statearr_13196 = state_13176;
(statearr_13196[(26)] = inst_13153);

return statearr_13196;
})();
if(cljs.core.truth_(inst_13154)){
var statearr_13197_13261 = state_13176__$1;
(statearr_13197_13261[(1)] = (32));

} else {
var statearr_13198_13262 = state_13176__$1;
(statearr_13198_13262[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (32))){
var inst_13143 = (state_13176[(25)]);
var inst_13156 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13143);
var inst_13157 = cljs.core.pr_str.call(null,inst_13156);
var inst_13158 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_13157)].join('');
var inst_13159 = figwheel.client.utils.log.call(null,inst_13158);
var state_13176__$1 = state_13176;
var statearr_13199_13263 = state_13176__$1;
(statearr_13199_13263[(2)] = inst_13159);

(statearr_13199_13263[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (33))){
var state_13176__$1 = state_13176;
var statearr_13200_13264 = state_13176__$1;
(statearr_13200_13264[(2)] = null);

(statearr_13200_13264[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (13))){
var inst_13076 = (state_13176[(27)]);
var inst_13080 = cljs.core.chunk_first.call(null,inst_13076);
var inst_13081 = cljs.core.chunk_rest.call(null,inst_13076);
var inst_13082 = cljs.core.count.call(null,inst_13080);
var inst_13063 = inst_13081;
var inst_13064 = inst_13080;
var inst_13065 = inst_13082;
var inst_13066 = (0);
var state_13176__$1 = (function (){var statearr_13201 = state_13176;
(statearr_13201[(7)] = inst_13066);

(statearr_13201[(8)] = inst_13064);

(statearr_13201[(9)] = inst_13065);

(statearr_13201[(10)] = inst_13063);

return statearr_13201;
})();
var statearr_13202_13265 = state_13176__$1;
(statearr_13202_13265[(2)] = null);

(statearr_13202_13265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (22))){
var inst_13115 = (state_13176[(14)]);
var inst_13128 = (state_13176[(2)]);
var inst_13129 = cljs.core.not_empty.call(null,inst_13115);
var state_13176__$1 = (function (){var statearr_13203 = state_13176;
(statearr_13203[(28)] = inst_13128);

return statearr_13203;
})();
if(cljs.core.truth_(inst_13129)){
var statearr_13204_13266 = state_13176__$1;
(statearr_13204_13266[(1)] = (23));

} else {
var statearr_13205_13267 = state_13176__$1;
(statearr_13205_13267[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (36))){
var state_13176__$1 = state_13176;
var statearr_13206_13268 = state_13176__$1;
(statearr_13206_13268[(2)] = null);

(statearr_13206_13268[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (29))){
var inst_13142 = (state_13176[(29)]);
var inst_13147 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13142);
var inst_13148 = cljs.core.pr_str.call(null,inst_13147);
var inst_13149 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_13148)].join('');
var inst_13150 = figwheel.client.utils.log.call(null,inst_13149);
var state_13176__$1 = state_13176;
var statearr_13207_13269 = state_13176__$1;
(statearr_13207_13269[(2)] = inst_13150);

(statearr_13207_13269[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (6))){
var inst_13097 = (state_13176[(2)]);
var state_13176__$1 = state_13176;
var statearr_13208_13270 = state_13176__$1;
(statearr_13208_13270[(2)] = inst_13097);

(statearr_13208_13270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (28))){
var inst_13142 = (state_13176[(29)]);
var inst_13141 = (state_13176[(2)]);
var inst_13142__$1 = cljs.core.get.call(null,inst_13141,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_13143 = cljs.core.get.call(null,inst_13141,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_13144 = cljs.core.get.call(null,inst_13141,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_13145 = cljs.core.not_empty.call(null,inst_13142__$1);
var state_13176__$1 = (function (){var statearr_13209 = state_13176;
(statearr_13209[(29)] = inst_13142__$1);

(statearr_13209[(30)] = inst_13144);

(statearr_13209[(25)] = inst_13143);

return statearr_13209;
})();
if(cljs.core.truth_(inst_13145)){
var statearr_13210_13271 = state_13176__$1;
(statearr_13210_13271[(1)] = (29));

} else {
var statearr_13211_13272 = state_13176__$1;
(statearr_13211_13272[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (25))){
var inst_13174 = (state_13176[(2)]);
var state_13176__$1 = state_13176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13176__$1,inst_13174);
} else {
if((state_val_13177 === (34))){
var inst_13144 = (state_13176[(30)]);
var inst_13162 = (state_13176[(2)]);
var inst_13163 = cljs.core.not_empty.call(null,inst_13144);
var state_13176__$1 = (function (){var statearr_13212 = state_13176;
(statearr_13212[(31)] = inst_13162);

return statearr_13212;
})();
if(cljs.core.truth_(inst_13163)){
var statearr_13213_13273 = state_13176__$1;
(statearr_13213_13273[(1)] = (35));

} else {
var statearr_13214_13274 = state_13176__$1;
(statearr_13214_13274[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (17))){
var inst_13102 = (state_13176[(24)]);
var state_13176__$1 = state_13176;
var statearr_13215_13275 = state_13176__$1;
(statearr_13215_13275[(2)] = inst_13102);

(statearr_13215_13275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (3))){
var state_13176__$1 = state_13176;
var statearr_13216_13276 = state_13176__$1;
(statearr_13216_13276[(2)] = null);

(statearr_13216_13276[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (12))){
var inst_13093 = (state_13176[(2)]);
var state_13176__$1 = state_13176;
var statearr_13217_13277 = state_13176__$1;
(statearr_13217_13277[(2)] = inst_13093);

(statearr_13217_13277[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (2))){
var inst_13055 = (state_13176[(20)]);
var inst_13062 = cljs.core.seq.call(null,inst_13055);
var inst_13063 = inst_13062;
var inst_13064 = null;
var inst_13065 = (0);
var inst_13066 = (0);
var state_13176__$1 = (function (){var statearr_13218 = state_13176;
(statearr_13218[(7)] = inst_13066);

(statearr_13218[(8)] = inst_13064);

(statearr_13218[(9)] = inst_13065);

(statearr_13218[(10)] = inst_13063);

return statearr_13218;
})();
var statearr_13219_13278 = state_13176__$1;
(statearr_13219_13278[(2)] = null);

(statearr_13219_13278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (23))){
var inst_13109 = (state_13176[(12)]);
var inst_13113 = (state_13176[(13)]);
var inst_13135 = (state_13176[(19)]);
var inst_13115 = (state_13176[(14)]);
var inst_13108 = (state_13176[(15)]);
var inst_13112 = (state_13176[(16)]);
var inst_13131 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_13134 = (function (){var all_files = inst_13108;
var files_SINGLEQUOTE_ = inst_13109;
var res_SINGLEQUOTE_ = inst_13112;
var res = inst_13113;
var files_not_loaded = inst_13115;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13109,inst_13113,inst_13135,inst_13115,inst_13108,inst_13112,inst_13131,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files){
return (function (p__13133){
var map__13220 = p__13133;
var map__13220__$1 = ((cljs.core.seq_QMARK_.call(null,map__13220))?cljs.core.apply.call(null,cljs.core.hash_map,map__13220):map__13220);
var meta_data = cljs.core.get.call(null,map__13220__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_13109,inst_13113,inst_13135,inst_13115,inst_13108,inst_13112,inst_13131,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files))
})();
var inst_13135__$1 = cljs.core.group_by.call(null,inst_13134,inst_13115);
var inst_13136 = cljs.core.seq_QMARK_.call(null,inst_13135__$1);
var state_13176__$1 = (function (){var statearr_13221 = state_13176;
(statearr_13221[(32)] = inst_13131);

(statearr_13221[(19)] = inst_13135__$1);

return statearr_13221;
})();
if(inst_13136){
var statearr_13222_13279 = state_13176__$1;
(statearr_13222_13279[(1)] = (26));

} else {
var statearr_13223_13280 = state_13176__$1;
(statearr_13223_13280[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (35))){
var inst_13144 = (state_13176[(30)]);
var inst_13165 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13144);
var inst_13166 = cljs.core.pr_str.call(null,inst_13165);
var inst_13167 = [cljs.core.str("not required: "),cljs.core.str(inst_13166)].join('');
var inst_13168 = figwheel.client.utils.log.call(null,inst_13167);
var state_13176__$1 = state_13176;
var statearr_13224_13281 = state_13176__$1;
(statearr_13224_13281[(2)] = inst_13168);

(statearr_13224_13281[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (19))){
var inst_13109 = (state_13176[(12)]);
var inst_13113 = (state_13176[(13)]);
var inst_13108 = (state_13176[(15)]);
var inst_13112 = (state_13176[(16)]);
var inst_13112__$1 = (state_13176[(2)]);
var inst_13113__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_13112__$1);
var inst_13114 = (function (){var all_files = inst_13108;
var files_SINGLEQUOTE_ = inst_13109;
var res_SINGLEQUOTE_ = inst_13112__$1;
var res = inst_13113__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_13109,inst_13113,inst_13108,inst_13112,inst_13112__$1,inst_13113__$1,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files){
return (function (p1__12846_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__12846_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_13109,inst_13113,inst_13108,inst_13112,inst_13112__$1,inst_13113__$1,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files))
})();
var inst_13115 = cljs.core.filter.call(null,inst_13114,inst_13112__$1);
var inst_13116 = cljs.core.not_empty.call(null,inst_13113__$1);
var state_13176__$1 = (function (){var statearr_13225 = state_13176;
(statearr_13225[(13)] = inst_13113__$1);

(statearr_13225[(14)] = inst_13115);

(statearr_13225[(16)] = inst_13112__$1);

return statearr_13225;
})();
if(cljs.core.truth_(inst_13116)){
var statearr_13226_13282 = state_13176__$1;
(statearr_13226_13282[(1)] = (20));

} else {
var statearr_13227_13283 = state_13176__$1;
(statearr_13227_13283[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (11))){
var state_13176__$1 = state_13176;
var statearr_13228_13284 = state_13176__$1;
(statearr_13228_13284[(2)] = null);

(statearr_13228_13284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (9))){
var inst_13095 = (state_13176[(2)]);
var state_13176__$1 = state_13176;
var statearr_13229_13285 = state_13176__$1;
(statearr_13229_13285[(2)] = inst_13095);

(statearr_13229_13285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (5))){
var inst_13066 = (state_13176[(7)]);
var inst_13065 = (state_13176[(9)]);
var inst_13068 = (inst_13066 < inst_13065);
var inst_13069 = inst_13068;
var state_13176__$1 = state_13176;
if(cljs.core.truth_(inst_13069)){
var statearr_13230_13286 = state_13176__$1;
(statearr_13230_13286[(1)] = (7));

} else {
var statearr_13231_13287 = state_13176__$1;
(statearr_13231_13287[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (14))){
var inst_13076 = (state_13176[(27)]);
var inst_13085 = cljs.core.first.call(null,inst_13076);
var inst_13086 = figwheel.client.file_reloading.eval_body.call(null,inst_13085);
var inst_13087 = cljs.core.next.call(null,inst_13076);
var inst_13063 = inst_13087;
var inst_13064 = null;
var inst_13065 = (0);
var inst_13066 = (0);
var state_13176__$1 = (function (){var statearr_13232 = state_13176;
(statearr_13232[(33)] = inst_13086);

(statearr_13232[(7)] = inst_13066);

(statearr_13232[(8)] = inst_13064);

(statearr_13232[(9)] = inst_13065);

(statearr_13232[(10)] = inst_13063);

return statearr_13232;
})();
var statearr_13233_13288 = state_13176__$1;
(statearr_13233_13288[(2)] = null);

(statearr_13233_13288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (26))){
var inst_13135 = (state_13176[(19)]);
var inst_13138 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13135);
var state_13176__$1 = state_13176;
var statearr_13234_13289 = state_13176__$1;
(statearr_13234_13289[(2)] = inst_13138);

(statearr_13234_13289[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (16))){
var inst_13102 = (state_13176[(24)]);
var inst_13104 = (function (){var all_files = inst_13102;
return ((function (all_files,inst_13102,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files){
return (function (p1__12845_SHARP_){
return cljs.core.update_in.call(null,p1__12845_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_13102,state_val_13177,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files))
})();
var inst_13105 = cljs.core.map.call(null,inst_13104,inst_13102);
var state_13176__$1 = state_13176;
var statearr_13235_13290 = state_13176__$1;
(statearr_13235_13290[(2)] = inst_13105);

(statearr_13235_13290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (30))){
var state_13176__$1 = state_13176;
var statearr_13236_13291 = state_13176__$1;
(statearr_13236_13291[(2)] = null);

(statearr_13236_13291[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (10))){
var inst_13076 = (state_13176[(27)]);
var inst_13078 = cljs.core.chunked_seq_QMARK_.call(null,inst_13076);
var state_13176__$1 = state_13176;
if(inst_13078){
var statearr_13237_13292 = state_13176__$1;
(statearr_13237_13292[(1)] = (13));

} else {
var statearr_13238_13293 = state_13176__$1;
(statearr_13238_13293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (18))){
var inst_13109 = (state_13176[(12)]);
var inst_13108 = (state_13176[(15)]);
var inst_13108__$1 = (state_13176[(2)]);
var inst_13109__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_13108__$1);
var inst_13110 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_13109__$1);
var state_13176__$1 = (function (){var statearr_13239 = state_13176;
(statearr_13239[(12)] = inst_13109__$1);

(statearr_13239[(15)] = inst_13108__$1);

return statearr_13239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13176__$1,(19),inst_13110);
} else {
if((state_val_13177 === (37))){
var inst_13171 = (state_13176[(2)]);
var state_13176__$1 = state_13176;
var statearr_13240_13294 = state_13176__$1;
(statearr_13240_13294[(2)] = inst_13171);

(statearr_13240_13294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (8))){
var inst_13063 = (state_13176[(10)]);
var inst_13076 = (state_13176[(27)]);
var inst_13076__$1 = cljs.core.seq.call(null,inst_13063);
var state_13176__$1 = (function (){var statearr_13241 = state_13176;
(statearr_13241[(27)] = inst_13076__$1);

return statearr_13241;
})();
if(inst_13076__$1){
var statearr_13242_13295 = state_13176__$1;
(statearr_13242_13295[(1)] = (10));

} else {
var statearr_13243_13296 = state_13176__$1;
(statearr_13243_13296[(1)] = (11));

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
});})(c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files))
;
return ((function (switch__7074__auto__,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7075__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7075__auto____0 = (function (){
var statearr_13247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13247[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__7075__auto__);

(statearr_13247[(1)] = (1));

return statearr_13247;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7075__auto____1 = (function (state_13176){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_13176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e13248){if((e13248 instanceof Object)){
var ex__7078__auto__ = e13248;
var statearr_13249_13297 = state_13176;
(statearr_13249_13297[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13298 = state_13176;
state_13176 = G__13298;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__7075__auto__ = function(state_13176){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7075__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7075__auto____1.call(this,state_13176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7075__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7075__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files))
})();
var state__7138__auto__ = (function (){var statearr_13250 = f__7137__auto__.call(null);
(statearr_13250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);

return statearr_13250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__,map__13050,map__13050__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__13051,map__13051__$1,msg,files))
);

return c__7136__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__13301,link){
var map__13303 = p__13301;
var map__13303__$1 = ((cljs.core.seq_QMARK_.call(null,map__13303))?cljs.core.apply.call(null,cljs.core.hash_map,map__13303):map__13303);
var file = cljs.core.get.call(null,map__13303__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__13303,map__13303__$1,file){
return (function (p1__13299_SHARP_,p2__13300_SHARP_){
if(cljs.core._EQ_.call(null,p1__13299_SHARP_,p2__13300_SHARP_)){
return p1__13299_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__13303,map__13303__$1,file))
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__13307){
var map__13308 = p__13307;
var map__13308__$1 = ((cljs.core.seq_QMARK_.call(null,map__13308))?cljs.core.apply.call(null,cljs.core.hash_map,map__13308):map__13308);
var match_length = cljs.core.get.call(null,map__13308__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__13308__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__13304_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__13304_SHARP_);
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
var G__13310 = arguments.length;
switch (G__13310) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__13312){
var map__13314 = p__13312;
var map__13314__$1 = ((cljs.core.seq_QMARK_.call(null,map__13314))?cljs.core.apply.call(null,cljs.core.hash_map,map__13314):map__13314);
var f_data = map__13314__$1;
var file = cljs.core.get.call(null,map__13314__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__13314__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__4531__auto__ = request_url;
if(cljs.core.truth_(or__4531__auto__)){
return or__4531__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__13315,files_msg){
var map__13337 = p__13315;
var map__13337__$1 = ((cljs.core.seq_QMARK_.call(null,map__13337))?cljs.core.apply.call(null,cljs.core.hash_map,map__13337):map__13337);
var opts = map__13337__$1;
var on_cssload = cljs.core.get.call(null,map__13337__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__13338_13358 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__13339_13359 = null;
var count__13340_13360 = (0);
var i__13341_13361 = (0);
while(true){
if((i__13341_13361 < count__13340_13360)){
var f_13362 = cljs.core._nth.call(null,chunk__13339_13359,i__13341_13361);
figwheel.client.file_reloading.reload_css_file.call(null,f_13362);

var G__13363 = seq__13338_13358;
var G__13364 = chunk__13339_13359;
var G__13365 = count__13340_13360;
var G__13366 = (i__13341_13361 + (1));
seq__13338_13358 = G__13363;
chunk__13339_13359 = G__13364;
count__13340_13360 = G__13365;
i__13341_13361 = G__13366;
continue;
} else {
var temp__4423__auto___13367 = cljs.core.seq.call(null,seq__13338_13358);
if(temp__4423__auto___13367){
var seq__13338_13368__$1 = temp__4423__auto___13367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13338_13368__$1)){
var c__5316__auto___13369 = cljs.core.chunk_first.call(null,seq__13338_13368__$1);
var G__13370 = cljs.core.chunk_rest.call(null,seq__13338_13368__$1);
var G__13371 = c__5316__auto___13369;
var G__13372 = cljs.core.count.call(null,c__5316__auto___13369);
var G__13373 = (0);
seq__13338_13358 = G__13370;
chunk__13339_13359 = G__13371;
count__13340_13360 = G__13372;
i__13341_13361 = G__13373;
continue;
} else {
var f_13374 = cljs.core.first.call(null,seq__13338_13368__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_13374);

var G__13375 = cljs.core.next.call(null,seq__13338_13368__$1);
var G__13376 = null;
var G__13377 = (0);
var G__13378 = (0);
seq__13338_13358 = G__13375;
chunk__13339_13359 = G__13376;
count__13340_13360 = G__13377;
i__13341_13361 = G__13378;
continue;
}
} else {
}
}
break;
}

var c__7136__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7136__auto__,map__13337,map__13337__$1,opts,on_cssload){
return (function (){
var f__7137__auto__ = (function (){var switch__7074__auto__ = ((function (c__7136__auto__,map__13337,map__13337__$1,opts,on_cssload){
return (function (state_13348){
var state_val_13349 = (state_13348[(1)]);
if((state_val_13349 === (1))){
var inst_13342 = cljs.core.async.timeout.call(null,(100));
var state_13348__$1 = state_13348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13348__$1,(2),inst_13342);
} else {
if((state_val_13349 === (2))){
var inst_13344 = (state_13348[(2)]);
var inst_13345 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_13346 = on_cssload.call(null,inst_13345);
var state_13348__$1 = (function (){var statearr_13350 = state_13348;
(statearr_13350[(7)] = inst_13344);

return statearr_13350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13348__$1,inst_13346);
} else {
return null;
}
}
});})(c__7136__auto__,map__13337,map__13337__$1,opts,on_cssload))
;
return ((function (switch__7074__auto__,c__7136__auto__,map__13337,map__13337__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7075__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7075__auto____0 = (function (){
var statearr_13354 = [null,null,null,null,null,null,null,null];
(statearr_13354[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__7075__auto__);

(statearr_13354[(1)] = (1));

return statearr_13354;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__7075__auto____1 = (function (state_13348){
while(true){
var ret_value__7076__auto__ = (function (){try{while(true){
var result__7077__auto__ = switch__7074__auto__.call(null,state_13348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7077__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7077__auto__;
}
break;
}
}catch (e13355){if((e13355 instanceof Object)){
var ex__7078__auto__ = e13355;
var statearr_13356_13379 = state_13348;
(statearr_13356_13379[(5)] = ex__7078__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13380 = state_13348;
state_13348 = G__13380;
continue;
} else {
return ret_value__7076__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__7075__auto__ = function(state_13348){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7075__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7075__auto____1.call(this,state_13348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__7075__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__7075__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__7075__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__7075__auto__;
})()
;})(switch__7074__auto__,c__7136__auto__,map__13337,map__13337__$1,opts,on_cssload))
})();
var state__7138__auto__ = (function (){var statearr_13357 = f__7137__auto__.call(null);
(statearr_13357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7136__auto__);

return statearr_13357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7138__auto__);
});})(c__7136__auto__,map__13337,map__13337__$1,opts,on_cssload))
);

return c__7136__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1433865002926