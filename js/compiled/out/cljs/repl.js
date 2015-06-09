// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12652_12664 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12653_12665 = null;
var count__12654_12666 = (0);
var i__12655_12667 = (0);
while(true){
if((i__12655_12667 < count__12654_12666)){
var f_12668 = cljs.core._nth.call(null,chunk__12653_12665,i__12655_12667);
cljs.core.println.call(null,"  ",f_12668);

var G__12669 = seq__12652_12664;
var G__12670 = chunk__12653_12665;
var G__12671 = count__12654_12666;
var G__12672 = (i__12655_12667 + (1));
seq__12652_12664 = G__12669;
chunk__12653_12665 = G__12670;
count__12654_12666 = G__12671;
i__12655_12667 = G__12672;
continue;
} else {
var temp__4423__auto___12673 = cljs.core.seq.call(null,seq__12652_12664);
if(temp__4423__auto___12673){
var seq__12652_12674__$1 = temp__4423__auto___12673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12652_12674__$1)){
var c__5316__auto___12675 = cljs.core.chunk_first.call(null,seq__12652_12674__$1);
var G__12676 = cljs.core.chunk_rest.call(null,seq__12652_12674__$1);
var G__12677 = c__5316__auto___12675;
var G__12678 = cljs.core.count.call(null,c__5316__auto___12675);
var G__12679 = (0);
seq__12652_12664 = G__12676;
chunk__12653_12665 = G__12677;
count__12654_12666 = G__12678;
i__12655_12667 = G__12679;
continue;
} else {
var f_12680 = cljs.core.first.call(null,seq__12652_12674__$1);
cljs.core.println.call(null,"  ",f_12680);

var G__12681 = cljs.core.next.call(null,seq__12652_12674__$1);
var G__12682 = null;
var G__12683 = (0);
var G__12684 = (0);
seq__12652_12664 = G__12681;
chunk__12653_12665 = G__12682;
count__12654_12666 = G__12683;
i__12655_12667 = G__12684;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12685 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4531__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4531__auto__)){
return or__4531__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12685);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12685)))?cljs.core.second.call(null,arglists_12685):arglists_12685));
}
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12656 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12657 = null;
var count__12658 = (0);
var i__12659 = (0);
while(true){
if((i__12659 < count__12658)){
var vec__12660 = cljs.core._nth.call(null,chunk__12657,i__12659);
var name = cljs.core.nth.call(null,vec__12660,(0),null);
var map__12661 = cljs.core.nth.call(null,vec__12660,(1),null);
var map__12661__$1 = ((cljs.core.seq_QMARK_.call(null,map__12661))?cljs.core.apply.call(null,cljs.core.hash_map,map__12661):map__12661);
var doc = cljs.core.get.call(null,map__12661__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__12661__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12686 = seq__12656;
var G__12687 = chunk__12657;
var G__12688 = count__12658;
var G__12689 = (i__12659 + (1));
seq__12656 = G__12686;
chunk__12657 = G__12687;
count__12658 = G__12688;
i__12659 = G__12689;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__12656);
if(temp__4423__auto__){
var seq__12656__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12656__$1)){
var c__5316__auto__ = cljs.core.chunk_first.call(null,seq__12656__$1);
var G__12690 = cljs.core.chunk_rest.call(null,seq__12656__$1);
var G__12691 = c__5316__auto__;
var G__12692 = cljs.core.count.call(null,c__5316__auto__);
var G__12693 = (0);
seq__12656 = G__12690;
chunk__12657 = G__12691;
count__12658 = G__12692;
i__12659 = G__12693;
continue;
} else {
var vec__12662 = cljs.core.first.call(null,seq__12656__$1);
var name = cljs.core.nth.call(null,vec__12662,(0),null);
var map__12663 = cljs.core.nth.call(null,vec__12662,(1),null);
var map__12663__$1 = ((cljs.core.seq_QMARK_.call(null,map__12663))?cljs.core.apply.call(null,cljs.core.hash_map,map__12663):map__12663);
var doc = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12694 = cljs.core.next.call(null,seq__12656__$1);
var G__12695 = null;
var G__12696 = (0);
var G__12697 = (0);
seq__12656 = G__12694;
chunk__12657 = G__12695;
count__12658 = G__12696;
i__12659 = G__12697;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1433853572227