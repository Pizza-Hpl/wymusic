<template>
  <div class="block">
    <!-- 轮播图 -->
    <div class="lunboImg">
      <el-carousel class="Imgs">
        <el-carousel-item v-for="item in list" :key="item">
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 左右栏 -->
    <div class="bigBox">
      <div class="leftBox">
        <!-- 推荐 -->
        <div class="fenLei">
          <div class="tuijian">
            <span class="el-icon-s-help icon"></span>
            <span class="hot">热门推荐</span>
          </div>
          <div class="music">
            <a href="#">华语</a>
            <span class="line">|</span>
            <a href="#">流行</a>
            <span class="line">|</span>
            <a href="#">摇滚</a>
            <span class="line">|</span>
            <a href="#">民谣</a>
            <span class="line">|</span>
            <a href="#">电子</a>
          </div>
          <span class="more">
            更多
            <i class="el-icon-right"></i>
          </span>
        </div>

        <div class="tuiImg">
          <div v-for="item in tuiImg" :key="item" class="Imglist">
            <img :src="item" alt />
            <a href="#">[华语速爆新歌] 最新华语音乐推荐</a>
          </div>
          <div v-for="item in tuiImg" :key="item" class="Imglist">
            <img :src="item" alt />
            <a href="#">[华语速爆新歌] 最新华语音乐推荐</a>
          </div>
          <div v-for="item in tuiImg" :key="item" class="Imglist">
            <img :src="item" alt />
            <a href="#">[华语速爆新歌] 最新华语音乐推荐</a>
          </div>
          <div v-for="item in tuiImg" :key="item" class="Imglist">
            <img :src="item" alt />
            <a href="#">[华语速爆新歌] 最新华语音乐推荐</a>
          </div>
          <div v-for="item in tuiImg" :key="item" class="Imglist">
            <img :src="item" alt />
            <a href="#">[华语速爆新歌] 最新华语音乐推荐</a>
          </div>
          <div v-for="item in tuiImg" :key="item" class="Imglist">
            <img :src="item" alt />
            <a href="#">[华语速爆新歌] 最新华语音乐推荐</a>
          </div>
          <div v-for="item in tuiImg" :key="item" class="Imglist">
            <img :src="item" alt />
            <a href="#">[华语速爆新歌] 最新华语音乐推荐</a>
          </div>
          <div v-for="item in tuiImg" :key="item" class="Imglist">
            <img :src="item" alt />
            <a href="#">[华语速爆新歌] 最新华语音乐推荐</a>
          </div>
        </div>

        <!-- 新碟上映 -->
        <div class="newMusic fenLei">
          <div class="tuijian">
            <span class="el-icon-s-help icon"></span>
            <span class="hot">新碟上架</span>
          </div>
          <span class="more">
            更多
            <i class="el-icon-right"></i>
          </span>
        </div>
        <div class="newMlist tuiImg">
          <a href="#" class="el-icon-arrow-left licon ticon"></a>
          <div class="newbig">
            <div v-for="item in tuiImg" :key="item" class="Imglist">
              <img :src="item" alt />
              <a href="#" class="Font">致我们终将逝去的青春</a>
              <p>张靓颖</p>
            </div>
            <div v-for="item in tuiImg" :key="item" class="Imglist">
              <img :src="item" alt />
              <a href="#" class="Font">致我们终将逝去的青春</a>
              <p>张靓颖</p>
            </div>
            <div v-for="item in tuiImg" :key="item" class="Imglist">
              <img :src="item" alt />
              <a href="#" class="Font">致我们终将逝去的青春</a>
              <p>张靓颖</p>
            </div>
            <div v-for="item in tuiImg" :key="item" class="Imglist">
              <img :src="item" alt />
              <a href="#" class="Font">致我们终将逝去的青春</a>
              <p>张靓颖</p>
            </div>
            <div v-for="item in tuiImg" :key="item" class="Imglist">
              <img :src="item" alt />
              <a href="#" class="Font">致我们终将逝去的青春</a>
              <p>张靓颖</p>
            </div>
          </div>
          <a href="#" class="el-icon-arrow-right ricon ticon"></a>
        </div>

        <!-- 榜单 -->
        <div class="newMusic fenLei">
          <div class="tuijian">
            <span class="el-icon-s-help icon"></span>
            <span class="hot">榜单</span>
          </div>
          <span class="more">
            更多
            <i class="el-icon-right"></i>
          </span>
        </div>

        <div class="songList">  
          <div class="onelist">
            <div class="Songtop">
              <div class="imgyun">
                <img src="../assets/imgs/songimg.jpg" alt />
              </div>
              <div class="biaosheng">
                <a href="#" class="yun">
                  <h3>云音乐飙升榜</h3>
                </a>
                <a href="#" class="el-icon-video-play bof"></a>
                <a href="#" class="el-icon-folder-add bof"></a>
              </div>
            </div>
            <div class="songMus">
              <ul class="ullist">
                <li>
                  <span class="red">1</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span class="red">2</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span class="red">3</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>4</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>5</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>6</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>7</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>8</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>9</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>10</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <a href="#" class="ri">查看全部></a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 第二 -->
          <div class="onelist twolist">
            <div class="Songtop">
              <div class="imgyun">
                <img src="../assets/imgs/songimg.jpg" alt />
              </div>
              <div class="biaosheng">
                <a href="#" class="yun">
                  <h3>云音乐飙升榜</h3>
                </a>
                <a href="#" class="el-icon-video-play bof"></a>
                <a href="#" class="el-icon-folder-add bof"></a>
              </div>
            </div>
            <div class="songMus">
              <ul class="ullist">
                <li>
                  <span class="red">1</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span class="red">2</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span class="red">3</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>4</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>5</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>6</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>7</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>8</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>9</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>10</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <a href="#" class="ri">查看全部></a>
                </li>
              </ul>
            </div>
          </div>
