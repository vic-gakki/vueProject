<template>
  <div class="goodsinfo-container">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="flag" ref="ball"></div>
    </transition>
    
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :swiperList="swiperList" :isfull="false"></swiper>
        </div>
      </div>
    </div>


    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <p>购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>


    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.goods_no }}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>


  </div>
</template>

<script>
// 导入轮播图组件
import swiper from "../subcompo/swiper.vue";
// 导入 数字选择框 组件
import numbox from "../subcompo/goodsinfo_numbox.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,  // 将路由参数对象中的 id 挂载到 data , 方便后期调用
      swiperList: [],             // 轮播图的数据
      goodsinfo: {},              // 获取到的商品的信息
      flag: false,                // 控制小球的隐藏和显示的标识符
      selectedCount: 1            // 保存用户选中的商品数量， 默认，认为用户买1个
    };
  },
  created() {
    this.getSliders();
    this.getGoodsInfo();
  },
  methods: {
    getSliders() {
      // this.$http.get("api/getthumimages/" + this.id).then(result => {
      //   if (result.body.status === 0) {
      //     this.swiperList = result.body.message;
      //   }
      // });
      
      const arr = [
        {imgurl:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798110.jpg'},
        {imgurl:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798108.jpg'},
        {imgurl:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798112.jpg'},
        {imgurl:'https://res.vmallres.com/pimages//product/6901443237784/78_78_1525340794041mp.jpg'}
      ]
      this.swiperList = arr
    },
    getGoodsInfo() {
      // 获取商品的信息
      // this.$http.get("api/goods/getinfo/" + this.id).then(result => {
      //   if (result.body.status === 0) {
      //     this.goodsinfo = result.body.message[0];
      //   }
      // });
      
      const obj = {
        title:'HUAWEI P20 6GB+64GB 全网通版（极光色）',
        market_price:3388,
        sell_price:3188,
        stock_quantity:6,
        goods_no:'HUAWEI P20',
        add_time:'2017-10-24'
      }
      this.goodsinfo = obj
    },
    goDesc(id) {
      // 点击使用编程式导航跳转到 图文介绍页面
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    goComment(id) {
      // 点击跳转到 评论页面
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    addToShopCar() {
      // 添加到购物车
      this.flag = !this.flag;
      var goodsinfo = {
        id: this.id,
        title:'HUAWEI P20 6GB+64GB 全网通版',
        imgurl:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798111.jpg',
        count: this.selectedCount,
        price: this.goodsinfo.sell_price,
        isSelected: true
      }
      this.$store.commit('addToCart',goodsinfo)

    },
    beforeEnter(el) {
      el.style.transform = "none";
    },
    enter(el, done) {
      // el.offsetWidth;
      // 获取小球的 在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },
    getSelectedCount(count) {
      // 当子组件把 选中的数量传递给父组件的时候，把选中的值保存到 data 上
      this.selectedCount = count;
      console.log("父组件拿到的数量值为： " + this.selectedCount);
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>

<style lang="less" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 146px;
  }
}
</style>
