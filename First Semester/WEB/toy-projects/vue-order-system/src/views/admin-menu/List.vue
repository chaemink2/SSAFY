<template>
  <div>
    <router-link to="/admin/menus/register">
      <b-button class="order button w-100" variant="outline-primary">메뉴 추가</b-button>
    </router-link>

    <div v-for="menu in menus" v-bind:key="menu.id" v-on:click="moveDetail(menu.id)">
      <div class="main-container">
        
        <div class="menu-image" :style="`background-image:url(${setImage(menu.image_src)})`"></div>
        <div class="menu-info-wrapper">
          <h2 class="menu-name">{{menu.name}}</h2>
          <p class="menu-description">{{menu.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/axios";
// @ -> src (경로지원자)

export default {
  data() {
    return {
      menus: []
    };
  },
  async created() {
    const result = await api.menus.findAll();
    console.log(result.data);
    this.menus = result.data;
  },
  methods:{
    setImage(image_src){
      return `http://3.35.208.145:8080/${image_src}`
    },
    moveDetail(id) {
      this.$router.push(`/admin/menus/${id}`)
    }
  }
}
</script>

<style>
.menu-image{
  width: 180px;
  height: 180px;
  background-size: cover;
  background-position: center;
}
.menu-container{
  display: flex;
  border-bottom: 1px solid black;
  align-items: center;
}
.menu-info-wrapper{
  margin: 0 auto;
  text-align: center;
}
.menu-name{
  font-size: 25px;
  font-weight: bold;
}
.menu-description{
  padding-top: 10px;
}

</style>
