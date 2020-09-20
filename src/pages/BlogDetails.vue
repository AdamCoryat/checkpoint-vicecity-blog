<template>
  <div class="blog-details container-fluid" id="blog-details">
    <div class="row d-flex justify-content-center">
      <div class="col-3">
        <img
          class="text-center m-4 shadow border-success rounded"
          src="../assets/detail1.jpg"
          style="width: 21vw"
          alt="detailpic"
        />
      </div>
      <div class="col-12 col-md-6">
        <div
          class="my-3 shadow card s-bg auth-font text-success border border-success"
        >
          <div v-if="editToggle">
            <div class="card-body px-lg-5 pt-0">
              <form @submit.prevent="editBlog" class="md-form">
                <input
                  v-model="blogEdit.title"
                  type="text"
                  id="materialSaveFormName"
                  class="form-control my-2"
                  placeholder="Title..."
                />
                <textarea
                  v-model="blogEdit.body"
                  type="text"
                  id="materialSaveFormMessage"
                  class="form-control my-2"
                  rows="3"
                  placeholder="Blog Body..."
                >
                </textarea>
                <button class="btn btn-success btn-rounded my-1" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div class="card-body">
            <i
              class="fa fa-pencil pointer text-primary"
              aria-hidden="true"
              v-if="isCreator"
              @click="editToggle = !editToggle"
            ></i>
            <h5 class="card-title text-center">{{ activeBlog.title }}</h5>
            <p class="card-text secondary-font">{{ activeBlog.body }}</p>
            <p class="card-text font-italic text-primary">
              -{{ activeBlog.creatorEmail }}
            </p>
            <i
              @click="deleteById"
              v-if="isCreator"
              class="fa fa-trash-o text-primary pointer"
              aria-hidden="true"
            ></i>
          </div>
          <div class="card-body border border-success">
            <comment
              v-for="comment in comments"
              :key="comment._id"
              :comment="comment"
            />
          </div>
          <div class="card-body border border-success flex-wrap inline">
            <form @submit.prevent="createComment" class="md-form">
              <input
                v-model="newComment.body"
                type="text"
                id="materialSaveFormName"
                class="form-control s-bg secondary-font border border-success text-success"
                placeholder="Add Comment..."
              />
            </form>
          </div>
        </div>
      </div>
      <div class="col-3">
        <img
          class="text-center m-4 shadow border-success rounded"
          src="../assets/detial2.jpg"
          style="width: 20vw"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "../components/Comment.vue";
export default {
  name: "blogDetails",
  mounted() {
    this.$store.dispatch("getById", {
      resource: "blogs/",
      id: this.$route.params.id,
      path: "activeBlog",
    }),
      this.$store.dispatch("getById", {
        resource: "blogs/",
        id: this.$route.params.id + "/comments",
        path: "comments",
      });
  },
  data() {
    return {
      newComment: {
        blog: this.$route.params.id,
      },
      blogEdit: {},
      editToggle: false,
    };
  },
  computed: {
    activeBlog() {
      return this.$store.state.activeBlog;
    },
    isCreator() {
      return this.$store.state.profile.email == this.activeBlog.creatorEmail;
    },
    comments() {
      return this.$store.state.comments;
    },
  },
  methods: {
    deleteById() {
      swal({
        title: "Are you sure?",
        text: "Once deleted, its gone forever...",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.$store.dispatch("deleteById", {
            resource: "blogs/",
            id: this.$route.params.id,
            path: "activeBlog",
          });
          swal("Boom, Blog Delorted!", {
            icon: "success",
          });
        } else {
          swal("Wise choice!");
        }
      });
    },

    createComment() {
      swal("Congrats on your new Comment!").then((value) => {
        this.$store.dispatch("create", {
          data: this.newComment,
          path: "comments",
        });
        swal(`Continue forth and Comment your heart out!`);
      });
    },

    editBlog() {
      swal("Edit has been saved!").then((value) => {
        this.$store.dispatch("edit", {
          resource: "blogs/",
          id: this.$route.params.id,
          data: this.blogEdit,
          path: "blogs/" + this.$route.params.id,
        });
        this.editToggle = false;
        swal(`Congrats on editing your Blog!`);
      });
    },
  },
  components: {
    Comment,
  },
};
</script>

<style scoped>
.blog {
  background-color: rgba(12, 12, 12, 0.534);
  font-family: "Damion", cursive;
}
#blog-details {
  min-height: 88vh;
}
</style>
