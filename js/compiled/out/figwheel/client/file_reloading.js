// Compiled by ClojureScript 0.0-3153 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__12984_SHARP_,p2__12985_SHARP_){
var and__4304__auto__ = p1__12984_SHARP_;
if(cljs.core.truth_(and__4304__auto__)){
return p2__12985_SHARP_;
} else {
return and__4304__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4316__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4316__auto__){
return or__4316__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__12987_SHARP_,p2__12986_SHARP_){
return [cljs.core.str(p2__12986_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
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
if(cljs.core.truth_((function (){var or__4316__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4316__auto__){
return or__4316__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__4316__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__5211__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5212__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5213__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5214__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5215__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5215__auto__,method_table__5211__auto__,prefer_table__5212__auto__,method_cache__5213__auto__,cached_hierarchy__5214__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__12988){
var map__12989 = p__12988;
var map__12989__$1 = ((cljs.core.seq_QMARK_.call(null,map__12989))?cljs.core.apply.call(null,cljs.core.hash_map,map__12989):map__12989);
var file = cljs.core.get.call(null,map__12989__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__12990){
var map__12991 = p__12990;
var map__12991__$1 = ((cljs.core.seq_QMARK_.call(null,map__12991))?cljs.core.apply.call(null,cljs.core.hash_map,map__12991):map__12991);
var namespace = cljs.core.get.call(null,map__12991__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__5211__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5212__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5213__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5214__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5215__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5215__auto__,method_table__5211__auto__,prefer_table__5212__auto__,method_cache__5213__auto__,cached_hierarchy__5214__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e12992){if((e12992 instanceof Error)){
var e = e12992;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e12992;

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
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__12993,callback){
var map__12995 = p__12993;
var map__12995__$1 = ((cljs.core.seq_QMARK_.call(null,map__12995))?cljs.core.apply.call(null,cljs.core.hash_map,map__12995):map__12995);
var file_msg = map__12995__$1;
var request_url = cljs.core.get.call(null,map__12995__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__12995,map__12995__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__12995,map__12995__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__12996){
var map__12998 = p__12996;
var map__12998__$1 = ((cljs.core.seq_QMARK_.call(null,map__12998))?cljs.core.apply.call(null,cljs.core.hash_map,map__12998):map__12998);
var file_msg = map__12998__$1;
var meta_data = cljs.core.get.call(null,map__12998__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__12998__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__4316__auto__ = meta_data;
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__4304__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__4304__auto__){
var or__4316__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4316__auto____$1)){
return or__4316__auto____$1;
} else {
var and__4304__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__4304__auto____$1){
var or__4316__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__4316__auto____$2){
return or__4316__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__4304__auto____$1;
}
}
}
} else {
return and__4304__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__12999,callback){
var map__13001 = p__12999;
var map__13001__$1 = ((cljs.core.seq_QMARK_.call(null,map__13001))?cljs.core.apply.call(null,cljs.core.hash_map,map__13001):map__13001);
var file_msg = map__13001__$1;
var namespace = cljs.core.get.call(null,map__13001__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__13001__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__6821__auto___13088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto___13088,out){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto___13088,out){
return (function (state_13070){
var state_val_13071 = (state_13070[(1)]);
if((state_val_13071 === (7))){
var inst_13054 = (state_13070[(7)]);
var inst_13060 = (state_13070[(2)]);
var inst_13061 = cljs.core.async.put_BANG_.call(null,out,inst_13060);
var inst_13050 = inst_13054;
var state_13070__$1 = (function (){var statearr_13072 = state_13070;
(statearr_13072[(8)] = inst_13050);

(statearr_13072[(9)] = inst_13061);

return statearr_13072;
})();
var statearr_13073_13089 = state_13070__$1;
(statearr_13073_13089[(2)] = null);

(statearr_13073_13089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13071 === (6))){
var inst_13066 = (state_13070[(2)]);
var state_13070__$1 = state_13070;
var statearr_13074_13090 = state_13070__$1;
(statearr_13074_13090[(2)] = inst_13066);

(statearr_13074_13090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13071 === (5))){
var inst_13064 = cljs.core.async.close_BANG_.call(null,out);
var state_13070__$1 = state_13070;
var statearr_13075_13091 = state_13070__$1;
(statearr_13075_13091[(2)] = inst_13064);

(statearr_13075_13091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13071 === (4))){
var inst_13053 = (state_13070[(10)]);
var inst_13058 = figwheel.client.file_reloading.reload_js_file.call(null,inst_13053);
var state_13070__$1 = state_13070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13070__$1,(7),inst_13058);
} else {
if((state_val_13071 === (3))){
var inst_13068 = (state_13070[(2)]);
var state_13070__$1 = state_13070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13070__$1,inst_13068);
} else {
if((state_val_13071 === (2))){
var inst_13053 = (state_13070[(10)]);
var inst_13050 = (state_13070[(8)]);
var inst_13053__$1 = cljs.core.nth.call(null,inst_13050,(0),null);
var inst_13054 = cljs.core.nthnext.call(null,inst_13050,(1));
var inst_13055 = (inst_13053__$1 == null);
var inst_13056 = cljs.core.not.call(null,inst_13055);
var state_13070__$1 = (function (){var statearr_13076 = state_13070;
(statearr_13076[(10)] = inst_13053__$1);

(statearr_13076[(7)] = inst_13054);

return statearr_13076;
})();
if(inst_13056){
var statearr_13077_13092 = state_13070__$1;
(statearr_13077_13092[(1)] = (4));

} else {
var statearr_13078_13093 = state_13070__$1;
(statearr_13078_13093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13071 === (1))){
var inst_13048 = cljs.core.nth.call(null,files,(0),null);
var inst_13049 = cljs.core.nthnext.call(null,files,(1));
var inst_13050 = files;
var state_13070__$1 = (function (){var statearr_13079 = state_13070;
(statearr_13079[(8)] = inst_13050);

(statearr_13079[(11)] = inst_13048);

(statearr_13079[(12)] = inst_13049);

return statearr_13079;
})();
var statearr_13080_13094 = state_13070__$1;
(statearr_13080_13094[(2)] = null);

(statearr_13080_13094[(1)] = (2));


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
});})(c__6821__auto___13088,out))
;
return ((function (switch__6765__auto__,c__6821__auto___13088,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6766__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6766__auto____0 = (function (){
var statearr_13084 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13084[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6766__auto__);

(statearr_13084[(1)] = (1));

return statearr_13084;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6766__auto____1 = (function (state_13070){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_13070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e13085){if((e13085 instanceof Object)){
var ex__6769__auto__ = e13085;
var statearr_13086_13095 = state_13070;
(statearr_13086_13095[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13096 = state_13070;
state_13070 = G__13096;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6766__auto__ = function(state_13070){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6766__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6766__auto____1.call(this,state_13070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6766__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6766__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto___13088,out))
})();
var state__6823__auto__ = (function (){var statearr_13087 = f__6822__auto__.call(null);
(statearr_13087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto___13088);

return statearr_13087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto___13088,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__13097,p__13098){
var map__13101 = p__13097;
var map__13101__$1 = ((cljs.core.seq_QMARK_.call(null,map__13101))?cljs.core.apply.call(null,cljs.core.hash_map,map__13101):map__13101);
var opts = map__13101__$1;
var url_rewriter = cljs.core.get.call(null,map__13101__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__13102 = p__13098;
var map__13102__$1 = ((cljs.core.seq_QMARK_.call(null,map__13102))?cljs.core.apply.call(null,cljs.core.hash_map,map__13102):map__13102);
var file_msg = map__13102__$1;
var file = cljs.core.get.call(null,map__13102__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__13103){
var map__13106 = p__13103;
var map__13106__$1 = ((cljs.core.seq_QMARK_.call(null,map__13106))?cljs.core.apply.call(null,cljs.core.hash_map,map__13106):map__13106);
var file = cljs.core.get.call(null,map__13106__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__13106__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__4304__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4304__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4304__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e13107){var e = e13107;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__13112,p__13113){
var map__13314 = p__13112;
var map__13314__$1 = ((cljs.core.seq_QMARK_.call(null,map__13314))?cljs.core.apply.call(null,cljs.core.hash_map,map__13314):map__13314);
var opts = map__13314__$1;
var load_unchanged_files = cljs.core.get.call(null,map__13314__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__13314__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__13314__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__13315 = p__13113;
var map__13315__$1 = ((cljs.core.seq_QMARK_.call(null,map__13315))?cljs.core.apply.call(null,cljs.core.hash_map,map__13315):map__13315);
var msg = map__13315__$1;
var files = cljs.core.get.call(null,map__13315__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files){
return (function (state_13439){
var state_val_13440 = (state_13439[(1)]);
if((state_val_13440 === (7))){
var inst_13328 = (state_13439[(7)]);
var inst_13329 = (state_13439[(8)]);
var inst_13327 = (state_13439[(9)]);
var inst_13326 = (state_13439[(10)]);
var inst_13334 = cljs.core._nth.call(null,inst_13327,inst_13329);
var inst_13335 = figwheel.client.file_reloading.eval_body.call(null,inst_13334);
var inst_13336 = (inst_13329 + (1));
var tmp13441 = inst_13328;
var tmp13442 = inst_13327;
var tmp13443 = inst_13326;
var inst_13326__$1 = tmp13443;
var inst_13327__$1 = tmp13442;
var inst_13328__$1 = tmp13441;
var inst_13329__$1 = inst_13336;
var state_13439__$1 = (function (){var statearr_13444 = state_13439;
(statearr_13444[(11)] = inst_13335);

(statearr_13444[(7)] = inst_13328__$1);

(statearr_13444[(8)] = inst_13329__$1);

(statearr_13444[(9)] = inst_13327__$1);

(statearr_13444[(10)] = inst_13326__$1);

return statearr_13444;
})();
var statearr_13445_13514 = state_13439__$1;
(statearr_13445_13514[(2)] = null);

(statearr_13445_13514[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (20))){
var inst_13376 = (state_13439[(12)]);
var inst_13378 = (state_13439[(13)]);
var inst_13375 = (state_13439[(14)]);
var inst_13372 = (state_13439[(15)]);
var inst_13371 = (state_13439[(16)]);
var inst_13381 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_13383 = (function (){var files_not_loaded = inst_13378;
var res = inst_13376;
var res_SINGLEQUOTE_ = inst_13375;
var files_SINGLEQUOTE_ = inst_13372;
var all_files = inst_13371;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13376,inst_13378,inst_13375,inst_13372,inst_13371,inst_13381,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files){
return (function (p__13382){
var map__13446 = p__13382;
var map__13446__$1 = ((cljs.core.seq_QMARK_.call(null,map__13446))?cljs.core.apply.call(null,cljs.core.hash_map,map__13446):map__13446);
var file = cljs.core.get.call(null,map__13446__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__13446__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13376,inst_13378,inst_13375,inst_13372,inst_13371,inst_13381,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files))
})();
var inst_13384 = cljs.core.map.call(null,inst_13383,inst_13376);
var inst_13385 = cljs.core.pr_str.call(null,inst_13384);
var inst_13386 = figwheel.client.utils.log.call(null,inst_13385);
var inst_13387 = (function (){var files_not_loaded = inst_13378;
var res = inst_13376;
var res_SINGLEQUOTE_ = inst_13375;
var files_SINGLEQUOTE_ = inst_13372;
var all_files = inst_13371;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13376,inst_13378,inst_13375,inst_13372,inst_13371,inst_13381,inst_13383,inst_13384,inst_13385,inst_13386,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13376,inst_13378,inst_13375,inst_13372,inst_13371,inst_13381,inst_13383,inst_13384,inst_13385,inst_13386,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files))
})();
var inst_13388 = setTimeout(inst_13387,(10));
var state_13439__$1 = (function (){var statearr_13447 = state_13439;
(statearr_13447[(17)] = inst_13381);

(statearr_13447[(18)] = inst_13386);

return statearr_13447;
})();
var statearr_13448_13515 = state_13439__$1;
(statearr_13448_13515[(2)] = inst_13388);

(statearr_13448_13515[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (27))){
var inst_13398 = (state_13439[(19)]);
var state_13439__$1 = state_13439;
var statearr_13449_13516 = state_13439__$1;
(statearr_13449_13516[(2)] = inst_13398);

(statearr_13449_13516[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (1))){
var inst_13318 = (state_13439[(20)]);
var inst_13316 = before_jsload.call(null,files);
var inst_13317 = (function (){return ((function (inst_13318,inst_13316,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files){
return (function (p1__13108_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__13108_SHARP_);
});
;})(inst_13318,inst_13316,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files))
})();
var inst_13318__$1 = cljs.core.filter.call(null,inst_13317,files);
var inst_13319 = cljs.core.not_empty.call(null,inst_13318__$1);
var state_13439__$1 = (function (){var statearr_13450 = state_13439;
(statearr_13450[(20)] = inst_13318__$1);

(statearr_13450[(21)] = inst_13316);

return statearr_13450;
})();
if(cljs.core.truth_(inst_13319)){
var statearr_13451_13517 = state_13439__$1;
(statearr_13451_13517[(1)] = (2));

} else {
var statearr_13452_13518 = state_13439__$1;
(statearr_13452_13518[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (24))){
var state_13439__$1 = state_13439;
var statearr_13453_13519 = state_13439__$1;
(statearr_13453_13519[(2)] = null);

(statearr_13453_13519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (4))){
var inst_13363 = (state_13439[(2)]);
var inst_13364 = (function (){return ((function (inst_13363,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files){
return (function (p1__13109_SHARP_){
var and__4304__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__13109_SHARP_);
if(cljs.core.truth_(and__4304__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__13109_SHARP_));
} else {
return and__4304__auto__;
}
});
;})(inst_13363,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files))
})();
var inst_13365 = cljs.core.filter.call(null,inst_13364,files);
var state_13439__$1 = (function (){var statearr_13454 = state_13439;
(statearr_13454[(22)] = inst_13365);

(statearr_13454[(23)] = inst_13363);

return statearr_13454;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_13455_13520 = state_13439__$1;
(statearr_13455_13520[(1)] = (16));

} else {
var statearr_13456_13521 = state_13439__$1;
(statearr_13456_13521[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (15))){
var inst_13353 = (state_13439[(2)]);
var state_13439__$1 = state_13439;
var statearr_13457_13522 = state_13439__$1;
(statearr_13457_13522[(2)] = inst_13353);

(statearr_13457_13522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (21))){
var state_13439__$1 = state_13439;
var statearr_13458_13523 = state_13439__$1;
(statearr_13458_13523[(2)] = null);

(statearr_13458_13523[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (31))){
var inst_13406 = (state_13439[(24)]);
var inst_13416 = (state_13439[(2)]);
var inst_13417 = cljs.core.not_empty.call(null,inst_13406);
var state_13439__$1 = (function (){var statearr_13459 = state_13439;
(statearr_13459[(25)] = inst_13416);

return statearr_13459;
})();
if(cljs.core.truth_(inst_13417)){
var statearr_13460_13524 = state_13439__$1;
(statearr_13460_13524[(1)] = (32));

} else {
var statearr_13461_13525 = state_13439__$1;
(statearr_13461_13525[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (32))){
var inst_13406 = (state_13439[(24)]);
var inst_13419 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13406);
var inst_13420 = cljs.core.pr_str.call(null,inst_13419);
var inst_13421 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_13420)].join('');
var inst_13422 = figwheel.client.utils.log.call(null,inst_13421);
var state_13439__$1 = state_13439;
var statearr_13462_13526 = state_13439__$1;
(statearr_13462_13526[(2)] = inst_13422);

(statearr_13462_13526[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (33))){
var state_13439__$1 = state_13439;
var statearr_13463_13527 = state_13439__$1;
(statearr_13463_13527[(2)] = null);

(statearr_13463_13527[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (13))){
var inst_13339 = (state_13439[(26)]);
var inst_13343 = cljs.core.chunk_first.call(null,inst_13339);
var inst_13344 = cljs.core.chunk_rest.call(null,inst_13339);
var inst_13345 = cljs.core.count.call(null,inst_13343);
var inst_13326 = inst_13344;
var inst_13327 = inst_13343;
var inst_13328 = inst_13345;
var inst_13329 = (0);
var state_13439__$1 = (function (){var statearr_13464 = state_13439;
(statearr_13464[(7)] = inst_13328);

(statearr_13464[(8)] = inst_13329);

(statearr_13464[(9)] = inst_13327);

(statearr_13464[(10)] = inst_13326);

return statearr_13464;
})();
var statearr_13465_13528 = state_13439__$1;
(statearr_13465_13528[(2)] = null);

(statearr_13465_13528[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (22))){
var inst_13378 = (state_13439[(13)]);
var inst_13391 = (state_13439[(2)]);
var inst_13392 = cljs.core.not_empty.call(null,inst_13378);
var state_13439__$1 = (function (){var statearr_13466 = state_13439;
(statearr_13466[(27)] = inst_13391);

return statearr_13466;
})();
if(cljs.core.truth_(inst_13392)){
var statearr_13467_13529 = state_13439__$1;
(statearr_13467_13529[(1)] = (23));

} else {
var statearr_13468_13530 = state_13439__$1;
(statearr_13468_13530[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (36))){
var state_13439__$1 = state_13439;
var statearr_13469_13531 = state_13439__$1;
(statearr_13469_13531[(2)] = null);

(statearr_13469_13531[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (29))){
var inst_13407 = (state_13439[(28)]);
var inst_13410 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13407);
var inst_13411 = cljs.core.pr_str.call(null,inst_13410);
var inst_13412 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_13411)].join('');
var inst_13413 = figwheel.client.utils.log.call(null,inst_13412);
var state_13439__$1 = state_13439;
var statearr_13470_13532 = state_13439__$1;
(statearr_13470_13532[(2)] = inst_13413);

(statearr_13470_13532[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (6))){
var inst_13360 = (state_13439[(2)]);
var state_13439__$1 = state_13439;
var statearr_13471_13533 = state_13439__$1;
(statearr_13471_13533[(2)] = inst_13360);

(statearr_13471_13533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (28))){
var inst_13407 = (state_13439[(28)]);
var inst_13404 = (state_13439[(2)]);
var inst_13405 = cljs.core.get.call(null,inst_13404,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_13406 = cljs.core.get.call(null,inst_13404,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_13407__$1 = cljs.core.get.call(null,inst_13404,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_13408 = cljs.core.not_empty.call(null,inst_13407__$1);
var state_13439__$1 = (function (){var statearr_13472 = state_13439;
(statearr_13472[(28)] = inst_13407__$1);

(statearr_13472[(24)] = inst_13406);

(statearr_13472[(29)] = inst_13405);

return statearr_13472;
})();
if(cljs.core.truth_(inst_13408)){
var statearr_13473_13534 = state_13439__$1;
(statearr_13473_13534[(1)] = (29));

} else {
var statearr_13474_13535 = state_13439__$1;
(statearr_13474_13535[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (25))){
var inst_13437 = (state_13439[(2)]);
var state_13439__$1 = state_13439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13439__$1,inst_13437);
} else {
if((state_val_13440 === (34))){
var inst_13405 = (state_13439[(29)]);
var inst_13425 = (state_13439[(2)]);
var inst_13426 = cljs.core.not_empty.call(null,inst_13405);
var state_13439__$1 = (function (){var statearr_13475 = state_13439;
(statearr_13475[(30)] = inst_13425);

return statearr_13475;
})();
if(cljs.core.truth_(inst_13426)){
var statearr_13476_13536 = state_13439__$1;
(statearr_13476_13536[(1)] = (35));

} else {
var statearr_13477_13537 = state_13439__$1;
(statearr_13477_13537[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (17))){
var inst_13365 = (state_13439[(22)]);
var state_13439__$1 = state_13439;
var statearr_13478_13538 = state_13439__$1;
(statearr_13478_13538[(2)] = inst_13365);

(statearr_13478_13538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (3))){
var state_13439__$1 = state_13439;
var statearr_13479_13539 = state_13439__$1;
(statearr_13479_13539[(2)] = null);

(statearr_13479_13539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (12))){
var inst_13356 = (state_13439[(2)]);
var state_13439__$1 = state_13439;
var statearr_13480_13540 = state_13439__$1;
(statearr_13480_13540[(2)] = inst_13356);

(statearr_13480_13540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (2))){
var inst_13318 = (state_13439[(20)]);
var inst_13325 = cljs.core.seq.call(null,inst_13318);
var inst_13326 = inst_13325;
var inst_13327 = null;
var inst_13328 = (0);
var inst_13329 = (0);
var state_13439__$1 = (function (){var statearr_13481 = state_13439;
(statearr_13481[(7)] = inst_13328);

(statearr_13481[(8)] = inst_13329);

(statearr_13481[(9)] = inst_13327);

(statearr_13481[(10)] = inst_13326);

return statearr_13481;
})();
var statearr_13482_13541 = state_13439__$1;
(statearr_13482_13541[(2)] = null);

(statearr_13482_13541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (23))){
var inst_13398 = (state_13439[(19)]);
var inst_13376 = (state_13439[(12)]);
var inst_13378 = (state_13439[(13)]);
var inst_13375 = (state_13439[(14)]);
var inst_13372 = (state_13439[(15)]);
var inst_13371 = (state_13439[(16)]);
var inst_13394 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_13397 = (function (){var files_not_loaded = inst_13378;
var res = inst_13376;
var res_SINGLEQUOTE_ = inst_13375;
var files_SINGLEQUOTE_ = inst_13372;
var all_files = inst_13371;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13398,inst_13376,inst_13378,inst_13375,inst_13372,inst_13371,inst_13394,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files){
return (function (p__13396){
var map__13483 = p__13396;
var map__13483__$1 = ((cljs.core.seq_QMARK_.call(null,map__13483))?cljs.core.apply.call(null,cljs.core.hash_map,map__13483):map__13483);
var meta_data = cljs.core.get.call(null,map__13483__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13398,inst_13376,inst_13378,inst_13375,inst_13372,inst_13371,inst_13394,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files))
})();
var inst_13398__$1 = cljs.core.group_by.call(null,inst_13397,inst_13378);
var inst_13399 = cljs.core.seq_QMARK_.call(null,inst_13398__$1);
var state_13439__$1 = (function (){var statearr_13484 = state_13439;
(statearr_13484[(31)] = inst_13394);

(statearr_13484[(19)] = inst_13398__$1);

return statearr_13484;
})();
if(inst_13399){
var statearr_13485_13542 = state_13439__$1;
(statearr_13485_13542[(1)] = (26));

} else {
var statearr_13486_13543 = state_13439__$1;
(statearr_13486_13543[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (35))){
var inst_13405 = (state_13439[(29)]);
var inst_13428 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13405);
var inst_13429 = cljs.core.pr_str.call(null,inst_13428);
var inst_13430 = [cljs.core.str("not required: "),cljs.core.str(inst_13429)].join('');
var inst_13431 = figwheel.client.utils.log.call(null,inst_13430);
var state_13439__$1 = state_13439;
var statearr_13487_13544 = state_13439__$1;
(statearr_13487_13544[(2)] = inst_13431);

(statearr_13487_13544[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (19))){
var inst_13376 = (state_13439[(12)]);
var inst_13375 = (state_13439[(14)]);
var inst_13372 = (state_13439[(15)]);
var inst_13371 = (state_13439[(16)]);
var inst_13375__$1 = (state_13439[(2)]);
var inst_13376__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_13375__$1);
var inst_13377 = (function (){var res = inst_13376__$1;
var res_SINGLEQUOTE_ = inst_13375__$1;
var files_SINGLEQUOTE_ = inst_13372;
var all_files = inst_13371;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13376,inst_13375,inst_13372,inst_13371,inst_13375__$1,inst_13376__$1,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files){
return (function (p1__13111_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__13111_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13376,inst_13375,inst_13372,inst_13371,inst_13375__$1,inst_13376__$1,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files))
})();
var inst_13378 = cljs.core.filter.call(null,inst_13377,inst_13375__$1);
var inst_13379 = cljs.core.not_empty.call(null,inst_13376__$1);
var state_13439__$1 = (function (){var statearr_13488 = state_13439;
(statearr_13488[(12)] = inst_13376__$1);

(statearr_13488[(13)] = inst_13378);

(statearr_13488[(14)] = inst_13375__$1);

return statearr_13488;
})();
if(cljs.core.truth_(inst_13379)){
var statearr_13489_13545 = state_13439__$1;
(statearr_13489_13545[(1)] = (20));

} else {
var statearr_13490_13546 = state_13439__$1;
(statearr_13490_13546[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (11))){
var state_13439__$1 = state_13439;
var statearr_13491_13547 = state_13439__$1;
(statearr_13491_13547[(2)] = null);

(statearr_13491_13547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (9))){
var inst_13358 = (state_13439[(2)]);
var state_13439__$1 = state_13439;
var statearr_13492_13548 = state_13439__$1;
(statearr_13492_13548[(2)] = inst_13358);

(statearr_13492_13548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (5))){
var inst_13328 = (state_13439[(7)]);
var inst_13329 = (state_13439[(8)]);
var inst_13331 = (inst_13329 < inst_13328);
var inst_13332 = inst_13331;
var state_13439__$1 = state_13439;
if(cljs.core.truth_(inst_13332)){
var statearr_13493_13549 = state_13439__$1;
(statearr_13493_13549[(1)] = (7));

} else {
var statearr_13494_13550 = state_13439__$1;
(statearr_13494_13550[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (14))){
var inst_13339 = (state_13439[(26)]);
var inst_13348 = cljs.core.first.call(null,inst_13339);
var inst_13349 = figwheel.client.file_reloading.eval_body.call(null,inst_13348);
var inst_13350 = cljs.core.next.call(null,inst_13339);
var inst_13326 = inst_13350;
var inst_13327 = null;
var inst_13328 = (0);
var inst_13329 = (0);
var state_13439__$1 = (function (){var statearr_13495 = state_13439;
(statearr_13495[(32)] = inst_13349);

(statearr_13495[(7)] = inst_13328);

(statearr_13495[(8)] = inst_13329);

(statearr_13495[(9)] = inst_13327);

(statearr_13495[(10)] = inst_13326);

return statearr_13495;
})();
var statearr_13496_13551 = state_13439__$1;
(statearr_13496_13551[(2)] = null);

(statearr_13496_13551[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (26))){
var inst_13398 = (state_13439[(19)]);
var inst_13401 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13398);
var state_13439__$1 = state_13439;
var statearr_13497_13552 = state_13439__$1;
(statearr_13497_13552[(2)] = inst_13401);

(statearr_13497_13552[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (16))){
var inst_13365 = (state_13439[(22)]);
var inst_13367 = (function (){var all_files = inst_13365;
return ((function (all_files,inst_13365,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files){
return (function (p1__13110_SHARP_){
return cljs.core.update_in.call(null,p1__13110_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_13365,state_val_13440,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files))
})();
var inst_13368 = cljs.core.map.call(null,inst_13367,inst_13365);
var state_13439__$1 = state_13439;
var statearr_13498_13553 = state_13439__$1;
(statearr_13498_13553[(2)] = inst_13368);

(statearr_13498_13553[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (30))){
var state_13439__$1 = state_13439;
var statearr_13499_13554 = state_13439__$1;
(statearr_13499_13554[(2)] = null);

(statearr_13499_13554[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (10))){
var inst_13339 = (state_13439[(26)]);
var inst_13341 = cljs.core.chunked_seq_QMARK_.call(null,inst_13339);
var state_13439__$1 = state_13439;
if(inst_13341){
var statearr_13500_13555 = state_13439__$1;
(statearr_13500_13555[(1)] = (13));

} else {
var statearr_13501_13556 = state_13439__$1;
(statearr_13501_13556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (18))){
var inst_13372 = (state_13439[(15)]);
var inst_13371 = (state_13439[(16)]);
var inst_13371__$1 = (state_13439[(2)]);
var inst_13372__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_13371__$1);
var inst_13373 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_13372__$1);
var state_13439__$1 = (function (){var statearr_13502 = state_13439;
(statearr_13502[(15)] = inst_13372__$1);

(statearr_13502[(16)] = inst_13371__$1);

return statearr_13502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13439__$1,(19),inst_13373);
} else {
if((state_val_13440 === (37))){
var inst_13434 = (state_13439[(2)]);
var state_13439__$1 = state_13439;
var statearr_13503_13557 = state_13439__$1;
(statearr_13503_13557[(2)] = inst_13434);

(statearr_13503_13557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (8))){
var inst_13339 = (state_13439[(26)]);
var inst_13326 = (state_13439[(10)]);
var inst_13339__$1 = cljs.core.seq.call(null,inst_13326);
var state_13439__$1 = (function (){var statearr_13504 = state_13439;
(statearr_13504[(26)] = inst_13339__$1);

return statearr_13504;
})();
if(inst_13339__$1){
var statearr_13505_13558 = state_13439__$1;
(statearr_13505_13558[(1)] = (10));

} else {
var statearr_13506_13559 = state_13439__$1;
(statearr_13506_13559[(1)] = (11));

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
});})(c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files))
;
return ((function (switch__6765__auto__,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6766__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6766__auto____0 = (function (){
var statearr_13510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13510[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__6766__auto__);

(statearr_13510[(1)] = (1));

return statearr_13510;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6766__auto____1 = (function (state_13439){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_13439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e13511){if((e13511 instanceof Object)){
var ex__6769__auto__ = e13511;
var statearr_13512_13560 = state_13439;
(statearr_13512_13560[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13561 = state_13439;
state_13439 = G__13561;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__6766__auto__ = function(state_13439){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6766__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6766__auto____1.call(this,state_13439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6766__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6766__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files))
})();
var state__6823__auto__ = (function (){var statearr_13513 = f__6822__auto__.call(null);
(statearr_13513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto__);

return statearr_13513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto__,map__13314,map__13314__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13315,map__13315__$1,msg,files))
);

return c__6821__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__13564,link){
var map__13566 = p__13564;
var map__13566__$1 = ((cljs.core.seq_QMARK_.call(null,map__13566))?cljs.core.apply.call(null,cljs.core.hash_map,map__13566):map__13566);
var file = cljs.core.get.call(null,map__13566__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__13566,map__13566__$1,file){
return (function (p1__13562_SHARP_,p2__13563_SHARP_){
if(cljs.core._EQ_.call(null,p1__13562_SHARP_,p2__13563_SHARP_)){
return p1__13562_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__13566,map__13566__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__13570){
var map__13571 = p__13570;
var map__13571__$1 = ((cljs.core.seq_QMARK_.call(null,map__13571))?cljs.core.apply.call(null,cljs.core.hash_map,map__13571):map__13571);
var current_url_length = cljs.core.get.call(null,map__13571__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__13571__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__13567_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__13567_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
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
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__13572){
var map__13574 = p__13572;
var map__13574__$1 = ((cljs.core.seq_QMARK_.call(null,map__13574))?cljs.core.apply.call(null,cljs.core.hash_map,map__13574):map__13574);
var f_data = map__13574__$1;
var request_url = cljs.core.get.call(null,map__13574__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__13574__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__4316__auto__ = request_url;
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__13575,files_msg){
var map__13597 = p__13575;
var map__13597__$1 = ((cljs.core.seq_QMARK_.call(null,map__13597))?cljs.core.apply.call(null,cljs.core.hash_map,map__13597):map__13597);
var opts = map__13597__$1;
var on_cssload = cljs.core.get.call(null,map__13597__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__13598_13618 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__13599_13619 = null;
var count__13600_13620 = (0);
var i__13601_13621 = (0);
while(true){
if((i__13601_13621 < count__13600_13620)){
var f_13622 = cljs.core._nth.call(null,chunk__13599_13619,i__13601_13621);
figwheel.client.file_reloading.reload_css_file.call(null,f_13622);

var G__13623 = seq__13598_13618;
var G__13624 = chunk__13599_13619;
var G__13625 = count__13600_13620;
var G__13626 = (i__13601_13621 + (1));
seq__13598_13618 = G__13623;
chunk__13599_13619 = G__13624;
count__13600_13620 = G__13625;
i__13601_13621 = G__13626;
continue;
} else {
var temp__4126__auto___13627 = cljs.core.seq.call(null,seq__13598_13618);
if(temp__4126__auto___13627){
var seq__13598_13628__$1 = temp__4126__auto___13627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13598_13628__$1)){
var c__5101__auto___13629 = cljs.core.chunk_first.call(null,seq__13598_13628__$1);
var G__13630 = cljs.core.chunk_rest.call(null,seq__13598_13628__$1);
var G__13631 = c__5101__auto___13629;
var G__13632 = cljs.core.count.call(null,c__5101__auto___13629);
var G__13633 = (0);
seq__13598_13618 = G__13630;
chunk__13599_13619 = G__13631;
count__13600_13620 = G__13632;
i__13601_13621 = G__13633;
continue;
} else {
var f_13634 = cljs.core.first.call(null,seq__13598_13628__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_13634);

var G__13635 = cljs.core.next.call(null,seq__13598_13628__$1);
var G__13636 = null;
var G__13637 = (0);
var G__13638 = (0);
seq__13598_13618 = G__13635;
chunk__13599_13619 = G__13636;
count__13600_13620 = G__13637;
i__13601_13621 = G__13638;
continue;
}
} else {
}
}
break;
}

var c__6821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6821__auto__,map__13597,map__13597__$1,opts,on_cssload){
return (function (){
var f__6822__auto__ = (function (){var switch__6765__auto__ = ((function (c__6821__auto__,map__13597,map__13597__$1,opts,on_cssload){
return (function (state_13608){
var state_val_13609 = (state_13608[(1)]);
if((state_val_13609 === (2))){
var inst_13604 = (state_13608[(2)]);
var inst_13605 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_13606 = on_cssload.call(null,inst_13605);
var state_13608__$1 = (function (){var statearr_13610 = state_13608;
(statearr_13610[(7)] = inst_13604);

return statearr_13610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13608__$1,inst_13606);
} else {
if((state_val_13609 === (1))){
var inst_13602 = cljs.core.async.timeout.call(null,(100));
var state_13608__$1 = state_13608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13608__$1,(2),inst_13602);
} else {
return null;
}
}
});})(c__6821__auto__,map__13597,map__13597__$1,opts,on_cssload))
;
return ((function (switch__6765__auto__,c__6821__auto__,map__13597,map__13597__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6766__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6766__auto____0 = (function (){
var statearr_13614 = [null,null,null,null,null,null,null,null];
(statearr_13614[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__6766__auto__);

(statearr_13614[(1)] = (1));

return statearr_13614;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6766__auto____1 = (function (state_13608){
while(true){
var ret_value__6767__auto__ = (function (){try{while(true){
var result__6768__auto__ = switch__6765__auto__.call(null,state_13608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6768__auto__;
}
break;
}
}catch (e13615){if((e13615 instanceof Object)){
var ex__6769__auto__ = e13615;
var statearr_13616_13639 = state_13608;
(statearr_13616_13639[(5)] = ex__6769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13640 = state_13608;
state_13608 = G__13640;
continue;
} else {
return ret_value__6767__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__6766__auto__ = function(state_13608){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6766__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6766__auto____1.call(this,state_13608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6766__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__6766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6766__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6766__auto__;
})()
;})(switch__6765__auto__,c__6821__auto__,map__13597,map__13597__$1,opts,on_cssload))
})();
var state__6823__auto__ = (function (){var statearr_13617 = f__6822__auto__.call(null);
(statearr_13617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6821__auto__);

return statearr_13617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6823__auto__);
});})(c__6821__auto__,map__13597,map__13597__$1,opts,on_cssload))
);

return c__6821__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1427724778846