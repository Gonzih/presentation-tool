(set-env!
  :source-paths #{"."})

(deftask markdown
  "Touch src markdown files are changed!"
  []
  (with-post-wrap fileset
    (let [tree (first (filter #(= (first %)
                                  :tree)
                              fileset))
          ]
      (prn (filter #(re-find #".*\.md" %)
                   (keys (second tree)))))))
