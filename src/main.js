import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import axios from 'axios'
import VueAxios from 'vue-axios'

VueAxios.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'https://immense-journey-88777.herokuapp.com/';

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
