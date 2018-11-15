<template>
  <div class="goodsdesc-container">
    <h3>{{ info.title }}</h3>

    <hr>

    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {} // 图文数据
    };
  },
  created() {
    this.getGoodsDesc();
  },
  methods: {
    getGoodsDesc() {
      // this.$http
      //   .get("api/goods/getdesc/" + this.$route.params.id)
      //   .then(result => {
      //     if (result.body.status === 0) {
      //       this.info = result.body.message[0];
      //     }
      //   });
      const htmlStr = `<div id="kindPicture-10086100716467">
              <p><a href="https://sale.vmall.com/huawei.html" target="_blank"><img src="https://res.vmallres.com/pimages/detailImg/2018/10/31/201810311140142344217.jpg" alt="详情页_-1027_02.jpg"/></a></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/05/20/201805201459307432483.jpg" alt="1920xN.JPG" title="undefined"/><br/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/04/02/201804021628311051368.jpg" alt="商详-美图.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516058788086.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/20180704151605906661.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/08/18/201808181625434546892.jpg" title="undefined" alt="201807041516054706543.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516062302353.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516068319251.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516072768177.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516071881436.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516076930141.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516083061587.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516085519116.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516091418829.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516093704826.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/20180704151610811870.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516104622035.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516104418636.jpg"/></p><p><img title="undefined" alt="GPU_TubroP20-(1920).jpg" src="https://res.vmallres.com/pimages/detailImg/2018/07/20/201807201517332873512.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516112439616.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516116868854.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/20180704151612535351.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516124737982.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516132992600.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516137224600.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516139456868.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516143939605.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516147651179.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516162310372.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516162912800.jpg"/></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516168652618.jpg"/></p><p><a href="https://v.youku.com/v_show/id_XMzQ5NTQyMDYzNg==.html? f=51627683" target="_blank"><img alt="华为商城-HUAWEI P20-1920版本.jpg" src="https://res.vmallres.com/pimages/detailImg/2018/04/13/201804130857035262891.jpg"/></a><br/></p>
            </div>
`
      this.info = {
        title: 'HUAWEI P20 6GB+64GB 全网通版（极光色) ',
        content: htmlStr
      }
    }
  }
};
</script>

<style lang="less">
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>
