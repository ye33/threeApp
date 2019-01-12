<template>
  <div id="app">
    <!-- 路由视图 -->
    <router-view/>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
      <span :class="['iconfont',tab.icon]"></span>
      <span class="text">{{tab.text}}</span>
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
import Vue from 'vue';
import mintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(mintUi);

import axios from 'axios';
Vue.prototype.$axios=axios;

import { Indicator } from 'mint-ui';
axios.interceptors.request.use(config => {
    Indicator.open({
      spinnerType: 'fading-circle'
    });
    return config
}, error => {
    Indicator.close();
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
    // 响应成功关闭loading
    Indicator.close();
    return data
}, error => {
    Indicator.close();
    return Promise.reject(error)
})

export default {
  name: 'App',
  data(){
    return {
      tabs:this.$store.state.tabs,
      selected:'home'
    }
  },
  methods:{
    goto(path){
      this.$router.replace({path});
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f0f0;
  padding-bottom:47px;
}
.mint-tabbar{
  background:#fff;
}
.mint-tabbar > .mint-tab-item.is-selected{
  background: #fff;
  color:#934d91;
  font-weight:900;
}
.mint-tab-item-label .text{
  -webkit-transform:scale(0.8);
  transform:scale(0.8);
}
.iconfont{
  display:block;
  font-size:18px;
  margin-bottom:3px;
}
</style>