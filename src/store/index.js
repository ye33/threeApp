import Vue from 'vue';
import Vuex from 'vuex';
import cart from './cart';
import goods from './goods';
Vue.use(Vuex);
import axios from 'axios';
 // 把axios写入Vue的原型对象，方便后面调用

// vuex的使用
// 1、创建store
export default new Vuex.Store({
    // 底部列表所用的state
    state:{
        tabs:[
            {
                text:'首页',
                icon:'icon-shouye',
                path:'/home',
                name:'home'
            },{
                text:'分类',
                icon:'icon-fenlei1',
                path:'/list',
                name:'list'
            },{
                text:'客服',
                icon:'icon-kefu',
                path:'/service',
                name:'service'
            },{
                text:'购物车',
                icon:'icon-gouwuche',
                path:'/cart',
                name:'cart'
            },{
                text:'我的',
                icon:'icon-wode',
                path:'/mine',
                name:'mine'
            }],
            selected:'home',
            data:{}

    },
    mutations:{
        changeData(state,payload){
            state.data=payload.res.data.data;
            console.log("11",state.data);

        }
    },
    actions:{
        getData(context,payload){
           axios.get("http://10.3.141.145:4008/detail?goodsid="+payload.goodsId).then(res=>{
            context.commit('changeData',{...payload,res});
            })
        }
    },
    // store模块化：底部列表各项的store
    modules:{
        cart,
        goods
    }
});