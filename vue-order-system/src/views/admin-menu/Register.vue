<template>
  <div>
    <div class="form-wrapper">
      <div>메뉴 이름 : <input type="text" v-model="name"></div>
      <div>메뉴 설명 : <input type="text" v-model="description"></div>
      <input type="file" v-on:change="fileChange">

      <div v-if="$route.params.id">
        <button @click="update">메뉴 수정</button>
        <button @click="updateImage">그림 수정</button>
      </div>

      <button v-on:click="create">메뉴 추가</button>
    </div>


    <div class="image-wrapper" v-if="file">
      <img src="setURL(file)" width="100%" />
    </div>
  </div>
</template>

<script>
import { api } from '@/utils/axios'
export default {
  
  data(){
    return{
      name: "",
      description: "",
      file: null,
    }
  },
  
  async updateImage(){
    const result = await api.menus.updateImage(this.$route.params.id, this.file);
    console.log(result);
    alert(result.data.message);
  },
  methods:{
    async create(){
      


      if (!this.name || !this.description || !this.file) {
        alert("내용을 전부 작성해주세요.")
      }

      const result = await api.menus.create(
        this.name,
        this.description,
        this.file
      )
      console.log(result);

      if(result.data.success) {
        alert(result.data.message);
        this.$router.push("/admin/menus");
      }
      if (!result.data.success) {
        alert(result.data.message);
      }
    },
    fileChange(e){
      console.log(e.target.files);
      this.file = e.target.files[0];
    },
    setURL(file){
      console.log(file);
      const imageURL = URL.createObjectURL(file);
      console.log(imageURL);
      return imageURL;
    }
  },
  async created(){
    if (this.$route.params.id){
      this.$store.comit("SET_TITLE","메뉴 수정하기")
      const result = await api.menus.findOne(this.$route.params.id)
      this.name = result.data.name;
      this.description = result.data.description;
    } else {
      this.$store.comit("SET_TITLE","메뉴 추가하기")
    }    
  },
  async update(){
    const result = await api.menus.update(this.$route.params.id, this.name, this.description);
    console.log(result);
    alert(result.data.message);
    this.$router.push(`/admin/menus/${this.$route.params.id}`)
  },
}
</script>

<style>
.form-wrapper{
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 50px;
  border: 1px solid black;
}

.form-wrapper > * {
  margin: 10px;
}

.image-wrapper{
  margin-top: 30px;
}
</style>
