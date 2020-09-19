<template>
  <div class="blog-details container-fluid" id="blog-details">
    <div class="row d-flex justify-content-center">
      <div class="col-6 m-5">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{activeBlog.title}}</h4>
            <p class="card-text">{{activeBlog.body}}</p>
            <p class="card-text">{{activeBlog.creatorEmail}}</p>
            <button @click="deleteById" v-if="isCreator" class="btn btn-danger">Delete</button>
          </div>
        </div>
        <comment v-for="comment in comments" :key="comment._id" :comment="comment"/>      
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
    return {}
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