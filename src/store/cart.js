export default{
state:{
        cartlist:[{
            id:1,
            title:'iphoneXs',
            price:12998,
            color:'土豪金',
            qty:1,
            kucun:10
        },{
            id:2,
            title:'Honor V20',
            price:2999,
            color:'渐变蓝',
            qty:1,
            kucun:20
        }]
    },
    // 这里的getters相当于组件中的computed
    getters:{
      salelist(state){
        return state.cartlist.map(item=>({...item,price:item.price*0.5}));
      }
    },
    // mutations相当于组件中的methods
    mutations:{
      // 通过mutations修改state中的数据
      changeQty(state,payload){
        //state：store中的state数据
        // payload: 调用changeQty时传入的参数（可以是任意类型，建议使用对象）
        state.cartlist.forEach(item=>{
          if(item.id===payload.id){
            item.qty=payload.qty;
          }
        })
      },

       // 修改库存
      changeKucun(state,payload){
        state.cartlist.forEach(item=>{
          if(item.id===payload.id){
            item.kucun=payload.kucun;
          }
        })
      }
    },
   
    // 负责操作mutations
    actions:{
      getKucun(context,payload){
        // 请求服务器，获取库存信息
        setTimeout(()=>{
          let kucun=parseInt(Math.random()*100);
          context.commit('changeKucun',{...payload,kucun});
        },1000)
      }
    }
}
