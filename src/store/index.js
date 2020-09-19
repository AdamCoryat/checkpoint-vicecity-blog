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
    comments: [],
    profileComments: [],
    profileBlogs: []



  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setResource(state, payload){
      state[payload.resource] = payload.data
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
    async getResource({commit}, payload){
      try {
        let res = await api.get(payload.resource)
        let resource = payload.path
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
    async create({commit}, payload){
      try {
        let res = await api.post(payload.path, payload.data)
        let resource = payload.path
        commit('setResource', {data: res.data, resource})
          router.push({name: "Home"})
      } catch (error) {
        console.error(error);
      }
    },
    async edit({commit}, payload){
      try {
        let res = await api.put(payload.resource + '/' + payload.id, payload.data)
        let resource = payload.resource
        router.push({name: "Home"})
        commit('setResource', {data: res.data, resource})
      } catch (error) {
        console.error(error);
      }
      
    }
  },
});
