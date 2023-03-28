<template>
  <div>
    현재 라우터는 {{$route.params.id}} 입니다
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$route);
  }
}
</script>

<style>

</style>

