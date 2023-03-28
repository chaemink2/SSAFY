<template>
  <div>
    후라이드 치킨
    <ChickenChild></ChickenChild>
    <br>
    title: {{$store.state.title}}
    <br>
    salt: {{$store.state.salt}}
    <br>
  </div>
</template>

<script>
import ChickenChild from "./ChickenChild.vue"
export default {
    components:{
        ChickenChild
    }
}
</script>

<style>

</style>