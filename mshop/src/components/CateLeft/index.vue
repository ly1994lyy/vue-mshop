<template>
  <van-sidebar v-model="activeKey" @change="onChange">
    <van-sidebar-item v-for="item in cateList" :title="item.name" :key="item.id" />
  </van-sidebar>
</template>

<script>
export default {
  props: {
    cateList: [],
  },
  data(){
    return {
      activeKey:0
    }
  },
  methods: {
    onChange(index) {
      this.$emit('handleCate',this.cateList[index].id);
      console.log(this.cateList[index].id)
    },
  },
};
</script>

<style>
</style>