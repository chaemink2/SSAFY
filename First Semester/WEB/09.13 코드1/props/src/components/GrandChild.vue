<template>
  <div>
    나는 자식입니다. {{mySchoolProp}} {{myAgeProp}}
  </div>
</template>

<script>
export default {
    props:["mySchoolProp", "myAgeProp"],
}
</script>

<style>

</style>