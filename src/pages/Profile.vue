<template>
  <div class="about container-fluid" id="profile">
    <div class="row">
      <div class="col-12 col-md-4 text-center">
        <div
          class="m-2 card card-body s-bg primary-font border border-success text-success"
        >
          <i
            class="fa fa-cog text-right pointer text-primary"
            aria-hidden="true"
            @click="editToggle = !editToggle"
          ></i>
          <div v-if="editToggle">
            <div class="card-body px-lg-5 pt-0">
              <form @submit.prevent="editProfile" class="md-form">
                <textarea
                  v-model="profileEdit.name"
                  type="text"
                  id="materialSaveFormMessage"
                  class="form-control my-2"
                  placeholder="Name..."
                >
                </textarea>
                <textarea
                  v-model="profileEdit.picture"
                  type="url"
                  id="materialSaveFormMessage"
                  class="form-control my-2"
                  placeholder="Picture..."
                >
                </textarea>
                <button class="btn btn-success btn-rounded my-1" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
          <h4><span class="text-primary">Name:</span> {{ profile.name }}</h4>
          <img
            class="rounded shadow text-center profile-img"
            :src="profile.picture"
            alt="profile-picture"
          />
          <p><span class="text-primary">Email:</span>{{ profile.email }}</p>
        </div>
      </div>
      <div class="col-6 col-md-2">
        <div
          class="m-2 card card-body s-bg primary-font border border-success text-success"
        >
          <h3>Stats:</h3>
          <p>
            <span class="text-primary">Total Blogs:</span>
            {{ profileBlogs.length }}
          </p>
          <p>
            <span class="text-primary">Total Comments:</span>
            {{ profileComments.length }}
          </p>
        </div>
      </div>
      <div class="col-6 col-md-6 text-center">
        <img
          class="m-2 border border-success shadow rounded"
          src="../assets/profile.jpg"
          style="width: 35vw"
          alt=""
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 text-center">
        <h1 class="text-primary primary-font">Your Comments:</h1>
        <div class="comments">
          <profile-comment
            v-for="comment in profileComments"
            :key="comment.id"
            :profileComment="comment"
          />
        </div>
      </div>
      <div class="col-md-2"></div>
      <div class="col-12 col-md-6 text-center blogs">
        <h1 class="text-primary primary-font">Your Blogs:</h1>
        <div class="row justify-content-center">
          <div class="comments">
            <blog v-for="blog in profileBlogs" :key="blog.id" :blog="blog" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog.vue";
import ProfileComment from "../components/ProfileComment.vue";
export default {
  name: "Profile",

  mounted() {
    this.$store.dispatch("getProfile");
    this.$store.dispatch("getResource", {
      resource: "profile/comments",
      path: "profileComments",
    });
    this.$store.dispatch("getResource", {
      resource: "profile/blogs",
      path: "profileBlogs",
    });
  },
  data() {
    return {
      profileEdit: {},
      editToggle: false,
    };
  },
  computed: {
    profileComments() {
      return this.$store.state.profileComments;
    },
    profileBlogs() {
      return this.$store.state.profileBlogs;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    editProfile() {
      swal("Edit has been saved!").then((value) => {
        this.$store.dispatch("editProfile", {
          data: this.profileEdit,
        });
        this.editToggle = false;
        swal(`Congrats on editing your Profile!`);
      });
    },
  },

  components: {
    ProfileComment,
    Blog,
  },
};
</script>

<style scoped>
#profile {
  min-height: 88vh;
}

.profile-img {
  max-width: 100px;
}
.comments {
  height: 50vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.comments::-webkit-scrollbar {
  width: 1em;
}

.comments::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.comments::-webkit-scrollbar-thumb {
  background-color: rgb(228, 109, 202);
  outline: 1px solid rgb(231, 143, 248);
}
</style>
