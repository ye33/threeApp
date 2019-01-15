<template>
	<div class="home_carousel">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,idx) in recommend" :key="idx">
				<img :src="item.image" />
			</mt-swipe-item>
		</mt-swipe>

	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				recommend: [{
					image:"http://img.3hmlg.com/upload/image/201812/a838b639-c15a-40f0-ae79-b886b1e2adba.jpg"
				},
				{
					image:"http://img.3hmlg.com/upload/image/201811/7546dad9-257c-4058-a9d3-fa03d2d641eb.jpg"
				},{
					image:"http://img.3hmlg.com/upload/image/201811/641e99d7-9a9e-4077-a27c-01e0130bf790.jpg"
				},
				{
					image:"http://img.3hmlg.com/upload/image/201811/106bffba-8dd4-4762-b091-01723279a543.jpg"
				},
				{
					image:"http://img.3hmlg.com/upload/image/201811/8c3812eb-bd00-4ec8-bcdf-4ed32cd023b7.jpg"
				}],


			}
		},

		// created() {
		// 	this.$axios.get("/dbapi/banner/list.action?type=wx_index").then(res => {
		// 		let data = res.data.response.list;

		// 		this.recommend = JSON.parse(JSON.stringify(data));
		// 		console.log(this.recommend);
		// 	});
		// }
	}
</script>

<style lang="scss">

</style>