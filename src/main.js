import Vue from 'vue'
// import Vue from "vue/dist/vue"
import App from './App.vue'
import router from './router'
import store from './store'

// 移动端适配文件
import "./assets/app"
// 引入样式重置文件
import "./assets/reset.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
  // template:'<h1>1214</h1>'
}).$mount('#app')
