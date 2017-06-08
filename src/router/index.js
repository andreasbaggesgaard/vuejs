import Vue from 'vue'
import Router from 'vue-router'
import Backend from '@/components/Backend' 
import App from '@/App'
import Index from '@/components/Index'
import ItemDetail from '@/components/ItemDetail'
import EditPage from '@/components/EditPage'
import Page from '@/components/Page'
import Profile from '@/components/Profile'
 
Vue.use(Router)
 
export default new Router({ 
  routes: [  
    {path: '/', component: Index},
    {path: '/Backend', component: Backend}, 
    {path: '/EditPage', component: EditPage}, 
    {path: '/Profile', component: Profile}, 
    {name: 'item', path: '/:title', component: ItemDetail },
    {name: 'page', path: '/:title', component: Page }
  ]
}) 