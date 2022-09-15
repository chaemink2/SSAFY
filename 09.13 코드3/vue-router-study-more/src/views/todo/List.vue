<template>
  <div>
    <h1>라우터를 이동하는 방법</h1>

    <div v-for="element in arr" :key="element">
        <button @click="moveRouter(element)">라우터 {{element}} 로 이동</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    };
  },
  created() {
    console.log(this.$router);
    console.log("-------------");
    console.log(this.$route);
  },
  methods: {
    moveRouter(element) {
      this.$router.push(`/todo/${element}`);
    },
  },
};
</script>

<style>
</style>


