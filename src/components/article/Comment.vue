<template>
  <div class="comment" v-if="this.commentList">
    <div v-for="(item,index) in commentList" :key="index" style="border-bottom: 1px solid #e7e7e7;">
      <div class="commentitem">
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
      <div>
        <CommentItem :commentChild="item.child"/>
      </div>
    </div>
  </div>
</template>

<script>
import CommentItem from '../article/CommentItem.vue'

export default {
  components:{
    CommentItem,
  },
  data(){
    return{
      arr:[
        { comment_id: 1,user_name:"a", comment_date: "04-23", comment_content: "蜡笔小新很好看！", parent_id: null },
        { comment_id: 2,user_name:"b", comment_date: "04-24", comment_content: "还不错喔，很好看！", parent_id: null },
        { comment_id: 3,user_name:"c", comment_date: "04-25", comment_content: "我也感觉蜡笔小新很好看", parent_id: "1" },
        { comment_id: 4,user_name:"d", comment_date: "04-26", comment_content: "我感觉机器猫更好看一点", parent_id: "3" },
        { comment_id: 5,user_name:"e", comment_date: "04-27", comment_content: "好看，已三连", parent_id: null },
        { comment_id: 6,user_name:"f", comment_date: "04-26", comment_content: "你是机器猫的粉丝吗", parent_id: "4" },
        { comment_id: 7,user_name:"g", comment_date: "04-27", comment_content: "是的，我是机器猫的粉丝", parent_id: "6" },
        { comment_id: 8,user_name:"h", comment_date: "04-27", comment_content: "我更喜欢白嫖 ", parent_id: "5" },
        { comment_id: 9,user_name:"z", comment_date: "04-28", comment_content: "你个白嫖怪", parent_id: "8" }
      ],
      commentList:null,
    }
  },
  methods:{
    changeCommentData(data){
      function fn(temp) {
        let arr1 = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].parent_id == temp) {
                arr1.push(data[i])
                data[i].child = fn(data[i].comment_id)
            }
        }
        return arr1
      }
      return fn(null);
    }
  },
  created() {
    console.log(this.arr);
    this.commentList = this.changeCommentData(this.arr);
    console.log(this.commentList)
  },
}
</script>

<style>
.comment{
  padding: 5px 10px;
}
.commentitem{
  display: flex;
  padding: 10px 0; 
}
.userimg img{
  margin-right: 10px;
  width: 35px;
  height: 35px;
}
.commentcontent{
  flex: 1;
}
.commentcontent p{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #555;
  margin-bottom: 5px;
}
.commentcontent div{
  font-size: 13px;
  margin-bottom: 10px;
}
</style>