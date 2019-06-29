<template>
  <div class="home">
    <!-- 轮播图 -->
    <cube-slide :data="slider" :interval="5000">
      <cubu-slide-item v-for="item in slider" :key="item.id">
        <router-link :to="`/detail/${item.id}`">
          <img :src="item.img" class="slider">
        </router-link>
      </cubu-slide-item>
    </cube-slide>

    <goods-list :goods="filterGoods"></goods-list>
  </div>
</template>

<script>
import GoodsList from '@/components/GoodsList'

export default {
  name: 'home',
  components:{
    GoodsList
  },
  data(){
    return{
      slider:[],
      selectedKeys:[],
      keys:[],
      goods:[]
    }
  },
  async created(){
    const {
      data:{data:goods,slider}
      } = await this.$http.get('/api/goods')
    this.slider = slider
    this.keys = keys
    this.goods = goods
    this.selectedKeys = [...keys]  //默认选中全部的分类
  },
  computed:{
    filterGoods(){
      let ret = []
      this.selectedKeys.forEach(v => {
        ret = ret.concat(this.goods[v])
      });
      return ret
    }
  }
}
</script>

<style>
.cube.slide{
  height: auto;
}

.cube.slide-itme > a > img{
  width: 100%
}
</style>
