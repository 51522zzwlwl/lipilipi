<template>
  <div class="navbar">
      <div class="logo">
          <img src="@/assets/BILIBILI_LOGO.png" alt="" @click="$router.push('/')">
      </div>
      <div class="a">
          <p>
              <van-icon name="search" class="ipt-icon"/>
              请输入内容
          </p>
      </div>
      <div class="b">
              <img src="@/assets/logo.png" alt="" width="25px" @click="$router.push('/UserPage')">
          <p style="color:gainsboro">下载App</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .navbar{
        display: flex;
        height: 12.5vw;
        background-color: white;
    }
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
    }
    .logo img{
        width: 80%;
    }
    .a{
        display: flex;
        flex: 1;
        align-items: center;
        margin-left: 4.167vw;
    }
    .a p{
        position: relative;
        background-color: #f4f4f4;
        height: 7.222vw;
        width: 90%;
        border-radius: 4.167vw; 
        color: #aaa;
        font-size: 1px;
        line-height: 7.222vw;
    }
    .ipt-icon{
        position: absolute;
        left: 2.778vw;
        top: 0.278vw;
        padding-right: 5.556vw;
        color: #aaa;
    }
    .b{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .b img{
        width: 6.667vw;
        width: 6.667vw;
    }
    .b p{
        padding: 1.389vw 2.778vw;
        margin: 0 2.222vw;
        background-color: #fb7299;
        color: white;
        border-radius: 0.833vw;
        font-size: 3.611vw;
        text-align: center;
    }
</style>