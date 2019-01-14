<template>
	<div id="app">

		<!-- 路由视图 -->
		<!-- 这里添加id：navBottom -->
		<router-view/>
		<div id="navBottom" v-show="showBottom">
		<mt-tabbar v-model="selected" fixed v-show="showBottom">
			<mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
				<span :class="['iconfont',tab.icon]"></span>
				<span class="text">{{tab.text}}</span>
			</mt-tab-item>
		</mt-tabbar>
	</div>
	</div>
</template>

<script>
	import Vue from 'vue';

	import mintUi from 'mint-ui';
	import 'mint-ui/lib/style.css';
	Vue.use(mintUi);

	// 可能会有冲突
	import axios from 'axios';
	// 把axios写入Vue的原型对象，方便后面调用
	Vue.prototype.$axios = axios;

	import "./sass/home_sreach.scss"
	import "./sass/home_carousel.scss"
	import "./sass/home_upload.scss"
	import "./sass/home_brand.scss"
	import "./sass/list.scss"

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
		data() {
			return {
				tabs: this.$store.state.tabs,
				selected: 'home',
				showBottom:true
			}
		},
		methods: {
			goto(path) {
				this.$router.replace({
					path
				});
			}
		},
		watch:{
			$route(newValue,oldValue){
		     	// console.log("new:",newValue,"old:",oldValue);
		     	this.selected=newValue.name;
		     	if(newValue.name=='list'){
		     		// console.log('yew');
		     		this.showBottom=false;
		     	}else if(newValue.name=='login'){
		     		this.showBottom=false;
		     	}else if(newValue.name=='fashiondetail'){
		     		this.showBottom=false;
		     	}else{
		     		this.showBottom=true;
		     	}
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
		height: 100%;
		min-height: 640px;
		overflow-x: hidden;
	}
	#navBottom{
		height:47px;
	}
	.mint-tabbar {
		background: #fff;
	}
	
	.mint-tabbar>.mint-tab-item.is-selected {
		background: #fff;
		color: #934d91;
		font-weight: 900;
	}
	
	.mint-tab-item-label .text {
		-webkit-transform: scale(0.8);
		transform: scale(0.8);
	}
	
	.iconfont {
		display: block;
		font-size: 18px;
		margin-bottom: 3px;
	}
</style>