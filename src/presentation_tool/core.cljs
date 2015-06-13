(ns ^:figwheel-always presentation-tool.core
  (:require-macros [presentation-tool.macro :refer [read-presentations]])
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn highlight-code [this]
    (let [dom-node (reagent/dom-node this)
          nodes (.querySelectorAll dom-node "pre code")]
      (doseq [n (array-seq nodes)]
        (js/hljs.highlightBlock n))))

(defonce slides (atom []))
(defonce presentations (atom {}))
(defonce current-slide (atom 0))

(reset! presentations (read-presentations))

(defn slide-component [html]
  [:div {:class (str "slide-" (inc @current-slide))
         :dangerouslySetInnerHTML {:__html html}}])

(defn presentation-title-component [[talk-name talk-slides]]
  ^{:key talk-name}
  [:a
   {:on-click #(reset! slides talk-slides)}
   [:h3 talk-name]])

(defn select-presentation-component []
  [:div
   [:h1 "Select presentation"]
   (map presentation-title-component @presentations)])

(def presentation-component
  (with-meta
    (fn []
      [:div
       [slide-component (get @slides @current-slide)]
       [:p
        {:style {:position :absolute
                 :left 0
                 :top 0}}
        (str (inc @current-slide) " / " (count @slides))]])
    {:component-did-update highlight-code
     :component-did-mount  highlight-code}))

(defn root-component []
  (-> @presentations keys prn)
  (if (seq @slides)
    [presentation-component]
    [select-presentation-component]))

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
              34 (next-slide!)
              39 (next-slide!)
              40 (next-slide!)
              33 (prev-slide!)
              38 (prev-slide!)
              37 (prev-slide!)
              nil)))))

(bind-keydown)
