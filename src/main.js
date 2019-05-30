import Vue from 'vue';
import Vant from 'vant';
import VueClipboards from 'vue-clipboards';
import ScrollPosition from 'vue-keep-scroll-position'

import 'vant/lib/index.css'

import App from './App.vue';
import VueMixin from './mixins/VueMixin';
import i18n from './locales';
import router from './router';
import store from './vuex';
import stream from './http';

Vue.use(Vant);
Vue.use(VueClipboards);
Vue.use(ScrollPosition);
Vue.mixin(VueMixin);

Vue.prototype.$http = stream;

new Vue({
  i18n,
  router,
  store,
  el: '#app',
  render: h => h(App)
});
