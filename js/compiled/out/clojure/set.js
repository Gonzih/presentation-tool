// Compiled by ClojureScript 0.0-3153 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__13643_SHARP_){
return (max === p1__13643_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 * @param {...*} var_args
 */
clojure.set.union = (function() {
var clojure$set$union = null;
var clojure$set$union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var clojure$set$union__1 = (function (s1){
return s1;
});
var clojure$set$union__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var clojure$set$union__3 = (function() { 
var G__13644__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__13644 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__13645__i = 0, G__13645__a = new Array(arguments.length -  2);
while (G__13645__i < G__13645__a.length) {G__13645__a[G__13645__i] = arguments[G__13645__i + 2]; ++G__13645__i;}
  sets = new cljs.core.IndexedSeq(G__13645__a,0);
} 
return G__13644__delegate.call(this,s1,s2,sets);};
G__13644.cljs$lang$maxFixedArity = 2;
G__13644.cljs$lang$applyTo = (function (arglist__13646){
var s1 = cljs.core.first(arglist__13646);
arglist__13646 = cljs.core.next(arglist__13646);
var s2 = cljs.core.first(arglist__13646);
var sets = cljs.core.rest(arglist__13646);
return G__13644__delegate(s1,s2,sets);
});
G__13644.cljs$core$IFn$_invoke$arity$variadic = G__13644__delegate;
return G__13644;
})()
;
clojure$set$union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return clojure$set$union__0.call(this);
case 1:
return clojure$set$union__1.call(this,s1);
case 2:
return clojure$set$union__2.call(this,s1,s2);
default:
var G__13647 = null;
if (arguments.length > 2) {
var G__13648__i = 0, G__13648__a = new Array(arguments.length -  2);
while (G__13648__i < G__13648__a.length) {G__13648__a[G__13648__i] = arguments[G__13648__i + 2]; ++G__13648__i;}
G__13647 = new cljs.core.IndexedSeq(G__13648__a,0);
}
return clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__13647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$union.cljs$lang$maxFixedArity = 2;
clojure$set$union.cljs$lang$applyTo = clojure$set$union__3.cljs$lang$applyTo;
clojure$set$union.cljs$core$IFn$_invoke$arity$0 = clojure$set$union__0;
clojure$set$union.cljs$core$IFn$_invoke$arity$1 = clojure$set$union__1;
clojure$set$union.cljs$core$IFn$_invoke$arity$2 = clojure$set$union__2;
clojure$set$union.cljs$core$IFn$_invoke$arity$variadic = clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$union;
})()
;
/**
 * Return a set that is the intersection of the input sets
 * @param {...*} var_args
 */
clojure.set.intersection = (function() {
var clojure$set$intersection = null;
var clojure$set$intersection__1 = (function (s1){
return s1;
});
var clojure$set$intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__13650 = s2;
var G__13651 = s1;
s1 = G__13650;
s2 = G__13651;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var clojure$set$intersection__3 = (function() { 
var G__13652__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__13649_SHARP_){
return (- cljs.core.count.call(null,p1__13649_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure$set$intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__13652 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__13653__i = 0, G__13653__a = new Array(arguments.length -  2);
while (G__13653__i < G__13653__a.length) {G__13653__a[G__13653__i] = arguments[G__13653__i + 2]; ++G__13653__i;}
  sets = new cljs.core.IndexedSeq(G__13653__a,0);
} 
return G__13652__delegate.call(this,s1,s2,sets);};
G__13652.cljs$lang$maxFixedArity = 2;
G__13652.cljs$lang$applyTo = (function (arglist__13654){
var s1 = cljs.core.first(arglist__13654);
arglist__13654 = cljs.core.next(arglist__13654);
var s2 = cljs.core.first(arglist__13654);
var sets = cljs.core.rest(arglist__13654);
return G__13652__delegate(s1,s2,sets);
});
G__13652.cljs$core$IFn$_invoke$arity$variadic = G__13652__delegate;
return G__13652;
})()
;
clojure$set$intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$intersection__1.call(this,s1);
case 2:
return clojure$set$intersection__2.call(this,s1,s2);
default:
var G__13655 = null;
if (arguments.length > 2) {
var G__13656__i = 0, G__13656__a = new Array(arguments.length -  2);
while (G__13656__i < G__13656__a.length) {G__13656__a[G__13656__i] = arguments[G__13656__i + 2]; ++G__13656__i;}
G__13655 = new cljs.core.IndexedSeq(G__13656__a,0);
}
return clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__13655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$intersection.cljs$lang$maxFixedArity = 2;
clojure$set$intersection.cljs$lang$applyTo = clojure$set$intersection__3.cljs$lang$applyTo;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$1 = clojure$set$intersection__1;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$2 = clojure$set$intersection__2;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$variadic = clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$intersection;
})()
;
/**
 * Return a set that is the first set without elements of the remaining sets
 * @param {...*} var_args
 */
