<template>
  <div class="swiper-box">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
};
</script>

<style lang="scss">
.swiper-box {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background:#f6f6f6;
  .van-swipe {
    width: 90vw;
    height: 180px;
    border-radius: 5px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>