<template>
  <div>
    <h2>라우터를 이동하는 방법</h2>
    <router-link to="/board/1">라우터를 이동하는 방법 1</router-link>
    <br>
    <!-- v-on:click  === @click -->
    <button @click="moveRouter">라우터를 이동하는 법 2</button>
  </div>
</template>

<script>
export default {
  created(){
    // 라우터 이동등 라우터에 대한 기능 정의가 들어가 있음
    console.log(this.$router);
    console.log("=============")
    // 현재 라우터에 대한 정보
    console.log(this.$route)
  },
  methods:{
    moveRouter(){
      // this.$router.push(라우터 주소)
      // 특정 라우터로 이동
      this.$router.push("/board/2")
    }
  }
}
</script>

<style>

</style>