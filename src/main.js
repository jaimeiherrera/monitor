import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import express from './plugins/express';

Vue.config.productionTip = false

new Vue({
  vuetify,
  express,
  render: h => h(App)
}).$mount('#app')
