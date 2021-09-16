import Vue from 'vue/dist/vue.js';

import App from './App';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import VueRouter from 'vue-router'

Vue.use(VueMaterial);

Vue.use(VueRouter);


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});