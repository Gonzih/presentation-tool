// Compiled by ClojureScript 0.0-3153 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
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
var seq__12925_12937 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12926_12938 = null;
var count__12927_12939 = (0);
var i__12928_12940 = (0);
while(true){
if((i__12928_12940 < count__12927_12939)){
var f_12941 = cljs.core._nth.call(null,chunk__12926_12938,i__12928_12940);
cljs.core.println.call(null,"  ",f_12941);

var G__12942 = seq__12925_12937;
var G__12943 = chunk__12926_12938;
var G__12944 = count__12927_12939;
var G__12945 = (i__12928_12940 + (1));
seq__12925_12937 = G__12942;
chunk__12926_12938 = G__12943;
count__12927_12939 = G__12944;
i__12928_12940 = G__12945;
continue;
} else {
var temp__4126__auto___12946 = cljs.core.seq.call(null,seq__12925_12937);
if(temp__4126__auto___12946){
var seq__12925_12947__$1 = temp__4126__auto___12946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12925_12947__$1)){
var c__5101__auto___12948 = cljs.core.chunk_first.call(null,seq__12925_12947__$1);
var G__12949 = cljs.core.chunk_rest.call(null,seq__12925_12947__$1);
var G__12950 = c__5101__auto___12948;
var G__12951 = cljs.core.count.call(null,c__5101__auto___12948);
var G__12952 = (0);
seq__12925_12937 = G__12949;
chunk__12926_12938 = G__12950;
count__12927_12939 = G__12951;
i__12928_12940 = G__12952;
continue;
} else {
var f_12953 = cljs.core.first.call(null,seq__12925_12947__$1);
cljs.core.println.call(null,"  ",f_12953);

var G__12954 = cljs.core.next.call(null,seq__12925_12947__$1);
var G__12955 = null;
var G__12956 = (0);
var G__12957 = (0);
seq__12925_12937 = G__12954;
chunk__12926_12938 = G__12955;
count__12927_12939 = G__12956;
i__12928_12940 = G__12957;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4316__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4316__auto__)){
return or__4316__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
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
var seq__12929 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12930 = null;
var count__12931 = (0);
var i__12932 = (0);
while(true){
if((i__12932 < count__12931)){
var vec__12933 = cljs.core._nth.call(null,chunk__12930,i__12932);
var name = cljs.core.nth.call(null,vec__12933,(0),null);
var map__12934 = cljs.core.nth.call(null,vec__12933,(1),null);
var map__12934__$1 = ((cljs.core.seq_QMARK_.call(null,map__12934))?cljs.core.apply.call(null,cljs.core.hash_map,map__12934):map__12934);
var arglists = cljs.core.get.call(null,map__12934__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__12934__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12958 = seq__12929;
var G__12959 = chunk__12930;
var G__12960 = count__12931;
var G__12961 = (i__12932 + (1));
seq__12929 = G__12958;
chunk__12930 = G__12959;
count__12931 = G__12960;
i__12932 = G__12961;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12929);
if(temp__4126__auto__){
var seq__12929__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12929__$1)){
var c__5101__auto__ = cljs.core.chunk_first.call(null,seq__12929__$1);
var G__12962 = cljs.core.chunk_rest.call(null,seq__12929__$1);
var G__12963 = c__5101__auto__;
var G__12964 = cljs.core.count.call(null,c__5101__auto__);
var G__12965 = (0);
seq__12929 = G__12962;
chunk__12930 = G__12963;
count__12931 = G__12964;
i__12932 = G__12965;
continue;
} else {
var vec__12935 = cljs.core.first.call(null,seq__12929__$1);
var name = cljs.core.nth.call(null,vec__12935,(0),null);
var map__12936 = cljs.core.nth.call(null,vec__12935,(1),null);
var map__12936__$1 = ((cljs.core.seq_QMARK_.call(null,map__12936))?cljs.core.apply.call(null,cljs.core.hash_map,map__12936):map__12936);
var arglists = cljs.core.get.call(null,map__12936__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__12936__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12966 = cljs.core.next.call(null,seq__12929__$1);
var G__12967 = null;
var G__12968 = (0);
var G__12969 = (0);
seq__12929 = G__12966;
chunk__12930 = G__12967;
count__12931 = G__12968;
i__12932 = G__12969;
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

//# sourceMappingURL=repl.js.map?rel=1427723157203