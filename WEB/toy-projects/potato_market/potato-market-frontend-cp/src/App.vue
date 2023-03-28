<template>
  <div id="app">
    <header>
      <h2>{{ $store.state.title }}</h2>
    </header>

    <router-view/>

    <footer>
      <router-link to="/sell/home"><h3>Seller-Home</h3> </router-link>
      <br/>
      <router-link to="/"><h3>Buyer-Home</h3></router-link>
    </footer>

  </div>
</template>

<script>
export default {
  created(){
    this.$store.commit("SET_TITLE", "POTATO-MARKET")
  }

}
</script>

<style>
header,footer{
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
  background-color: rgb(233, 238, 225);
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app>header{
  text-align: center;
}

#app>div{
  flex:1;
}
#app>footer{
  text-align: center;
}


</style>
