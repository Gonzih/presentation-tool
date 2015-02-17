Autorecompile on md file changes

```viml
:au BufWritePost PLAN.md :silent ! touch src/presentation_tool/core.cljs
```
