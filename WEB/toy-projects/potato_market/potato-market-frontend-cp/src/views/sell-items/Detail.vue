<template>
  <div>
<div>
  <b-card
    :title="data.name"
    :img-src="setImage()"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2 detail-card"
  >
    <b-card-text>
      {{data.description}}
    </b-card-text>

    <b-button @click="moveRegister" href="#" variant="primary">수정하기</b-button>
    <b-button @click="deleteMenu" href="#" variant="danger">삭제하기</b-button>
    <b-button @click="moveList" href="#" variant="outline-primary">돌아가기</b-button>
  </b-card>
</div>
  </div>
</template>

<script>
import { api } from "@/utils/axios"

export default {
  data(){
    return {
      data: {}
    }
  },
  async created(){
    const result = await api.items.findOne(this.$route.params.id)
    console.log(result)
    this.data = result.data
  },
  methods:{
    moveList(){
      this.$router.push("/sell/items")
    },
    setImage() {
      return `http://localhost:8081/${this.data.image_src}`;
    },
    async deleteMenu(){
      const confirmResult = confirm("삭제하시겠습니까?")
      if(confirmResult){
        const result = await api.items.delete(this.$route.params.id)
        alert(result.data.message)
        this.$router.push("/sell/items")
      }
    },
    moveRegister(){
      this.$router.push(`/sell/items/register/${this.$route.params.id}`)
    }
  }
}
</script>

<style>

</style>
