[![Build Status](https://travis-ci.org/Gonzih/presentation-tool.svg?branch=master)](https://travis-ci.org/Gonzih/presentation-tool)

How to run it:

```
lein figwheel
```

And go to [http://localhost:3449/index.html](http://localhost:3449/index.html)

Autorecompile on md file changes

```viml
:au BufWritePost *.md :silent ! touch src/presentation_tool/core.cljs
```
