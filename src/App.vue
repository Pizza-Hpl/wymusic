<template>
  <div class="top-nav">
    <div class="nav">
      <div class="logo">
        <img src="./assets/logo.png" alt />
      </div>
      <div class="nav-con">
        <router-link to="/FindMusic">发现音乐</router-link>
        <router-link to="/MyMusic">我的音乐</router-link>
        <router-link to="/Friend">朋友</router-link>
        <router-link to="/Store">商城</router-link>
        <router-link to="/Musician">音乐人</router-link>
        <router-link to="/Down">下载客户端</router-link>
      </div>
      <div class="login">
        <div class="search">
          <span class="el-icon-search sear"></span>
          <input type="text" placeholder="音乐/视频/用户" />
        </div>
        <router-link to="/Czuo" class="czuo">创造者中心</router-link>
        <router-link to="/login" class="login">登录</router-link>
      </div>
    </div>
    <!-- <router-link to="/Hello">dianji</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
// import Hello from './components/Hello.vue'


export default {
  name: "App",
  components: {

  },
};
</script>

<style lang="scss">
.top-nav {
  height: 70px;
  background-color: #242424;
  .nav {
    width: 1080px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .logo {
      height: 70px;
      width: 160px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nav-con {
      height: 70px;
      width: 580px;
      display: flex;
      justify-content: space-between;
      a {
        color: #fff;
        text-align: center;
        line-height: 70px;
        font-size: 18px;
        padding: 0 10px;
        &:hover {
          background-color: red;
        }
      }
    }
    .login {
      height: 70px;
      width: 300px;
      display: flex;
      justify-content: space-between;
      .search{
        width: 158px;
        height: 32px;
        background-color: #fff;
        border: 1px solid #fff;
        border-radius: 32px;
        margin-top:18px;
        span{
          font-size: 18px;
          padding-left: 5px;
          line-height: 32px;
        }
        input{
          width: 100px;
          height: 100%;
          // float: left;
          font-size: 12px;
        }
      }
      .czuo{
        width: 90px;
        height: 32px;
         border: 1px solid #fff;
         text-align: center;
         line-height: 32px;
         font-size: 12px;
         color: #fff;
         border-radius: 32px;
         margin-top:18px;
      }
      .login{
        width: 30px;
        height: 30px;
        margin-top:26px;
        font-size: 12px;
        color: #fff;
      }
    }
  }
}
</style>
