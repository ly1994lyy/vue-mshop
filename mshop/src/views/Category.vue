<template>
  <div>
    <cate-header />
    <div class="cate-body">
      <div class="cate-left">
        <cate-left @handleCate="handleCate" :cateList="categoryList" />
      </div>
      <div class="cate-right">
        <cate-right :cateChild="categoryChild" />
      </div>
    </div>
  </div>
</template>

<script>
import CateHeader from '../components/CateHeader'
import CateLeft from '../components/CateLeft'
import CateRight from '../components/CateRight'
import { getCate } from '../api/category'
import { filterCate, filterCateChild } from '../utils/filterCate'

export default {
  components:{
    CateHeader,
    CateLeft,
    CateRight
  },
  data(){
    return {
      categoryList:[],
      categoryChild:[]
    }
  },
  methods:{
    async fetch(){
      const res = await getCate()
      this.categoryList = filterCate(res.data.data)
      this.categoryChild = filterCateChild(res.data.data,this.categoryList[0].id)
    },
    handleCate(id){
      this.categoryChild = filterCateChild(this.categoryList,id)
    }
  },
  created(){
    this.fetch()
  }
}
</script>

<style lang="scss" scoped>
.cate-body{
  margin-top: 46px;
  margin-bottom: 46px;
  display: flex;
  .cate-left{
    overflow: auto;
    height: 100%;
    width: 80px;
  }
  .cate-right{
    overflow: auto;
    height: 100%;
    flex:1
  }
}
</style>