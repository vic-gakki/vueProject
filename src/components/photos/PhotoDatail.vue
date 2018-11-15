<template>
	<div class="photo-item-info">
		<div class="photo-item-head">
			<h1>{{ photoObj.title }}</h1>
			<p>
				<span>时间：{{ photoObj.add_time | dateFormat('YYYY年MM月DD日') }}</span>
				<span>点击量：{{ photoObj.clicked }}次</span>
			</p>
		</div>
		<hr>
		<div>{{ photoObj.content }}</div>
		<div class="img-preview">
			<vue-preview :slides="photoObj.imgArr"></vue-preview>
		</div>
		<comment></comment>
	</div>
</template>
<script>
	import comment from '../subcompo/comment.vue'
	export default {
		data(){
			return {
				photoObj:{},
				id:this.$route.params.id
			}
		},
		methods: {
			getPhotoDetail(){
				this.$http.get('src/newsContent/photoDetail.json?id='+this.id).then(result => {
					this.photoObj = result.body[0]
					this.photoObj.imgArr.forEach(item => {
						item.w = 300
						item.h = 200
					})
				}).catch(err =>{
					console.log(err)
				})
			},
			handleClose(){
				console.log('closed')
			}
		},
		created(){
			this.getPhotoDetail()
		},
		components:{
			comment
		}
	}
	
</script>
<style lang="less">
		.img-preview {
			display: flex;
			div {
				width: 100%;
			}
			.my-gallery {
				display: flex;
				flex-wrap: wrap;
				figure {
					margin: 10px;
					box-shadow: 0 0 10px #ccc;
					img {
						width: 100px;
						vertical-align: middle;
					}
				}
			}
		}
		/*.img-preview {
			img {
				width: 50%;
			}
		}*/
</style>