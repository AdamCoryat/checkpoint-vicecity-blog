<template>
  <div class="comment border border-danger" id="comment">
    <p class="">{{comment.body}}</p>
    <button v-if="isCreator">Delete</button>
  </div>
</template>


<script>
export default {
  props:{
    comment: {}
  },
  name: 'comment',
  data(){
    return {}
  },
  computed:{
     isCreator(){
      return this.$store.state.profile.email == this.comment.creatorEmail
    }
  },
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>