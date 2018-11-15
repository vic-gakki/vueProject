//入口文件

//1.导入vue
import Vue from 'vue'

//2.1导入mui样式表
import './lib/MUI/css/mui.css'

//2.2导入MUI扩展的图标样式表(依赖字体图标，需要手动引入到项目中)
import './lib/MUI/css/icons-extra.css'

//3.导入mint-ui的需要的组件,并注册为全局组件，同时导入mint-ui的样式表
import {Header,Swipe,SwipeItem,Button,Lazyload,Switch} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
Vue.component(Switch.name,Switch)
//图片懒加载
Vue.use(Lazyload)

//4. 导入vue-router,并注册为全局组件
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//5. 导入路由入口文件
import router from './router.js'

//6. 定义全局的过滤器,需要使用时间处理插件moment，导入该模块
import moment from 'moment'
Vue.filter('dateFormat',(dataStr,pattern='YYYY-MM-DD HH:mm:ss')=>{
	return moment(dataStr).format(pattern)
})


//7. 导入vue-resource组件,注册为全局，并配置相关信息
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:8080'


//8. 导入vue-preview模块，实现图片的缩略图预览,并安装在全局Vue上
import vuePreview from 'vue-preview'
Vue.use(vuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

//9. 引入vuex组件，用于状态管理
import Vuex from 'vuex'
Vue.use(Vuex)

// 在给cart设置值之前，从本地存储中读取记录
var cart = JSON.parse(localStorage.getItem('cart') || '[]')
var store = new Vuex.Store({
  // 类似data
  state:{
    // 用于存储购物车中的信息  ===> 包含：id,count,price,isSelected     ===> 一边存入title,imgurl
    cart
  },
  // 类似methods
  mutations: {
    // 将商品信息添加至购物车    ===> 存在则增加数量，否则直接添加该对象
    addToCart(state,goodsInfo){
      // 定义flag判断购物车中是否存在该商品，默认不存在
      var flag = false
      state.cart.some(item => {
        if(item.id == goodsInfo.id){
          flag = true
          item.count += (goodsInfo.count - 0)
          return true
        }
      })
      if(!flag){
        state.cart.push(goodsInfo)
      }

      // 加入购物车后，将信息持久化至本地
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    updataCount(state,goodsinfo){
      // 同步更新数量
      state.cart.some(item => {
        if(item.id == goodsinfo.id){
          item.count = goodsinfo.count - 0;
          return true
        }
      })
      //将信息持久化至本地
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    // 根据id删除商品
    deleteGoods(state,id){
      state.cart.some((item,index) => {
        if(item.id == id){
          state.cart.splice(index,1)
          return true
        }
      })
      //将信息持久化至本地
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },

    // 更新商品的勾选状态
    updateSelectedState(state,goodsState){
      state.cart.some(item => {
        if(item.id == goodsState.id){
          item.isSelected = goodsState.state
          return true
        }
      })
      //将信息持久化至本地
      localStorage.setItem('cart',JSON.stringify(state.cart))
    }
  },
  // 类似computed + filter
  getters: {
    // 用于计算购物车总件数
    totalItem(state){
      var sum = 0
      state.cart.forEach(item => {
        sum += item.count
      })
      return sum
    },

    // 用于计算勾选的商品件数及总价
    getTotalNumAndPrice(state){
      var selectCount = 0;
      var selectPrice = 0;
      state.cart.forEach(item => {
        if(item.isSelected){
          selectCount += item.count;
          selectPrice += item.count * item.price
        }
      })
      return {selectCount,selectPrice}
    }
  }
})

 
//导入app组件，渲染到页面
import app from './App.vue'
const vm = new Vue({
	el:'#app',
	data:{},
	render: h => h(app),
	router,
  store
})


