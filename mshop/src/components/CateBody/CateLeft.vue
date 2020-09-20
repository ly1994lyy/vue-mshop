<template>
  <van-sidebar v-model="activeKey" @change="onChange">
    <van-sidebar-item v-for="item in categoryList" :title="item.name" :key="item.id" />
  </van-sidebar>
</template>

<script>
export default {
  props: {
    categoryList: Array,
  },
  data() {
    return {
      activeKey: 0,
    };
  },
  methods: {
    onChange(index) {
      this.$emit('handleCate',index)
    },
  },
};
</script>

<style>
</style>