clojure.set.difference = (function() {
var clojure$set$difference = null;
var clojure$set$difference__1 = (function (s1){
return s1;
});
var clojure$set$difference__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var clojure$set$difference__3 = (function() { 
var G__13657__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure$set$difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__13657 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__13658__i = 0, G__13658__a = new Array(arguments.length -  2);
while (G__13658__i < G__13658__a.length) {G__13658__a[G__13658__i] = arguments[G__13658__i + 2]; ++G__13658__i;}
  sets = new cljs.core.IndexedSeq(G__13658__a,0);
} 
return G__13657__delegate.call(this,s1,s2,sets);};
G__13657.cljs$lang$maxFixedArity = 2;
G__13657.cljs$lang$applyTo = (function (arglist__13659){
var s1 = cljs.core.first(arglist__13659);
arglist__13659 = cljs.core.next(arglist__13659);
var s2 = cljs.core.first(arglist__13659);
var sets = cljs.core.rest(arglist__13659);
return G__13657__delegate(s1,s2,sets);
});
G__13657.cljs$core$IFn$_invoke$arity$variadic = G__13657__delegate;
return G__13657;
})()
;
clojure$set$difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$difference__1.call(this,s1);
case 2:
return clojure$set$difference__2.call(this,s1,s2);
default:
var G__13660 = null;
if (arguments.length > 2) {
var G__13661__i = 0, G__13661__a = new Array(arguments.length -  2);
while (G__13661__i < G__13661__a.length) {G__13661__a[G__13661__i] = arguments[G__13661__i + 2]; ++G__13661__i;}
G__13660 = new cljs.core.IndexedSeq(G__13661__a,0);
}
return clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__13660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$difference.cljs$lang$maxFixedArity = 2;
clojure$set$difference.cljs$lang$applyTo = clojure$set$difference__3.cljs$lang$applyTo;
clojure$set$difference.cljs$core$IFn$_invoke$arity$1 = clojure$set$difference__1;
clojure$set$difference.cljs$core$IFn$_invoke$arity$2 = clojure$set$difference__2;
clojure$set$difference.cljs$core$IFn$_invoke$arity$variadic = clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$difference;
})()
;
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__13662_SHARP_){
return cljs.core.select_keys.call(null,p1__13662_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__13665){
var vec__13666 = p__13665;
var old = cljs.core.nth.call(null,vec__13666,(0),null);
var new$ = cljs.core.nth.call(null,vec__13666,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__13667_SHARP_){
return clojure.set.rename_keys.call(null,p1__13667_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 * set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__13670){
var vec__13671 = p__13670;
var k = cljs.core.nth.call(null,vec__13671,(0),null);
var v = cljs.core.nth.call(null,vec__13671,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 * join. When passed an additional keymap, joins on the corresponding
 * keys.
 */
clojure.set.join = (function() {
var clojure$set$join = null;
var clojure$set$join__2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__13678 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__13678,(0),null);
var s = cljs.core.nth.call(null,vec__13678,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__13678,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__13678,r,s,idx){
return (function (p1__13672_SHARP_,p2__13673_SHARP_){
return cljs.core.conj.call(null,p1__13672_SHARP_,cljs.core.merge.call(null,p2__13673_SHARP_,x));
});})(found,ks,vec__13678,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__13678,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
var clojure$set$join__3 = (function (xrel,yrel,km){
var vec__13679 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__13679,(0),null);
var s = cljs.core.nth.call(null,vec__13679,(1),null);
var k = cljs.core.nth.call(null,vec__13679,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__13679,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__13679,r,s,k,idx){
return (function (p1__13674_SHARP_,p2__13675_SHARP_){
return cljs.core.conj.call(null,p1__13674_SHARP_,cljs.core.merge.call(null,p2__13675_SHARP_,x));
});})(found,vec__13679,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__13679,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});
clojure$set$join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return clojure$set$join__2.call(this,xrel,yrel);
case 3:
return clojure$set$join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$join.cljs$core$IFn$_invoke$arity$2 = clojure$set$join__2;
clojure$set$join.cljs$core$IFn$_invoke$arity$3 = clojure$set$join__3;
return clojure$set$join;
})()
;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__13680_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__13680_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__13681_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__13681_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map?rel=1433163733031