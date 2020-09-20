<template>
  <div class="comment" id="comment">
    <div class="card m-1 p-1 s-bg">
        <p class="secondary-font">{{comment.body}}</p>
        <p class="font-italic text-primary">-{{comment.creatorEmail}}</p>
    </div>  
        <i v-if="isCreator" @click="deleteComment" class="mx-2 fa fa-trash-o pointer text-primary" aria-hidden="true"></i>
        <i v-if="isCreator" @click="editToggle = !editToggle" class="mx-2 fa fa-pencil pointer text-primary" aria-hidden="true"></i>
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
      swal({
        title: "Are you sure?",
        text: "Once deleted, its gone forever...",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
    .then((willDelete) => {
      if (willDelete) {
        this.$store.dispatch('deleteById', {resource: 'comments/', id: this.comment.id, path: 'comments'})
      swal("Boom, Comment Delorted!", {
        icon: "success",
      });
      } else {
        swal("Wise choice!");
      }
    });       
  },
    editComment(){
      swal("Edit has been saved!")
    .then((value) => {
      this.$store.dispatch('edit', {resource: 'comments/', id: this.comment.id, data:this.commentEdit, path: 'blogs/' + this.comment.blog})
    swal(`Congrats on editing your comment!`);
      });  
    }
  },
  components:{}
}
</script>


<style scoped>

</style>