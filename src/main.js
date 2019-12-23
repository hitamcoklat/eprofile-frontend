// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import App from './App'
// import AppRoot from './AppRoot'
import router from './router'
import EventBus from './lib/eventBus.js'
import { manageRekapPuskesmas } from './lib/manageRekapPuskesmas'
import axios from 'axios'
import VueSession from 'vue-session'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'v-slim-dialog/dist/v-slim-dialog.css'
import SlimDialog from 'v-slim-dialog'

Vue.prototype.$bus = EventBus
Vue.prototype.$manageRekapPus = manageRekapPuskesmas
Vue.prototype.$http = axios
Vue.prototype.$urlPHPServer = 'http://localhost/diskes/survei-puskesmas/portal';
// Vue.prototype.$urlNode = 'http://202.150.151.50:3705';
Vue.prototype.$urlNode = 'http://10.29.102.106:3001';

Vue.use(VueSession)
Vue.use(SlimDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
