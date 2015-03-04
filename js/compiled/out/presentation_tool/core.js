// Compiled by ClojureScript 0.0-2760 {}
goog.provide('presentation_tool.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
presentation_tool.core.highlight_code = (function highlight_code(this$){
var dom_node = reagent.core.dom_node.call(null,this$);
var nodes = dom_node.querySelectorAll("pre code");
var seq__5699 = cljs.core.seq.call(null,cljs.core.array_seq.call(null,nodes));
var chunk__5700 = null;
var count__5701 = (0);
var i__5702 = (0);
while(true){
if((i__5702 < count__5701)){
var n = cljs.core._nth.call(null,chunk__5700,i__5702);
hljs.highlightBlock(n);

var G__5703 = seq__5699;
var G__5704 = chunk__5700;
var G__5705 = count__5701;
var G__5706 = (i__5702 + (1));
seq__5699 = G__5703;
chunk__5700 = G__5704;
count__5701 = G__5705;
i__5702 = G__5706;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__5699);
if(temp__4126__auto__){
var seq__5699__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5699__$1)){
var c__4788__auto__ = cljs.core.chunk_first.call(null,seq__5699__$1);
var G__5707 = cljs.core.chunk_rest.call(null,seq__5699__$1);
var G__5708 = c__4788__auto__;
var G__5709 = cljs.core.count.call(null,c__4788__auto__);
var G__5710 = (0);
seq__5699 = G__5707;
chunk__5700 = G__5708;
count__5701 = G__5709;
i__5702 = G__5710;
continue;
} else {
var n = cljs.core.first.call(null,seq__5699__$1);
hljs.highlightBlock(n);

var G__5711 = cljs.core.next.call(null,seq__5699__$1);
var G__5712 = null;
var G__5713 = (0);
var G__5714 = (0);
seq__5699 = G__5711;
chunk__5700 = G__5712;
count__5701 = G__5713;
i__5702 = G__5714;
continue;
}
} else {
return null;
}
}
break;
}
});
presentation_tool.core.slides = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<h1>Why we decided to migrate</h1><ul><li>\"Legacy\" angular code without motivated maintainer</li><li>React hype</li></ul>","<h1>Why ClojureScript?</h1><ul><li>Better language semantically</li><li>Better language syntactically</li><li>React feels limited by JavaScript</li></ul>","<h1>Adoption</h1><ul><li>4.5 Scala engineers learned clojure script in one day</li><li>in few week people were writing production code without asking for help</li></ul>","<h1>That was fast...</h1><ul><li>Prior FP experience</li><li>Partially because I'm working with exceptional people :)</li></ul>","<h1>Clojure is esasy</h1><blockquote><p> there are no concepts, only parenthesis </p></blockquote>","<h1>Clojure is simpler</h1><blockquote><p> some of engineers recently admitted that they still cannot write javascript, but they are fluent in clojurescript </p></blockquote>","<h1>Why reagent and not om?</h1><ul><li>Distributed state</li><li>Simplicity</li></ul>","<h1>Where are we so far?</h1><ul><li>4k cljs loc single page</li></ul><pre><code class=\"bash\">wc -l {src,test}/&#42;&#42;/&#42;.clj? | tail -n 1\n&gt; 4200 total\n\nwc -l {app,lib,spec,test}/&#42;&#42;/&#42;.rb | tail -n 1\n&gt; 4997 total\n</code></pre><ul><li>Easy server side rendering via v8 in ruby</li><li>Happy customers</li></ul>","<h1>Development</h1><ul><li>vim + fireplace.vim</li><li>vim + tmux + tslime2</li><li>cursive clojure</li></ul>","<h1>Development</h1><ul><li>Rails integration is not hard</li><li>CLJS life cycle is outside of rails pipeline</li><li>Different optimization modes for dev/production</li><li>Environment specific macro</li></ul><pre><code class=\"clojure\">&#40;in-production\n  &#40;do-some-additional-call&#41;&#41;\n</code></pre>","<h1>Debugging</h1><ul><li>console.table</li></ul><pre><code class=\"clojure\">&#40;defn map-values &#91;f coll&#93;\n  &#40;into {} &#40;map &#40;fn &#91;&#91;k v&#93;&#93; &#91;k &#40;f v&#41;&#93;&#41;\n                coll&#41;&#41;&#41;\n\n&#40;defn table\n  &#91;coll&#93;\n  &#40;js/console.table\n    &#40;clj-&gt;js\n      &#40;map &#40;partial map-values str&#41; coll&#41;&#41;&#41;&#41;\n</code></pre>","<h1>Debugging</h1><ul><li>trace</li></ul><pre><code class=\"clojure\">&#40;defn trace &#91;something&#93;\n  &#40;prn something&#41;\n  something&#41;\n</code></pre>","<h1>Debugging</h1><ul><li>(js* \"debugger;\") + sourcemaps</li></ul><p><img src=\"img/chrome-debugger.png\" alt=\"\" /></p>","<h1>Profiling</h1><ul><li>In-browser profiling tools are not so helpful</li></ul><p><img src=\"img/chrome-profiling.png\" alt=\"\" /></p>","<h1>Profiling</h1><ul><li>React.addons.Perf is your friend</li><li>Try to reduce wasted time</li></ul><p><img src=\"img/wasted-perf.png\" alt=\"\" /></p>","<h1>Mobile profiling</h1><ul><li>Remote debugging on android is your friend</li></ul><p><img src=\"https://developer.chrome.com/devtools/docs/remote-debugging/remote-debug-overview.jpg\" alt=\"\" /></p>","<h1>Mobile profiling</h1><ul><li>lein-figwheel + port forwarding = \u2764</li></ul><p><img src=\"img/remote-debugger.png\" alt=\"\" /></p>","<h1>Optimizing</h1><ul><li>memoize (reduces parent component overhead)</li><li>make sure that your components are pure in that case</li></ul><pre><code class=\"clojure\">&#40;defonce visible &#40;atom false&#41;&#41;\n&#40;defonce some-collection &#40;atom &#91;&#93;&#41;&#41;\n\n&#40;defn inner-compoment &#91;item&#93;\n  ...&#41;\n\n&#40;def inner-component-memo &#40;memoize inner-component&#41;&#41;\n\n&#40;def main-component &#91;&#93;\n  &#91;:div {:class &#40;when-not @vibisle &quot;hidden&quot;&#41;}\n    &#40;map inner-component-memo @some-collection&#41;&#93;&#41;\n</code></pre>","<h1>Optimizing</h1><ul><li>reactive deref = force update in react</li><li>cursor (reduces state update overhead)</li></ul><pre><code class=\"clojure\">&#40;defonce shared-state &#40;atom {}&#41;&#41;\n\n&#40;defonce sub-state-1 &#40;cursor shared-state &#91;:path-1&#93;&#41;&#41;\n&#40;defonce sub-state-2 &#40;cursor shared-state &#91;:path-2&#93;&#41;&#41;\n\n&#40;defn component-one &#91;&#93; &#91;:div @sub-state-1&#93;&#41;\n&#40;defn component-two &#91;&#93; &#91;:div @sub-state-2&#93;&#41;\n\n&#40;defn main-component &#91;&#93;\n  &#91;:div\n    &#91;component-one&#93;\n    &#91;component-two&#93;&#93;&#41;\n</code></pre>","<h1>Final thoughts</h1><ul><li>Think how to split your state</li><li>Think about your updates</li><li>ClojureScript overhead is a least thing that you should be worried about</li><li>ClojureScript can do performance tricks (transducers, transients, local mutations, arrays)</li></ul>"], null));
if(typeof presentation_tool.core.current_slide !== 'undefined'){
} else {
presentation_tool.core.current_slide = reagent.core.atom.call(null,(0));
}
presentation_tool.core.slide_component = (function slide_component(i,html){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,presentation_tool.core.current_slide),i)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),html], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,html)], null));
} else {
return null;
}
});
presentation_tool.core.root_component = cljs.core.with_meta.call(null,(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,presentation_tool.core.slide_component,cljs.core.deref.call(null,presentation_tool.core.slides))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null)], null),[cljs.core.str((cljs.core.deref.call(null,presentation_tool.core.current_slide) + (1))),cljs.core.str(" / "),cljs.core.str(cljs.core.count.call(null,cljs.core.deref.call(null,presentation_tool.core.slides)))].join('')], null)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),presentation_tool.core.highlight_code,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),presentation_tool.core.highlight_code], null));
presentation_tool.core.main = (function main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation_tool.core.root_component], null),document.body);
});
presentation_tool.core.main.call(null);
presentation_tool.core.next_slide_BANG_ = (function next_slide_BANG_(){
if((cljs.core.deref.call(null,presentation_tool.core.current_slide) < (cljs.core.count.call(null,cljs.core.deref.call(null,presentation_tool.core.slides)) - (1)))){
return cljs.core.swap_BANG_.call(null,presentation_tool.core.current_slide,cljs.core.inc);
} else {
return null;
}
});
presentation_tool.core.prev_slide_BANG_ = (function prev_slide_BANG_(){
if((cljs.core.deref.call(null,presentation_tool.core.current_slide) > (0))){
return cljs.core.swap_BANG_.call(null,presentation_tool.core.current_slide,cljs.core.dec);
} else {
return null;
}
});
presentation_tool.core.bind_keydown = (function bind_keydown(){
return window.onkeydown = (function (e){
var code = e.keyCode;
var G__5716 = code;
switch (G__5716) {
case (32):
return presentation_tool.core.next_slide_BANG_.call(null);

break;
case (34):
return presentation_tool.core.next_slide_BANG_.call(null);

break;
case (39):
return presentation_tool.core.next_slide_BANG_.call(null);

break;
case (40):
return presentation_tool.core.next_slide_BANG_.call(null);

break;
case (33):
return presentation_tool.core.prev_slide_BANG_.call(null);

break;
case (38):
return presentation_tool.core.prev_slide_BANG_.call(null);

break;
case (37):
return presentation_tool.core.prev_slide_BANG_.call(null);

break;
default:
return null;

}
});
});
presentation_tool.core.bind_keydown.call(null);

//# sourceMappingURL=core.js.map?rel=1425470266957