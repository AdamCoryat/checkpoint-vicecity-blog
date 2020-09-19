<template>
  <div class="create-blog container-fluid" id="create-blog">
<div class="row">
  <div class="col-6">
    <div class="card">
      <h5 class="card-header info-color white-text text-center py-4 bg-primary">
        <strong>Create Blog</strong>
          </h5>
        <div class="card-body bg-primary px-lg-5 pt-0">
            <form @submit.prevent="createBlog" class="md-form" style="color: #757575;">
                        <input
                         v-model="newBlog.title"
                         type="text"
                         id="materialSaveFormName"
                         class="form-control"
                         placeholder="Title...">
                        <label for="title">Title</label>
                        <textarea
                         v-model="newBlog.body"
                         type="text"
                         id="materialSaveFormMessage"
                         class="form-control md-textarea"
                         rows="3"
                         placeholder="Blog Body...">
                         </textarea>
                        <label for="body">Blog Body</label>                     
               <button class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Save</button>
            </form>
       </div>
    </div>
  </div>
  <div class="col-6">
  {{newBlog.title}}
  {{newBlog.body}}
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
      this.$store.dispatch("createBlog", this.newBlog)
    }
  },
  components:{}
}
</script>


<style scoped>

</style>

//title, body, imgUrl, tags, creatorEmail from profile