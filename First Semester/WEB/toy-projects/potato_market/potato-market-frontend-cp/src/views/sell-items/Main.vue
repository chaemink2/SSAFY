<template>
  <div>

    <div class="main-container">
      
      <div class="icon-wrapper">
        <span class="material-symbols-outline">POTATO MARKET</span>
      </div>

      <div></div>

      <div>
        <router-link to="/sell/items/register">
          <b-button class="button" variant="success" size="lg"> 판매품목 추가하기 </b-button>
        </router-link>
      </div>
      <div>
        <router-link to="/sell/items">
          <b-button class="button" variant="warning" size="lg"> 판매품목 조회하기 </b-button>
        </router-link>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  created(){
    this.$store.commit("SET_TITLE", "강원 작물 직거래 장터 [판매]")
  }
}
</script>


<style scoped>
.main-container{
  position: absolute;
  flex-direction: column;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.main-container > div{
  text-align: center;
  margin-top: 30px;
}

.icon-wrapper>span{
  font-size:100px;
}

.button{
  min-width: 180px;
  flex-direction: row;
}

</style>
