<template>
  <div class="page DataList">
    <mt-header title="秋冬服运动毛圈布现货服装针织">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button="iconfont">&#xe606;</mt-button>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <span class="iconfont buycart">&#xe606;</span>
    <mt-navbar v-model="selected">
      <mt-tab-item :id="tab.name" :key="tab.name" v-for="tab in tabs" @click.native="change(tab)">{{tab.title}}</mt-tab-item>
    </mt-navbar>
    <!--  -->
    <!-- <router-view :data="datalist"/> -->
    <components :is="current.component"></components>
    <div class="datalistbottom">
      <mt-tabbar v-model="choosed" fixed>
        <mt-tab-item :id="tab.name" v-for="tab in buycar" :key="tab.name" @click.native="gotoPath(tab.path)">
          <span :class="['iconfont',tab.icon]"></span>
          <span class="text">{{tab.text}}</span>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
import "../sass/in_baby.scss";
import in_baby from '@/components/DataList/in_baby';
import in_details from '@/components/DataList/in_details';
import in_parameter from '@/components/DataList/in_parameter';
import in_evaluation from '@/components/DataList/in_evaluation';
import Cookie from '@/assets/Cookie';

export default {
  data() {
    return {
      buycar: [{
        text: '客服',
        icon: 'icon-kefu',
        path: 'in_baby',
        name: 'a'
      }, {
        text: '收藏',
        icon: 'icon-shoucang',
        path: 'in_baby',
        name: 'list'
      }, {
        text: '拿色卡',
        icon: 'icon-biaoqian',
        path: 'in_baby',
        name: 'r'
      }, {
        text: '加入购物车',
        icon: 'icon-gouwuche',
        path: 'cart',
        name: 'cart'
      }, {
        text: '立即购买',
        icon: 'icon-tubiaolunkuo-',
        path: 'cart',
        name: 'mine'
      }],

      tabs: [{
          title: "宝贝",
          name: "in_baby",
          component: in_baby
        },
        {
          title: "详情",
          name: "in_details",
          component: in_details
        },
        {
          title: "参数",
          name: "in_parameter",
          component: in_parameter
        },
        {
          title: "评价",
          name: "in_evaluation",
          component: in_evaluation
        }
      ],

      selected: 'in_baby',
      choosed: 'cart',
      datalist: {},
      current: ''
    }
  },
  methods: {
    gotoPath(path) {
      if (path == "cart") {
        if (localStorage.getItem("tokenData")) {
          let storage = JSON.parse(localStorage.getItem("tokenData"));
          let token = storage.token;

          this.$axios.get('http://39.108.252.230:4008/token', {
            headers: {
              token
            }
          }).then(res => {
            if (res.data.code == 200) {
              let goodsData = this.$store.state.data;
              let qty = this.$store.state.number;
              // console.log(goodsData);
              let postData = this.$qs.stringify({
                goodsid: goodsData.goodsId,
                number: qty,
                name: goodsData.name,
                image: goodsData.image,
                price: goodsData.price
              });
              this.$axios.post('http://39.108.252.230:4008/order/addgood', postData).then(res => {
                this.$router.push({ path: '/cart' });
              });
            } else {
              this.$router.push({ path: '/login' });
            }
          })

        } else {
          this.$router.push({ path: '/login' });
        }
      } else {
        this.$router.push({ path: '/DataList/' + path });
      }
    },
    change(tab) {
      this.current = tab;
    }
    },
    beforeMount() { this.current = this.tabs[0]}
}
</script>
<style lang="scss">
#app .DataList {
  position: relative;
  text-align: left;

  .buycart {
    position: absolute;
    top: 9px;
    right: 39px;
    color: #fff;
  }

  .datalistbottom {
    width: 100%;
    height: 46px;
    position: fixed;
    bottom: 0px;
    z-index: 300;

    .icon-gouwuche {
      display: none;
    }

    .icon-tubiaolunkuo- {
      display: none;
    }

    .mint-tab-item:nth-of-type(4) {

      text-align: center;

      width: 20px;
      height: 47px;
      background: #F4C43B;

      .text {
        line-height: 40px;

      }
    }


    .mint-tab-item:nth-of-type(5) {

      text-align: center;

      width: 20px;
      height: 47px;
      background: #934D91;

      .text {
        line-height: 40px;
        color: #fff;
      }
    }

  }

  .mint-header {
    background: #944D91;
    border: 1px solid #ccc;

  }

  .mint-navbar {
    margin-top: 41px;
  }
}

</style>
