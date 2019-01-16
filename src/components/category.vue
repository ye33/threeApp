<template>
  <div class="page category">
    <mt-header fixed title="商品列表">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="nav">
      <div class="container">
        <ul class="navBox clearfix" ref="navBar">
          <li
            :class="{'active':item.cid==current}"
            v-for="item in category"
            :key="item.cid"
            @click="changeColor(item.cid)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="bigImg">
      <img :src="imgurl" alt>
      <p>{{text}}</p>
    </div>

    <ul class="goodsList">
      <li v-for="item in goodsList" :key="item.goodsId" @click="goto(item.goodsId)">
        <div class="imgL">
          <img :src="item.image" alt>
        </div>
        <div class="text">
          <h4>{{item.name}}</h4>
          <p>
            <span class="price fl">{{item.price}}</span>
            <span class="iconfont icon-gouwuche fr"></span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      current: 3,
      goodsList: [],
      imgurl: "",
      text: "",
      category: [
        {
          name: "经典",
          cid: 3
        },
        {
          name: "亚麻",
          cid: 4
        },
        {
          name: "奢华",
          cid: 5
        },
        {
          name: "卫衣潮",
          cid: 6
        },
        {
          name: "羊毛",
          cid: 7
        },
        {
          name: "条纹控",
          cid: 8
        },
        {
          name: "格子范",
          cid: 9
        },
        {
          name: "个性",
          cid: 10
        }
      ]
    };
  },
  computed: {
    thisItem: function() {
      this.current = this.$route.params.cid;
      return this.current;
    }
  },
  methods: {
    changeColor(cid) {
      this.current = cid;
      this.$axios
        .get("http://39.108.252.230:4008/themeList1/" + this.current)
        .then(res => {
          this.goodsList = res.data.data;
          this.imgurl = res.data.details.image;
          this.text = res.data.details.subTitle;
        });
    },
    goto(goodsId) {
      this.$store.dispatch("getData", { goodsId });
      this.$router.push({ path: "/DataList/" + goodsId });
    }
  },
  mounted() {
    let navBar = this.$refs.navBar;
    let navItem = navBar.children[0];
    let w = navItem.offsetWidth;
    navBar.style.width = w * this.category.length + "px";
    this.current = this.$route.params.cid;

    this.$axios
      .get("http://39.108.252.230:4008/themeList1/" + this.current)
      .then(res => {
        this.goodsList = res.data.data;
        this.imgurl = res.data.details.image;
        this.text = res.data.details.subTitle;
      });
  }
};
</script>

<style lang="scss" scoped>
.category {
  position: relative;
  background: #f0f0f0;
  z-index: 6;
}

.mint-header {
  background: #fff;
  color: #474747;
}

.nav {
  margin-top: 40px;
  background: #313131;
  overflow-x: auto;
  .navBox {
    color: #fff;
    li {
      float: left;
      width: 62px;
      padding: 12px 0;
    }
    .active {
      background: #934d91;
    }
  }
}

.nav::-webkit-scrollbar {
  display: none;
}

.bigImg {
  img {
    width: 100%;
  }
  p {
    font-size: 12px;
    padding: 10px 15px;
    text-align: justify;
  }
}

.goodsList {
  padding: 0 8px;
  li {
    padding: 10px;
    background: #fff;
    margin-bottom: 13px;
    display: flex;
    text-align: left;
    .imgL {
      margin-right: 12px;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .text {
      width: 73%;
      p {
        margin-top: 25px;
        color: #e53b06;
        .icon-gouwuche {
          color: #fff;
          margin: -5px 18px 0 0;
          display: block;
          padding: 3px;
          background: #934d91;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>