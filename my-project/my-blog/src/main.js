// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'

Vue.use(VueResource);
Vue.use(ElementUI)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/images/favicon.ico',
  loading: '/static/images/favicon.ico',
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend'] 
  listenEvents: [ 'scroll' ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


