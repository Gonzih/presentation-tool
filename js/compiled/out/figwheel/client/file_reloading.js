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
return cljs.core.reduce.call(null,(function (p1__21894_SHARP_,p2__21895_SHARP_){
var and__18075__auto__ = p1__21894_SHARP_;
if(cljs.core.truth_(and__18075__auto__)){
return p2__21895_SHARP_;
} else {
return and__18075__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18087__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18087__auto__){
return or__18087__auto__;
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
if(cljs.core.truth_((function (){var or__18087__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18087__auto__){
return or__18087__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18087__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18986__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18986__auto__,method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__21896){
var map__21897 = p__21896;
var map__21897__$1 = ((cljs.core.seq_QMARK_.call(null,map__21897))?cljs.core.apply.call(null,cljs.core.hash_map,map__21897):map__21897);
var file = cljs.core.get.call(null,map__21897__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__21898){
var map__21899 = p__21898;
var map__21899__$1 = ((cljs.core.seq_QMARK_.call(null,map__21899))?cljs.core.apply.call(null,cljs.core.hash_map,map__21899):map__21899);
var namespace = cljs.core.get.call(null,map__21899__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18986__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18986__auto__,method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e21900){if((e21900 instanceof Error)){
var e = e21900;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21900;

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
var G__21902 = arguments.length;
switch (G__21902) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__21904,callback){
var map__21906 = p__21904;
var map__21906__$1 = ((cljs.core.seq_QMARK_.call(null,map__21906))?cljs.core.apply.call(null,cljs.core.hash_map,map__21906):map__21906);
var file_msg = map__21906__$1;
var request_url = cljs.core.get.call(null,map__21906__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__21906,map__21906__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__21906,map__21906__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__21907){
var map__21909 = p__21907;
var map__21909__$1 = ((cljs.core.seq_QMARK_.call(null,map__21909))?cljs.core.apply.call(null,cljs.core.hash_map,map__21909):map__21909);
var file_msg = map__21909__$1;
var namespace = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__21909__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18087__auto__ = meta_data;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18075__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18075__auto__){
var or__18087__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18087__auto____$1)){
return or__18087__auto____$1;
} else {
var and__18075__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18075__auto____$1){
var or__18087__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18087__auto____$2){
return or__18087__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18075__auto____$1;
}
}
}
} else {
return and__18075__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__21910,callback){
var map__21912 = p__21910;
var map__21912__$1 = ((cljs.core.seq_QMARK_.call(null,map__21912))?cljs.core.apply.call(null,cljs.core.hash_map,map__21912):map__21912);
var file_msg = map__21912__$1;
var request_url = cljs.core.get.call(null,map__21912__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__21912__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20372__auto___21999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___21999,out){
return (function (){
var f__20373__auto__ = (function (){var switch__20351__auto__ = ((function (c__20372__auto___21999,out){
return (function (state_21981){
var state_val_21982 = (state_21981[(1)]);
if((state_val_21982 === (1))){
var inst_21959 = cljs.core.nth.call(null,files,(0),null);
var inst_21960 = cljs.core.nthnext.call(null,files,(1));
var inst_21961 = files;
var state_21981__$1 = (function (){var statearr_21983 = state_21981;
(statearr_21983[(7)] = inst_21959);

(statearr_21983[(8)] = inst_21961);

(statearr_21983[(9)] = inst_21960);

return statearr_21983;
})();
var statearr_21984_22000 = state_21981__$1;
(statearr_21984_22000[(2)] = null);

(statearr_21984_22000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (2))){
var inst_21964 = (state_21981[(10)]);
var inst_21961 = (state_21981[(8)]);
var inst_21964__$1 = cljs.core.nth.call(null,inst_21961,(0),null);
var inst_21965 = cljs.core.nthnext.call(null,inst_21961,(1));
var inst_21966 = (inst_21964__$1 == null);
var inst_21967 = cljs.core.not.call(null,inst_21966);
var state_21981__$1 = (function (){var statearr_21985 = state_21981;
(statearr_21985[(10)] = inst_21964__$1);

(statearr_21985[(11)] = inst_21965);

return statearr_21985;
})();
if(inst_21967){
var statearr_21986_22001 = state_21981__$1;
(statearr_21986_22001[(1)] = (4));

} else {
var statearr_21987_22002 = state_21981__$1;
(statearr_21987_22002[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (3))){
var inst_21979 = (state_21981[(2)]);
var state_21981__$1 = state_21981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21981__$1,inst_21979);
} else {
if((state_val_21982 === (4))){
var inst_21964 = (state_21981[(10)]);
var inst_21969 = figwheel.client.file_reloading.reload_js_file.call(null,inst_21964);
var state_21981__$1 = state_21981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21981__$1,(7),inst_21969);
} else {
if((state_val_21982 === (5))){
var inst_21975 = cljs.core.async.close_BANG_.call(null,out);
var state_21981__$1 = state_21981;
var statearr_21988_22003 = state_21981__$1;
(statearr_21988_22003[(2)] = inst_21975);

(statearr_21988_22003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (6))){
var inst_21977 = (state_21981[(2)]);
var state_21981__$1 = state_21981;
var statearr_21989_22004 = state_21981__$1;
(statearr_21989_22004[(2)] = inst_21977);

(statearr_21989_22004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21982 === (7))){
var inst_21965 = (state_21981[(11)]);
var inst_21971 = (state_21981[(2)]);
var inst_21972 = cljs.core.async.put_BANG_.call(null,out,inst_21971);
var inst_21961 = inst_21965;
var state_21981__$1 = (function (){var statearr_21990 = state_21981;
(statearr_21990[(8)] = inst_21961);

(statearr_21990[(12)] = inst_21972);

return statearr_21990;
})();
var statearr_21991_22005 = state_21981__$1;
(statearr_21991_22005[(2)] = null);

(statearr_21991_22005[(1)] = (2));


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
});})(c__20372__auto___21999,out))
;
return ((function (switch__20351__auto__,c__20372__auto___21999,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20352__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20352__auto____0 = (function (){
var statearr_21995 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21995[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20352__auto__);

(statearr_21995[(1)] = (1));

return statearr_21995;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20352__auto____1 = (function (state_21981){
while(true){
var ret_value__20353__auto__ = (function (){try{while(true){
var result__20354__auto__ = switch__20351__auto__.call(null,state_21981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20354__auto__;
}
break;
}
}catch (e21996){if((e21996 instanceof Object)){
var ex__20355__auto__ = e21996;
var statearr_21997_22006 = state_21981;
(statearr_21997_22006[(5)] = ex__20355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22007 = state_21981;
state_21981 = G__22007;
continue;
} else {
return ret_value__20353__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20352__auto__ = function(state_21981){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20352__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20352__auto____1.call(this,state_21981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20352__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20352__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20352__auto__;
})()
;})(switch__20351__auto__,c__20372__auto___21999,out))
})();
var state__20374__auto__ = (function (){var statearr_21998 = f__20373__auto__.call(null);
(statearr_21998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___21999);

return statearr_21998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___21999,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__22008,p__22009){
var map__22012 = p__22008;
var map__22012__$1 = ((cljs.core.seq_QMARK_.call(null,map__22012))?cljs.core.apply.call(null,cljs.core.hash_map,map__22012):map__22012);
var opts = map__22012__$1;
var url_rewriter = cljs.core.get.call(null,map__22012__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__22013 = p__22009;
var map__22013__$1 = ((cljs.core.seq_QMARK_.call(null,map__22013))?cljs.core.apply.call(null,cljs.core.hash_map,map__22013):map__22013);
var file_msg = map__22013__$1;
var file = cljs.core.get.call(null,map__22013__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22014){
var map__22017 = p__22014;
var map__22017__$1 = ((cljs.core.seq_QMARK_.call(null,map__22017))?cljs.core.apply.call(null,cljs.core.hash_map,map__22017):map__22017);
var eval_body__$1 = cljs.core.get.call(null,map__22017__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22017__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18075__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18075__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18075__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e22018){var e = e22018;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22023,p__22024){
var map__22226 = p__22023;
var map__22226__$1 = ((cljs.core.seq_QMARK_.call(null,map__22226))?cljs.core.apply.call(null,cljs.core.hash_map,map__22226):map__22226);
var opts = map__22226__$1;
var before_jsload = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__22226__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__22227 = p__22024;
var map__22227__$1 = ((cljs.core.seq_QMARK_.call(null,map__22227))?cljs.core.apply.call(null,cljs.core.hash_map,map__22227):map__22227);
var msg = map__22227__$1;
var files = cljs.core.get.call(null,map__22227__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files){
return (function (){
var f__20373__auto__ = (function (){var switch__20351__auto__ = ((function (c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files){
return (function (state_22352){
var state_val_22353 = (state_22352[(1)]);
if((state_val_22353 === (7))){
var inst_22239 = (state_22352[(7)]);
var inst_22240 = (state_22352[(8)]);
var inst_22241 = (state_22352[(9)]);
var inst_22242 = (state_22352[(10)]);
var inst_22247 = cljs.core._nth.call(null,inst_22240,inst_22242);
var inst_22248 = figwheel.client.file_reloading.eval_body.call(null,inst_22247);
var inst_22249 = (inst_22242 + (1));
var tmp22354 = inst_22239;
var tmp22355 = inst_22240;
var tmp22356 = inst_22241;
var inst_22239__$1 = tmp22354;
var inst_22240__$1 = tmp22355;
var inst_22241__$1 = tmp22356;
var inst_22242__$1 = inst_22249;
var state_22352__$1 = (function (){var statearr_22357 = state_22352;
(statearr_22357[(7)] = inst_22239__$1);

(statearr_22357[(8)] = inst_22240__$1);

(statearr_22357[(11)] = inst_22248);

(statearr_22357[(9)] = inst_22241__$1);

(statearr_22357[(10)] = inst_22242__$1);

return statearr_22357;
})();
var statearr_22358_22427 = state_22352__$1;
(statearr_22358_22427[(2)] = null);

(statearr_22358_22427[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (20))){
var inst_22285 = (state_22352[(12)]);
var inst_22288 = (state_22352[(13)]);
var inst_22289 = (state_22352[(14)]);
var inst_22284 = (state_22352[(15)]);
var inst_22291 = (state_22352[(16)]);
var inst_22294 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22296 = (function (){var all_files = inst_22284;
var files_SINGLEQUOTE_ = inst_22285;
var res_SINGLEQUOTE_ = inst_22288;
var res = inst_22289;
var files_not_loaded = inst_22291;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22285,inst_22288,inst_22289,inst_22284,inst_22291,inst_22294,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files){
return (function (p__22295){
var map__22359 = p__22295;
var map__22359__$1 = ((cljs.core.seq_QMARK_.call(null,map__22359))?cljs.core.apply.call(null,cljs.core.hash_map,map__22359):map__22359);
var namespace = cljs.core.get.call(null,map__22359__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22359__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22285,inst_22288,inst_22289,inst_22284,inst_22291,inst_22294,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files))
})();
var inst_22297 = cljs.core.map.call(null,inst_22296,inst_22289);
var inst_22298 = cljs.core.pr_str.call(null,inst_22297);
var inst_22299 = figwheel.client.utils.log.call(null,inst_22298);
var inst_22300 = (function (){var all_files = inst_22284;
var files_SINGLEQUOTE_ = inst_22285;
var res_SINGLEQUOTE_ = inst_22288;
var res = inst_22289;
var files_not_loaded = inst_22291;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22285,inst_22288,inst_22289,inst_22284,inst_22291,inst_22294,inst_22296,inst_22297,inst_22298,inst_22299,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22285,inst_22288,inst_22289,inst_22284,inst_22291,inst_22294,inst_22296,inst_22297,inst_22298,inst_22299,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files))
})();
var inst_22301 = setTimeout(inst_22300,(10));
var state_22352__$1 = (function (){var statearr_22360 = state_22352;
(statearr_22360[(17)] = inst_22299);

(statearr_22360[(18)] = inst_22294);

return statearr_22360;
})();
var statearr_22361_22428 = state_22352__$1;
(statearr_22361_22428[(2)] = inst_22301);

(statearr_22361_22428[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (27))){
var inst_22311 = (state_22352[(19)]);
var state_22352__$1 = state_22352;
var statearr_22362_22429 = state_22352__$1;
(statearr_22362_22429[(2)] = inst_22311);

(statearr_22362_22429[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (1))){
var inst_22231 = (state_22352[(20)]);
var inst_22228 = before_jsload.call(null,files);
var inst_22229 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22230 = (function (){return ((function (inst_22231,inst_22228,inst_22229,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files){
return (function (p1__22019_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22019_SHARP_);
});
;})(inst_22231,inst_22228,inst_22229,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files))
})();
var inst_22231__$1 = cljs.core.filter.call(null,inst_22230,files);
var inst_22232 = cljs.core.not_empty.call(null,inst_22231__$1);
var state_22352__$1 = (function (){var statearr_22363 = state_22352;
(statearr_22363[(20)] = inst_22231__$1);

(statearr_22363[(21)] = inst_22228);

(statearr_22363[(22)] = inst_22229);

return statearr_22363;
})();
if(cljs.core.truth_(inst_22232)){
var statearr_22364_22430 = state_22352__$1;
(statearr_22364_22430[(1)] = (2));

} else {
var statearr_22365_22431 = state_22352__$1;
(statearr_22365_22431[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (24))){
var state_22352__$1 = state_22352;
var statearr_22366_22432 = state_22352__$1;
(statearr_22366_22432[(2)] = null);

(statearr_22366_22432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (4))){
var inst_22276 = (state_22352[(2)]);
var inst_22277 = (function (){return ((function (inst_22276,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files){
return (function (p1__22020_SHARP_){
var and__18075__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22020_SHARP_);
if(cljs.core.truth_(and__18075__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22020_SHARP_));
} else {
return and__18075__auto__;
}
});
;})(inst_22276,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files))
})();
var inst_22278 = cljs.core.filter.call(null,inst_22277,files);
var state_22352__$1 = (function (){var statearr_22367 = state_22352;
(statearr_22367[(23)] = inst_22276);

(statearr_22367[(24)] = inst_22278);

return statearr_22367;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_22368_22433 = state_22352__$1;
(statearr_22368_22433[(1)] = (16));

} else {
var statearr_22369_22434 = state_22352__$1;
(statearr_22369_22434[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (15))){
var inst_22266 = (state_22352[(2)]);
var state_22352__$1 = state_22352;
var statearr_22370_22435 = state_22352__$1;
(statearr_22370_22435[(2)] = inst_22266);

(statearr_22370_22435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (21))){
var state_22352__$1 = state_22352;
var statearr_22371_22436 = state_22352__$1;
(statearr_22371_22436[(2)] = null);

(statearr_22371_22436[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (31))){
var inst_22319 = (state_22352[(25)]);
var inst_22329 = (state_22352[(2)]);
var inst_22330 = cljs.core.not_empty.call(null,inst_22319);
var state_22352__$1 = (function (){var statearr_22372 = state_22352;
(statearr_22372[(26)] = inst_22329);

return statearr_22372;
})();
if(cljs.core.truth_(inst_22330)){
var statearr_22373_22437 = state_22352__$1;
(statearr_22373_22437[(1)] = (32));

} else {
var statearr_22374_22438 = state_22352__$1;
(statearr_22374_22438[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (32))){
var inst_22319 = (state_22352[(25)]);
var inst_22332 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22319);
var inst_22333 = cljs.core.pr_str.call(null,inst_22332);
var inst_22334 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_22333)].join('');
var inst_22335 = figwheel.client.utils.log.call(null,inst_22334);
var state_22352__$1 = state_22352;
var statearr_22375_22439 = state_22352__$1;
(statearr_22375_22439[(2)] = inst_22335);

(statearr_22375_22439[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (33))){
var state_22352__$1 = state_22352;
var statearr_22376_22440 = state_22352__$1;
(statearr_22376_22440[(2)] = null);

(statearr_22376_22440[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (13))){
var inst_22252 = (state_22352[(27)]);
var inst_22256 = cljs.core.chunk_first.call(null,inst_22252);
var inst_22257 = cljs.core.chunk_rest.call(null,inst_22252);
var inst_22258 = cljs.core.count.call(null,inst_22256);
var inst_22239 = inst_22257;
var inst_22240 = inst_22256;
var inst_22241 = inst_22258;
var inst_22242 = (0);
var state_22352__$1 = (function (){var statearr_22377 = state_22352;
(statearr_22377[(7)] = inst_22239);

(statearr_22377[(8)] = inst_22240);

(statearr_22377[(9)] = inst_22241);

(statearr_22377[(10)] = inst_22242);

return statearr_22377;
})();
var statearr_22378_22441 = state_22352__$1;
(statearr_22378_22441[(2)] = null);

(statearr_22378_22441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (22))){
var inst_22291 = (state_22352[(16)]);
var inst_22304 = (state_22352[(2)]);
var inst_22305 = cljs.core.not_empty.call(null,inst_22291);
var state_22352__$1 = (function (){var statearr_22379 = state_22352;
(statearr_22379[(28)] = inst_22304);

return statearr_22379;
})();
if(cljs.core.truth_(inst_22305)){
var statearr_22380_22442 = state_22352__$1;
(statearr_22380_22442[(1)] = (23));

} else {
var statearr_22381_22443 = state_22352__$1;
(statearr_22381_22443[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (36))){
var state_22352__$1 = state_22352;
var statearr_22382_22444 = state_22352__$1;
(statearr_22382_22444[(2)] = null);

(statearr_22382_22444[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (29))){
var inst_22318 = (state_22352[(29)]);
var inst_22323 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22318);
var inst_22324 = cljs.core.pr_str.call(null,inst_22323);
var inst_22325 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22324)].join('');
var inst_22326 = figwheel.client.utils.log.call(null,inst_22325);
var state_22352__$1 = state_22352;
var statearr_22383_22445 = state_22352__$1;
(statearr_22383_22445[(2)] = inst_22326);

(statearr_22383_22445[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (6))){
var inst_22273 = (state_22352[(2)]);
var state_22352__$1 = state_22352;
var statearr_22384_22446 = state_22352__$1;
(statearr_22384_22446[(2)] = inst_22273);

(statearr_22384_22446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (28))){
var inst_22318 = (state_22352[(29)]);
var inst_22317 = (state_22352[(2)]);
var inst_22318__$1 = cljs.core.get.call(null,inst_22317,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22319 = cljs.core.get.call(null,inst_22317,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_22320 = cljs.core.get.call(null,inst_22317,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22321 = cljs.core.not_empty.call(null,inst_22318__$1);
var state_22352__$1 = (function (){var statearr_22385 = state_22352;
(statearr_22385[(30)] = inst_22320);

(statearr_22385[(25)] = inst_22319);

(statearr_22385[(29)] = inst_22318__$1);

return statearr_22385;
})();
if(cljs.core.truth_(inst_22321)){
var statearr_22386_22447 = state_22352__$1;
(statearr_22386_22447[(1)] = (29));

} else {
var statearr_22387_22448 = state_22352__$1;
(statearr_22387_22448[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (25))){
var inst_22350 = (state_22352[(2)]);
var state_22352__$1 = state_22352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22352__$1,inst_22350);
} else {
if((state_val_22353 === (34))){
var inst_22320 = (state_22352[(30)]);
var inst_22338 = (state_22352[(2)]);
var inst_22339 = cljs.core.not_empty.call(null,inst_22320);
var state_22352__$1 = (function (){var statearr_22388 = state_22352;
(statearr_22388[(31)] = inst_22338);

return statearr_22388;
})();
if(cljs.core.truth_(inst_22339)){
var statearr_22389_22449 = state_22352__$1;
(statearr_22389_22449[(1)] = (35));

} else {
var statearr_22390_22450 = state_22352__$1;
(statearr_22390_22450[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (17))){
var inst_22278 = (state_22352[(24)]);
var state_22352__$1 = state_22352;
var statearr_22391_22451 = state_22352__$1;
(statearr_22391_22451[(2)] = inst_22278);

(statearr_22391_22451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (3))){
var state_22352__$1 = state_22352;
var statearr_22392_22452 = state_22352__$1;
(statearr_22392_22452[(2)] = null);

(statearr_22392_22452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (12))){
var inst_22269 = (state_22352[(2)]);
var state_22352__$1 = state_22352;
var statearr_22393_22453 = state_22352__$1;
(statearr_22393_22453[(2)] = inst_22269);

(statearr_22393_22453[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (2))){
var inst_22231 = (state_22352[(20)]);
var inst_22238 = cljs.core.seq.call(null,inst_22231);
var inst_22239 = inst_22238;
var inst_22240 = null;
var inst_22241 = (0);
var inst_22242 = (0);
var state_22352__$1 = (function (){var statearr_22394 = state_22352;
(statearr_22394[(7)] = inst_22239);

(statearr_22394[(8)] = inst_22240);

(statearr_22394[(9)] = inst_22241);

(statearr_22394[(10)] = inst_22242);

return statearr_22394;
})();
var statearr_22395_22454 = state_22352__$1;
(statearr_22395_22454[(2)] = null);

(statearr_22395_22454[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (23))){
var inst_22311 = (state_22352[(19)]);
var inst_22285 = (state_22352[(12)]);
var inst_22288 = (state_22352[(13)]);
var inst_22289 = (state_22352[(14)]);
var inst_22284 = (state_22352[(15)]);
var inst_22291 = (state_22352[(16)]);
var inst_22307 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22310 = (function (){var all_files = inst_22284;
var files_SINGLEQUOTE_ = inst_22285;
var res_SINGLEQUOTE_ = inst_22288;
var res = inst_22289;
var files_not_loaded = inst_22291;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22311,inst_22285,inst_22288,inst_22289,inst_22284,inst_22291,inst_22307,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files){
return (function (p__22309){
var map__22396 = p__22309;
var map__22396__$1 = ((cljs.core.seq_QMARK_.call(null,map__22396))?cljs.core.apply.call(null,cljs.core.hash_map,map__22396):map__22396);
var meta_data = cljs.core.get.call(null,map__22396__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_22311,inst_22285,inst_22288,inst_22289,inst_22284,inst_22291,inst_22307,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files))
})();
var inst_22311__$1 = cljs.core.group_by.call(null,inst_22310,inst_22291);
var inst_22312 = cljs.core.seq_QMARK_.call(null,inst_22311__$1);
var state_22352__$1 = (function (){var statearr_22397 = state_22352;
(statearr_22397[(19)] = inst_22311__$1);

(statearr_22397[(32)] = inst_22307);

return statearr_22397;
})();
if(inst_22312){
var statearr_22398_22455 = state_22352__$1;
(statearr_22398_22455[(1)] = (26));

} else {
var statearr_22399_22456 = state_22352__$1;
(statearr_22399_22456[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (35))){
var inst_22320 = (state_22352[(30)]);
var inst_22341 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22320);
var inst_22342 = cljs.core.pr_str.call(null,inst_22341);
var inst_22343 = [cljs.core.str("not required: "),cljs.core.str(inst_22342)].join('');
var inst_22344 = figwheel.client.utils.log.call(null,inst_22343);
var state_22352__$1 = state_22352;
var statearr_22400_22457 = state_22352__$1;
(statearr_22400_22457[(2)] = inst_22344);

(statearr_22400_22457[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (19))){
var inst_22285 = (state_22352[(12)]);
var inst_22288 = (state_22352[(13)]);
var inst_22289 = (state_22352[(14)]);
var inst_22284 = (state_22352[(15)]);
var inst_22288__$1 = (state_22352[(2)]);
var inst_22289__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22288__$1);
var inst_22290 = (function (){var all_files = inst_22284;
var files_SINGLEQUOTE_ = inst_22285;
var res_SINGLEQUOTE_ = inst_22288__$1;
var res = inst_22289__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_22285,inst_22288,inst_22289,inst_22284,inst_22288__$1,inst_22289__$1,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files){
return (function (p1__22022_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22022_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_22285,inst_22288,inst_22289,inst_22284,inst_22288__$1,inst_22289__$1,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files))
})();
var inst_22291 = cljs.core.filter.call(null,inst_22290,inst_22288__$1);
var inst_22292 = cljs.core.not_empty.call(null,inst_22289__$1);
var state_22352__$1 = (function (){var statearr_22401 = state_22352;
(statearr_22401[(13)] = inst_22288__$1);

(statearr_22401[(14)] = inst_22289__$1);

(statearr_22401[(16)] = inst_22291);

return statearr_22401;
})();
if(cljs.core.truth_(inst_22292)){
var statearr_22402_22458 = state_22352__$1;
(statearr_22402_22458[(1)] = (20));

} else {
var statearr_22403_22459 = state_22352__$1;
(statearr_22403_22459[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (11))){
var state_22352__$1 = state_22352;
var statearr_22404_22460 = state_22352__$1;
(statearr_22404_22460[(2)] = null);

(statearr_22404_22460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (9))){
var inst_22271 = (state_22352[(2)]);
var state_22352__$1 = state_22352;
var statearr_22405_22461 = state_22352__$1;
(statearr_22405_22461[(2)] = inst_22271);

(statearr_22405_22461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (5))){
var inst_22241 = (state_22352[(9)]);
var inst_22242 = (state_22352[(10)]);
var inst_22244 = (inst_22242 < inst_22241);
var inst_22245 = inst_22244;
var state_22352__$1 = state_22352;
if(cljs.core.truth_(inst_22245)){
var statearr_22406_22462 = state_22352__$1;
(statearr_22406_22462[(1)] = (7));

} else {
var statearr_22407_22463 = state_22352__$1;
(statearr_22407_22463[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (14))){
var inst_22252 = (state_22352[(27)]);
var inst_22261 = cljs.core.first.call(null,inst_22252);
var inst_22262 = figwheel.client.file_reloading.eval_body.call(null,inst_22261);
var inst_22263 = cljs.core.next.call(null,inst_22252);
var inst_22239 = inst_22263;
var inst_22240 = null;
var inst_22241 = (0);
var inst_22242 = (0);
var state_22352__$1 = (function (){var statearr_22408 = state_22352;
(statearr_22408[(7)] = inst_22239);

(statearr_22408[(8)] = inst_22240);

(statearr_22408[(33)] = inst_22262);

(statearr_22408[(9)] = inst_22241);

(statearr_22408[(10)] = inst_22242);

return statearr_22408;
})();
var statearr_22409_22464 = state_22352__$1;
(statearr_22409_22464[(2)] = null);

(statearr_22409_22464[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (26))){
var inst_22311 = (state_22352[(19)]);
var inst_22314 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22311);
var state_22352__$1 = state_22352;
var statearr_22410_22465 = state_22352__$1;
(statearr_22410_22465[(2)] = inst_22314);

(statearr_22410_22465[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (16))){
var inst_22278 = (state_22352[(24)]);
var inst_22280 = (function (){var all_files = inst_22278;
return ((function (all_files,inst_22278,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files){
return (function (p1__22021_SHARP_){
return cljs.core.update_in.call(null,p1__22021_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_22278,state_val_22353,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files))
})();
var inst_22281 = cljs.core.map.call(null,inst_22280,inst_22278);
var state_22352__$1 = state_22352;
var statearr_22411_22466 = state_22352__$1;
(statearr_22411_22466[(2)] = inst_22281);

(statearr_22411_22466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (30))){
var state_22352__$1 = state_22352;
var statearr_22412_22467 = state_22352__$1;
(statearr_22412_22467[(2)] = null);

(statearr_22412_22467[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (10))){
var inst_22252 = (state_22352[(27)]);
var inst_22254 = cljs.core.chunked_seq_QMARK_.call(null,inst_22252);
var state_22352__$1 = state_22352;
if(inst_22254){
var statearr_22413_22468 = state_22352__$1;
(statearr_22413_22468[(1)] = (13));

} else {
var statearr_22414_22469 = state_22352__$1;
(statearr_22414_22469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (18))){
var inst_22285 = (state_22352[(12)]);
var inst_22284 = (state_22352[(15)]);
var inst_22284__$1 = (state_22352[(2)]);
var inst_22285__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_22284__$1);
var inst_22286 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22285__$1);
var state_22352__$1 = (function (){var statearr_22415 = state_22352;
(statearr_22415[(12)] = inst_22285__$1);

(statearr_22415[(15)] = inst_22284__$1);

return statearr_22415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22352__$1,(19),inst_22286);
} else {
if((state_val_22353 === (37))){
var inst_22347 = (state_22352[(2)]);
var state_22352__$1 = state_22352;
var statearr_22416_22470 = state_22352__$1;
(statearr_22416_22470[(2)] = inst_22347);

(statearr_22416_22470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22353 === (8))){
var inst_22239 = (state_22352[(7)]);
var inst_22252 = (state_22352[(27)]);
var inst_22252__$1 = cljs.core.seq.call(null,inst_22239);
var state_22352__$1 = (function (){var statearr_22417 = state_22352;
(statearr_22417[(27)] = inst_22252__$1);

return statearr_22417;
})();
if(inst_22252__$1){
var statearr_22418_22471 = state_22352__$1;
(statearr_22418_22471[(1)] = (10));

} else {
var statearr_22419_22472 = state_22352__$1;
(statearr_22419_22472[(1)] = (11));

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
});})(c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files))
;
return ((function (switch__20351__auto__,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20352__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20352__auto____0 = (function (){
var statearr_22423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22423[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20352__auto__);

(statearr_22423[(1)] = (1));

return statearr_22423;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20352__auto____1 = (function (state_22352){
while(true){
var ret_value__20353__auto__ = (function (){try{while(true){
var result__20354__auto__ = switch__20351__auto__.call(null,state_22352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20354__auto__;
}
break;
}
}catch (e22424){if((e22424 instanceof Object)){
var ex__20355__auto__ = e22424;
var statearr_22425_22473 = state_22352;
(statearr_22425_22473[(5)] = ex__20355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22474 = state_22352;
state_22352 = G__22474;
continue;
} else {
return ret_value__20353__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20352__auto__ = function(state_22352){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20352__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20352__auto____1.call(this,state_22352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20352__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20352__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20352__auto__;
})()
;})(switch__20351__auto__,c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files))
})();
var state__20374__auto__ = (function (){var statearr_22426 = f__20373__auto__.call(null);
(statearr_22426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto__);

return statearr_22426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto__,map__22226,map__22226__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__22227,map__22227__$1,msg,files))
);

return c__20372__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22477,link){
var map__22479 = p__22477;
var map__22479__$1 = ((cljs.core.seq_QMARK_.call(null,map__22479))?cljs.core.apply.call(null,cljs.core.hash_map,map__22479):map__22479);
var file = cljs.core.get.call(null,map__22479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__22479,map__22479__$1,file){
return (function (p1__22475_SHARP_,p2__22476_SHARP_){
if(cljs.core._EQ_.call(null,p1__22475_SHARP_,p2__22476_SHARP_)){
return p1__22475_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__22479,map__22479__$1,file))
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22483){
var map__22484 = p__22483;
var map__22484__$1 = ((cljs.core.seq_QMARK_.call(null,map__22484))?cljs.core.apply.call(null,cljs.core.hash_map,map__22484):map__22484);
var match_length = cljs.core.get.call(null,map__22484__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22484__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22480_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22480_SHARP_);
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
var G__22486 = arguments.length;
switch (G__22486) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22488){
var map__22490 = p__22488;
var map__22490__$1 = ((cljs.core.seq_QMARK_.call(null,map__22490))?cljs.core.apply.call(null,cljs.core.hash_map,map__22490):map__22490);
var f_data = map__22490__$1;
var file = cljs.core.get.call(null,map__22490__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__22490__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18087__auto__ = request_url;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22491,files_msg){
var map__22513 = p__22491;
var map__22513__$1 = ((cljs.core.seq_QMARK_.call(null,map__22513))?cljs.core.apply.call(null,cljs.core.hash_map,map__22513):map__22513);
var opts = map__22513__$1;
var on_cssload = cljs.core.get.call(null,map__22513__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22514_22534 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22515_22535 = null;
var count__22516_22536 = (0);
var i__22517_22537 = (0);
while(true){
if((i__22517_22537 < count__22516_22536)){
var f_22538 = cljs.core._nth.call(null,chunk__22515_22535,i__22517_22537);
figwheel.client.file_reloading.reload_css_file.call(null,f_22538);

var G__22539 = seq__22514_22534;
var G__22540 = chunk__22515_22535;
var G__22541 = count__22516_22536;
var G__22542 = (i__22517_22537 + (1));
seq__22514_22534 = G__22539;
chunk__22515_22535 = G__22540;
count__22516_22536 = G__22541;
i__22517_22537 = G__22542;
continue;
} else {
var temp__4423__auto___22543 = cljs.core.seq.call(null,seq__22514_22534);
if(temp__4423__auto___22543){
var seq__22514_22544__$1 = temp__4423__auto___22543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22514_22544__$1)){
var c__18872__auto___22545 = cljs.core.chunk_first.call(null,seq__22514_22544__$1);
var G__22546 = cljs.core.chunk_rest.call(null,seq__22514_22544__$1);
var G__22547 = c__18872__auto___22545;
var G__22548 = cljs.core.count.call(null,c__18872__auto___22545);
var G__22549 = (0);
seq__22514_22534 = G__22546;
chunk__22515_22535 = G__22547;
count__22516_22536 = G__22548;
i__22517_22537 = G__22549;
continue;
} else {
var f_22550 = cljs.core.first.call(null,seq__22514_22544__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22550);

var G__22551 = cljs.core.next.call(null,seq__22514_22544__$1);
var G__22552 = null;
var G__22553 = (0);
var G__22554 = (0);
seq__22514_22534 = G__22551;
chunk__22515_22535 = G__22552;
count__22516_22536 = G__22553;
i__22517_22537 = G__22554;
continue;
}
} else {
}
}
break;
}

var c__20372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto__,map__22513,map__22513__$1,opts,on_cssload){
return (function (){
var f__20373__auto__ = (function (){var switch__20351__auto__ = ((function (c__20372__auto__,map__22513,map__22513__$1,opts,on_cssload){
return (function (state_22524){
var state_val_22525 = (state_22524[(1)]);
if((state_val_22525 === (1))){
var inst_22518 = cljs.core.async.timeout.call(null,(100));
var state_22524__$1 = state_22524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22524__$1,(2),inst_22518);
} else {
if((state_val_22525 === (2))){
var inst_22520 = (state_22524[(2)]);
var inst_22521 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_22522 = on_cssload.call(null,inst_22521);
var state_22524__$1 = (function (){var statearr_22526 = state_22524;
(statearr_22526[(7)] = inst_22520);

return statearr_22526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22524__$1,inst_22522);
} else {
return null;
}
}
});})(c__20372__auto__,map__22513,map__22513__$1,opts,on_cssload))
;
return ((function (switch__20351__auto__,c__20372__auto__,map__22513,map__22513__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20352__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20352__auto____0 = (function (){
var statearr_22530 = [null,null,null,null,null,null,null,null];
(statearr_22530[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__20352__auto__);

(statearr_22530[(1)] = (1));

return statearr_22530;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20352__auto____1 = (function (state_22524){
while(true){
var ret_value__20353__auto__ = (function (){try{while(true){
var result__20354__auto__ = switch__20351__auto__.call(null,state_22524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20354__auto__;
}
break;
}
}catch (e22531){if((e22531 instanceof Object)){
var ex__20355__auto__ = e22531;
var statearr_22532_22555 = state_22524;
(statearr_22532_22555[(5)] = ex__20355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22556 = state_22524;
state_22524 = G__22556;
continue;
} else {
return ret_value__20353__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__20352__auto__ = function(state_22524){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20352__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20352__auto____1.call(this,state_22524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20352__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__20352__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20352__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20352__auto__;
})()
;})(switch__20351__auto__,c__20372__auto__,map__22513,map__22513__$1,opts,on_cssload))
})();
var state__20374__auto__ = (function (){var statearr_22533 = f__20373__auto__.call(null);
(statearr_22533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto__);

return statearr_22533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto__,map__22513,map__22513__$1,opts,on_cssload))
);

return c__20372__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1433863732551