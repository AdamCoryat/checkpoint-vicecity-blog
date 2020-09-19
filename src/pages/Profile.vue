<template>
  <div class="about container-fluid">
    <div class="row">
      <div class="col-4 text-center">
          <div class="card card-body bg-profile border border-success text-success">
          <h4>Welcome {{ profile.name }}</h4>
          <img class="rounded" :src="profile.picture" alt="" />
          <p>{{ profile.email }}</p>
        </div>
      </div>
      <div class="col-2 text-center">
        <profile-comment v-for="comment in profileComments" :key="comment.id" :profileComment="comment"/>
      </div>
      <div class="col-6">
        <blog v-for="blog in profileBlogs" :key="blog.id" :blog="blog"/>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog.vue"
import ProfileComment from "../components/ProfileComment.vue"
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
    ProfileComment,
    Blog
  }

};
</script>

<style scoped>
.bg-profile{
  background-color: rgba(12, 12, 12, 0.534);
  font-family: 'Orbitron', sans-serif;
}
img {
  max-width: 100px;
}
</style>
