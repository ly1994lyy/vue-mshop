<template>
  <van-nav-bar fixed>
      <template #left>
          <van-icon name="arrow-left" />
      </template>
    <template #title>
      <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    </template>
    <template #right>
      <van-icon name="ellipsis" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.van-nav-bar{
    .van-icon{
        font-size: 24px;
        color: #73747e;
        
    }
}
</style>