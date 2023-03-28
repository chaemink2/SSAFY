<template>
  <div>
    새끼치킨
    <br><br>
    <button @click="changesalt">소금</button>
  </div>
</template>

<script>
export default {
    created(){
        console.log(this.$store.state);
    },
    methods:{
        changesalt(){
            this.$store.commit("SETSALT", 20);
        }
    }
}
</script>

<style>

</style>