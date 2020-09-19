<template>
  <div id="blog">
    <div class=" col-3 m-3">
      <router-link :to="{name: 'BlogDetails' , params:{id: blog.id}}">
        <div class="blog card text-center text-success border border-success" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{blog.title}}</h5>
            <p class="card-text">{{blog.creatorEmail}}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  props:{
    blog: {}
  },
  name: 'blog',
  data(){
    return {}
  },
  computed:{
    
  },
  methods:{},
  components:{}
}
</script>


<style scoped>
.blog{
  background-color: rgba(12, 12, 12, 0.534);
  font-family: 'Damion', cursive;;
  transition: 0.5s ease;
  cursor: pointer;
}

.blog:hover {
  transform: scale(1.05);
}
</style>