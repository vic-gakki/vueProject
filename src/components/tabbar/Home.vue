<template>
	<div>
		<swiper :swiperList="swiperList" :isfull="true"></swiper>

		<!-- 六宫格部分 -->
		<div class="mui-content">
	        <ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
	            	<router-link to="/home/news">
	                    <img src="/src/images/menu1.png">
	                    <div class="mui-media-body">新闻资讯</div>
	                </router-link>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
	            	<router-link to="/home/photos">
	                    <img src="/src/images/menu2.png">
	                    <div class="mui-media-body">图片分享</div>
	                </router-link>
	            </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
	            	<router-link to="/home/goodslist">
	                    <img src="/src/images/menu3.png">
	                    <div class="mui-media-body">商品购买</div>
	                </router-link>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
	            	<router-link to="/home/message">
	                    <img src="/src/images/menu4.png">
	                    <div class="mui-media-body">留言反馈</div>
	                </router-link>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
	            	<router-link to="/home/video">
	                    <img src="/src/images/menu5.png">
	                    <div class="mui-media-body">视频专区</div>
	                </router-link>
                </li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
	            	<router-link to="/home/contact">
	                    <img src="/src/images/menu6.png">
	                    <div class="mui-media-body">联系我们</div>
	                </router-link>
                </li>
	        </ul> 
		</div>
	</div>
</template>
<script>
	import { Toast } from "mint-ui"
	import swiper from '../subcompo/swiper.vue'
	export default {
		data: () => {
			return {
				// 保存接收到的轮播图数据
				swiperList: []
			}
		},
		methods: {
			// 调用数据接口api，获取轮播图的方法
			getList(){
			// this.$http.get("api/getlunbo").then(result => {
	   //      if (result.body.status === 0) {
	   //        // 成功
	   //        this.swiperList = result.body.message;
	   //      } else {
	   //        // 失败
	   //        Toast("加载轮播图失败。。。");
	   //      }
	   //    });
	   //    
	   //   定义假数据
				const arr = [
					{imgurl:'/src/images/gakki1.jpg'},
					{imgurl:'/src/images/gakki2.jpg'},
					{imgurl:'/src/images/gakki3.jpg'}
				]
				this.swiperList = arr;
			}
		},
		created(){
			//在组件被创建的时候调用获取轮播图数据的方法
			this.getList()
		},
		components: {
			swiper
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