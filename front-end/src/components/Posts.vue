<template>
  <div class="posts">
    <div class="post" v-for="post in posts" :key="post.post_id">
      <h1 class="post-title" @click="post_detail(post.post_slug)">{{post.post_title.length > 39 ? post.post_title.slice(0,37) + "..." : post.post_title}}</h1>
      <p class="post-text">
        {{post.post_description.length > 272 ? post.post_description.slice(0,272)+ "..." : post.post_description}}
      </p>
    <span class="post-sender">{{post.post_sender}}</span>
    <span class="post-date">{{post.post_date}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name : "Posts",
    props : ["posts"],
    methods : {
        post_detail(slug){
            this.$router.push('/post/'+slug)
        }
    }
};
</script>

<style scoped>

.post-title{
    cursor: pointer;
    color: orange;
}
.post-sender {
    font-size: 20px;
}
.post-date {
    float: right;
}
</style>