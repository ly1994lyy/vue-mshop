<template>
  <van-nav-bar :title="title" left-arrow @click-left="onClickLeft">
    <template #right>
      <slot></slot>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>