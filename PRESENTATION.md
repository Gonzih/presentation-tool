## Max Gonzih

# Reagent in production

### ![](https://pbs.twimg.com/profile_images/541878856643129345/N61oVvg-_400x400.png)

<!--slide-->

## Max Gonzih

## [gonzih.me](http://gonzih.me)
## [github.com/Gonzih](http://github.com/Gonzih)
## [@Gonzih](http://twitter.com/Gonzih)

<!--slide-->

## Elmar Reizen B.V.

### ![](http://static.vakantiediscounter.nl/atomic/images/hero-circle-header.png)
##### [vakantiediscounter.nl](http://www.vakantiediscounter.nl/)

<!--slide-->

# Stack origins

blocks and etc

<!--slide-->

# Stack origins

pic of old page vs new

<!--slide-->

# Why did we decide to migrate?

### "Legacy" angular code without motivated maintainer

### ![](img/angular-logo.jpg)

<!--slide-->

# Why did we decide to migrate?

### We like ideas and simplicity of React.js

### ![](img/react-logo.png)

<!--slide-->

# Why ClojureScript?

* React feels limited by JavaScript
* Better language semantically
* Better language syntactically

### ![](img/cljs-logo.png)

<!--slide-->

# Where are we so far?

* 5k cljs LOC on top of 5k LOC rails app

```bash
wc -l {src,test}/**/*.clj? | tail -n 1
> 5185 total

wc -l {app,lib,spec,test}/**/*.rb | tail -n 1
> 5529 total
```


<!--slide-->

# Learning curve

* 4.5 Scala engineers learned clojure script in one day
* Initial introduction was done in the form of workshop
* In one week people were writing production code without asking for help (with Angular this time was about one month)
* Just building UI without a hassle :)

### ![](img/flappy-demo.jpg)

# Clojure is easy

> > There are no concepts, only parenthesis

> > I still cannot write javascript, but I'm fluent in clojurescript

<!--slide-->

# Why Reagent and not Om?
* Distributed state
* Beauty in simplicity
* Similar level of flexibility

<!--slide-->

# Where are we so far?

* Server side rendering via V8 in ruby
  * You want to show something to the user fast
  * You also probably want to be indexed by google

```ruby
cxt = V8::Context.new
cxt.eval(setup_js)
cxt.eval(read_file)
cxt.eval(init_data)
cxt.eval(render_to_string)
```

Which is:
* Memory hungry
* Fast enough

<!--slide-->

# Development

* vim + fireplace.vim/tmux
* Intellij with clojure plugin

* Rails integration is not hard
* CLJS life cycle is outside of rails pipeline

* lein-figwheel
* Different optimization modes for dev/production

* Environment specific macro

```clojure
(in-production
  (def secure-key "key")
  (do-some-additional-call))
```

<!--slide-->

# Advanced optimization mode

* Advanced compilation is not so scary once you understand what is going on underneath
* Writing extern files is easy
```javascript
var window = {};
window._gaq = function(arg) {};
```

<!--slide-->

# Testing

* ~~cemerick/clojurescript.test~~ cljs.test
* focus on functional testing
* no tests for components (feels like view testing)

<!--slide-->

# Profiling

* In-browser profiling tools are not so helpful

![](img/chrome-profiling.png)

<!--slide-->

# Profiling

* React.addons.Perf is your friend
* Try to reduce wasted time

![](img/wasted-perf.png)

<!--slide-->

# Mobile profiling

* Remote debugging on android is your friend

![](https://developer.chrome.com/devtools/docs/remote-debugging/remote-debug-overview.jpg)

<!--slide-->

# Mobile profiling

* lein-figwheel + port forwarding = ❤

![](img/remote-debugger.png)

* Use perf tools on real device
* Slower devices will help to understand your application better

<!--slide-->

# Final thoughts

<!--slide-->

# Thanks!

## Any questions?

##### [gonzih.me](http://gonzih.me)
##### [github.com/Gonzih](http://github.com/Gonzih)
##### [@Gonzih](http://twitter.com/Gonzih)
##### [github.com/Gonzih/presentation-tool](https://github.com/Gonzih/presentation-tool)
