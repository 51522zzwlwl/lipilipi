<template>
<div>
    <div class="userdetail">
        <div class="user_img"><img src="../../assets/logo.png" alt=""></div>
        <div class="user_eidt">
            <div class="user_a">
                <p>
                    <span>0</span>
                    <span class="user_w">粉丝</span>
                </p>
                <span style="color:#aaa">|</span>
                <p>
                    <span>299</span>
                    <span class="user_w">关注</span>
                </p>
                <span style="color:#aaa">|</span>
                <p>
                    <span>0</span>
                    <span class="user_w">获赞</span>
                </p>
            </div>
            <div class="user_b"  @click="toUserPage">
                <div>编辑资料</div>
            </div>
        </div>
    </div>
    <div class="user_text">
            <h2>{{name}}</h2>
            <p>这个人很神秘，什么都没有写</p>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            name:''
        }
    },
    methods: {
        getName(){
            const p = JSON.parse(localStorage.getItem('msg1'));
            this.name = p.name;
        },
        toUserPage(){
            this.$router.push({
                name:'UserPage'
            })
        }
    },
    mounted() {
        this.getName();
    },
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
.userdetail{
    display: flex;
    background-color: white;
    padding: 0 12px;
    margin: 0;
}
.user_img{
    margin-right: 20px;
}
.user_img img{
    width: 85px;
    height: 85px;
    border-radius: 50%;
}
.user_edit{
    display: flex;
    flex: 1;
}
.user_a{
    display: flex;
    padding-top: 10px;
}
.user_b{
    border: 1px solid #fb7a9f;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fb7a9f;
    margin-top: 5px;
}
.user_a p{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 28px;
    font-size: 13px;
    flex: 1;
}
.user_w{
    color: #aaa;
}
.user_text{
    background-color: white;
    padding-left: 20px;
}
.user_text h2{
    margin-bottom: 2px;
}
.user_text p{
    font-size: 13px;
    color: #aaa;
}
</style>