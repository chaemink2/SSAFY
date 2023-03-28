import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Ctrl + P 폴더 및 파일 검색
// Ctrl + shift + f  전체 내용검색
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
