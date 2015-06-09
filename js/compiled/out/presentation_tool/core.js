// Compiled by ClojureScript 0.0-3308 {}
goog.provide('presentation_tool.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
presentation_tool.core.highlight_code = (function presentation_tool$core$highlight_code(this$){
var dom_node = reagent.core.dom_node.call(null,this$);
var nodes = dom_node.querySelectorAll("pre code");
var seq__5828 = cljs.core.seq.call(null,cljs.core.array_seq.call(null,nodes));
var chunk__5829 = null;
var count__5830 = (0);
var i__5831 = (0);
while(true){
if((i__5831 < count__5830)){
var n = cljs.core._nth.call(null,chunk__5829,i__5831);
hljs.highlightBlock(n);

var G__5832 = seq__5828;
var G__5833 = chunk__5829;
var G__5834 = count__5830;
var G__5835 = (i__5831 + (1));
seq__5828 = G__5832;
chunk__5829 = G__5833;
count__5830 = G__5834;
i__5831 = G__5835;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__5828);
if(temp__4423__auto__){
var seq__5828__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5828__$1)){
var c__5316__auto__ = cljs.core.chunk_first.call(null,seq__5828__$1);
var G__5836 = cljs.core.chunk_rest.call(null,seq__5828__$1);
var G__5837 = c__5316__auto__;
var G__5838 = cljs.core.count.call(null,c__5316__auto__);
var G__5839 = (0);
seq__5828 = G__5836;
chunk__5829 = G__5837;
count__5830 = G__5838;
i__5831 = G__5839;
continue;
} else {
var n = cljs.core.first.call(null,seq__5828__$1);
hljs.highlightBlock(n);

var G__5840 = cljs.core.next.call(null,seq__5828__$1);
var G__5841 = null;
var G__5842 = (0);
var G__5843 = (0);
seq__5828 = G__5840;
chunk__5829 = G__5841;
count__5830 = G__5842;
i__5831 = G__5843;
continue;
}
} else {
return null;
}
}
break;
}
});
if(typeof presentation_tool.core.slides !== 'undefined'){
} else {
presentation_tool.core.slides = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof presentation_tool.core.current_slide !== 'undefined'){
} else {
presentation_tool.core.current_slide = reagent.core.atom.call(null,(0));
}
cljs.core.reset_BANG_.call(null,presentation_tool.core.slides,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<h1>Reagent in production</h1><h2><img src=\"img/reagent-logo.png\" alt=\"\" /></h2><h2>Max Gonzih</h2><h2><a href='http://gonzih.me'>gonzih.me</a></h2>","<h1>Elmar Reizen B.V.</h1><h3><img src=\"http://static.vakantiediscounter.nl/atomic/images/hero-circle-header.png\" alt=\"\" /></h3><h2><a href='http://www.vakantiediscounter.nl/'>vakantiediscounter.nl</a></h2>","<h1>Stack overview</h1><h2><img src=\"img/stack-overview.jpg\" alt=\"\" /></h2>","<h1>Frontend stack evolution</h1><h2><img src=\"img/stack-evolution.jpg\" alt=\"\" /></h2>","<h1>Frontend stack evolution</h1><h2>Seam + jQuery</h2><h2><img src=\"img/old-screenshot.png\" alt=\"\" /></h2>","<h1>Frontend stack evolution</h1><h2>Rails + ClojureScript + Reagent</h2><h2><img src=\"img/new-screenshot.png\" alt=\"\" /></h2>","<h1>Why did we decide to migrate?</h1><h2>\"Legacy\" angular code without motivated maintainer</h2><h3>we were afraid of big changes on our frontend</h3><h3><img src=\"img/angular-logo.jpg\" alt=\"\" /></h3>","<h1>Why ClojureScript?</h1><h2>We like ideas and simplicity of React.js</h2><h2>React feels limited by JavaScript</h2><h3><img src=\"img/cljs-logo.png\" alt=\"\" /> <img src=\"img/react-logo-min.png\" alt=\"\" /></h3>","<h1>Why Reagent and not Om?</h1><ul><li>Distributed state</li><li>No need to use core.async so much for the inter-component communications, just use shared state</li><li>Similar level of flexibility</li><li>Simplicity in theory should speedup learning process</li></ul>","<h1>Where are we so far?</h1><ul><li>5k cljs LOC on top of 5k LOC rails app</li></ul><pre><code class=\"bash\">wc -l {src,test}/&#42;&#42;/&#42;.clj? | tail -n 1\n&gt; 5185 total\n\nwc -l {app,lib,spec,test}/&#42;&#42;/&#42;.rb | tail -n 1\n&gt; 5529 total\n</code></pre>","<h1>Learning curve</h1><ul><li>4.5 Scala engineers learned clojure script in one day</li><li>Initial introduction was done in the form of workshop</li><li>In one week people were writing production code without asking for help (with Angular this time was about one month)</li></ul><h2><img src=\"img/flappy-demo.jpg\" alt=\"\" /></h2><blockquote><p> > There are no concepts, only parenthesis </p></blockquote><blockquote><p> > I still cannot write javascript, but I'm fluent in clojurescript </p></blockquote>","<h1>Isomorphic ClojureScript</h1><ul><li>Things you need to remember:<ul><li>Move all browser specific code (event listeners initialization) in to react life cycle methods</li><li>Run go blocks from life cycle method or mock setInterval for v8 execution</li></ul></li></ul><ul><li>Server side rendering via V8 in ruby<ul><li>You want to show something to the user fast</li><li>You also probably want to be indexed by google</li></ul></li></ul><pre><code class=\"ruby\">cxt = V8::Context.new\n# react expects couple of vars to be defined\ncxt.eval&#40;setup&#95;js&#41; # setup global vars for react\ncxt.eval&#40;File.open&#40;&quot;/path-to-assets/server-side.js&quot;&#41;.read&#41;\ncxt.eval&#40;init&#95;state&#95;script&#41; # init your state\ncxt.eval&#40;&quot;vd.core.details&#95;page.render&#95;to&#95;string&#40;&#41;&quot;&#41;\n</code></pre><p>Which is:<ul><li>Memory hungry</li><li>Fast enough </li></ul></p>","<h1>Development</h1><ul><li>vim + paredit + fireplace.vim/tmux<ul><li>you don't really need fireplace or repl to work with clojurescript thanks to figwheel</li></ul></li><li>Intellij with clojure plugin (LaClojure)</li></ul><ul><li>lein-figwheel</li><li>Different optimization modes for dev/production<ul><li>no optimization for figwheel</li><li>advanced optimization mode for production</li><li>simple optimization mode for server side rendering (v8 exceptions are not so informative)</li></ul></li></ul><ul><li>Rails integration is not hard</li><li>CLJS life cycle is outside of rails pipeline</li></ul><ul><li>Environment specific macro due to RAILS_ENV and friends</li></ul><pre><code class=\"clojure\">&#40;in-production\n  &#40;def secure-key &quot;key&quot;&#41;\n  &#40;do-some-additional-call&#41;&#41;\n</code></pre>","<h1>Advanced optimization mode</h1><ul><li>Advanced compilation is not so scary once you understand what is going on underneath</li><li>Writing extern files looks like this:</li></ul><pre><code class=\"javascript\">var window = {};\nwindow.&#95;gaq = function&#40;arg&#41; {};\n</code></pre><ul><li>Extern file will guarantee that closure compiler will not rename those calls (helpful when you use external JS libraries)</li></ul>","<h1>Testing</h1><ul><li><del>cemerick/clojurescript.test</del> cljs.test</li><li>focus on functional testing</li><li>no tests for components (feels like view testing)</li></ul>","<h1>Profiling</h1><ul><li>In-browser profiling tools are not so helpful</li></ul><h1><img src=\"img/chrome-profiling.png\" alt=\"\" /></h1>","<h1>Profiling</h1><ul><li>React.addons.Perf is your friend</li><li>Try to reduce wasted time</li></ul><h1><img src=\"img/wasted-perf.png\" alt=\"\" /></h1>","<h1>Mobile profiling</h1><ul><li>Remote debugging on android is your friend</li></ul><h1><img src=\"https://developer.chrome.com/devtools/docs/remote-debugging/remote-debug-overview.jpg\" alt=\"\" /></h1>","<h1>Mobile profiling</h1><ul><li>lein-figwheel + port forwarding = \u2764</li></ul><h1><img src=\"img/remote-debugger.png\" alt=\"\" /></h1><ul><li>Use perf tools on real device</li><li>Slower devices will help to understand your application better</li></ul>","<h1>Final thoughts</h1><h3>Just integrate it!</h3>","<h1>Thanks!</h1><h2>Any questions?</h2><h5><img src=\"img/bunny-sleep.gif\" alt=\"\" /></h5><h5><a href='http://gonzih.me'>gonzih.me</a></h5><h5><a href='https://github.com/Gonzih/presentation-tool'>github.com/Gonzih/presentation-tool</a></h5>"], null));
presentation_tool.core.slide_component = (function presentation_tool$core$slide_component(i,html){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,presentation_tool.core.current_slide),i)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("slide-"),cljs.core.str((i + (1)))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),html], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash.call(null,html)], null));
} else {
return null;
}
});
presentation_tool.core.root_component = cljs.core.with_meta.call(null,(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,presentation_tool.core.slide_component,cljs.core.deref.call(null,presentation_tool.core.slides))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null)], null),[cljs.core.str((cljs.core.deref.call(null,presentation_tool.core.current_slide) + (1))),cljs.core.str(" / "),cljs.core.str(cljs.core.count.call(null,cljs.core.deref.call(null,presentation_tool.core.slides)))].join('')], null)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),presentation_tool.core.highlight_code,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),presentation_tool.core.highlight_code], null));
presentation_tool.core.main = (function presentation_tool$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation_tool.core.root_component], null),document.body);
});
presentation_tool.core.main.call(null);
presentation_tool.core.next_slide_BANG_ = (function presentation_tool$core$next_slide_BANG_(){
if((cljs.core.deref.call(null,presentation_tool.core.current_slide) < (cljs.core.count.call(null,cljs.core.deref.call(null,presentation_tool.core.slides)) - (1)))){
return cljs.core.swap_BANG_.call(null,presentation_tool.core.current_slide,cljs.core.inc);
} else {
return null;
}
});
presentation_tool.core.prev_slide_BANG_ = (function presentation_tool$core$prev_slide_BANG_(){
if((cljs.core.deref.call(null,presentation_tool.core.current_slide) > (0))){
return cljs.core.swap_BANG_.call(null,presentation_tool.core.current_slide,cljs.core.dec);
} else {
return null;
}
});
presentation_tool.core.bind_keydown = (function presentation_tool$core$bind_keydown(){
return window.onkeydown = (function (e){
var code = e.keyCode;
var G__5845 = code;
switch (G__5845) {
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

//# sourceMappingURL=core.js.map?rel=1433863729521l(null);

//# sourceMappingURL=core.js.map?rel=1433863729155