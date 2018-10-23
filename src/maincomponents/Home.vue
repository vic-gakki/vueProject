<template>
	<div>
		<!-- 轮播图部分 -->
		<mt-swipe :auto="0">
	  		<mt-swipe-item v-for="item of imageList" :key="item.imgurl">
	  			<img :src="item.imgurl">
	  		</mt-swipe-item>
		</mt-swipe>

		<!-- 六宫格部分 -->
		<div class="mui-content">
	        <ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
	            	<a href="#">
	                    <img src="../images/menu1.png">
	                    <div class="mui-media-body">新闻资讯</div>
	                </a>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
	            	<a href="#">
	                    <img src="../images/menu2.png">
	                    <div class="mui-media-body">图片分享</div>
	                </a>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
	            	<a href="#">
	                    <img src="../images/menu3.png">
	                    <div class="mui-media-body">商品购买</div>
	                </a>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
	            	<a href="#">
	                    <img src="../images/menu4.png">
	                    <div class="mui-media-body">留言反馈</div>
	                </a>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
	            	<a href="#">
	                    <img src="../images/menu5.png">
	                    <div class="mui-media-body">视频专区</div>
	                </a>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
	            	<a href="#">
	                    <img src="../images/menu6.png">
	                    <div class="mui-media-body">联系我们</div>
	                </a>
                </li>
	        </ul> 
		</div>
	</div>
</template>
<script>
	export default {
		data: () => {
			return {
				imageList: []
			}
		},
		methods: {
			getList(){
				const arr = [
					{link:'http://www.baidu.com',imgurl:'/src/images/jay1.jpg'},
					{link:'http://lol.qq.com',imgurl:'/src/images/jay2.jpg'},
					{link:'http://mail.qq.com', imgurl:'/src/images/jay3.jpg'}
				]
				this.imageList = arr;
			}
		},
		created(){
			console.log('created')
			this.getList()
		}
	}
</script>
<style lang="less" scoped>
	.mint-swipe {
		height: 200px;
		.mint-swipe-item {
			img {
				width: 100%;
				height: 100%;
				display:block;
			}
		}
	}
	.mui-grid-view.mui-grid-9 {
		background-color: #fff;
		border: none;
		margin-top: 0;
		.mui-table-view-cell {
			border: none;
			img {
				width: 40px;
				height: 40px;
			}
			.mui-media-body {
				font-size: 12px
			}
		}
	}
</style>