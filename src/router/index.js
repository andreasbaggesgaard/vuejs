import Vue from 'vue'
import Router from 'vue-router'
import ItemDetail from '@/components/ItemDetail'
import Index from '@/components/Index' 

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Index},
    {path: '/detail/:id', name: 'item', component: ItemDetail }
  ]
})
 