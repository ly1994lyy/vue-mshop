<template>
  <div class="cate-box">
    <div class="cate-left">
        <cate-left @handleCate="handleCate" :categoryList="categoryList" />
    </div>
    <div class="cate-right">
        <cate-right :cateChild="categoryList" :index="index" />
    </div>
  </div>
</template>

<script>
import CateLeft from './CateLeft'
import CateRight from './CateRight'

export default {
  props: {
    categoryList: Array,
  },
  components:{
      CateLeft,
      CateRight
  },
  data(){
      return {
          index:0,
      }
  },
  methods:{
      handleCate(index){
          this.index = index
      }
  }
};
</script>

<style lang="scss" scoped>
.cate-box{
    margin-top: 46px;
    margin-bottom: 46px;
  .cate-left{
    overflow: scroll;
    display: fixed;
    left: 0;
    top:46px;
    bottom: 46px;
    width: 80px;
  }
  .cate-right{
    overflow: scroll;
    position: fixed;
    left: 80px;
    top: 46px;
    bottom: 46px;
    width: calc(100% - 80px);
    right: 0;
  }
}
</style>