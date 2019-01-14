<template>
	<div class="in_baby">

		<mt-swipe :auto="0">
			<mt-swipe-item v-for="(item,idx) in recommend" :key="idx">
				<img :src="item" />
			</mt-swipe-item>
		</mt-swipe>

		<div class="price">
			<h3>{{data.name}}</h3>
			<p>￥{{data.price}}<span>/米</span><del>￥{{data.marketPrice}}</del></p>
		</div>

		<div class="size">
			<h3>已选：请选择规格   <i class="mintui mintui-more"></i></h3>
			<p>运费：不包含运费</p>
		</div>

		<div class="promise">
			<span class="iconfont">&#xe604;</span> &nbsp 卖家承诺48小时发货
		</div>

		<h2>宝贝评价(0) <span>好评率0%</span></h2>

		<ul class="imgs">
			<!--   <li v-for="(item,idx) in recommend" :key="idx">
               <img :src="item"/>

             -->

			<p><img src="http://img.3hmlg.com/upload/image/201806/9bedf0ea-0b4a-4abc-8eef-f7dad4ae0865.jpg" /></p>
			<p><img src="http://img.3hmlg.com/upload/image/201806/845140f0-e33e-4e03-b494-ace865002929.jpg" /></p>
			<p><img src="http://img.3hmlg.com/upload/image/201806/05a1b00d-569e-4824-815e-a571e6dae266.jpg" /></p>
			</li>

		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				recommend: [],
				data: [],
				imgs: []
			}
		},
		created() {
			this.$axios.get("/dbapi/goods/detail/data.action?goodsId=1673").then(res => {
				let imgurl = res.data.response.data.images;
				this.recommend = imgurl;
				let data = res.data.response.data;
				this.data = data;

			});
		}
	}
</script>

<style lang="scss">

</style>