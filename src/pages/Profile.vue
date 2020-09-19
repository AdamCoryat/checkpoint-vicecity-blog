<template>
  <div class="about container-fluid">
    <div class="row">
      <div class="col-4 text-center">
        <h5>Welcome {{ profile.name }}</h5>
        <img class="rounded" :src="profile.picture" alt="" />
        <p>{{ profile.email }}</p>
      </div>
    <div class="col-8 text-center">

    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  mounted(){
    this.$store.dispatch('getProfile')
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
