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

    <b-button @click="moveRegister" href="#" variant="primary">주문하기</b-button>
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
    // 지금의 정보들을 활용하여, axios 요청하겠다
  },
  methods:{
    moveList(){
      this.$router.push("/buyer")
    },
    setImage() {
      return `http://localhost:8081/${this.data.image_src}`;
    },
    
    moveRegister(){
      this.$router.push(`/buyer/register/${this.$route.params.id}`)
    }
  }
}
</script>

<style>

</style>
