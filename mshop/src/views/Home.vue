<template>
  <div>
    <home-header />
    <swiper />
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import Swiper from '../components/Swiper'
import { getCate } from '../api/category'

export default {
  name: 'Home',
  components:{
    HomeHeader,
    Swiper
  },
  data() {
    return {
      model:[]
    }
  },
  methods:{
    async fetch(){
      const res = await getCate()
      console.log(res.data)
    }
  },
  created(){
    this.fetch()
  }
}
</script>
