<template>
  <div id="app" class="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
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
  },
};
</script>
<style lang="scss">
body{
  background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(202,29,253,1) 35%, rgba(69,252,244,1) 100%);
}
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
</style>
