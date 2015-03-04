// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18553_18557 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18554_18558 = null;
var count__18555_18559 = (0);
var i__18556_18560 = (0);
while(true){
if((i__18556_18560 < count__18555_18559)){
var f_18561 = cljs.core._nth.call(null,chunk__18554_18558,i__18556_18560);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_18561);

var G__18562 = seq__18553_18557;
var G__18563 = chunk__18554_18558;
var G__18564 = count__18555_18559;
var G__18565 = (i__18556_18560 + (1));
seq__18553_18557 = G__18562;
chunk__18554_18558 = G__18563;
count__18555_18559 = G__18564;
i__18556_18560 = G__18565;
continue;
} else {
var temp__4126__auto___18566 = cljs.core.seq.call(null,seq__18553_18557);
if(temp__4126__auto___18566){
var seq__18553_18567__$1 = temp__4126__auto___18566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18553_18567__$1)){
var c__4788__auto___18568 = cljs.core.chunk_first.call(null,seq__18553_18567__$1);
var G__18569 = cljs.core.chunk_rest.call(null,seq__18553_18567__$1);
var G__18570 = c__4788__auto___18568;
var G__18571 = cljs.core.count.call(null,c__4788__auto___18568);
var G__18572 = (0);
seq__18553_18557 = G__18569;
chunk__18554_18558 = G__18570;
count__18555_18559 = G__18571;
i__18556_18560 = G__18572;
continue;
} else {
var f_18573 = cljs.core.first.call(null,seq__18553_18567__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_18573);

var G__18574 = cljs.core.next.call(null,seq__18553_18567__$1);
var G__18575 = null;
var G__18576 = (0);
var G__18577 = (0);
seq__18553_18557 = G__18574;
chunk__18554_18558 = G__18575;
count__18555_18559 = G__18576;
i__18556_18560 = G__18577;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map?rel=1425480882056