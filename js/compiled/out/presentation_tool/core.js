// Compiled by ClojureScript 0.0-3308 {}
goog.provide('presentation_tool.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
presentation_tool.core.highlight_code = (function presentation_tool$core$highlight_code(this$){
var dom_node = reagent.core.dom_node.call(null,this$);
var nodes = dom_node.querySelectorAll("pre code");
var seq__5835 = cljs.core.seq.call(null,cljs.core.array_seq.call(null,nodes));
var chunk__5836 = null;
var count__5837 = (0);
var i__5838 = (0);
while(true){
if((i__5838 < count__5837)){
var n = cljs.core._nth.call(null,chunk__5836,i__5838);
hljs.highlightBlock(n);

var G__5839 = seq__5835;
var G__5840 = chunk__5836;
var G__5841 = count__5837;
var G__5842 = (i__5838 + (1));
seq__5835 = G__5839;
chunk__5836 = G__5840;
count__5837 = G__5841;
i__5838 = G__5842;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__5835);
if(temp__4423__auto__){
var seq__5835__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5835__$1)){
var c__5323__auto__ = cljs.core.chunk_first.call(null,seq__5835__$1);
var G__5843 = cljs.core.chunk_rest.call(null,seq__5835__$1);
var G__5844 = c__5323__auto__;
var G__5845 = cljs.core.count.call(null,c__5323__auto__);
var G__5846 = (0);
seq__5835 = G__5843;
chunk__5836 = G__5844;
count__5837 = G__5845;
i__5838 = G__5846;
continue;
} else {
var n = cljs.core.first.call(null,seq__5835__$1);
hljs.highlightBlock(n);

var G__5847 = cljs.core.next.call(null,seq__5835__$1);
var G__5848 = null;
var G__5849 = (0);
var G__5850 = (0);
seq__5835 = G__5847;
chunk__5836 = G__5848;
count__5837 = G__5849;
i__5838 = G__5850;
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
if(typeof presentation_tool.core.presentations !== 'undefined'){
} else {
presentation_tool.core.presentations = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof presentation_tool.core.current_slide !== 'undefined'){
} else {
presentation_tool.core.current_slide = reagent.core.atom.call(null,(0));
}
cljs.core.reset_BANG_.call(null,presentation_tool.core.presentations,new cljs.core.PersistentArrayMap(null, 1, ["reagent-in-production.md",new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<h1>Reagent in production</h1><h2><img src=\"img/reagent-logo.png\" alt=\"\" /></h2><h2>Max Gonzih</h2><h2><a href='http://gonzih.me'>gonzih.me</a></h2>","<h1>Elmar Reizen B.V.</h1><h3><img src=\"http://static.vakantiediscounter.nl/atomic/images/hero-circle-header.png\" alt=\"\" /></h3><h2><a href='http://www.vakantiediscounter.nl/'>vakantiediscounter.nl</a></h2>","<h1>Stack overview</h1><h2><img src=\"img/stack-overview.png\" alt=\"\" /></h2>","<h1>Frontend stack evolution</h1><h2><img src=\"img/stack-evolution.png\" alt=\"\" /></h2>","<h1>Frontend stack evolution</h1><h2>Seam + jQuery</h2><h2><img src=\"img/old-screenshot.png\" alt=\"\" /></h2>","<h1>Frontend stack evolution</h1><h2>Rails + ClojureScript + Reagent</h2><h2><img src=\"img/new-screenshot.png\" alt=\"\" /></h2>","<h1>Why did we decide to migrate?</h1><h2>\"Legacy\" angular code without motivated maintainer</h2><h3>we were afraid of big changes on our frontend</h3><h3><img src=\"img/angular-logo.jpg\" alt=\"\" /></h3>","<h1>Why ClojureScript?</h1><h2>We like ideas and simplicity of React.js</h2><h3>but React feels limited by JavaScript</h3><h3><img src=\"img/cljs-logo.png\" alt=\"\" /> <img src=\"img/react-logo-min.png\" alt=\"\" /></h3>","<h1>Why Reagent and not Om?</h1><ul><li>Distributed state</li><li>No need for inter-component communications</li><li>Similar level of flexibility</li><li>Simplicity will speedup learning process</li></ul><h2><img src=\"img/reagent-logo.png\" alt=\"\" /></h2>","<h1>Learning curve</h1><ul><li>4.5 Scala engineers learned clojure script in one day</li><li>Initial introduction was done in the form of workshop</li><li>In one week people were writing production code without asking for help (with Angular this time was about one month)</li></ul><h2><img src=\"img/flappy-demo.jpg\" alt=\"\" /></h2><blockquote><p> > There are no concepts, only parenthesis </p></blockquote><blockquote><p> > I still cannot write javascript, but I'm fluent in clojurescript </p></blockquote>","<h1>Isomorphic ClojureScript</h1><ul><li>Things you need to remember:<ul><li>Move all browser specific code (event listeners initialization) in to react life cycle methods</li><li>Run go blocks from life cycle method or mock setInterval for v8 execution</li></ul></li></ul><ul><li>Server side rendering via V8 in ruby<ul><li>You want to show something to the user fast</li><li>You also probably want to be indexed by google</li></ul></li></ul><pre><code class=\"ruby\">cxt = V8::Context.new\n# react expects couple of vars to be defined\ncxt.eval&#40;setup&#95;js&#41; # setup global vars for react\ncxt.eval&#40;File.open&#40;&quot;/path-to-assets/server-side.js&quot;&#41;.read&#41;\ncxt.eval&#40;init&#95;state&#95;script&#41; # init your state\ncxt.eval&#40;&quot;vd.core.details&#95;page.render&#95;to&#95;string&#40;&#41;&quot;&#41;\n</code></pre><p>Which is:<ul><li>Memory hungry</li><li>Fast enough </li></ul></p>","<h1>Development</h1><ul><li>vim + paredit + fireplace.vim/tmux<ul><li>you don't really need fireplace or repl to work with clojurescript thanks to figwheel</li></ul></li><li>Intellij with clojure plugin (LaClojure)</li></ul><ul><li>lein-figwheel</li><li>Different optimization modes for dev/production<ul><li>no optimization for figwheel</li><li>advanced optimization mode for production</li><li>simple optimization mode for server side rendering (v8 exceptions are not so informative)</li></ul></li></ul><ul><li>Rails integration is not hard</li><li>CLJS life cycle is outside of rails pipeline</li></ul><ul><li>Environment specific macro due to RAILS_ENV and friends</li></ul><pre><code class=\"clojure\">&#40;in-production\n  &#40;def secure-key &quot;key&quot;&#41;\n  &#40;do-some-additional-call&#41;&#41;\n</code></pre>","<h1>Advanced optimization mode</h1><ul><li>Advanced compilation is not so scary once you understand what is going on underneath</li><li>Writing extern files looks like this:</li></ul><pre><code class=\"javascript\">var window = {};\nwindow.&#95;gaq = function&#40;arg&#41; {};\n</code></pre><ul><li>Extern file will guarantee that closure compiler will not rename those calls (helpful when you use external JS libraries)</li></ul>","<h1>Testing</h1><ul><li><del>cemerick/clojurescript.test</del> cljs.test</li><li>focus on functional testing</li><li>no tests for components (feels like view testing)</li></ul>","<h1>Profiling</h1><ul><li>In-browser profiling tools are not so helpful</li></ul><h1><img src=\"img/chrome-profiling.png\" alt=\"\" /></h1>","<h1>Profiling</h1><ul><li>React.addons.Perf is your friend</li><li>Try to reduce wasted time</li></ul><h1><img src=\"img/wasted-perf.png\" alt=\"\" /></h1><ul><li>By:<ul><li>Using memoize</li><li>Thinking carefully about your state</li></ul></li></ul>","<h1>Mobile profiling</h1><ul><li>Remote debugging on android is your friend</li></ul><h1><img src=\"https://developer.chrome.com/devtools/docs/remote-debugging/remote-debug-overview.jpg\" alt=\"\" /></h1>","<h1>Mobile profiling</h1><ul><li>lein-figwheel + port forwarding = \u2764</li></ul><h1><img src=\"img/remote-debugger.png\" alt=\"\" /></h1><ul><li>Use perf tools on real device</li><li>Slower devices will help to understand your application better</li></ul>","<h1>Where are we so far?</h1><ul><li>5k cljs LOC on top of 5k LOC rails app</li></ul><pre><code class=\"bash\">wc -l {src,test}/&#42;&#42;/&#42;.clj? | tail -n 1\n&gt; 5185 total\n\nwc -l {app,lib,spec,test}/&#42;&#42;/&#42;.rb | tail -n 1\n&gt; 5529 total\n</code></pre>","<h1>Path towards happy team</h1><ul><li>ClojureScript is easy</li><li>Reagent is simple</li><li>Simplicity is a great selling point when you are adopting new technology</li><li>Learning curve is really fast</li><li>Learning curve should be fun</li></ul>","<h1>Thanks!</h1><h2>Any questions?</h2><h5><img src=\"img/bunny-sleep.gif\" alt=\"\" /></h5><h5><a href='http://gonzih.me'>gonzih.me</a></h5><h5><a href='https://github.com/Gonzih/presentation-tool'>github.com/Gonzih/presentation-tool</a></h5>"], null)], null));
presentation_tool.core.slide_component = (function presentation_tool$core$slide_component(html){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("slide-"),cljs.core.str((cljs.core.deref.call(null,presentation_tool.core.current_slide) + (1)))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),html], null)], null)], null);
});
presentation_tool.core.presentation_title_component = (function presentation_tool$core$presentation_title_component(p__5851){
var vec__5853 = p__5851;
var talk_name = cljs.core.nth.call(null,vec__5853,(0),null);
var talk_slides = cljs.core.nth.call(null,vec__5853,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__5853,talk_name,talk_slides){
return (function (){
return cljs.core.reset_BANG_.call(null,presentation_tool.core.slides,talk_slides);
});})(vec__5853,talk_name,talk_slides))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),talk_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),talk_name], null));
});
presentation_tool.core.select_presentation_component = (function presentation_tool$core$select_presentation_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Select presentation"], null),cljs.core.map.call(null,presentation_tool.core.presentation_title_component,cljs.core.deref.call(null,presentation_tool.core.presentations))], null);
});
presentation_tool.core.presentation_component = cljs.core.with_meta.call(null,(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation_tool.core.slide_component,cljs.core.get.call(null,cljs.core.deref.call(null,presentation_tool.core.slides),cljs.core.deref.call(null,presentation_tool.core.current_slide))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null)], null),[cljs.core.str((cljs.core.deref.call(null,presentation_tool.core.current_slide) + (1))),cljs.core.str(" / "),cljs.core.str(cljs.core.count.call(null,cljs.core.deref.call(null,presentation_tool.core.slides)))].join('')], null)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),presentation_tool.core.highlight_code,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),presentation_tool.core.highlight_code], null));
presentation_tool.core.root_component = (function presentation_tool$core$root_component(){
cljs.core.prn.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,presentation_tool.core.presentations)));

if(cljs.core.seq.call(null,cljs.core.deref.call(null,presentation_tool.core.slides))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation_tool.core.presentation_component], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation_tool.core.select_presentation_component], null);
}
});
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
var G__5855 = code;
switch (G__5855) {
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

//# sourceMappingURL=core.js.map?rel=1434226589210