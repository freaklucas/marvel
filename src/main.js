import Vue from 'vue';
import App from './App';
// import router from './router';
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