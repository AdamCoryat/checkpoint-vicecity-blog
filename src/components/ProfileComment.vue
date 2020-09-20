<template>
  <div
    class="rounded profileComment border border-danger pointer s-bg m-2 p-1"
    id="profileComment"
  >
    <router-link
      :to="{ name: 'BlogDetails', params: { id: profileComment.blog } }"
    >
      <div class="text-success">
        <p class="secondary-font">{{ profileComment.body }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    profileComment: {},
  },
  name: "ProfileComment",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped>
.profileComment {
  transition: 0.5s ease;
}
.profileComment:hover {
  transform: scale(1.05);
}
</style>
