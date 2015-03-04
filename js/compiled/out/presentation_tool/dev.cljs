(ns presentation-tool.dev
    (:require
     [presentation-tool.core]
     [figwheel.client :as fw]))

(fw/start {
  :on-jsload (fn []
               ;; (stop-and-start-my app)
               )})
