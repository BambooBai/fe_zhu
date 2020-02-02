<template>
  <div class="register">
    <!-- http://moment.snail.com/api/v1/post/list-of-hot-circle-post?page=1 -->
    <div class="content_box">
      <div class="TypeTag fl">
        <ul>
          <li>热门动态</li>
        </ul>
      </div>
      <div class="content" v-for="(item,index) in list" :key="index">
        <div class="cont-title">
          <img src="../images/user.jpg" alt />
          <div class="auth">
            <div>{{item.circle_name}}</div>
          </div>
          <span class="btn">已加入</span>
        </div>
        <div class="cont-li-title">
          <p>{{item.title}}</p>
          <p>{{item.text}}</p>
        </div>
        <div class="cont-img">
          <!-- <img :src="item.images[0]" /> -->
          <div v-for="(ite,ind) in item.images" :key="ind" class="img_box">
            <img :src="ite" />
          </div>
        </div>
        <div class="cont-cont">
          <div class="cont-left">
            <span>{{item.user_nickname}}</span>
            <span>{{item.created_at}}</span>
          </div>
          <div class="cont-right">
            <span>
              <img src="../images/eyes.png" />
              {{item.view_count}}
            </span>
            <span>
              <img src="../images/comment.png" />
              {{item.comment_count}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getPingLun() {
      this.$store.dispatch("pigPingLun_", {}).then(res => {
        console.log("+++++++++++", res);
        let { data } = res;
        let { list } = data;
        this.list = list;
      });
    }
  },
  mounted() {
    this.getPingLun();
    console.log("uuuuuuu");
  }
};
</script>
<style lang="less" scoped>
.register {
  background: #a7a7a7;
  .content_box {
    width: 661px;
    margin: 0 auto;
    font-size: 16px;
    background: #fff;
    box-shadow: #585858 1px 1px;
    .TypeTag {
      border-bottom: 1px solid green;
      top: 0;
      z-index: 3;
      height: 15px;
      padding: 17px 19px;
      border-bottom: 1px solid #e6e7eb;
      background: #fff;
      width: 661px;
      height: 30px;
      li {
        width: 80px;
        margin-right: 20px;
        height: 20px;
        line-height: 20px;
        padding-bottom: 23px;
        border-bottom: 4px solid #0099e5;
      }
    }
    .content {
      width: 661px;
      margin-top: 20px;
      text-align: left;
      float: left;
      padding-bottom: 20px;
      border-bottom: 1px solid #e6e7eb;
      .cont-title {
        padding-bottom: 20px;
        img {
          width: 40px;
          float: left;
        }
        .auth {
          font-size: 14px;
          font-weight: 500;
          margin: 10px 10px 0;
          float: left;
          cursor: pointer;
          &:hover {
            color: #0099e5;
          }
        }

        .btn {
          display: inline-block;
          margin: 10px 0 0;
          width: 50px;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
          border: 1px solid gray;
          margin-left: 30px;
        }
      }

      .cont-li-title {
        p:first-child {
          max-width: 520px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 16px;
          color: #585858;
          text-align: left;
          margin-right: 5px;
          margin-bottom: 5px;
          cursor: pointer;
          &:hover {
            color: #0099e5;
          }
        }
        p:last-child {
          font-size: 14px;
          color: #a7a7a7;
          max-height: 30px;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 24px;
        }
      }

      .cont-img {
        .img_box {
          float: left;
          margin-right: 10px;
          img {
            width: 120px;
            height: 120px;
          }
        }
      }
      .cont-cont {
        margin-top: 20px;
        display: inline-block;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #a7a7a7;
        .cont-left {
          width: 300px;
          float: left;
          span:nth-child(1) {
            //   display: inline-block;
            line-height: 20px;
            font-size: 12px;
            color: #666666;
          }

          span:nth-child(2) {
            font-size: 12px;
            color: #a7a7a7;
            border-left: 1px solid #eeeeee;
            margin-left: 5px;
            padding-left: 10px;
          }
        }
        .cont-right {
          img {
            vertical-align: initial;
            margin-right: 1px;
          }
          span {
            margin-right: 5px;
          }
          width: 300px;
          float: right;
          text-align: right !important;
        }
      }
    }
  }
}
</style>