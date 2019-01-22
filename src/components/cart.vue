<template>
  <div class="page">
    <mt-header title="购物车">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>

      <mt-button slot="right">编辑</mt-button>
    </mt-header>
    <div class="isLogin" v-show="!isCookie">
      您尚未登录
      <input class="gotoLogin" type="button" value="点我登录" @click="gotoLogin">
    </div>
    <ul class="cartlist" v-show="isCookie">
      <li
        class="shoppingcar"
        v-for="(item,idx) in carlist"
        :key="item.id"
        :idx="idx"
        @click="selectItem(!item.selected,idx)"
      >
        <div class="shoppingcar_t">
          <input type="checkbox" :checked="item.selected">
          <img :src="item.image" alt>
          <span>{{item.name}}</span>
        </div>

        <div class="shoppingcar_b">
          <div class="left">
            <h3>色号：7#</h3>
            <p>
              ￥{{item.price}}
              <span>/米</span>
              <Button class="removeItem" @click.stop="removeItem(item.goodsId,idx)">删除</Button>
            </p>
          </div>
          <div class="right">
            <!-- 购物车的加减          -->
            <span class="mark" @click.stop="numDecrease(item.goodsId,idx)">-</span>
            <input
              type="text"
              v-model="item.number"
              step="0.1"
              min="1"
              class="cacul"
              @input="updatatotal()"
            >
            <span class="mark" @click.stop="numAdd(item.goodsId,idx)">+</span>
          </div>
        </div>
      </li>
    </ul>

    <ul class="carbottom">
      <li>
        <input type="checkbox" v-model="checkAll">
      </li>
      <li>全选</li>
      <li>
        <h3>总价：
          <span>￥{{updatatotal}}</span>
        </h3>
        <p>共{{updataNum}}种1.0米</p>
      </li>
      <li>结算</li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import "../sass/shoppingcar.scss";
export default {
  data() {
    return {
      carlist: [],
      isCookie:false,
      sumPrice: 0, //合计金额
      totalNumber: 0 //总数
    };
  },

  computed: {
    checkAll: {
      get() {
        return this.carlist.every(item => item.selected);
      },
      set(checked) {
        this.carlist.forEach(item => {
          item.selected = checked;
        });
      }
    },
    //计算总金额总数量
    updatatotal() {
      //遍历整个数组如果有状态等于true 的  id或者idx的价格乘以数量 推进数组里面  然后再次遍历所有项 相加

      var newArr = [];
      let total = 0;
      let qty = 0;
      this.carlist.forEach(item => {
        if (item.selected) {
          qty++;
          total += item.price * item.number;
          newArr.push(total);
        }
      });
      this.totalNumber = qty;
      return total.toFixed(2);
    },

    //计算总数量
    updataNum() {
      let qty = 0;
      this.carlist.forEach(item => {
        if (item.selected) {
          qty++;
        }
      });
      this.totalNumber = qty;
      return qty;
    }
  },

  methods: {
    numDecrease(goodsid,idx) {
      this.carlist[idx].number = (this.carlist[idx].number * 10 - 1) / 10;
      let number=this.carlist[idx].number;
      let postData = this.$qs.stringify({
          goodsid: goodsid,
          number: number
      });
      this.$axios.post('http://39.108.252.230:4008/order/updategood',postData).then(res=>{
      })
    },
    numAdd(goodsid,idx) {
      this.carlist[idx].number = (this.carlist[idx].number * 10 + 1) / 10;
      let number=this.carlist[idx].number;
      let postData = this.$qs.stringify({
          goodsid: goodsid,
          number: number
      });
      this.$axios.post('http://39.108.252.230:4008/order/updategood',postData).then(res=>{
      })
    },
    removeItem(goodsid,idx) {
      this.$axios.get('http://39.108.252.230:4008/order/delete?goodsid='+goodsid).then(res=>{
        this.carlist.splice(idx, 1);
      })
      // this.carlist.splice(idx, 1);
    },
    // 未登录跳转
     gotoLogin() {
      this.$router.push({path: "/login"});
    },
    // 修改selected属性（选中或不选）
    selectItem(checked, idx) {
      // 全部操作
      if (idx === undefined) {
        this.carlist.forEach(item => {
          item.selected = checked;
        });
      }

      // 单个操作
      else {
        this.carlist[idx].selected = checked;
      }
    }
  },

   created() {
    this.$axios.get("http://39.108.252.230:4008/order").then(res => {
      let data = res.data;
      // console.log(data);
      this.carlist = data.data;

       if(localStorage.getItem("tokenData")){
        let storage=JSON.parse(localStorage.getItem("tokenData"));
        let token=storage.token;
        this.$axios.get('http://39.108.252.230:4008/token',{
          headers:{
            token
          }
        }).then(res=>{
          if(res.data.code==200){
            this.isCookie=true;
          }else{
            this.isCookie=false;
          }
        });
        }else{
          this.isCookie=false;
        }
    });
  }
};
</script>

<style lang="scss">
  .isLogin{
    color:#934d91;
    position:absolute;
    top:120px;
    right:0;
    left:0;
    font-size:16px;
  }
  .gotoLogin{
    display:block;
    width:25%;
    height:36px;
    font-weight:900;
    font-size:16px;
    color:#666;
    margin:10px auto;
    background:#ccc;
  }
</style>