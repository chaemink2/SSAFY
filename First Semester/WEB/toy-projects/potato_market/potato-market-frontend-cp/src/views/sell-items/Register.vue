<template>
  <div>
    <div class="form-wrapper">

      <div>
        품목 이름 : <input type="text" v-model = "name">
      </div>
      <div>
        품목 설명 : <input type="text" v-model = "description">
      </div>
      <input type="file" @change="fileChange">

      <div v-if="$route.params.id">
        <button @click="update">품목정보 수정하기</button>
        <button @click="updateImage">품목사진 수정하기</button>
      </div>

      <button v-else @click="create">판매품목 추가하기</button>
    </div>
    
    
    <div class="image-wrapper" v-if="file">
      <!-- 이미지 미리보기 -->
      <img :src="setUrl(file)" alt="파일 미리보기" width="100%">
    </div>
  </div>
</template>

<script>
import { api } from '@/utils/axios'

export default {
  data(){
    return {
      name : null,
      description : null,
      file : null,
    }
  },
  async created(){
      
      if(this.$route.params.id){
        // 수정
        this.$store.commit("SET_TITLE", "판매품목 수정하기")
        const result = await api.items.findOne(this.$route.params.id)
        console.log(result)
        this.name = result.data.name;
        this.description = result.data.description;
      } else {
        // 생성
        this.$store.commit("SET_TITLE", "판매품목 추가하기")
      }

  },
  methods:{
    async create(){
      if(!this.name || !this.description || !this.file){
        alert("빈 값이 있습니다. 내용을 전부 작성해주세요")
      }


      const result = await api.items.create(
        this.name,
        this.description,
        this.file
      )

      // 요청에 성공했을때
      if(result.data.success){
        alert(result.data.message)
        this.$router.push("/sell/items")
      }
      // 요청에 실패했을때
      if(!result.data.success){
        alert(result.data.message)
      }

    },
    fileChange(e){
      this.file = e.target.files[0]
    },
    setUrl(file){
      return URL.createObjectURL(file)
    },
    async update(){
      const result = await api.items.update(this.$route.params.id,this.name,this.description)
      alert(result.data.message)
      
      this.$router.push(`/sell/items/${this.$route.params.id}`)
    },
    async updateImage(){
      const result = await api.items.updateImage(this.$route.params.id, this.file)
      alert(result.data.message)
      this.$router.push(`/sell/items/${this.$route.params.id}`)
    }
  }
}
</script>

<style>
.form-wrapper{
  display: flex;
  flex-direction: column;
  padding:20px;
  margin-top:50px;
  border: 1px solid black;
}

.form-wrapper > * {
  margin:10px
}

.image-wrapper{
  margin-top:30px;
}

</style>
