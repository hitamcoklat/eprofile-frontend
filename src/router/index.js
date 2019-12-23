import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello.vue'
import Sample from 'components/Sample.vue'
import Login from '@/pages/login.vue'

// IMPORT SEMUA TABLE DISINI
import TableRouter from '@/pages/table/router'

Vue.use(Router)

const baseRoutes = [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
];

const routes = baseRoutes.concat(TableRouter)

export default new Router({
  // mode: 'history',
  routes,
  linkActiveClass: 'active'
})
