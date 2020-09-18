<template>
  <van-nav-bar title="标题">
      <template #left>
        <van-icon name="wap-nav" size="18" @click="$router.push('/category')" />
    </template>
    <template #right>
        <van-icon name="manager" />
    </template>
    </van-nav-bar>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.van-nav-bar{
    background: #c82519;
    .van-icon{
        font-size: 28px !important;
        color: #fff;
    }
}
</style>