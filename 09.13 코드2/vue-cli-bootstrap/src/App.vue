<template>
    <div id="app">
        <b-form-input 
        v-model="myName"
        placeholder="이름을 입력하세요">            
        </b-form-input>
        <div>이름: {{myName}}</div>
        <div>
            <b-spinner label="로딩중"></b-spinner>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myName: "",
        };
    },
};
</script>

<style>

</style>