export default {
    state:{
      goodslist:[{
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
  getters:{
    list(state){
        return state.goodslist.map(item=>({...item,price:item.price*0.5}));
      }
  },

  // 通过mutations修改state中的数据
  mutations:{

  },

  // 负责操作mutations
  actions:{

  }
}