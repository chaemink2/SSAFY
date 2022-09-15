<template>
  <div>
    <div>
     <button @click="plusAge">나이먹기</button>
    </div>
    나는 조부모입니다. {{mySchool}} {{myAge}}
    <!-- <Child v-bind:보낼이름="데이터명"></Child> -->
    <Child v-bind:mySchoolProp="mySchool"
    v-bind:myAgeProp="myAge"></Child>
  </div>
</template>

<script>
import Child from "./components/Child.vue"
export default {
    components:{
        Child
    },
    data(){
        return {
            mySchool : "ssafy",
            myAge : 60,
        }
    },
    methods: {
        plusAge(){
            this.myAge = this.myAge + 1
        }
    }
}
</script>

<style>

</style>