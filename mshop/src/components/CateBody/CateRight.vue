<template>
  <div>
      <cate-item v-for="item in cateChild[index].children" :key="item.id" :child="item" />
  </div>
</template>

<script>
import CateItem from './CateItem'

export default {
    props:{
        cateChild:Array,
        index:Number
    },
    components:{
        CateItem,
    },
}   
</script>

<style>

</style>