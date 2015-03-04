// Compiled by ClojureScript 0.0-2760 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__18592_SHARP_,p2__18593_SHARP_){
var and__3989__auto__ = p1__18592_SHARP_;
if(cljs.core.truth_(and__3989__auto__)){
return p2__18593_SHARP_;
} else {
return and__3989__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__4001__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4001__auto__){
return or__4001__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__18595_SHARP_,p2__18594_SHARP_){
return [cljs.core.str(p2__18594_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
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
if(cljs.core.truth_((function (){var or__4001__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4001__auto__){
return or__4001__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__4001__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4001__auto__)){
return or__4001__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__4898__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4899__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4900__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4901__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4902__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4902__auto__,method_table__4898__auto__,prefer_table__4899__auto__,method_cache__4900__auto__,cached_hierarchy__4901__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__18596){
var map__18597 = p__18596;
var map__18597__$1 = ((cljs.core.seq_QMARK_.call(null,map__18597))?cljs.core.apply.call(null,cljs.core.hash_map,map__18597):map__18597);
var file = cljs.core.get.call(null,map__18597__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__18598){
var map__18599 = p__18598;
var map__18599__$1 = ((cljs.core.seq_QMARK_.call(null,map__18599))?cljs.core.apply.call(null,cljs.core.hash_map,map__18599):map__18599);
var namespace = cljs.core.get.call(null,map__18599__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__4898__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4899__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4900__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4901__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4902__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4902__auto__,method_table__4898__auto__,prefer_table__4899__auto__,method_cache__4900__auto__,cached_hierarchy__4901__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e18600){if((e18600 instanceof Error)){
var e = e18600;
return false;
} else {
throw e18600;

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
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__18601,callback){
var map__18603 = p__18601;
var map__18603__$1 = ((cljs.core.seq_QMARK_.call(null,map__18603))?cljs.core.apply.call(null,cljs.core.hash_map,map__18603):map__18603);
var file_msg = map__18603__$1;
var request_url = cljs.core.get.call(null,map__18603__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__18603,map__18603__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__18603,map__18603__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__18604){
var map__18606 = p__18604;
var map__18606__$1 = ((cljs.core.seq_QMARK_.call(null,map__18606))?cljs.core.apply.call(null,cljs.core.hash_map,map__18606):map__18606);
var file_msg = map__18606__$1;
var meta_data = cljs.core.get.call(null,map__18606__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__18606__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__4001__auto__ = meta_data;
if(cljs.core.truth_(or__4001__auto__)){
return or__4001__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__3989__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__3989__auto__){
var or__4001__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4001__auto__)){
return or__4001__auto__;
} else {
var or__4001__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4001__auto____$1)){
return or__4001__auto____$1;
} else {
var and__3989__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__3989__auto____$1){
var or__4001__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__4001__auto____$2){
return or__4001__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__3989__auto____$1;
}
}
}
} else {
return and__3989__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__18607,callback){
var map__18609 = p__18607;
var map__18609__$1 = ((cljs.core.seq_QMARK_.call(null,map__18609))?cljs.core.apply.call(null,cljs.core.hash_map,map__18609):map__18609);
var file_msg = map__18609__$1;
var namespace = cljs.core.get.call(null,map__18609__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__18609__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
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
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__6999__auto___18696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto___18696,out){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto___18696,out){
return (function (state_18678){
var state_val_18679 = (state_18678[(1)]);
if((state_val_18679 === (7))){
var inst_18662 = (state_18678[(7)]);
var inst_18668 = (state_18678[(2)]);
var inst_18669 = cljs.core.async.put_BANG_.call(null,out,inst_18668);
var inst_18658 = inst_18662;
var state_18678__$1 = (function (){var statearr_18680 = state_18678;
(statearr_18680[(8)] = inst_18658);

(statearr_18680[(9)] = inst_18669);

return statearr_18680;
})();
var statearr_18681_18697 = state_18678__$1;
(statearr_18681_18697[(2)] = null);

(statearr_18681_18697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18679 === (6))){
var inst_18674 = (state_18678[(2)]);
var state_18678__$1 = state_18678;
var statearr_18682_18698 = state_18678__$1;
(statearr_18682_18698[(2)] = inst_18674);

(statearr_18682_18698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18679 === (5))){
var inst_18672 = cljs.core.async.close_BANG_.call(null,out);
var state_18678__$1 = state_18678;
var statearr_18683_18699 = state_18678__$1;
(statearr_18683_18699[(2)] = inst_18672);

(statearr_18683_18699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18679 === (4))){
var inst_18661 = (state_18678[(10)]);
var inst_18666 = figwheel.client.file_reloading.reload_js_file.call(null,inst_18661);
var state_18678__$1 = state_18678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18678__$1,(7),inst_18666);
} else {
if((state_val_18679 === (3))){
var inst_18676 = (state_18678[(2)]);
var state_18678__$1 = state_18678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18678__$1,inst_18676);
} else {
if((state_val_18679 === (2))){
var inst_18658 = (state_18678[(8)]);
var inst_18661 = (state_18678[(10)]);
var inst_18661__$1 = cljs.core.nth.call(null,inst_18658,(0),null);
var inst_18662 = cljs.core.nthnext.call(null,inst_18658,(1));
var inst_18663 = (inst_18661__$1 == null);
var inst_18664 = cljs.core.not.call(null,inst_18663);
var state_18678__$1 = (function (){var statearr_18684 = state_18678;
(statearr_18684[(7)] = inst_18662);

(statearr_18684[(10)] = inst_18661__$1);

return statearr_18684;
})();
if(inst_18664){
var statearr_18685_18700 = state_18678__$1;
(statearr_18685_18700[(1)] = (4));

} else {
var statearr_18686_18701 = state_18678__$1;
(statearr_18686_18701[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18679 === (1))){
var inst_18656 = cljs.core.nth.call(null,files,(0),null);
var inst_18657 = cljs.core.nthnext.call(null,files,(1));
var inst_18658 = files;
var state_18678__$1 = (function (){var statearr_18687 = state_18678;
(statearr_18687[(8)] = inst_18658);

(statearr_18687[(11)] = inst_18657);

(statearr_18687[(12)] = inst_18656);

return statearr_18687;
})();
var statearr_18688_18702 = state_18678__$1;
(statearr_18688_18702[(2)] = null);

(statearr_18688_18702[(1)] = (2));


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
});})(c__6999__auto___18696,out))
;
return ((function (switch__6943__auto__,c__6999__auto___18696,out){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_18692 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18692[(0)] = state_machine__6944__auto__);

(statearr_18692[(1)] = (1));

return statearr_18692;
});
var state_machine__6944__auto____1 = (function (state_18678){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_18678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e18693){if((e18693 instanceof Object)){
var ex__6947__auto__ = e18693;
var statearr_18694_18703 = state_18678;
(statearr_18694_18703[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18704 = state_18678;
state_18678 = G__18704;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_18678){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_18678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto___18696,out))
})();
var state__7001__auto__ = (function (){var statearr_18695 = f__7000__auto__.call(null);
(statearr_18695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto___18696);

return statearr_18695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto___18696,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__18705,p__18706){
var map__18709 = p__18705;
var map__18709__$1 = ((cljs.core.seq_QMARK_.call(null,map__18709))?cljs.core.apply.call(null,cljs.core.hash_map,map__18709):map__18709);
var opts = map__18709__$1;
var url_rewriter = cljs.core.get.call(null,map__18709__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__18710 = p__18706;
var map__18710__$1 = ((cljs.core.seq_QMARK_.call(null,map__18710))?cljs.core.apply.call(null,cljs.core.hash_map,map__18710):map__18710);
var file_msg = map__18710__$1;
var file = cljs.core.get.call(null,map__18710__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__18711){
var map__18714 = p__18711;
var map__18714__$1 = ((cljs.core.seq_QMARK_.call(null,map__18714))?cljs.core.apply.call(null,cljs.core.hash_map,map__18714):map__18714);
var file = cljs.core.get.call(null,map__18714__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__18714__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__3989__auto__ = eval_body__$1;
if(cljs.core.truth_(and__3989__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__3989__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e18715){var e = e18715;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__18720,p__18721){
var map__18922 = p__18720;
var map__18922__$1 = ((cljs.core.seq_QMARK_.call(null,map__18922))?cljs.core.apply.call(null,cljs.core.hash_map,map__18922):map__18922);
var opts = map__18922__$1;
var load_unchanged_files = cljs.core.get.call(null,map__18922__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__18922__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__18922__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__18923 = p__18721;
var map__18923__$1 = ((cljs.core.seq_QMARK_.call(null,map__18923))?cljs.core.apply.call(null,cljs.core.hash_map,map__18923):map__18923);
var msg = map__18923__$1;
var files = cljs.core.get.call(null,map__18923__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files){
return (function (state_19047){
var state_val_19048 = (state_19047[(1)]);
if((state_val_19048 === (7))){
var inst_18936 = (state_19047[(7)]);
var inst_18937 = (state_19047[(8)]);
var inst_18935 = (state_19047[(9)]);
var inst_18934 = (state_19047[(10)]);
var inst_18942 = cljs.core._nth.call(null,inst_18935,inst_18937);
var inst_18943 = figwheel.client.file_reloading.eval_body.call(null,inst_18942);
var inst_18944 = (inst_18937 + (1));
var tmp19049 = inst_18936;
var tmp19050 = inst_18935;
var tmp19051 = inst_18934;
var inst_18934__$1 = tmp19051;
var inst_18935__$1 = tmp19050;
var inst_18936__$1 = tmp19049;
var inst_18937__$1 = inst_18944;
var state_19047__$1 = (function (){var statearr_19052 = state_19047;
(statearr_19052[(11)] = inst_18943);

(statearr_19052[(7)] = inst_18936__$1);

(statearr_19052[(8)] = inst_18937__$1);

(statearr_19052[(9)] = inst_18935__$1);

(statearr_19052[(10)] = inst_18934__$1);

return statearr_19052;
})();
var statearr_19053_19122 = state_19047__$1;
(statearr_19053_19122[(2)] = null);

(statearr_19053_19122[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (20))){
var inst_18984 = (state_19047[(12)]);
var inst_18983 = (state_19047[(13)]);
var inst_18980 = (state_19047[(14)]);
var inst_18979 = (state_19047[(15)]);
var inst_18986 = (state_19047[(16)]);
var inst_18989 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_18991 = (function (){var files_not_loaded = inst_18986;
var res = inst_18984;
var res_SINGLEQUOTE_ = inst_18983;
var files_SINGLEQUOTE_ = inst_18980;
var all_files = inst_18979;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18984,inst_18983,inst_18980,inst_18979,inst_18986,inst_18989,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files){
return (function (p__18990){
var map__19054 = p__18990;
var map__19054__$1 = ((cljs.core.seq_QMARK_.call(null,map__19054))?cljs.core.apply.call(null,cljs.core.hash_map,map__19054):map__19054);
var file = cljs.core.get.call(null,map__19054__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__19054__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18984,inst_18983,inst_18980,inst_18979,inst_18986,inst_18989,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files))
})();
var inst_18992 = cljs.core.map.call(null,inst_18991,inst_18984);
var inst_18993 = cljs.core.pr_str.call(null,inst_18992);
var inst_18994 = figwheel.client.utils.log.call(null,inst_18993);
var inst_18995 = (function (){var files_not_loaded = inst_18986;
var res = inst_18984;
var res_SINGLEQUOTE_ = inst_18983;
var files_SINGLEQUOTE_ = inst_18980;
var all_files = inst_18979;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18984,inst_18983,inst_18980,inst_18979,inst_18986,inst_18989,inst_18991,inst_18992,inst_18993,inst_18994,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18984,inst_18983,inst_18980,inst_18979,inst_18986,inst_18989,inst_18991,inst_18992,inst_18993,inst_18994,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files))
})();
var inst_18996 = setTimeout(inst_18995,(10));
var state_19047__$1 = (function (){var statearr_19055 = state_19047;
(statearr_19055[(17)] = inst_18989);

(statearr_19055[(18)] = inst_18994);

return statearr_19055;
})();
var statearr_19056_19123 = state_19047__$1;
(statearr_19056_19123[(2)] = inst_18996);

(statearr_19056_19123[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (27))){
var inst_19006 = (state_19047[(19)]);
var state_19047__$1 = state_19047;
var statearr_19057_19124 = state_19047__$1;
(statearr_19057_19124[(2)] = inst_19006);

(statearr_19057_19124[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (1))){
var inst_18926 = (state_19047[(20)]);
var inst_18924 = before_jsload.call(null,files);
var inst_18925 = (function (){return ((function (inst_18926,inst_18924,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files){
return (function (p1__18716_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__18716_SHARP_);
});
;})(inst_18926,inst_18924,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files))
})();
var inst_18926__$1 = cljs.core.filter.call(null,inst_18925,files);
var inst_18927 = cljs.core.not_empty.call(null,inst_18926__$1);
var state_19047__$1 = (function (){var statearr_19058 = state_19047;
(statearr_19058[(20)] = inst_18926__$1);

(statearr_19058[(21)] = inst_18924);

return statearr_19058;
})();
if(cljs.core.truth_(inst_18927)){
var statearr_19059_19125 = state_19047__$1;
(statearr_19059_19125[(1)] = (2));

} else {
var statearr_19060_19126 = state_19047__$1;
(statearr_19060_19126[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (24))){
var state_19047__$1 = state_19047;
var statearr_19061_19127 = state_19047__$1;
(statearr_19061_19127[(2)] = null);

(statearr_19061_19127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (4))){
var inst_18971 = (state_19047[(2)]);
var inst_18972 = (function (){return ((function (inst_18971,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files){
return (function (p1__18717_SHARP_){
var and__3989__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__18717_SHARP_);
if(cljs.core.truth_(and__3989__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__18717_SHARP_));
} else {
return and__3989__auto__;
}
});
;})(inst_18971,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files))
})();
var inst_18973 = cljs.core.filter.call(null,inst_18972,files);
var state_19047__$1 = (function (){var statearr_19062 = state_19047;
(statearr_19062[(22)] = inst_18971);

(statearr_19062[(23)] = inst_18973);

return statearr_19062;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_19063_19128 = state_19047__$1;
(statearr_19063_19128[(1)] = (16));

} else {
var statearr_19064_19129 = state_19047__$1;
(statearr_19064_19129[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (15))){
var inst_18961 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
var statearr_19065_19130 = state_19047__$1;
(statearr_19065_19130[(2)] = inst_18961);

(statearr_19065_19130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (21))){
var state_19047__$1 = state_19047;
var statearr_19066_19131 = state_19047__$1;
(statearr_19066_19131[(2)] = null);

(statearr_19066_19131[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (31))){
var inst_19014 = (state_19047[(24)]);
var inst_19024 = (state_19047[(2)]);
var inst_19025 = cljs.core.not_empty.call(null,inst_19014);
var state_19047__$1 = (function (){var statearr_19067 = state_19047;
(statearr_19067[(25)] = inst_19024);

return statearr_19067;
})();
if(cljs.core.truth_(inst_19025)){
var statearr_19068_19132 = state_19047__$1;
(statearr_19068_19132[(1)] = (32));

} else {
var statearr_19069_19133 = state_19047__$1;
(statearr_19069_19133[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (32))){
var inst_19014 = (state_19047[(24)]);
var inst_19027 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19014);
var inst_19028 = cljs.core.pr_str.call(null,inst_19027);
var inst_19029 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_19028)].join('');
var inst_19030 = figwheel.client.utils.log.call(null,inst_19029);
var state_19047__$1 = state_19047;
var statearr_19070_19134 = state_19047__$1;
(statearr_19070_19134[(2)] = inst_19030);

(statearr_19070_19134[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (33))){
var state_19047__$1 = state_19047;
var statearr_19071_19135 = state_19047__$1;
(statearr_19071_19135[(2)] = null);

(statearr_19071_19135[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (13))){
var inst_18947 = (state_19047[(26)]);
var inst_18951 = cljs.core.chunk_first.call(null,inst_18947);
var inst_18952 = cljs.core.chunk_rest.call(null,inst_18947);
var inst_18953 = cljs.core.count.call(null,inst_18951);
var inst_18934 = inst_18952;
var inst_18935 = inst_18951;
var inst_18936 = inst_18953;
var inst_18937 = (0);
var state_19047__$1 = (function (){var statearr_19072 = state_19047;
(statearr_19072[(7)] = inst_18936);

(statearr_19072[(8)] = inst_18937);

(statearr_19072[(9)] = inst_18935);

(statearr_19072[(10)] = inst_18934);

return statearr_19072;
})();
var statearr_19073_19136 = state_19047__$1;
(statearr_19073_19136[(2)] = null);

(statearr_19073_19136[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (22))){
var inst_18986 = (state_19047[(16)]);
var inst_18999 = (state_19047[(2)]);
var inst_19000 = cljs.core.not_empty.call(null,inst_18986);
var state_19047__$1 = (function (){var statearr_19074 = state_19047;
(statearr_19074[(27)] = inst_18999);

return statearr_19074;
})();
if(cljs.core.truth_(inst_19000)){
var statearr_19075_19137 = state_19047__$1;
(statearr_19075_19137[(1)] = (23));

} else {
var statearr_19076_19138 = state_19047__$1;
(statearr_19076_19138[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (36))){
var state_19047__$1 = state_19047;
var statearr_19077_19139 = state_19047__$1;
(statearr_19077_19139[(2)] = null);

(statearr_19077_19139[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (29))){
var inst_19015 = (state_19047[(28)]);
var inst_19018 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19015);
var inst_19019 = cljs.core.pr_str.call(null,inst_19018);
var inst_19020 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_19019)].join('');
var inst_19021 = figwheel.client.utils.log.call(null,inst_19020);
var state_19047__$1 = state_19047;
var statearr_19078_19140 = state_19047__$1;
(statearr_19078_19140[(2)] = inst_19021);

(statearr_19078_19140[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (6))){
var inst_18968 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
var statearr_19079_19141 = state_19047__$1;
(statearr_19079_19141[(2)] = inst_18968);

(statearr_19079_19141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (28))){
var inst_19015 = (state_19047[(28)]);
var inst_19012 = (state_19047[(2)]);
var inst_19013 = cljs.core.get.call(null,inst_19012,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_19014 = cljs.core.get.call(null,inst_19012,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_19015__$1 = cljs.core.get.call(null,inst_19012,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_19016 = cljs.core.not_empty.call(null,inst_19015__$1);
var state_19047__$1 = (function (){var statearr_19080 = state_19047;
(statearr_19080[(28)] = inst_19015__$1);

(statearr_19080[(24)] = inst_19014);

(statearr_19080[(29)] = inst_19013);

return statearr_19080;
})();
if(cljs.core.truth_(inst_19016)){
var statearr_19081_19142 = state_19047__$1;
(statearr_19081_19142[(1)] = (29));

} else {
var statearr_19082_19143 = state_19047__$1;
(statearr_19082_19143[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (25))){
var inst_19045 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19047__$1,inst_19045);
} else {
if((state_val_19048 === (34))){
var inst_19013 = (state_19047[(29)]);
var inst_19033 = (state_19047[(2)]);
var inst_19034 = cljs.core.not_empty.call(null,inst_19013);
var state_19047__$1 = (function (){var statearr_19083 = state_19047;
(statearr_19083[(30)] = inst_19033);

return statearr_19083;
})();
if(cljs.core.truth_(inst_19034)){
var statearr_19084_19144 = state_19047__$1;
(statearr_19084_19144[(1)] = (35));

} else {
var statearr_19085_19145 = state_19047__$1;
(statearr_19085_19145[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (17))){
var inst_18973 = (state_19047[(23)]);
var state_19047__$1 = state_19047;
var statearr_19086_19146 = state_19047__$1;
(statearr_19086_19146[(2)] = inst_18973);

(statearr_19086_19146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (3))){
var state_19047__$1 = state_19047;
var statearr_19087_19147 = state_19047__$1;
(statearr_19087_19147[(2)] = null);

(statearr_19087_19147[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (12))){
var inst_18964 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
var statearr_19088_19148 = state_19047__$1;
(statearr_19088_19148[(2)] = inst_18964);

(statearr_19088_19148[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (2))){
var inst_18926 = (state_19047[(20)]);
var inst_18933 = cljs.core.seq.call(null,inst_18926);
var inst_18934 = inst_18933;
var inst_18935 = null;
var inst_18936 = (0);
var inst_18937 = (0);
var state_19047__$1 = (function (){var statearr_19089 = state_19047;
(statearr_19089[(7)] = inst_18936);

(statearr_19089[(8)] = inst_18937);

(statearr_19089[(9)] = inst_18935);

(statearr_19089[(10)] = inst_18934);

return statearr_19089;
})();
var statearr_19090_19149 = state_19047__$1;
(statearr_19090_19149[(2)] = null);

(statearr_19090_19149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (23))){
var inst_18984 = (state_19047[(12)]);
var inst_18983 = (state_19047[(13)]);
var inst_19006 = (state_19047[(19)]);
var inst_18980 = (state_19047[(14)]);
var inst_18979 = (state_19047[(15)]);
var inst_18986 = (state_19047[(16)]);
var inst_19002 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_19005 = (function (){var files_not_loaded = inst_18986;
var res = inst_18984;
var res_SINGLEQUOTE_ = inst_18983;
var files_SINGLEQUOTE_ = inst_18980;
var all_files = inst_18979;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18984,inst_18983,inst_19006,inst_18980,inst_18979,inst_18986,inst_19002,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files){
return (function (p__19004){
var map__19091 = p__19004;
var map__19091__$1 = ((cljs.core.seq_QMARK_.call(null,map__19091))?cljs.core.apply.call(null,cljs.core.hash_map,map__19091):map__19091);
var meta_data = cljs.core.get.call(null,map__19091__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18984,inst_18983,inst_19006,inst_18980,inst_18979,inst_18986,inst_19002,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files))
})();
var inst_19006__$1 = cljs.core.group_by.call(null,inst_19005,inst_18986);
var inst_19007 = cljs.core.seq_QMARK_.call(null,inst_19006__$1);
var state_19047__$1 = (function (){var statearr_19092 = state_19047;
(statearr_19092[(31)] = inst_19002);

(statearr_19092[(19)] = inst_19006__$1);

return statearr_19092;
})();
if(inst_19007){
var statearr_19093_19150 = state_19047__$1;
(statearr_19093_19150[(1)] = (26));

} else {
var statearr_19094_19151 = state_19047__$1;
(statearr_19094_19151[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (35))){
var inst_19013 = (state_19047[(29)]);
var inst_19036 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_19013);
var inst_19037 = cljs.core.pr_str.call(null,inst_19036);
var inst_19038 = [cljs.core.str("not required: "),cljs.core.str(inst_19037)].join('');
var inst_19039 = figwheel.client.utils.log.call(null,inst_19038);
var state_19047__$1 = state_19047;
var statearr_19095_19152 = state_19047__$1;
(statearr_19095_19152[(2)] = inst_19039);

(statearr_19095_19152[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (19))){
var inst_18984 = (state_19047[(12)]);
var inst_18983 = (state_19047[(13)]);
var inst_18980 = (state_19047[(14)]);
var inst_18979 = (state_19047[(15)]);
var inst_18983__$1 = (state_19047[(2)]);
var inst_18984__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_18983__$1);
var inst_18985 = (function (){var res = inst_18984__$1;
var res_SINGLEQUOTE_ = inst_18983__$1;
var files_SINGLEQUOTE_ = inst_18980;
var all_files = inst_18979;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18984,inst_18983,inst_18980,inst_18979,inst_18983__$1,inst_18984__$1,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files){
return (function (p1__18719_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__18719_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_18984,inst_18983,inst_18980,inst_18979,inst_18983__$1,inst_18984__$1,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files))
})();
var inst_18986 = cljs.core.filter.call(null,inst_18985,inst_18983__$1);
var inst_18987 = cljs.core.not_empty.call(null,inst_18984__$1);
var state_19047__$1 = (function (){var statearr_19096 = state_19047;
(statearr_19096[(12)] = inst_18984__$1);

(statearr_19096[(13)] = inst_18983__$1);

(statearr_19096[(16)] = inst_18986);

return statearr_19096;
})();
if(cljs.core.truth_(inst_18987)){
var statearr_19097_19153 = state_19047__$1;
(statearr_19097_19153[(1)] = (20));

} else {
var statearr_19098_19154 = state_19047__$1;
(statearr_19098_19154[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (11))){
var state_19047__$1 = state_19047;
var statearr_19099_19155 = state_19047__$1;
(statearr_19099_19155[(2)] = null);

(statearr_19099_19155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (9))){
var inst_18966 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
var statearr_19100_19156 = state_19047__$1;
(statearr_19100_19156[(2)] = inst_18966);

(statearr_19100_19156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (5))){
var inst_18936 = (state_19047[(7)]);
var inst_18937 = (state_19047[(8)]);
var inst_18939 = (inst_18937 < inst_18936);
var inst_18940 = inst_18939;
var state_19047__$1 = state_19047;
if(cljs.core.truth_(inst_18940)){
var statearr_19101_19157 = state_19047__$1;
(statearr_19101_19157[(1)] = (7));

} else {
var statearr_19102_19158 = state_19047__$1;
(statearr_19102_19158[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (14))){
var inst_18947 = (state_19047[(26)]);
var inst_18956 = cljs.core.first.call(null,inst_18947);
var inst_18957 = figwheel.client.file_reloading.eval_body.call(null,inst_18956);
var inst_18958 = cljs.core.next.call(null,inst_18947);
var inst_18934 = inst_18958;
var inst_18935 = null;
var inst_18936 = (0);
var inst_18937 = (0);
var state_19047__$1 = (function (){var statearr_19103 = state_19047;
(statearr_19103[(7)] = inst_18936);

(statearr_19103[(8)] = inst_18937);

(statearr_19103[(32)] = inst_18957);

(statearr_19103[(9)] = inst_18935);

(statearr_19103[(10)] = inst_18934);

return statearr_19103;
})();
var statearr_19104_19159 = state_19047__$1;
(statearr_19104_19159[(2)] = null);

(statearr_19104_19159[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (26))){
var inst_19006 = (state_19047[(19)]);
var inst_19009 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19006);
var state_19047__$1 = state_19047;
var statearr_19105_19160 = state_19047__$1;
(statearr_19105_19160[(2)] = inst_19009);

(statearr_19105_19160[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (16))){
var inst_18973 = (state_19047[(23)]);
var inst_18975 = (function (){var all_files = inst_18973;
return ((function (all_files,inst_18973,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files){
return (function (p1__18718_SHARP_){
return cljs.core.update_in.call(null,p1__18718_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_18973,state_val_19048,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files))
})();
var inst_18976 = cljs.core.map.call(null,inst_18975,inst_18973);
var state_19047__$1 = state_19047;
var statearr_19106_19161 = state_19047__$1;
(statearr_19106_19161[(2)] = inst_18976);

(statearr_19106_19161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (30))){
var state_19047__$1 = state_19047;
var statearr_19107_19162 = state_19047__$1;
(statearr_19107_19162[(2)] = null);

(statearr_19107_19162[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (10))){
var inst_18947 = (state_19047[(26)]);
var inst_18949 = cljs.core.chunked_seq_QMARK_.call(null,inst_18947);
var state_19047__$1 = state_19047;
if(inst_18949){
var statearr_19108_19163 = state_19047__$1;
(statearr_19108_19163[(1)] = (13));

} else {
var statearr_19109_19164 = state_19047__$1;
(statearr_19109_19164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (18))){
var inst_18980 = (state_19047[(14)]);
var inst_18979 = (state_19047[(15)]);
var inst_18979__$1 = (state_19047[(2)]);
var inst_18980__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_18979__$1);
var inst_18981 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_18980__$1);
var state_19047__$1 = (function (){var statearr_19110 = state_19047;
(statearr_19110[(14)] = inst_18980__$1);

(statearr_19110[(15)] = inst_18979__$1);

return statearr_19110;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19047__$1,(19),inst_18981);
} else {
if((state_val_19048 === (37))){
var inst_19042 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
var statearr_19111_19165 = state_19047__$1;
(statearr_19111_19165[(2)] = inst_19042);

(statearr_19111_19165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (8))){
var inst_18947 = (state_19047[(26)]);
var inst_18934 = (state_19047[(10)]);
var inst_18947__$1 = cljs.core.seq.call(null,inst_18934);
var state_19047__$1 = (function (){var statearr_19112 = state_19047;
(statearr_19112[(26)] = inst_18947__$1);

return statearr_19112;
})();
if(inst_18947__$1){
var statearr_19113_19166 = state_19047__$1;
(statearr_19113_19166[(1)] = (10));

} else {
var statearr_19114_19167 = state_19047__$1;
(statearr_19114_19167[(1)] = (11));

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
});})(c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files))
;
return ((function (switch__6943__auto__,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_19118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19118[(0)] = state_machine__6944__auto__);

(statearr_19118[(1)] = (1));

return statearr_19118;
});
var state_machine__6944__auto____1 = (function (state_19047){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_19047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e19119){if((e19119 instanceof Object)){
var ex__6947__auto__ = e19119;
var statearr_19120_19168 = state_19047;
(statearr_19120_19168[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19169 = state_19047;
state_19047 = G__19169;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_19047){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_19047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files))
})();
var state__7001__auto__ = (function (){var statearr_19121 = f__7000__auto__.call(null);
(statearr_19121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto__);

return statearr_19121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto__,map__18922,map__18922__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__18923,map__18923__$1,msg,files))
);

return c__6999__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__19172,link){
var map__19174 = p__19172;
var map__19174__$1 = ((cljs.core.seq_QMARK_.call(null,map__19174))?cljs.core.apply.call(null,cljs.core.hash_map,map__19174):map__19174);
var file = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__19174,map__19174__$1,file){
return (function (p1__19170_SHARP_,p2__19171_SHARP_){
if(cljs.core._EQ_.call(null,p1__19170_SHARP_,p2__19171_SHARP_)){
return p1__19170_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__19174,map__19174__$1,file))
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
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__19178){
var map__19179 = p__19178;
var map__19179__$1 = ((cljs.core.seq_QMARK_.call(null,map__19179))?cljs.core.apply.call(null,cljs.core.hash_map,map__19179):map__19179);
var current_url_length = cljs.core.get.call(null,map__19179__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__19179__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__19175_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__19175_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
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
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__19180){
var map__19182 = p__19180;
var map__19182__$1 = ((cljs.core.seq_QMARK_.call(null,map__19182))?cljs.core.apply.call(null,cljs.core.hash_map,map__19182):map__19182);
var f_data = map__19182__$1;
var request_url = cljs.core.get.call(null,map__19182__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__19182__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__4001__auto__ = request_url;
if(cljs.core.truth_(or__4001__auto__)){
return or__4001__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__19183,files_msg){
var map__19205 = p__19183;
var map__19205__$1 = ((cljs.core.seq_QMARK_.call(null,map__19205))?cljs.core.apply.call(null,cljs.core.hash_map,map__19205):map__19205);
var opts = map__19205__$1;
var on_cssload = cljs.core.get.call(null,map__19205__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__19206_19226 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__19207_19227 = null;
var count__19208_19228 = (0);
var i__19209_19229 = (0);
while(true){
if((i__19209_19229 < count__19208_19228)){
var f_19230 = cljs.core._nth.call(null,chunk__19207_19227,i__19209_19229);
figwheel.client.file_reloading.reload_css_file.call(null,f_19230);

var G__19231 = seq__19206_19226;
var G__19232 = chunk__19207_19227;
var G__19233 = count__19208_19228;
var G__19234 = (i__19209_19229 + (1));
seq__19206_19226 = G__19231;
chunk__19207_19227 = G__19232;
count__19208_19228 = G__19233;
i__19209_19229 = G__19234;
continue;
} else {
var temp__4126__auto___19235 = cljs.core.seq.call(null,seq__19206_19226);
if(temp__4126__auto___19235){
var seq__19206_19236__$1 = temp__4126__auto___19235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19206_19236__$1)){
var c__4788__auto___19237 = cljs.core.chunk_first.call(null,seq__19206_19236__$1);
var G__19238 = cljs.core.chunk_rest.call(null,seq__19206_19236__$1);
var G__19239 = c__4788__auto___19237;
var G__19240 = cljs.core.count.call(null,c__4788__auto___19237);
var G__19241 = (0);
seq__19206_19226 = G__19238;
chunk__19207_19227 = G__19239;
count__19208_19228 = G__19240;
i__19209_19229 = G__19241;
continue;
} else {
var f_19242 = cljs.core.first.call(null,seq__19206_19236__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_19242);

var G__19243 = cljs.core.next.call(null,seq__19206_19236__$1);
var G__19244 = null;
var G__19245 = (0);
var G__19246 = (0);
seq__19206_19226 = G__19243;
chunk__19207_19227 = G__19244;
count__19208_19228 = G__19245;
i__19209_19229 = G__19246;
continue;
}
} else {
}
}
break;
}

var c__6999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6999__auto__,map__19205,map__19205__$1,opts,on_cssload){
return (function (){
var f__7000__auto__ = (function (){var switch__6943__auto__ = ((function (c__6999__auto__,map__19205,map__19205__$1,opts,on_cssload){
return (function (state_19216){
var state_val_19217 = (state_19216[(1)]);
if((state_val_19217 === (2))){
var inst_19212 = (state_19216[(2)]);
var inst_19213 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_19214 = on_cssload.call(null,inst_19213);
var state_19216__$1 = (function (){var statearr_19218 = state_19216;
(statearr_19218[(7)] = inst_19212);

return statearr_19218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19216__$1,inst_19214);
} else {
if((state_val_19217 === (1))){
var inst_19210 = cljs.core.async.timeout.call(null,(100));
var state_19216__$1 = state_19216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19216__$1,(2),inst_19210);
} else {
return null;
}
}
});})(c__6999__auto__,map__19205,map__19205__$1,opts,on_cssload))
;
return ((function (switch__6943__auto__,c__6999__auto__,map__19205,map__19205__$1,opts,on_cssload){
return (function() {
var state_machine__6944__auto__ = null;
var state_machine__6944__auto____0 = (function (){
var statearr_19222 = [null,null,null,null,null,null,null,null];
(statearr_19222[(0)] = state_machine__6944__auto__);

(statearr_19222[(1)] = (1));

return statearr_19222;
});
var state_machine__6944__auto____1 = (function (state_19216){
while(true){
var ret_value__6945__auto__ = (function (){try{while(true){
var result__6946__auto__ = switch__6943__auto__.call(null,state_19216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6946__auto__;
}
break;
}
}catch (e19223){if((e19223 instanceof Object)){
var ex__6947__auto__ = e19223;
var statearr_19224_19247 = state_19216;
(statearr_19224_19247[(5)] = ex__6947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19248 = state_19216;
state_19216 = G__19248;
continue;
} else {
return ret_value__6945__auto__;
}
break;
}
});
state_machine__6944__auto__ = function(state_19216){
switch(arguments.length){
case 0:
return state_machine__6944__auto____0.call(this);
case 1:
return state_machine__6944__auto____1.call(this,state_19216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6944__auto____0;
state_machine__6944__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6944__auto____1;
return state_machine__6944__auto__;
})()
;})(switch__6943__auto__,c__6999__auto__,map__19205,map__19205__$1,opts,on_cssload))
})();
var state__7001__auto__ = (function (){var statearr_19225 = f__7000__auto__.call(null);
(statearr_19225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6999__auto__);

return statearr_19225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7001__auto__);
});})(c__6999__auto__,map__19205,map__19205__$1,opts,on_cssload))
);

return c__6999__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1425473468110