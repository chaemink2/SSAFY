<template>
  <div>
    <div v-for="item in items" v-bind:key="item.id" @click="moveDetail(item.id)">
      <div class="main-container">
        <div
          class="item-image"
          :style="`background-image:url(${setImage(item.image_src)})`"
        ></div>
        
        <div class="item-info-wrapper">
          <h2 class="item-name"> {{item.name}} </h2>
          <p class="item-description">{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/axios"

export default {
  data(){
    return {
      items : []
    }
  },
  async created(){
    const result = await api.items.findAll()
    console.log(result.data)
    this.items = result.data
  },
  methods: {
    setImage(image_src) {
      return `http://localhost:8081/${image_src}`;
    },
    moveDetail(id){
      this.$router.push(`/buyer/${id}`)
    }
  }
}
</script>

<style>
.main-container{
  display: flex;
  border-bottom: 3px solid black;
  align-items: center;
}

.item-image{
  width:180px;
  height: 180px;
  background-size : cover;
  background-position: center;
}
.item-info-wrapper{
  margin : 0 auto;
  text-align: center;
}
.item-name{
  font-size: 25px;
  font-weight: bold;
}
.item-description{
  padding-top:10px;
}

</style>
