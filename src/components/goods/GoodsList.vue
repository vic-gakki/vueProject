<template>
  <div class="goods-list">
    <!-- 编程式导航：使用js控制路由跳转  history对象-->
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>


    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import {getUuid} from '../../utils/comom.js'
export default {
  data() {
    return {
      pageindex: 1, // 分页的页数
      goodslist: [] // 存放商品列表的数组
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      // 获取商品列表
      // this.$http
      //   .get("api/getgoods?pageindex=" + this.pageindex)
      //   .then(result => {
      //     if (result.body.status === 0) {
      //       // 追加至已有数据后面
      //       this.goodslist = this.goodslist.concat(result.body.message);
      //     }
      //   });
      const arr = [
        {id:getUuid(8,16),img_url:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798112.jpg',title:'HUAWEI P20 6GB+64GB 全网通版（极光色）',sell_price:3188,market_price:3388,stock_quantity:60},
        {id:getUuid(8,16),img_url:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798112.jpg',title:'HUAWEI P20 6GB+64GB 全网通版（极光色）',sell_price:3188,market_price:3388,stock_quantity:60},
        {id:getUuid(8,16),img_url:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798112.jpg',title:'HUAWEI P20 6GB+64GB 全网通版（极光色）',sell_price:3188,market_price:3388,stock_quantity:60},
        {id:getUuid(8,16),img_url:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798112.jpg',title:'HUAWEI P20 6GB+64GB 全网通版（极光色）',sell_price:3188,market_price:3388,stock_quantity:60},
        {id:getUuid(8,16),img_url:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798112.jpg',title:'HUAWEI P20 6GB+64GB 全网通版（极光色）',sell_price:3188,market_price:3388,stock_quantity:60},
        {id:getUuid(8,16),img_url:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798112.jpg',title:'HUAWEI P20 6GB+64GB 全网通版（极光色）',sell_price:3188,market_price:3388,stock_quantity:60},
        {id:getUuid(8,16),img_url:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798112.jpg',title:'HUAWEI P20 6GB+64GB 全网通版（极光色）',sell_price:3188,market_price:3388,stock_quantity:60},
        {id:getUuid(8,16),img_url:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798112.jpg',title:'HUAWEI P20 6GB+64GB 全网通版（极光色）',sell_price:3188,market_price:3388,stock_quantity:60},
        {id:getUuid(8,16),img_url:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798112.jpg',title:'HUAWEI P20 6GB+64GB 全网通版（极光色）',sell_price:3188,market_price:3388,stock_quantity:60},
        {id:getUuid(8,16),img_url:'https://res.vmallres.com/pimages//product/6901443237784/group//78_78_1525340798112.jpg',title:'HUAWEI P20 6GB+64GB 全网通版（极光色）',sell_price:3188,market_price:3388,stock_quantity:60}
      ]
      this.goodslist = this.goodslist.concat(arr)
    },
    getMore() {
      this.pageindex++;
      this.getGoodsList();
    },
    goDetail(id) {
      // $router对象中存放的是操作路由的方法
      this.$router.push({ name: "goodsinfo", params: { id } });
    }
  }
};
</script>

<style lang="less" scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
  
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 90%;
      display:block;
      margin: 0 auto;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
