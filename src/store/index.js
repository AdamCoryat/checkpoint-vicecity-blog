import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index.js";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    comments: []

  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setResource(state, payload){
      state[payload.resource] = payload.data
    },
    setBlogs(state, blogs){
      state.blogs = blogs
    },
    delete(state, payload){
      state[payload.resource] = state[payload.resource].filter(p => p.id !=payload.id)
    }
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        console.log(res)
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getResource({commit}, resource){
      try {
        let res = await api.get(resource)
        console.log(res)
        commit('setResource', {data: res.data, resource})
      } catch (error) {
        console.error(error);
      }
    },
    async getById({commit}, payload){
        try {
          let res = await api.get(payload.resource + payload.id)
          console.log(res)
          let resource = payload.path
          commit('setResource', {data: res.data, resource})
        } catch (error) {
          console.error(error);
        }
    },
    async deleteById({commit}, payload){
      try {
        await api.delete(payload.resource + payload.id)
        let resource = payload.path
        commit('setResource', {data: {}, resource})
        router.push({name: "Home"})
      } catch (error) {
        console.error(error);
      }
    },
    async create({commit, state}, payload){
      try {
        let res = await api.post(payload.path, payload.data)
        let resource = payload.path
        commit('setResource', {data: res.data, resource})
        if(resource == 'blogs'){
          router.push({name: "Home"})
        } else {
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
});
