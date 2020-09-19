<template>
  <div>
    <h2>{{cate.title.name}}</h2>
    <div>
      <van-grid :column-num="3">
        <van-grid-item
          v-for="value in cate.child"
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
    cate: {},
  },
};
</script>

<style>
</style>