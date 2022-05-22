<template>
  <div>
        <div>
            <NavBar />
        </div>
        <div class="medv">
            <video 
                src="http://flv4mp4.people.com.cn/videofile7/livesphere/2022/05/14/fiiW7zw_1652496378165_YAuYYbq.mp4"
                controls
            />
            <p>上海市级方舱已有一半休舱</p>
        </div>
        <CommentTitle />
        <Comment />
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue"
import CommentTitle from "../components/article/CommentTitle.vue"
import Comment from "@/components/article/Comment.vue"

export default {
    components:{
    NavBar,
    CommentTitle,
    Comment
}
}
</script>

<style>
.medv{
    /* margin-top: 5px; */
}
.medv video{
    width: 100%;
}
.medv p{
    margin-left: 5px;
}
</style>