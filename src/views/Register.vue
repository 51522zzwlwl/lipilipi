<template>
  <div>
      <login-top middleTop="注册lipilipi">
        <div slot="right" @click="$router.push('/Login')">切换到登录</div>
      </login-top>
      <login-text label="姓名" 
        style="margin:4.167vw 0" 
        type="text" 
        placeholder="请输入姓名" 
        rule="^.{6,16}$"
        @inputChange="successIpt"
      />
      <login-text label="账号" 
        type="text" 
        placeholder="请输入账号"
        rule="^.{6,16}$"
        @inputChange="content => username = content" 
      />
      <login-text label="密码" 
        type="password" 
        placeholder="请输入密码"
        rule="^.{6,16}$"
        @inputChange="content => password = content" 
      />
      <login-btn btntext='注册' @registerSubmit='registerSubmit'/>
  </div>
</template>

<script>
import LoginTop from '../components/common/LoginTop.vue'
import LoginText from '../components/common/LoginText.vue'
import LoginBtn from '../components/common/LoginBtn.vue'
export default {
    data(){
        return{
            name:'',
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
          const p = {name:this.name, username:this.username, password:this.password}
          if(this.name && this.username && this.password){
            localStorage.setItem('msg1',JSON.stringify(p))
          }
        }
    },
}
</script>

<style>

</style>