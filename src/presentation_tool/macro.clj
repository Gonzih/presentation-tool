(ns presentation-tool.macro
  (:require [clojure.string]
            [markdown.core :refer [md-to-html-string]]))

(defn split-slides [s]
  (clojure.string/split s #"<!--slide-->"))

(defmacro read-presentation []
  (into
    []
    (map md-to-html-string
         (split-slides
           (slurp "PLAN.md")))))
