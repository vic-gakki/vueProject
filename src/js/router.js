//导入vue-router模块，需要生成路由对象
import VueRouter from 'vue-router'

//导入需要配置路由的组件
import home from '../components/tabbar/Home.vue'
import member from '../components/tabbar/Member.vue'
import cart from '../components/tabbar/Cart.vue'
import search from '../components/tabbar/Search.vue'
import news from '../components/news/News.vue'
import newsInfo from '../components/news/newsInfo.vue'

const router = new VueRouter({
	//配置路由规则
	routes: [
		{path: '/', component: home},
		{path: '/home', component: home},
		{path: '/member', component: member},
		{path: '/cart', component: cart},
		{path: '/search', component: search},
		{path: '/home/news', component: news},
		{path: '/home/newsInfo/:id', component: newsInfo}
	],
	//配置路由高亮对应的类
	linkActiveClass: 'mui-active'
})
export default router