<!-- 第三 -->
                    <div class="onelist">
            <div class="Songtop">
              <div class="imgyun">
                <img src="../assets/imgs/songimg.jpg" alt />
              </div>
              <div class="biaosheng">
                <a href="#" class="yun">
                  <h3>云音乐飙升榜</h3>
                </a>
                <a href="#" class="el-icon-video-play bof"></a>
                <a href="#" class="el-icon-folder-add bof"></a>
              </div>
            </div>
            <div class="songMus">
              <ul class="ullist">
                <li>
                  <span class="red">1</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span class="red">2</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span class="red">3</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>4</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>5</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>6</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>7</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>8</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>9</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <span>10</span>
                  <a href="#">等风起</a>
                </li>
                <li>
                  <a href="#" class="ri">查看全部></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="rightBox"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图
      list: [
        require("../assets/imgs/lunbo1.jpg"), //因为加载不出本地img,所以加上require
        require("../assets/imgs/lunbo2.jpg"),
        require("../assets/imgs/lunbo3.jpg"),
        require("../assets/imgs/lunbo4.jpg"),
        require("../assets/imgs/lunbo5.jpg"),
        require("../assets/imgs/lunbo6.jpg"),
        require("../assets/imgs/lunbo7.jpg"),
        require("../assets/imgs/lunbo8.jpg"),
      ],
      tuiImg: [require("../assets/imgs/tuijian.png")],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.block {
  .lunboImg {
    width: 1080px;
    height: 300px;
    margin: 0 auto;
    .Imgs {
      width: 800px;
      height: 300px;
      margin: 0 auto;
      img {
        max-width: 100%;
        max-height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  .bigBox {
    width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .leftBox {
      width: 689px;
      padding: 20px 20px 40px;
      border-left: 1px solid #c3c3c3;
      border-right: 1px solid #c3c3c3;

      .fenLei {
        width: 689px;
        height: 35px;
        border-bottom: 2px solid red;
        .tuijian {
          float: left;
          line-height: 35px;
          .icon {
            color: #fff;
            font-size: 25px;
          }
          .hot {
            font-size: 25px;
          }
        }
        .music {
          width: 230px;
          margin: 7px 0 0 20px;
          float: left;
          display: block;
          a {
            padding: 0 8px;
          }
        }

        .more {
          float: right;
          margin: 7px 7px 0 20px;

          i {
            color: red;
          }
        }
      }

      // 推荐歌曲
      .tuiImg {
        width: 689px;
        // height: 480px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 10px;
        .Imglist {
          width: 140px;
          height: 204px;
          padding-right: 42px;
          padding-bottom: 30px;

          &:nth-child(4n + 4) {
            padding-right: 0px;
          }
          img {
            width: 138px;
            margin-bottom: 12px;
            border: 1px solid #ffee;
          }
          a {
            line-height: 18px;
            font-size: 15px;
          }
        }
      }
      // 新歌上映
      .newMusic {
        margin-top: 20px;
      }
      .newMlist {
        width: 689px;
        height: 189px;
        border: 1px solid #0e0606;
        margin: 20px 0 37px;
        background-color: #f5f5f5;
        .lico {
          float: left;
        }
        .newbig {
          width: 640px;
          height: 150px;
          margin-top: 20px;
          .Imglist {
            width: 118px;
            height: 150px;
            float: left;
            padding-right: 10px;
            padding-bottom: 0px;
            img {
              width: 118px;
              height: 100px;
              margin-bottom: 0px;
            }
            .Font {
              display: block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 12px;
              padding: 8px 0;
            }
            p {
              font-size: 12px;
            }
          }
        }
        .ricon {
          float: right;
        }
        .ticon {
          width: 17px;
          height: 17px;
          text-align: center;
          line-height: 17px;
          font-weight: bold;
          margin-top: 71px;
        }
      }

      // 榜单
      .songList {
        width: 689px;
        height: 472px;
        border: 1px solid black;
        background-color: pink;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 20px;
        .twolist{
              border-left: 1px solid #c3c3c3;
              border-right: 1px solid #c3c3c3;

            }
        .onelist {
          width: 230px;
          height: 100%;
          // float: left;
          .Songtop {
            // float: left;
            width: 210px;
            height: 100px;
            background-color: #fff;
            padding: 20px 0 0 19px;
            .imgyun {
              height: 100%;
              float: left;
              img {
                width: 80px;
                height: 80px;
              }
            }

            .biaosheng {
              float: left;
              height: 51px;
              margin-left: 15px;
              .bof {
                font-size: 24px;
                padding-top: 15px;
                padding-right: 10px;
              }
            }
          }

          .songMus {
            .ullist {
              li {
                height: 32px;
                line-height: 32px;
                padding-left: 20px;
                &:nth-child(odd) {
                  background-color: #e8e8e8;
                }
                &:nth-child(even) {
                  background-color: #f4f4f4;
                }
                span {
                  display: inline-block;
                  width: 35px;
                  height: 32px;
                  font-size: 15px;
                  text-align: center;
                }
                .red {
                  color: red;
                }
                a {
                  font-size: 15px;
                }
                .ri {
                  float: right;
                  margin-right: 32px;
                }
              }
            }
          }
        }
      }
    }
    .rightBox {
      width: 250px;
      height: 800px;
      background-color: pink;
    }
  }
}
</style>