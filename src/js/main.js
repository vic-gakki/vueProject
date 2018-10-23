//入口文件

//1.导入vue
import Vue from 'vue'

//2.1导入mui样式表
import '../lib/MUI/css/mui.css'

//2.2导入MUI扩展的图标样式表(依赖字体图标，需要手动引入到项目中)
import '../lib/MUI/css/icons-extra.css'

//3.导入mint-ui的需要的组件,并注册为全局组件，同时导入mint-ui的样式表
import {Header,Swipe,SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

//4. 导入vue-router,并注册为全局组件
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//5. 导入路由入口文件
import router from './router.js'


//导入app组件，渲染到页面
import app from '../App.vue'
const vm = new Vue({
	el:'#app',
	data:{},
	render: h => h(app),
	router
})


