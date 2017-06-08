// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Backend from '@/components/Backend'
import Index from '@/components/Index'
import router from './router'

import VueFire from 'vuefire'
 
Vue.use(VueFire) 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // render(h) {
  //    return h(Index, { props: { parentItems: this.items, parentP1: this.placeholderOne } })
  //  },
  template: '<App/>',
  components: { App }
}).$mount(App); 
