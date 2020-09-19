<template>
  <div class="about">
    <div @click="add">导入</div>
  </div>
</template>

<script>
import { insertData } from '../utils/data'

export default {
  methods:{
    async add(){
      await insertData()
    }
  }
}
</script>
