<template>
  <div>
    <cate-header />
    <cate-body :categoryList="categoryList" />
  </div>
</template>

<script>
import CateHeader from '../components/CateHeader'
import CateBody from '../components/CateBody'
import { getCate } from '../api/category'
import { setTreeData } from '../utils/filterCate'

export default {
  components:{
    CateHeader,
    CateBody,
  },
  data(){
    return {
      categoryList:[]
    }
  },
  methods:{
    async fetch(){
      const res = await getCate()
      this.categoryList = setTreeData(res.data.data)
    },
  },
  created(){
    this.fetch()
  }
}
</script>

<style lang="scss" scoped>

</style>