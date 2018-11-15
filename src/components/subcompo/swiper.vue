<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item of swiperList" :key="item.imgurl">
        <img :src="item.imgurl" :class="[isfull?'full':'']">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  // 获取父组件传递过来的属性
  props: ["swiperList", "isfull"]
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;

    img {
      height: 100%;
    }
  }
}

.full {
  width: 100%;
}
</style>
