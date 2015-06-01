// Compiled by ClojureScript 0.0-3153 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_11742 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_11742;
}});
reagent.ratom.captured = (function reagent$ratom$captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj11744 = {};
return obj11744;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 * @param {...*} var_args
 */
reagent.ratom.atom = (function() {
var reagent$ratom$atom = null;
var reagent$ratom$atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var reagent$ratom$atom__2 = (function() { 
var G__11748__delegate = function (x,p__11745){
var map__11747 = p__11745;
var map__11747__$1 = ((cljs.core.seq_QMARK_.call(null,map__11747))?cljs.core.apply.call(null,cljs.core.hash_map,map__11747):map__11747);
var validator = cljs.core.get.call(null,map__11747__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__11747__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__11748 = function (x,var_args){
var p__11745 = null;
if (arguments.length > 1) {
var G__11749__i = 0, G__11749__a = new Array(arguments.length -  1);
while (G__11749__i < G__11749__a.length) {G__11749__a[G__11749__i] = arguments[G__11749__i + 1]; ++G__11749__i;}
  p__11745 = new cljs.core.IndexedSeq(G__11749__a,0);
} 
return G__11748__delegate.call(this,x,p__11745);};
G__11748.cljs$lang$maxFixedArity = 1;
G__11748.cljs$lang$applyTo = (function (arglist__11750){
var x = cljs.core.first(arglist__11750);
var p__11745 = cljs.core.rest(arglist__11750);
return G__11748__delegate(x,p__11745);
});
G__11748.cljs$core$IFn$_invoke$arity$variadic = G__11748__delegate;
return G__11748;
})()
;
reagent$ratom$atom = function(x,var_args){
var p__11745 = var_args;
switch(arguments.length){
case 1:
return reagent$ratom$atom__1.call(this,x);
default:
var G__11751 = null;
if (arguments.length > 1) {
var G__11752__i = 0, G__11752__a = new Array(arguments.length -  1);
while (G__11752__i < G__11752__a.length) {G__11752__a[G__11752__i] = arguments[G__11752__i + 1]; ++G__11752__i;}
G__11751 = new cljs.core.IndexedSeq(G__11752__a,0);
}
return reagent$ratom$atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__11751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagent$ratom$atom.cljs$lang$maxFixedArity = 1;
reagent$ratom$atom.cljs$lang$applyTo = reagent$ratom$atom__2.cljs$lang$applyTo;
reagent$ratom$atom.cljs$core$IFn$_invoke$arity$1 = reagent$ratom$atom__1;
reagent$ratom$atom.cljs$core$IFn$_invoke$arity$variadic = reagent$ratom$atom__2.cljs$core$IFn$_invoke$arity$variadic;
return reagent$ratom$atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__11759 = self__.ratom;
if(G__11759){
var bit__4990__auto__ = (G__11759.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4990__auto__) || (G__11759.cljs$core$IDeref$)){
return true;
} else {
if((!G__11759.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__11759);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__11759);
}
})())?reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?((function (this$){
return (function (p1__11754_SHARP_,p2__11753_SHARP_){
return cljs.core.reset_BANG_.call(null,self__.ratom,p2__11753_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__11756_SHARP_,p2__11755_SHARP_){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__11755_SHARP_);
});})(this$))
)):reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return self__.ratom.call(null,self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((function (this$){
return (function (p1__11758_SHARP_,p2__11757_SHARP_){
return self__.ratom.call(null,self__.path,p2__11757_SHARP_);
});})(this$))
));
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_11760 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_11760;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer.call(null,a__$1._peek(),writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref.call(null,this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var G__11765 = path;
if(G__11765){
var bit__4990__auto__ = (G__11765.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4990__auto__) || (G__11765.cljs$core$IDeref$)){
return true;
} else {
if((!G__11765.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__11765);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__11765);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,path)),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__11766 = path;
if(G__11766){
var bit__4990__auto__ = null;
if(cljs.core.truth_((function (){var or__4316__auto__ = bit__4990__auto__;
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
return G__11766.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__11766.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__11766);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__11766);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.call(null,path))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__4316__auto__ = (function (){var G__11768 = src;
if(G__11768){
var bit__4990__auto__ = null;
if(cljs.core.truth_((function (){var or__4316__auto__ = bit__4990__auto__;
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
return G__11768.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__11768.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__11768);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__11768);
}
})();
if(or__4316__auto__){
return or__4316__auto__;
} else {
return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.call(null,src))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj11770 = {};
return obj11770;
})();

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((function (){var and__4304__auto__ = this$;
if(and__4304__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__4304__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4952__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4316__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj11772 = {};
return obj11772;
})();

reagent.ratom.run = (function reagent$ratom$run(this$){
if((function (){var and__4304__auto__ = this$;
if(and__4304__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__4304__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4952__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4316__auto__ = (reagent.ratom.run[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (reagent.ratom.run["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj11774 = {};
return obj11774;
})();

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if((function (){var and__4304__auto__ = this$;
if(and__4304__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__4304__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4952__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4316__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if((function (){var and__4304__auto__ = k;
if(and__4304__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__4304__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4952__auto__ = (((k == null))?null:k);
return (function (){var or__4316__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4952__auto__)]);
if(or__4316__auto__){
return or__4316__auto__;
} else {
var or__4316__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__4316__auto____$1){
return or__4316__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4304__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__4304__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__4304__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__4316__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__11775_11787 = cljs.core.seq.call(null,derefed);
var chunk__11776_11788 = null;
var count__11777_11789 = (0);
var i__11778_11790 = (0);
while(true){
if((i__11778_11790 < count__11777_11789)){
var w_11791 = cljs.core._nth.call(null,chunk__11776_11788,i__11778_11790);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_11791)){
} else {
cljs.core.add_watch.call(null,w_11791,this$__$1,reagent.ratom._handle_change);
}

var G__11792 = seq__11775_11787;
var G__11793 = chunk__11776_11788;
var G__11794 = count__11777_11789;
var G__11795 = (i__11778_11790 + (1));
seq__11775_11787 = G__11792;
chunk__11776_11788 = G__11793;
count__11777_11789 = G__11794;
i__11778_11790 = G__11795;
continue;
} else {
var temp__4126__auto___11796 = cljs.core.seq.call(null,seq__11775_11787);
if(temp__4126__auto___11796){
var seq__11775_11797__$1 = temp__4126__auto___11796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11775_11797__$1)){
var c__5101__auto___11798 = cljs.core.chunk_first.call(null,seq__11775_11797__$1);
var G__11799 = cljs.core.chunk_rest.call(null,seq__11775_11797__$1);
var G__11800 = c__5101__auto___11798;
var G__11801 = cljs.core.count.call(null,c__5101__auto___11798);
var G__11802 = (0);
seq__11775_11787 = G__11799;
chunk__11776_11788 = G__11800;
count__11777_11789 = G__11801;
i__11778_11790 = G__11802;
continue;
} else {
var w_11803 = cljs.core.first.call(null,seq__11775_11797__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_11803)){
} else {
cljs.core.add_watch.call(null,w_11803,this$__$1,reagent.ratom._handle_change);
}

var G__11804 = cljs.core.next.call(null,seq__11775_11797__$1);
var G__11805 = null;
var G__11806 = (0);
var G__11807 = (0);
seq__11775_11787 = G__11804;
chunk__11776_11788 = G__11805;
count__11777_11789 = G__11806;
i__11778_11790 = G__11807;
continue;
}
} else {
}
}
break;
}

var seq__11779_11808 = cljs.core.seq.call(null,self__.watching);
var chunk__11780_11809 = null;
var count__11781_11810 = (0);
var i__11782_11811 = (0);
while(true){
if((i__11782_11811 < count__11781_11810)){
var w_11812 = cljs.core._nth.call(null,chunk__11780_11809,i__11782_11811);
if(cljs.core.contains_QMARK_.call(null,derefed,w_11812)){
} else {
cljs.core.remove_watch.call(null,w_11812,this$__$1);
}

var G__11813 = seq__11779_11808;
var G__11814 = chunk__11780_11809;
var G__11815 = count__11781_11810;
var G__11816 = (i__11782_11811 + (1));
seq__11779_11808 = G__11813;
chunk__11780_11809 = G__11814;
count__11781_11810 = G__11815;
i__11782_11811 = G__11816;
continue;
} else {
var temp__4126__auto___11817 = cljs.core.seq.call(null,seq__11779_11808);
if(temp__4126__auto___11817){
var seq__11779_11818__$1 = temp__4126__auto___11817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11779_11818__$1)){
var c__5101__auto___11819 = cljs.core.chunk_first.call(null,seq__11779_11818__$1);
var G__11820 = cljs.core.chunk_rest.call(null,seq__11779_11818__$1);
var G__11821 = c__5101__auto___11819;
var G__11822 = cljs.core.count.call(null,c__5101__auto___11819);
var G__11823 = (0);
seq__11779_11808 = G__11820;
chunk__11780_11809 = G__11821;
count__11781_11810 = G__11822;
i__11782_11811 = G__11823;
continue;
} else {
var w_11824 = cljs.core.first.call(null,seq__11779_11818__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_11824)){
} else {
cljs.core.remove_watch.call(null,w_11824,this$__$1);
}

var G__11825 = cljs.core.next.call(null,seq__11779_11818__$1);
var G__11826 = null;
var G__11827 = (0);
var G__11828 = (0);
seq__11779_11808 = G__11825;
chunk__11780_11809 = G__11826;
count__11781_11810 = G__11827;
i__11782_11811 = G__11828;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__11783_11829 = cljs.core.seq.call(null,self__.watching);
var chunk__11784_11830 = null;
var count__11785_11831 = (0);
var i__11786_11832 = (0);
while(true){
if((i__11786_11832 < count__11785_11831)){
var w_11833 = cljs.core._nth.call(null,chunk__11784_11830,i__11786_11832);
cljs.core.remove_watch.call(null,w_11833,this$__$1);

var G__11834 = seq__11783_11829;
var G__11835 = chunk__11784_11830;
var G__11836 = count__11785_11831;
var G__11837 = (i__11786_11832 + (1));
seq__11783_11829 = G__11834;
chunk__11784_11830 = G__11835;
count__11785_11831 = G__11836;
i__11786_11832 = G__11837;
continue;
} else {
var temp__4126__auto___11838 = cljs.core.seq.call(null,seq__11783_11829);
if(temp__4126__auto___11838){
var seq__11783_11839__$1 = temp__4126__auto___11838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11783_11839__$1)){
var c__5101__auto___11840 = cljs.core.chunk_first.call(null,seq__11783_11839__$1);
var G__11841 = cljs.core.chunk_rest.call(null,seq__11783_11839__$1);
var G__11842 = c__5101__auto___11840;
var G__11843 = cljs.core.count.call(null,c__5101__auto___11840);
var G__11844 = (0);
seq__11783_11829 = G__11841;
chunk__11784_11830 = G__11842;
count__11785_11831 = G__11843;
i__11786_11832 = G__11844;
continue;
} else {
var w_11845 = cljs.core.first.call(null,seq__11783_11839__$1);
cljs.core.remove_watch.call(null,w_11845,this$__$1);

var G__11846 = cljs.core.next.call(null,seq__11783_11839__$1);
var G__11847 = null;
var G__11848 = (0);
var G__11849 = (0);
seq__11783_11829 = G__11846;
chunk__11784_11830 = G__11847;
count__11785_11831 = G__11848;
i__11786_11832 = G__11849;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

self__.on_set.call(null,oldval,newval);
} else {
}

cljs.core._notify_watches.call(null,a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches.call(null,this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f__$1){
f__$1.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if((cljs.core.empty_QMARK_.call(null,self__.watches)) && (cljs.core.not.call(null,self__.auto_run))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,(function (){var or__4316__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_11850 = self__.state;
self__.state = self__.f.call(null);

if((oldstate_11850 === self__.state)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldstate_11850,self__.state);
}
} else {
}

return self__.state;
} else {
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
 * @param {...*} var_args
 */
reagent.ratom.make_reaction = (function() { 
var reagent$ratom$make_reaction__delegate = function (f,p__11851){
var map__11853 = p__11851;
var map__11853__$1 = ((cljs.core.seq_QMARK_.call(null,map__11853))?cljs.core.apply.call(null,cljs.core.hash_map,map__11853):map__11853);
var derefed = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var reagent$ratom$make_reaction = function (f,var_args){
var p__11851 = null;
if (arguments.length > 1) {
var G__11854__i = 0, G__11854__a = new Array(arguments.length -  1);
while (G__11854__i < G__11854__a.length) {G__11854__a[G__11854__i] = arguments[G__11854__i + 1]; ++G__11854__i;}
  p__11851 = new cljs.core.IndexedSeq(G__11854__a,0);
} 
return reagent$ratom$make_reaction__delegate.call(this,f,p__11851);};
reagent$ratom$make_reaction.cljs$lang$maxFixedArity = 1;
reagent$ratom$make_reaction.cljs$lang$applyTo = (function (arglist__11855){
var f = cljs.core.first(arglist__11855);
var p__11851 = cljs.core.rest(arglist__11855);
return reagent$ratom$make_reaction__delegate(f,p__11851);
});
reagent$ratom$make_reaction.cljs$core$IFn$_invoke$arity$variadic = reagent$ratom$make_reaction__delegate;
return reagent$ratom$make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<wrap: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldval,newval);
}

self__.callback.call(null,newval);

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4304__auto__ = self__.changed;
if(cljs.core.truth_(and__4304__auto__)){
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__4304__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4895__auto__,writer__4896__auto__,opt__4897__auto__){
return cljs.core._write.call(null,writer__4896__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map?rel=1433163727264