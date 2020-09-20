<template>
  <div class="rounded profileComment border border-danger bg-profile-comment m-2 p-1" id="profileComment">
    <router-link :to="{name: 'BlogDetails' , params:{id: profileComment.blog}}">
      <div class="text-success ">
        <p class="secondary-font">{{profileComment.body}}</p>
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
.profileComment{
  background-color: rgba(12, 12, 12, 0.534);
  font-family: 'Damion', cursive;;
  transition: 0.5s ease;
  cursor: pointer;
}

.profileComment:hover {
  transform: scale(1.05);
}

</style>