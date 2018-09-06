import Vue from 'vue'
import App from './App.vue'
//import router from '@/packages/vue-router'
//import store from '@/packages/vuex'
import '@/assets/scss/style.scss'
import '@/packages/vue-axios'
// import VueRouter from 'vue-router'
// //import Vuex from 'vuex'
// //import axios from 'axios'
// //import VueAxios from 'vue-axios'
// Vue.use(VueRouter)
// Vue.use(Vuex)
// Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')