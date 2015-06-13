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
var seq__12662_12674 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12663_12675 = null;
var count__12664_12676 = (0);
var i__12665_12677 = (0);
while(true){
if((i__12665_12677 < count__12664_12676)){
var f_12678 = cljs.core._nth.call(null,chunk__12663_12675,i__12665_12677);
cljs.core.println.call(null,"  ",f_12678);

var G__12679 = seq__12662_12674;
var G__12680 = chunk__12663_12675;
var G__12681 = count__12664_12676;
var G__12682 = (i__12665_12677 + (1));
seq__12662_12674 = G__12679;
chunk__12663_12675 = G__12680;
count__12664_12676 = G__12681;
i__12665_12677 = G__12682;
continue;
} else {
var temp__4423__auto___12683 = cljs.core.seq.call(null,seq__12662_12674);
if(temp__4423__auto___12683){
var seq__12662_12684__$1 = temp__4423__auto___12683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12662_12684__$1)){
var c__5323__auto___12685 = cljs.core.chunk_first.call(null,seq__12662_12684__$1);
var G__12686 = cljs.core.chunk_rest.call(null,seq__12662_12684__$1);
var G__12687 = c__5323__auto___12685;
var G__12688 = cljs.core.count.call(null,c__5323__auto___12685);
var G__12689 = (0);
seq__12662_12674 = G__12686;
chunk__12663_12675 = G__12687;
count__12664_12676 = G__12688;
i__12665_12677 = G__12689;
continue;
} else {
var f_12690 = cljs.core.first.call(null,seq__12662_12684__$1);
cljs.core.println.call(null,"  ",f_12690);

var G__12691 = cljs.core.next.call(null,seq__12662_12684__$1);
var G__12692 = null;
var G__12693 = (0);
var G__12694 = (0);
seq__12662_12674 = G__12691;
chunk__12663_12675 = G__12692;
count__12664_12676 = G__12693;
i__12665_12677 = G__12694;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12695 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4538__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4538__auto__)){
return or__4538__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12695);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12695)))?cljs.core.second.call(null,arglists_12695):arglists_12695));
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
var seq__12666 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12667 = null;
var count__12668 = (0);
var i__12669 = (0);
while(true){
if((i__12669 < count__12668)){
var vec__12670 = cljs.core._nth.call(null,chunk__12667,i__12669);
var name = cljs.core.nth.call(null,vec__12670,(0),null);
var map__12671 = cljs.core.nth.call(null,vec__12670,(1),null);
var map__12671__$1 = ((cljs.core.seq_QMARK_.call(null,map__12671))?cljs.core.apply.call(null,cljs.core.hash_map,map__12671):map__12671);
var doc = cljs.core.get.call(null,map__12671__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__12671__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12696 = seq__12666;
var G__12697 = chunk__12667;
var G__12698 = count__12668;
var G__12699 = (i__12669 + (1));
seq__12666 = G__12696;
chunk__12667 = G__12697;
count__12668 = G__12698;
i__12669 = G__12699;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__12666);
if(temp__4423__auto__){
var seq__12666__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12666__$1)){
var c__5323__auto__ = cljs.core.chunk_first.call(null,seq__12666__$1);
var G__12700 = cljs.core.chunk_rest.call(null,seq__12666__$1);
var G__12701 = c__5323__auto__;
var G__12702 = cljs.core.count.call(null,c__5323__auto__);
var G__12703 = (0);
seq__12666 = G__12700;
chunk__12667 = G__12701;
count__12668 = G__12702;
i__12669 = G__12703;
continue;
} else {
var vec__12672 = cljs.core.first.call(null,seq__12666__$1);
var name = cljs.core.nth.call(null,vec__12672,(0),null);
var map__12673 = cljs.core.nth.call(null,vec__12672,(1),null);
var map__12673__$1 = ((cljs.core.seq_QMARK_.call(null,map__12673))?cljs.core.apply.call(null,cljs.core.hash_map,map__12673):map__12673);
var doc = cljs.core.get.call(null,map__12673__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__12673__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12704 = cljs.core.next.call(null,seq__12666__$1);
var G__12705 = null;
var G__12706 = (0);
var G__12707 = (0);
seq__12666 = G__12704;
chunk__12667 = G__12705;
count__12668 = G__12706;
i__12669 = G__12707;
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

//# sourceMappingURL=repl.js.map?rel=1434226597878