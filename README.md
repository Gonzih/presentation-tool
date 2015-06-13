Autorecompile on md file changes

```viml
:au BufWritePost *.md :silent ! touch src/presentation_tool/core.cljs
```
