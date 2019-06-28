import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import store from './store';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      meta:{auth:true},
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})


//守卫
router.beforeEach((to,from,next)=>{
  if(to.meta.auth){
    if(store.state.token){
      next()
    }else{
      next({
        path:'/login',
        query:{redirect:to.path}
      })
    }
  }else{
    next()
  }
})

export default router