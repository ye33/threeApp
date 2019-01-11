// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import './assets/base.css'
import './assets/icon/iconfont.css'

new Vue({
  el: '#app',
  // 注入路由
  router,
  // 注入仓库
  store,
  // 渲染
  render:h=>h(App)
})
