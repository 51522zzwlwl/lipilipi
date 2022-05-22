<template>
<div class="home">
  <NavBar />
  <van-tabs>
    <van-tab v-for="(item,index) in category" :key="index" :title="item">
    <HomeVideo />
    </van-tab>
  </van-tabs>
</div>
</template>

<script>
import NavBar from '../components/common/NavBar.vue';
import HomeVideo from '@/components/common/HomeVideo.vue';


export default {
  name: 'Home',
  data(){
    return{
      category:["番剧","国创","综艺","动画","鬼畜","舞蹈","娱乐","科技","美食","汽车","运动","电影","电视剧","纪录片"],
    }
  },
  components: {
    NavBar,
    HomeVideo
},
  methods: {
  },
}
</script>

<style>
  body{
    background-color: white;
  }
  .home{
    background-color: white;
  }
</style>