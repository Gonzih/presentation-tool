# ClojureScript

* Tooling is amazing
* Debugging story is good (arguably better than clojure on jvm)
* Sourcemaps!
* Better language (semantically)
* Better language (syntactically)
* Simpler language
* (js* "debugger;")
* (comp js/console.table clj->js)

<!--slide-->

# ClojureScript learning curve

* 4.5 Scala engineers learned clojure script in one day
* in few week people were writing production code without asking for help
* Partially it's because people had FP experience
* And partially it's this because I'm working with exceptional people :)

* Quotes:

> there are no concepts, only parenthesis

> some of them recently admitted that they still cannot write javascript
> but they are fluent in clojurescript

<!--slide-->

# Better practice

* Split your state more accurate
* Think where and what you deref
  * If you can move some state and isolate it inside individual component - do that
  * Once you derefed atom and it was updated everything down the hierarchy will be updated
  * deref == force update

<!--slide-->

# Performance analysis

* Test/benchmark on real mobile devices (cheaper device is better)
  * Iphone 4 is a good example
* React.addons.Perf is your friend (especially .printWasted)
* iOS remote debugging is hard
* Chrome remote debugging is a dream
* Profiling might be hard because of lazy collections
* Pure profiling in chrome is hard due to internal react stuff
* Try to cut every possible microsecond (when you care about mobile, multiple by x5)
* Profiling in Chrome is a bit unfair, too forgetful

<!--slide-->

# Final Thoughts

* Web will not be smooth on mobile soon (use native, switch to canvas)
* Javascript is almost at it best performance
* Javascript is limited by being Javascript
* Javascript was not desinged for performance
* ClojureScript overhead is a least thing that you should be worried about
* ClojureScript can do performance tricks (transducers, local mutations, transients, arrays)
* React is faster with immutable data structures
* Clojure is a language designed with immutability

* Clojure spoils you, you will become very pickup about language

<!--slide-->

# Tooling

* Cursive Clojure
* Vim
* Evil emacs

<!--slide-->

# General

* Dom is slow
* You can always blame dom
* Sometimes you need to address that


<!--slide-->

# Links

* [ClojureScript micro optimizations](http://www.wagjo.com/benchmark-cljs/)
* [Why mobile web apps are slow (2013)](http://sealedabstract.com/rants/why-mobile-web-apps-are-slow/)
* [React Perf](http://facebook.github.io/react/docs/perf.html)
