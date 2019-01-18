<template>
  <div class="goodsList_commend">
    <h2>
      <span>|</span>
      <span>爆款推荐</span>
    </h2>
    <div class="goodsListContainer">
      <ul class="new_box">
        <li class="new_theme">
          <div class="content" :style="bgCss">
            <h3 class="title">爆款推荐</h3>
            <div class="box">
              <span>剁手必买</span>
              <span>人气单品</span>
              <span class="checkAll" @click.self="gotoList">查看全部</span>
            </div>
          </div>
        </li>
        <li
          class="newItem"
          v-for="item in goodsList_commend"
          :key="item.goodsId"
          @click="goto(item.goodsId)"
        >
          <p>{{item.name.slice(0,5)}}</p>
          <span>¥{{item.price}}</span>
          <img :src="item.image">
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import imgurl5 from "@/img/bk_bg.4a1fabd.png";

export default {
  data() {
    return {
      imgurl5,
      goodsList_commend: []
    };
  },
  computed: {
    bgCss() {
      return {
        background: `url(${this.imgurl5}) no-repeat`,
        backgroundSize: "cover"
      };
    }
  },
  methods: {
    goto(goodsId) {
      // console.log('/DataList/'+goodsId);
      this.$store.dispatch("getData", { goodsId });
      this.$router.push({ path: "/DataList/" + goodsId });
      // this.$router.push({name:'Detail',params:{id},query:{keyword:'xxx'}})
    },
    gotoList() {
      this.$router.push({
        name: "searchlist",
        params: {
          params: 6
        }
      });
    }
  },
  created() {
    this.$axios.get("http://39.108.252.230:4008/good/goodsHot").then(res => {
      this.goodsList_commend = res.data.data.slice(0, 4);
    });
  }
};
</script>
<style lang="scss" scoped>
.goodsList_commend {
  text-align: left;
  padding-bottom: 5px;

  > h2 {
    font-weight: normal;
    height: 34px;
    line-height: 34px;
    padding-left: 7px;

    span:nth-child(1) {
      color: #934d91;
      font-size: 16px;
      font-weight: 900;
      margin-right: 3px;
    }

    span:nth-child(2) {
      font-size: 10px;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
    }
  }

  .goodsListContainer {
    .new_box {
      position: relative;
      margin: 5px 8px 0 8px;
      background: #fff;
      padding: 8px 3px 6px 3px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li:nth-child(1){
        width: 100%;
        height: 150px;
      }
      li {
        // flex:1;
        width:22%;
        color: #474747;
        font-size: 12px;
        font-weight: 600;
        height: 110px;
        margin-bottom: 6px;

        img {
          display: inline-block;
          width: 70px;
          height: 70px;
          border-radius: 8px;
          margin: 3px 0 0 5px;
        }

        p,
        span {
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
        }

        span {
          display: block;
          color: #e53b06;
        }
      }

      .new_theme {
        width: 200px;

        div {
          // position: absolute;
          // top: 0;
          // left: 0;
          width: 100%;
          height: 132px;

          h3 {
            color: #fff;
            font-size: 12px;
            // margin: 13px 0 10px 15px;
            position: relative;
            left:15px;
            top:10px;
          }

          .box {
            width: 60px;
            height: 70px;
            background: #fff;
            margin: 34px 10px;
            text-align: center;
            padding-top: 5px;

            > span {
              color: #333;
            }

            .checkAll {
              display: block;
              padding: 3px;
              border: 1px solid #f4c43b;
              color: #f4c43b;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
