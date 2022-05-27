<template lang="">

<form @submit.prevent="add">
 <div class="form-group">
 <input type="text" class="form-control" placeholder="Nom" v-model="categoriess.nomcategorie">
 </div>
 <div class="form-group">
 <FilePond max-files="1" @change="onFileChange"/>
</div>

 <button type="submit" class="btn btn-block btn-primary">Ajouter
Catégorie</button>
</form>
</template>
<script>
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'; 
export default {
     components: {
 FilePond: vueFilePond(FilePondPluginImagePreview)
 }, 
 data() {
 return {
    categoriess:{
 nomcategorie: "",
 imagecategorie: ""}
 }
 },
 methods: {

 add(){
 
 this.axios.post("http://localhost:8000/api/categories",this.categoriess)
 .then(() => {
 this.$router.push('/categories')})
 
 },
 onFileChange(e) {
 this.categoriess.imagecategorie = "categories/"+e.target.files[0].name;
 }
 }
}
</script>
<style lang="">

</style>