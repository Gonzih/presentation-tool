(ns ^:figwheel-always presentation-tool.core
  (:require-macros [presentation-tool.macro :refer [read-presentation]])
  (:require [reagent.core :as reagent :refer [atom]]
            [clojure.string]))

(enable-console-print!)

(defn split-slides [s]
  (clojure.string/split s #"<!--slide-->"))

(def slides (atom (split-slides (read-presentation))))
(defonce current-slide (atom 0))

(defn slide-component [i md]
  (when (= @current-slide i)
    ^{:key (hash md)}
    [:div {:dangerouslySetInnerHTML
           {:__html
            (js/markdown.toHTML md)}}]))

(defn root-component []
  [:div
   (doall (map-indexed slide-component @slides))
   [:p
    {:style {:position :absolute
             :left 0
             :top 0}}
    (str (inc @current-slide) " / " (count @slides))]])

(defn main []
  (reagent/render [root-component]
                  js/document.body))

(main)

(defn next-slide! []
  (when (< @current-slide (dec (count @slides)))
    (swap! current-slide inc)))

(defn prev-slide! []
  (when (pos? @current-slide)
    (swap! current-slide dec)))

(defn bind-keydown []
  (set! (.-onkeydown js/window)
        (fn [e]
          (let [code (.-keyCode e)]
            (case code
              32 (next-slide!)
              39 (next-slide!)
              37 (prev-slide!)
              nil)))))

(bind-keydown)
