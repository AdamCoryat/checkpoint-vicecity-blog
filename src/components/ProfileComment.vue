<template>
  <div class="profileComment border border-danger bg-profile-comment m-2 p-1" id="profileComment">
    <router-link :to="{name: 'BlogDetails' , params:{id: profileComment.blog}}">
      <div class="text-success ">
        <p class="">{{profileComment.body}}</p>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  props:{
    profileComment: {}
  },
  name: 'ProfileComment',
  data(){
    return {
    }
  },
  computed:{
  },
  methods:{
  },
  components:{}
}
</script>


<style scoped>
.bg-profile-comment{
  background-color: rgba(12, 12, 12, 0.534);
}

</style>