import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.axios.defaults.headers.common = {
  'Authorization': 'RecarSecretTokenOMG'
}