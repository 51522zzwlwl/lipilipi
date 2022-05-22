<template>
  <div class="comment">
      <p class="comment-title">
          <span>评论</span>
          <span class="num">(4070)</span>
      </p>
      <div class="user">
          <img src="@/assets/logo.png" alt="">
          <input type="text" placeholder="说点什么把" @focus="focusInput()">
          <button class="btn">发表</button>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        focusInput(){
        }
    },
}
</script>

<style scoped>
.comment{
    padding: 30px 0 10px 10px;
}
.num{
    color: #aaa;
    margin-left: 10px;
}
.user{
    display: flex;
}
.user img{
    height: 30px;
    border-radius: 50%;
    margin-right: 20px;
    padding: 7px 0;
}
.user input{
    flex: 1;
    border-radius: 20px;
    background-color: #f4f4f4;
    border: 0;
    height: 30px;
    margin-top: 6px;
    padding: 0 20px 0 15px;
}
.btn{
    outline: none;
    border: 0;
    height: 8.333vw;
    border-radius: 3.333vw;
    background-color: #fb7299;
    color: white;
    font-size: 3.333vw;
    padding:  0 4.167vw;
    margin-top: 1.389vw;
}
</style>