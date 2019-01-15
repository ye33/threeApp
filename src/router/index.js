import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import list from '@/components/list';
         import listcotton from '@/components/list/listcotton';
import service from '@/components/service';
import cart from '@/components/cart';

import DataList from '@/components/DataList';
            import in_baby from '@/components/DataList/in_baby';
            import in_details from '@/components/DataList/in_details';
            import in_parameter from '@/components/DataList/in_parameter';
            import in_evaluation from '@/components/DataList/in_evaluation';
import mine from '@/components/mine';

import SearchList from '@/components/SearchList';

import login from '@/components/login';
import category from '@/components/category';

Vue.use(Router);


// vue-router映射不同的组件
const routes=[
    {name:'home',path:'/home',component:home},
    {name:'list',path:'/list',component:list,
             children:[
             // {path:'/',component:listcotton},
             {path:'0',component:listcotton},

              {path:'1',component:listcotton},
              {path:'2',component:listcotton},
              {path:'3',component:listcotton},
              {path:'4',component:listcotton},
              {path:'5',component:listcotton},
              {path:'6',component:listcotton},
              {path:'7',component:listcotton},
              {path:'8',component:listcotton},
              {path:'9',component:listcotton},
              {path:'10',component:listcotton}

                ]},
    {name:'service',path:'/service',component:service},
    {name:'cart',path:'/cart',component:cart},

    {path:'/DataList/:id',component:DataList
                 // cart内配置子路由（嵌套路由）
        // children:[
        //        {path:'',redirect:{name:'in_baby'}},
        //        {name:'in_baby',path:'in_baby',component:in_baby},
        //     //当url为/list/in_theaters匹配这个子路由
        //     {name:'in_detail',path:'in_details',component:in_details},
        //     {name:'in_parameters',path:'in_parameter',component:in_parameter},
        //     {name:'in_evaluations',path:'in_evaluation',component:in_evaluation}      
        //     ]
  },
    {name:'mine',path:'/mine',component:mine},

    {path:'/',redirect:{name:'home'}},
    {name:'searchlist',path:'/searchlist',component:SearchList,
       children:[
                  {path:'',redirect:{name:'searchlist'} }
                  ]
                },

    {name:'login',path:'/login',component:login},
    {name:'category',path:'/category',component:category},
  

]

// 实例路由
let router=new Router({
    // 配置路由
    routes
});

export default router;
