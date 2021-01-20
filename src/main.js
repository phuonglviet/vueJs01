import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import store from './store/index'
import router from './router'
import vuetify from '@/plugins/vuetify'
import '@/globalComponents'
import Bus from '@/eventBusPlugin'
import VueMask from 'v-mask'

Vue.use(VueRouter);
Vue.use(VueMask);
Vue.use(Bus);

new Vue({
  el: '#app',
  store: store,
  router: router,
  vuetify,
  render: h => h(App),
})
.$mount('#app')