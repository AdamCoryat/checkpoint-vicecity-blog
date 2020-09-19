<template>
  <div class="blog-details container-fluid" id="blog-details">
    <div class="row d-flex justify-content-center">
      <div class="col-12 col-md-6 m-5">
        <div class="card blog text-success border border-sucess">
          <div class="card-body">
            <button v-if="isCreator" @click="editToggle = !editToggle">Edit</button>
            <h5 class="card-title">{{activeBlog.title}}</h5>
            <p class="card-text">{{activeBlog.body}}</p>
            <p class="card-text">{{activeBlog.creatorEmail}}</p>
            <button @click="deleteById" v-if="isCreator" class="btn btn-danger">Delete</button>
          </div>
          <div class="card-body border border-success">
          <comment v-for="comment in comments" :key="comment._id" :comment="comment"/>      
          </div>
          <div class="card-body border border-success flex-wrap inline">
            <form @submit.prevent="createComment" class="md-form">
            <input
              v-model="newComment.body"
              type="text"
              id="materialSaveFormName"
              class="form-control blog border border-secondary text-success"
              placeholder="Add Comment...">
              <label for="title">Comment</label>
              <button type="submit" class="btn btn-secondary mx-2">Add</button>
              </form>
          </div>
        </div>
      </div>
      <div class="col-2">
         <div class="card-body px-lg-5 pt-0">
            <form @submit.prevent="editBlog" class="md-form" v-if="editToggle">
                        <input
                         v-model="blogEdit.title"
                         type="text"
                         id="materialSaveFormName"
                         class="form-control"
                         placeholder="Title...">
                        <label for="title">Title</label>
                        <textarea
                         v-model="blogEdit.body"
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
  </div>
</template>


<script>
import Comment from "../components/Comment.vue"
export default {
  name: 'blogDetails',
  mounted(){
    this.$store.dispatch('getById', {resource: 'blogs/', id: this.$route.params.id, path: 'activeBlog'}),
    this.$store.dispatch('getById', {resource: 'blogs/', id: this.$route.params.id + '/comments' , path: 'comments'})
  },
  data(){
    return {
      newComment:{
        blog: this.$route.params.id
      },
      blogEdit: {},
      editToggle: false, 


    }
  },
  computed:{
    activeBlog(){
      return this.$store.state.activeBlog
    },
    isCreator(){
      return this.$store.state.profile.email == this.activeBlog.creatorEmail
    },
    comments(){
      return this.$store.state.comments
    }
  },
  methods:{
    deleteById(){
      this.$store.dispatch('deleteById', {resource: 'blogs/', id: this.$route.params.id, path: 'activeBlog'})
    },
    createComment(){
      this.$store.dispatch('create', {data:this.newComment, path: 'comments'})
    },
    editBlog(){
      this.$store.dispatch('edit', {resource: 'blogs/', id: this.$route.params.id, data:this.blogEdit, path:'blogs/' + this.$route.params.id})
      this.editToggle = false 
    }
 
  },
  components:{
    Comment
  }
}
</script>


<style scoped>
.blog{
  background-color: rgba(12, 12, 12, 0.534);
  font-family: 'Damion', cursive;;
}

</style>