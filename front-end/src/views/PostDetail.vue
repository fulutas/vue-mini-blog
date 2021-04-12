<template>
  <div class="container">
    <div class="post" v-if="!post[0].code">
        <router-link to="/" class="back-button">Geri Dön</router-link>
      <h1 class="post-title">{{post[0].post_title}}</h1>
      <p class="post-text">
        {{post[0].post_description}}
      </p>
        <span class="post-sender">{{post[0].post_sender}}</span>
        <span class="post-date">{{post[0].post_date}}</span>
   </div>

    <div v-else-if="post[0].code === 'error'">Bir hata oluştu.</div>
    <div v-else>Post bulunamadı.</div>

 </div>
</template>

<script>

import axios from "axios"

export default {
    name: "PostDetail",
    data(){
        return {
            post : [{code : ""}]
        }
    },
    created(){
        axios.post("http://localhost:3000/post-detail", {
            slug: this.$route.params.slug,
        }).then((response) => {
            if(response.data.code === 'error'){
                this.post = [{code: response.data.code}];
            } else if (response.data.code === 'not_found_post'){
                this.post = [{code: response.data.code}];
            } else {
                this.post = response.data;
            }
            console.log(this.post)
        }).catch((err) => {
           console.log(err)
        });
    } 
}
</script>

<style scoped>

.container {
  max-width: 800px;
  margin: 0 auto;
}

.post-title{
    color: orange;
}
.post-sender {
    font-size: 20px;
}
.post-date {
    float: right;
}

.back-button{
    float:right;
    font-size: 18px;
    text-decoration: none;

}
</style>