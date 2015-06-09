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
var seq__21828_21840 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21829_21841 = null;
var count__21830_21842 = (0);
var i__21831_21843 = (0);
while(true){
if((i__21831_21843 < count__21830_21842)){
var f_21844 = cljs.core._nth.call(null,chunk__21829_21841,i__21831_21843);
cljs.core.println.call(null,"  ",f_21844);

var G__21845 = seq__21828_21840;
var G__21846 = chunk__21829_21841;
var G__21847 = count__21830_21842;
var G__21848 = (i__21831_21843 + (1));
seq__21828_21840 = G__21845;
chunk__21829_21841 = G__21846;
count__21830_21842 = G__21847;
i__21831_21843 = G__21848;
continue;
} else {
var temp__4423__auto___21849 = cljs.core.seq.call(null,seq__21828_21840);
if(temp__4423__auto___21849){
var seq__21828_21850__$1 = temp__4423__auto___21849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21828_21850__$1)){
var c__18872__auto___21851 = cljs.core.chunk_first.call(null,seq__21828_21850__$1);
var G__21852 = cljs.core.chunk_rest.call(null,seq__21828_21850__$1);
var G__21853 = c__18872__auto___21851;
var G__21854 = cljs.core.count.call(null,c__18872__auto___21851);
var G__21855 = (0);
seq__21828_21840 = G__21852;
chunk__21829_21841 = G__21853;
count__21830_21842 = G__21854;
i__21831_21843 = G__21855;
continue;
} else {
var f_21856 = cljs.core.first.call(null,seq__21828_21850__$1);
cljs.core.println.call(null,"  ",f_21856);

var G__21857 = cljs.core.next.call(null,seq__21828_21850__$1);
var G__21858 = null;
var G__21859 = (0);
var G__21860 = (0);
seq__21828_21840 = G__21857;
chunk__21829_21841 = G__21858;
count__21830_21842 = G__21859;
i__21831_21843 = G__21860;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21861 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18087__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21861);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21861)))?cljs.core.second.call(null,arglists_21861):arglists_21861));
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
var seq__21832 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21833 = null;
var count__21834 = (0);
var i__21835 = (0);
while(true){
if((i__21835 < count__21834)){
var vec__21836 = cljs.core._nth.call(null,chunk__21833,i__21835);
var name = cljs.core.nth.call(null,vec__21836,(0),null);
var map__21837 = cljs.core.nth.call(null,vec__21836,(1),null);
var map__21837__$1 = ((cljs.core.seq_QMARK_.call(null,map__21837))?cljs.core.apply.call(null,cljs.core.hash_map,map__21837):map__21837);
var doc = cljs.core.get.call(null,map__21837__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21837__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21862 = seq__21832;
var G__21863 = chunk__21833;
var G__21864 = count__21834;
var G__21865 = (i__21835 + (1));
seq__21832 = G__21862;
chunk__21833 = G__21863;
count__21834 = G__21864;
i__21835 = G__21865;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__21832);
if(temp__4423__auto__){
var seq__21832__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21832__$1)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,seq__21832__$1);
var G__21866 = cljs.core.chunk_rest.call(null,seq__21832__$1);
var G__21867 = c__18872__auto__;
var G__21868 = cljs.core.count.call(null,c__18872__auto__);
var G__21869 = (0);
seq__21832 = G__21866;
chunk__21833 = G__21867;
count__21834 = G__21868;
i__21835 = G__21869;
continue;
} else {
var vec__21838 = cljs.core.first.call(null,seq__21832__$1);
var name = cljs.core.nth.call(null,vec__21838,(0),null);
var map__21839 = cljs.core.nth.call(null,vec__21838,(1),null);
var map__21839__$1 = ((cljs.core.seq_QMARK_.call(null,map__21839))?cljs.core.apply.call(null,cljs.core.hash_map,map__21839):map__21839);
var doc = cljs.core.get.call(null,map__21839__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21839__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21870 = cljs.core.next.call(null,seq__21832__$1);
var G__21871 = null;
var G__21872 = (0);
var G__21873 = (0);
seq__21832 = G__21870;
chunk__21833 = G__21871;
count__21834 = G__21872;
i__21835 = G__21873;
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

//# sourceMappingURL=repl.js.map?rel=1433863732004