<template>
  <div>
      <cate-item v-for="item in cateChild" :cate="item" :key="item.title.id" />
  </div>
</template>

<script>
import CateItem from './CateChildItem'

export default {
    props:{
        cateChild:[]
    },
    components:{
        CateItem,
    }
}
</script>

<style>

</style>