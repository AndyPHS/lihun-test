<template>
  <div>
    <div>
      <img :src="this.codeUrl">
      <div @click="changeCode">点击获取</div>
    </div>
  </div>
</template>

<script>
import {verifyCode} from '@/api/api/AgreementRequest.js'
export default {
  name:'test',
  data () {
    return {
      codeUrl: '',
      code_key: ''
    }
  },
  mounted () {

  },
  methods: {
    changeCode () {
      verifyCode({cache:new Date().getTime()}).then((data) => {
        this.codeUrl = data.data.img
        this.code_key = data.data.key
        console.log(this.codeUrl)
        console.log(this.code_key)
      })
    }
  }
}
</script>

<style>
</style>
