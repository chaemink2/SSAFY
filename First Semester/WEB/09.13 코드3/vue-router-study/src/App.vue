<template>
  <!-- router-link to ="경로" 특정 라우터로 이동 -->
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/board">Board</router-link>


    <!-- router-view -->
    <!-- 라우터에 해당되는 화면이 실제로 보이는 부분 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>