<template>
  <div>
      <login-top middleTop="登录lipilipi">
          <div slot="right" @click="$router.push('/Register')">前往注册</div>
      </login-top>
      <login-text label="账号" 
        type="text" 
        placeholder='请输入账号'
        @inputChange="content => username = content"
        style="margin:4.167vw 0" 
      />
      <login-text label="密码" 
        type="password" 
        placeholder="请输入密码"
        rule="^.{6,16}$"
        @inputChange="content => password = content"
        style="margin:4.167vw 0" 
      />
      <login-btn btntext='登录' @registerSubmit='registerSubmit'/>
  </div>
</template>

<script>
import LoginTop from '../components/common/LoginTop.vue'
import LoginText from '../components/common/LoginText.vue'
import LoginBtn from '../components/common/LoginBtn.vue'
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    components:{
        LoginTop,
        LoginText,
        LoginBtn
    },
    methods: {
        successIpt(content){
            this.name = content;
        },
        registerSubmit(){
          const u = {username:this.username,password:this.password};  
          const p = JSON.parse(localStorage.getItem('msg1'));
          
          if(u.username === p.username && u.password === p.password){
            console.log('密码正确');  
            this.$router.push({
                name:'userInfo'
            });
          }
        }
    },
}
</script>

<style>
</style>