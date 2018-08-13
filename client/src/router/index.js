import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Good from '@/components/Good'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Good',
      component: Good
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
