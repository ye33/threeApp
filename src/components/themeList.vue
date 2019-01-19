<template>
  <div class="page category">
    <mt-header fixed :title="title">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="bigImg">
      <img :src="imgurl" alt>
      <p class="text">{{text}}</p>
    </div>

    <ul class="goodsList">
      <li v-for="item in goodsList" :key="item.goodsId" @click="goto(item.goodsId)">
        <div class="imgL">
          <img :src="item.image" alt>
        </div>
        <div class="goodstext">
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
      title:'',
    };
  },
  computed: {
    thisItem: function() {
      this.current = this.$route.params.cid;
      return this.current;
    }
  },
  methods: {
    goto(goodsId) {
      this.$store.dispatch("getData", { goodsId });
      this.$router.push({ path: "/DataList/" + goodsId });
    }
  },
  mounted() {
    this.current = this.$route.params.params;

    this.$axios
      .get("http://39.108.252.230:4008/themeList2/" + this.current)
      .then(res => {
        console.log(res);
        this.goodsList = res.data.data;
        this.imgurl = res.data.topic.phoneBanner;
        this.title = res.data.topic.name;
        this.text = res.data.topic.content;
      });
  }
};
</script>

<style lang="scss" scoped>
.category{
  display:flex;
  flex-direction:column;
}
.mint-header {
  background: transparent;
  color: #fff;
  font-weight:900;
  font-size:16px;
  z-index:13;
}
.text{
  position:absolute;
  top:50px;
  left:0;
  text-indent:2em;
  color:#fff;
}
.bigImg {
  position:fixed;
  height:150px;
  z-index:12;
  img {
    width: 100%;
    height:150px;
  }
  p {
    font-size: 12px;
    padding: 10px 15px;
    text-align: justify;
  }
}

.goodsList {
  flex:1;
  margin-top:160px;
  padding: 0 8px 40px 8px;
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
    .goodstext {
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