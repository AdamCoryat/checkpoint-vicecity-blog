<template>
  <div class="home container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-4 d-flex justify-content-center">
        <img
          class="border border-success m-2 shadow rounded"
          src="../assets/fanart1.jpg"
          style="width: 25vw"
          alt=""
        />
      </div>
      <div class="col-4 d-flex justify-content-center">
        <img
          class="border border-success m-2 shadow rounded"
          src="../assets/fanart3.jpg"
          style="width: 30vw"
          alt=""
        />
      </div>
      <div class="col-4 d-flex justify-content-center">
        <img
          class="border border-success m-2 shadow rounded"
          src="../assets/fanart2.png"
          style="width: 25vw"
          alt=""
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <blog v-for="blog in blogs" :key="blog._id" :blog="blog" />
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getResource", { resource: "blogs/", path: "blogs" });
  },
  data() {
    return {};
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
  methods: {},
  components: {
    Blog,
  },
};
</script>

<style scoped></style>
