<template>
  <div class="about container-fluid">
    <div class="row">
      <div class="col-4 text-center">
        <h4>Welcome {{ profile.name }}</h4>
        <img class="rounded" :src="profile.picture" alt="" />
        <p>{{ profile.email }}</p>
      </div>
    <div class="col-4 text-center">
      <comment v-for="comment in profileComments" :key="comment.id" :comment="comment"/>
    </div>
    <div class="col-4">
      <blog v-for="blog in profileBlogs" :key="blog.id" :blog="blog"/>
    </div>
  </div>
  </div>
</template>

<script>
import Blog from "../components/Blog.vue"
import Comment from "../components/Comment.vue"
export default {
  name: "Profile",
  mounted(){
    this.$store.dispatch('getProfile')
    this.$store.dispatch('getResource', {resource: 'profile/comments', path: 'profileComments'})
    this.$store.dispatch('getResource', {resource: 'profile/blogs', path: 'profileBlogs'})
  },
  computed: {
    profileComments(){
      return this.$store.state.profileComments
    },
    profileBlogs(){
        return this.$store.state.profileBlogs
    },
    profile() {
      return this.$store.state.profile;
    }
  },
  methods:{
  },
  components:{
    Comment,
    Blog
  }

};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
