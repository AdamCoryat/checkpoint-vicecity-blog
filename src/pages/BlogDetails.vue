<template>
  <div class="blog-details container-fluid" id="blog-details">
    <div class="row d-flex justify-content-center">
      <div class="col-6 m-5">
        <div class="card blog text-success border border-sucess">
          <div class="card-body">
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
      }
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