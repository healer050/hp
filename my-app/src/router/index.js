import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Home from '../pages/home'
import Classific from '../pages/classific'
import Shopping from '../pages/shopping'
import List from '../pages/list'
//1引入分类
import Egg from '../components/list/egg3'
import Fruit from '../components/list/fruit1'
import Seasonal from '../components/list/seasonal2'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/classific',
      name: 'Classific',
      component: Classific
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
      {
      path: '/list',
      name: 'List',
      component: List,
      children:[
        {
          path: '/list/fruit',
          name: 'Fruit',
          component: Fruit
        },
        {
          path: '/list/seasonal',
          name: 'Seasonal',
          component: Seasonal
        },
        {
          path: '/list/egg',
          name: 'Egg',
          component: Egg
        }
      ]
    },
    {path:'/*',redirect:"/list"},


  ]
})
