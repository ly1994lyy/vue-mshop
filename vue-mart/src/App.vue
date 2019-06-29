<template>
  <div id="app">
    <transition name="route-move">
      <router-view class="child-view"/>
    </transition>
    
    <cube-tab-bar show-slider v-model="selectedLabel" :data="tabs" @change="changeHandler"></cube-tab-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data(){
    return{
      selectedLabel:'/',
      tabs:[
        {label:'Home',value:'/',icon:"cubeic-home"},
        {label:'Cart',value:'/cart',icon:"cubeic-mall"},
        {label:'Me',value:'/login',icon:"cubeic-person"},
      ]
    }
  },
  watch:{
    $route(route){
      this.selectedLabel = route.path
    }
  },
  created(){
    this.selectedLabel = this.$route.path
  },
  methods:{
    logout(){
      this.$http.get('/api/logout')
    },
    changeHandler(val){
      this.$router.push(val)
    }
  },
  computed:{
    ...mapGetters(['isLogin'])
  }
}
</script>


<style>
.cube-tab-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #edf0f4;
}
/* 页面滑动动画 */
.route-move-enter{
  transform: translate3d(-100%,0,0)
}
.route-move-leave-to{
  transform: translate3d(100%,0,0)
}
.route-move-enter-active,.route-move-leave-active{
  transition: transform 0.3s;
}
.child-view{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding-bottom: 36px;
}
</style>