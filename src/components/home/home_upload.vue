
<template>
  <div class="home_upload">
    <ul class="home_uploadbottom">
      <li v-for="(item,idx) in recommend" @click="goto(item.params)" :key="idx" :id="item._id">
        <img :src="item.image" alt>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      recommend: []
    };
  },

  created() {
    this.$axios.get("http://39.108.252.230:4008/themeList2").then(res => {
      let data = res.data.data;

      // console.log("list:",data);

      this.recommend = data;
      // console.log(this.recommend);
    });
  },
  methods: {
    goto(cid) {
      // console.log('liebiao id',cid)
      this.$router.push({
        name: "themeList",
        params: {
          params: cid
        }
      });
    }
  }
};
</script>

<style lang="scss">
</style>