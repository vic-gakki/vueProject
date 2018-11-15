<template>
	<div class="photo-container">

		<!-- topbar滚动区域 -->
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a @click="getPhotoList(item.id)" :class="['mui-control-item',item.id==0?'mui-active':'']" href="#item1mobile" v-for="item of photoCate" :key="item.id">
						{{ item.title }}
					</a>
				</div>
			</div>
		</div>
		<!-- 图片列表展示区域 -->
		<ul class="img-container">
			<router-link v-for="item of photoList" :key="item.imgUrl" class="img-item" :to="'/home/photoDetail/'+item.id" tag="li">
				<div>
					<div class="img-wrapper">
						<img v-lazy="item.imgUrl" alt="">
					</div>
					<div class="img-desc">
						<h1>{{ item.title }}</h1>
						<p>{{ item.abstract }}</p>
					</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<script>
		import mui from '../../lib/MUI/js/mui.js'
		export default {
			mounted(){
				mui('.mui-scroll-wrapper').scroll()
			},
			methods: {
				getPhotoCate(){
					this.$http.get('src/newsContent/photoCate.json').then(result => {
						this.photoCate = result.body
					}).catch(err => {
						console.log(err)
					})
				},
				getPhotoList(id){
					this.$http.get('src/newsContent/photoList'+id%2+'.json?id='+id).then(result => {
						this.photoList = result.body
					}).catch(err => {
						console.log(err)
					})
				}
			},
			created(){
				this.getPhotoCate(),
				this.getPhotoList(0)
			},
			data(){
				return {
					photoCate:[],
					photoList:[]
				}
			}
	}
</script>
<style lang="less" scoped>
	.photo-container {
		.img-container {
			list-style: none;
			margin: 5px;
			padding: 0;
			.img-item {
				margin: 5px 0;
				position: relative;
				box-shadow: 0 0 10px #ccc;
				.img-wrapper{
					img {
						width: 100%;
						display: block;
					}
					img[lazy=loading] {
					  height: 400px;
						background-color: #eee;
					}			
				}
				.img-desc{
					position: absolute;
					width: 100%;
					bottom: 0;
					background-color: rgba(0,0,0,.4);
					h1 {
						font-size: 24px;
					}
					p {
						color: 	#000;
					}
				}
			}
		}
	}
</style>