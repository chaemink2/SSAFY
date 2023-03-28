<template>
  <div class="back-container">

    <div class="main-container">

      <div id="container" color="green"><h1 class="style-1"> 감자마켙 </h1></div>

        <div>
          
          
        </div>

        <div>
          <router-link to="/buyer">
            <b-icon-basket2 class="icon" scale="4" variant="success"></b-icon-basket2>
            <b-button class="button" variant="success" size="lg"> 장 보러 가기 </b-button>
          </router-link>
        </div>

    </div>

    

  </div>
</template>

<script>
export default {
  created(){
    this.$store.commit("SET_TITLE", "강원 작물 직거래 장터 [구매]")
  }
}
</script>


<style scoped>
/* scoped = 해당 컴포넌트에서만 해당 css가 적용 */
@import url(https://fonts.googleapis.com/css?family=Oswald);

.back-container{
  background-color: rgb(230, 238, 182);
}
.main-container{
  position: absolute;
  flex-direction: column;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.main-container > div{
  text-align: center;
  margin-top: 20px;
}

#container h1 {
  font-weight: normal;
  text-transform: uppercase;
  margin: 0.3125em 0;
  background-color: #c2b617ab;
  color: rgba(39, 109, 18, 0.664);
  position: relative;
  display: inline-block;
  padding: 0 10px;
}

.style-1 {
  font-family: "Pacifico", sans-serif;
  font-size: 140px;
  text-transform: none!important;
}

.icon{
  min-width: 100px;
}

.button{
  min-width: 180px;
}

</style>
