<template>
  <div class="cate-box">
    <h3>{{child.name}}</h3>
    <div class="cate-child">
      <van-grid :column-num="3" icon-size="70px" :border="false">
        <van-grid-item
          v-for="value in child.children"
          :key="value.id"
          :icon="value.icon"
          :text="value.name"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    child: Object,
  },
};
</script>

<style lang="scss" scoped>
.cate-box {
  margin-left: 10px;
  .van-grid-item__content {
    padding: 0 !important;
  }
}
</style>