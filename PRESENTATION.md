## Max Gonzih

##### [gonzih.me](http://gonzih.me)

# Reagent in production

### ![](http://static.vakantiediscounter.nl/atomic/images/hero-circle-header.png)
## Elmar Reizen B.V.
##### [vakantiediscounter.nl](http://www.vakantiediscounter.nl/)


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

# Learning curve

* 4.5 Scala engineers learned clojure script in one day
* Initial introduction was done in the form of workshop
* In a few weeks people were writing production code without asking for help
### ![](img/flappy-demo.jpg)

<!--slide-->

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

<!--slide-->

# Development

* Rails integration is not hard
* CLJS life cycle is outside of rails pipeline
<!--slide-->

# Development

* lein-figwheel
* Different optimization modes for dev/production
<!--slide-->

# Development

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

# Debugging

* console.table

```clojure
(defn map-values [f coll]
  (into {} (map (fn [[k v]] [k (f v)])
                coll)))

(defn table
  [coll]
  (js/console.table
    (clj->js
      (map (partial map-values str) coll))))
```

<!--slide-->

# Debugging

* trace (like Debug.Trace in Haskell)

```clojure
(defn trace [something]
  (prn something)
  something)
```

<!--slide-->

# Debugging

* (js* "debugger;") + sourcemaps

![](img/chrome-debugger.png)

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

<!--slide-->

# Optimizing

* memoize (reduces parent component overhead)
* make sure that your components are pure in that case

```clojure
(defonce visible (atom false))
(defonce some-collection (atom []))

(defn inner-compoment [item]
  ...)

(def inner-component-memo (memoize inner-component))

(def main-component []
  [:div {:class (when-not @vibisle "hidden")}
    (map inner-component-memo @some-collection)])
```

<!--slide-->

# Optimizing

* reactive deref = force update in react
* cursor (reduces state update overhead)

```clojure
(defonce shared-state (atom {}))

(defonce sub-state-1 (cursor shared-state [:path-1]))
(defonce sub-state-2 (cursor shared-state [:path-2]))

(defn component-one [] [:div @sub-state-1])
(defn component-two [] [:div @sub-state-2])

(defn main-component []
  [:div
    [component-one]
    [component-two]])
```

<!--slide-->

# Optimizing

* Try to make your state changes atomic

```clojure
(reset! state-one :a)
(reset! state-two :b)
```

should become (using cursors)

```clojure
(reset! main-state {:state-one :a
                    :state-two :b})
```

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

# Final thoughts
* ClojureScript overhead is a least thing that you should be worried about
* ClojureScript can do performance tricks (transducers, transients, local mutations, arrays)
<!--slide-->

# Final thoughts
* Think how to split your state
* Think about your updates

<!--slide-->

# Thanks!

##### [gonzih.me](http://gonzih.me)
##### [github.com/Gonzih](github.com/Gonzih)
##### [@Gonzih](twitter.com/Gonzih)
