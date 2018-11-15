<template>
  <div class="mui-numbox" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="count" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox()
    
  },
  methods: {
    // 数量改变应该同步到cart中，并本地存储
    countChanged() {
      var count = this.$refs.numbox.value
      var id = this.id
      this.$store.commit('updataCount',{id,count})
    }
  },
  props: ["count","id"],
  watch: {
    // 属性监听
    // max: function(newVal, oldVal) {
    //   // 使用 JS API 设置 numbox 的最大值
    //   console.log(newVal + '<>')
    //   mui(".mui-numbox")
    //     .numbox()
    //     .setOption("max",newVal);
    // }
  }
};
</script>

<style lang="less" scoped>

</style>
