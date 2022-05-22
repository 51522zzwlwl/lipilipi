<template>
  <div class="commentitems">
      <div class="commentitem" v-for="(item,index) in commentChild" :key="index">
        <div class="userimg">
          <img src="@/assets/logo.png" alt="">
        </div>
        <div class="commentcontent">
          <p>
            <span>{{item.user_name}}</span>
            <span>{{item.comment_date}}</span>
          </p>
          <div>{{item.comment_content}}</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props:['commentChild'],
}
</script>

<style>
.commentitems{
    padding: 0 40px;
}
</style>