<template>
  <div class="create-blog container-fluid" id="create-blog">
<div class="row">
  <div class="col-6">
    <div class="m-5 card border-success s-bg shadow">
      <h1 class="card-header text-center text-success py-4 primary-font">
        <strong>Create Blog</strong>
          </h1>
        <div class="card-body primary-font px-lg-5 pt-0">
            <form @submit.prevent="createBlog" class="md-form">
                        <input
                         v-model="newBlog.title"
                         type="text"
                         id="materialSaveFormName"
                         class="form-control s-bg border-success text-success"
                         placeholder="Title...">
                        <label for="title" class="text-success">Title</label>
                        <textarea
                         v-model="newBlog.body"
                         type="text"
                         id="materialSaveFormMessage"
                         class="form-control text-success s-bg border-success"
                         rows="3"
                         placeholder="Blog Body...">
                         </textarea>
                        <label for="body" class="text-success">Blog Body</label>                     
               <button class="btn btn-primary btn-rounded btn-block z-depth-0 my-4" type="submit">Save</button>
            </form>
       </div>
    </div>
  </div>
  <div class="col-6 text-center">
  <img class="rounded shandow my-4 border border-success" src="../assets/create.jpg" sytle="width: 30vw " alt="">
  </div>
</div>
  </div>
</template>


<script>
export default {
  name: 'create-blog',
  mounted(){
  },
  data(){
    return {
      newBlog: {
      }
    }
  },
  computed:{
    profile(){
      return this.$store.state.profile
    }
  },
  methods:{
    createBlog(){
      this.$store.dispatch("create", {data:this.newBlog, path: 'blogs'})
    }
  },
  components:{}
}
</script>


<style scoped>
</style>