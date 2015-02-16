# General

* Dom is slow
  * You can always blame dom
  * Sometimes you need to address that

<!--slide-->

# ClojureScript

* Tooling is amazing
* Debugging story is good (I would say that it's better than clojure on jvm (at least out of the box))
* Sourcemaps!
* Better language (semantically)
* Better language (syntactically)
* Simlper language
* (js* "debugger;")
* (comp js/console.table clj->js)

<!--slide-->

# ClojureScript learning curve

* 4.5 Scala engineers learned clojure script in one day
* in few week people were writing production code without asking for help

    > there are no concepts

    > only parenthesis

    >

    > lightest syntactil language

    > + of having FP background

    > some of them recently admitted that they still cannot write javascript

* Of course partially all this because I'm working with exceptional people :)

<!--slide-->

# Better practice

* Split your state more accurate
* Think where and what you deref
  * If you can move some state and isolate it inside individual component - do that
  * Once you derefed atom and it was updated everything going down the hierarchy will be updated
* Think about reimplementing shouldComponentUpdate for fine tuting (dangerous!)

<!--slide-->

# Perf

* Test/benchmark on real mobile devices (cheap ones are better)
  * Iphone 4 is good example
* React.addons.Perf is your friend (especially .printWasted)
* iOS remote debugging is hard
* Chrome remote debugging is a dream
* Profiling might be hard because of lazy collections (use doall for profiling)
* Pure profiling in chrome is hard due to internal react stuff
* Try to cut every possible microsecond (when you care about mobile, multiple by x5)
* Profiling in Chrome is a bit unfair, too forgetful, too performant, build by actuall engineers

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
