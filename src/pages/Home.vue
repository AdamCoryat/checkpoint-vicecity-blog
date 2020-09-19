<template>
  <div class="home container-fluid">

<div class="row d-flex justify-content-center">
<blog v-for="blog in blogs" :key="blog._id" :blog="blog"/>
</div>

  </div>
</template>


<script>
import Blog from "../components/Blog.vue"
export default {
  name: 'home',
  mounted(){
    this.$store.dispatch('getResource', 'blogs' )
  },
  data(){
    return {}
  },
  computed:{
    blogs(){
     return this.$store.state.blogs
    }
  },
  methods:{
  },
  components:{
    Blog
  }
}
</script>


<style scoped>

</style>