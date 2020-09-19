<template>
  <div class="comment border border-danger" id="comment">
    <p class="">{{comment.body}}</p>
    <button v-if="isCreator" @click="deleteComment">Delete</button>
    <button v-if="isCreator" @click="editToggle = !editToggle">Edit</button>
     <form @submit.prevent="editComment" class="md-form" v-if="editToggle">
                        <input
                         v-model="commentEdit.body"
                         type="text"
                         id="materialSaveFormName"
                         class="form-control"
                         placeholder="Comment edit...">
                         </form>
  </div>
</template>


<script>
export default {
  props:{
    comment: {}
  },
  name: 'comment',
  data(){
    return {
      commentEdit:{},
      editToggle: false
    }
  },
  computed:{
     isCreator(){
      return this.$store.state.profile.email == this.comment.creatorEmail
    }
  },
  methods:{
    deleteComment(){
      this.$store.dispatch('deleteById', {resource: 'comments/', id: this.comment.id, path: 'comments'})
    },
    editComment(){
      this.$store.dispatch('edit', {resource: 'comments/', id: this.comment.id, data:this.commentEdit, path: 'blogs/' + this.comment.blog})
    }
  },
  components:{}
}
</script>


<style scoped>

</style>