(ns ^:figwheel-always presentation-tool.core
  (:require-macros [presentation-tool.macro :refer [read-presentation]])
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defonce main-state (atom (read-presentation)))

(defn root-component []
  [:div {:dangerouslySetInnerHTML
         {:__html
          (js/markdown.toHTML @main-state)}}])

(defn main []
  (reagent/render [root-component]
                  js/document.body))

(main)
