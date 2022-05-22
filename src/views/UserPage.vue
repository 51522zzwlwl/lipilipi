<template>
  <div v-if="model" class="editviews">
    <NavBar style="margin-bottom:10px"/>
    <EditBanner left='头像'>
        <img src="@/assets/logo.png" alt="" slot="right">
    </EditBanner>
    <EditBanner left='昵称'>
        <a href="javascript:;" slot="right">{{model.name}}</a>
    </EditBanner>
    <EditBanner left='账号'>
        <a href="javascript:;" slot="right">{{model.username}}</a>
    </EditBanner>
    <EditBanner left='性别'></EditBanner>
    <EditBanner left='出生日期'></EditBanner>
    <EditBanner left='个性签名' />
    <van-button size="large" style="margin-top:5px" @click="$router.push('/UserInfo')">返回空间</van-button>
    <van-button size="large" @click="$router.push('/Login')">退出登录</van-button>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar.vue'
import EditBanner from '../components/common/EditBanner.vue'

export default {
    data(){
        return{
            model:{}
        }
    },
    comments: {
        NavBar,
        EditBanner,
    },
    components: { NavBar, NavBar, EditBanner, EditBanner },
    methods: {
        selectUser(){
            this.model = JSON.parse(localStorage.getItem('msg1'));
        }
    },
    created(){
        this.selectUser()
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
    outline: none;
    color: #333;
}
.editviews img{
    height: 12.778vw;
    width: 12.778vw;
    border-radius: 50%;
}
</style>