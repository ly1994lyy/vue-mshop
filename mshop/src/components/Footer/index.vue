<template>
  <van-tabbar route>
    <van-tabbar-item replace to="/">
      <img slot="icon" slot-scope="props" :src="props.active ? icon.homeActive : icon.homeNormal" />
    </van-tabbar-item>
    <van-tabbar-item replace to="/category">
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.categoryActive : icon.categoryNormal"
      />
    </van-tabbar-item>
    <van-tabbar-item :info="shopCarInfo" replace to="/shopcar">
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.shopCatNormal : icon.shopCatNormal"
      />
    </van-tabbar-item>
    <!-- <van-tabbar-item replace v-if="!user" to="/login">
      <img slot="icon" slot-scope="props" :src="props.active ? icon.noLogin : icon.noLogin" />
    </van-tabbar-item> -->
    <van-tabbar-item replace to="/userinfo">
      <img slot="icon" slot-scope="props" :src="props.active ? icon.userActive : icon.userNormal" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      icon: {
        homeNormal:
          "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png",
        homeActive:
          "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png",
        categoryNormal:
          "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png",
        categoryActive:
          "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png",
        shopCatNormal:
          "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png",
        shopCatActive:
          "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/45205/32/12889/3890/5d9c4b12E7bc2c425/dd60fafbde8542ca.png",
        noLogin:
          "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png",
        userActive:
          "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png",
        userNormal:
          "https://m.360buyimg.com/mobilecms/jfs/t16849/271/702371255/4462/d55edd83/5aa10cf6Nee5122a5.png",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>