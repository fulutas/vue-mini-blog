<template>
  <div class="container">
    <Posts :posts="posts" />
  </div>
</template>

<script>
import Posts from "@/components/Posts";
import axios from "axios"

export default {
  name: "Home",
  components: {
    Posts,
  },

  data(){
    return {
       posts: [],
    }
  },

  created(){
    axios.get('http://localhost:3000/posts').then(response => {
      this.posts = response.data
    })
  }
};
</script>
<style>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
