import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Backend from '@/components/Backend'
import Index from '@/components/Index'
import App from '@/App'

Vue.use(Router)
 
export default new Router({
  routes: [ 
    {path: '/', component: App},
    {path: '/Backend', component: Backend},
  ]
})


// var router = new VueRouter({
// 	mode: 'hash',
// 	base: window.location.href,
// 	routes: [
//       {path: '/', component: MovieList},
//       {path: '/addmovie', component: addmovie},
//       {name: 'movie', path: '/:original_title', component: MovieDetail }
//     ]
// });