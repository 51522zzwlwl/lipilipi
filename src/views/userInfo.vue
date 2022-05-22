<template>
    <div class="userinfo">
        <NavBar />
        <img src="@/assets/bannerTop.jpg" alt="" class="bgimg">
        <div>
            <UserDetail/>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/common/NavBar.vue'
import UserDetail from '@/components/userComponent/UserDetail.vue'


export default {
    components:{
    NavBar,
    UserDetail,
}
}
</script>

<style>
.bgimg{
    height: 27.778vw;
    width: 100%;
}
</style>