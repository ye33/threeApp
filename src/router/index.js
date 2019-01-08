
import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import list from '@/components/list';
import service from '@/components/service';
import cart from '@/components/cart';
import mine from '@/components/mine';
Vue.use(Router);

// vue-router映射不同的组件
const routes=[
    {name:'home',path:'/home',component:home},
    {name:'list',path:'/list',component:list},
    {name:'service',path:'/service',component:service},
    {name:'cart',path:'/cart',component:cart},
    {name:'mine',path:'/mine',component:mine},
    {path:'/',redirect:{name:'home'}}
]

// 实例路由
let router=new Router({
    // 配置路由
    routes
});

export default router;

