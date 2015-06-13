(ns presentation-tool.macro
  (:require [clojure.string]
            [clojure.java.io :as io]
            [markdown.core :refer [md-to-html-string]]))

(defn split-slides [s]
  (clojure.string/split s #"<!--slide-->"))

(defn file-to-slides [filename]
  [filename
   (into
     []
     (map md-to-html-string
          (split-slides
            (slurp filename))))])

(defmacro read-presentations []
  (let [directory (io/file ".")
        files (file-seq directory)
        presentation-names (->> files
                                (map #(.getName %))
                                (filter #(re-find #".*-talk\.md" %)))]
    (into {} (map file-to-slides presentation-names))))
