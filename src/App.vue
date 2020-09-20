<template>
  <div id="app" class="app">
    <navbar />
    <router-view />
    <my-footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import MyFooter from "@/components/MyFooter.vue"
import { onAuth } from "@bcwdev/auth0-vue";
import { setBearer } from "./services/AxiosService";
export default {
  name: "App",
 
  async beforeCreate() {
    await onAuth();
    if (this.$auth.isAuthenticated) {
      setBearer(this.$auth.bearer);
      this.$store.dispatch("getProfile")
    }
  },
  components: {
    Navbar,
    MyFooter
  },
};
</script>
<style lang="scss">
body{
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(207,88,194,1) 46%, rgba(0,0,0,1) 100%);
}
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
</style>
