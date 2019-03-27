import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/routes'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),router,
}).$mount('#app')
