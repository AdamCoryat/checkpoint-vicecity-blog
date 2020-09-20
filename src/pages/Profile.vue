<template>
  <div class="about container-fluid">
    <div class="row">
      <div class="col-4 text-center">
          <div class="m-2 card card-body bg-profile border border-success text-success">
          <h4><span class="text-primary">Name:</span> {{ profile.name }}</h4>
          <img class="rounded shadow text-center profile-img" :src="profile.picture" alt="profile-picture" />
          <p><span class="text-primary">Email:</span>{{ profile.email }}</p>
        </div>
      </div>
      <div class="col-2">
        <div class="m-2 card card-body bg-profile border border-success text-success">
            <h3>Stats:</h3>
            <p><span class="text-primary">Total Blogs:</span> {{ profileBlogs.length }}</p>
            <p><span class="text-primary">Total Comments:</span> {{ profileComments.length }}</p>
          </div>        
      </div>
      <div class="col-6 text-center">
        <img class="m-2 border border-success shadow rounded" src="../assets/profile.jpg" style="width: 35vw" alt="">
      </div>
    </div>
      <div class="row">
        <div class="col-12 col-md-4 text-center">
          <h1 class="text-primary b-f">Your Comments:</h1>
            <div class="comments">
              <profile-comment v-for="comment in profileComments" :key="comment.id" :profileComment="comment"/>
            </div>
          </div>
        <div class="col-md-2"></div>
        <div class="col-12 col-md-6 text-center blogs">
          <h1 class="text-primary b-f">Your Blogs:</h1>
          <div class="row  justify-content-center">
          <blog v-for="blog in profileBlogs" :key="blog.id" :blog="blog"/>
          </div>
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
.b-f{
  font-family: 'Orbitron', sans-serif;
}
.profile-img {
  max-width: 100px;
}
.comments{
  height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
