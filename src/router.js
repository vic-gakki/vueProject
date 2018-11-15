//导入vue-router模块，需要生成路由对象
import VueRouter from 'vue-router'

//导入需要配置路由的组件
import home from './components/tabbar/Home.vue'
import member from './components/tabbar/Member.vue'
import cart from './components/tabbar/Cart.vue'
import search from './components/tabbar/Search.vue'
import news from './components/news/News.vue'
import newsInfo from './components/news/newsInfo.vue'
import photos from './components/photos/Photos.vue'
import photoDetail from './components/photos/PhotoDatail.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
import Message from './components/others/Message.vue'
import Video from './components/others/Video.vue'
import Contact from './components/others/Contact.vue'

const router = new VueRouter({
	//配置路由规则
	routes: [
		{path: '/', component: home},
		{path: '/home', component: home},
		{path: '/member', component: member},
		{path: '/cart', component: cart},
		{path: '/search', component: search},
		{path: '/home/news', component: news},
		{path: '/home/newsInfo/:id', component: newsInfo},
		{path: '/home/photos', component: photos},
		{path: '/home/photoDetail/:id', component: photoDetail},
		{ path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
    { path: '/home/goodsdesc/:id', component:GoodsDesc, name: 'goodsdesc'  },
    { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' },
    {path: '/home/message', component: Message},
    {path: '/home/video', component: Video},
    {path: '/home/contact', component: Contact},
	],
	//配置路由高亮对应的类
	linkActiveClass: 'mui-active'
})
export default router