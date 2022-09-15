<template>
  <div>
    <div>
     <button @click="plusAge">나이먹기</button>
    </div>
    나는 부모입니다. {{mySchoolProp}} {{myAgeProp}}
    <GrandChild v-bind:mySchoolProp="mySchoolProp" v-bind:myAgeProp="myAgeProp"></GrandChild>
  </div>
</template>

<script>
import GrandChild from "./GrandChild.vue"
export default {
    components:{
        GrandChild
    },
    props:["mySchoolProp", "myAgeProp"],
    methods: {
    plusAge(){
        this.myAge = this.myAge + 1
    }
    }
}
</script>

<style>

</style>