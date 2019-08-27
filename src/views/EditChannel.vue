<template>
  <div class="channel-detail">
    <!-- 编辑按钮 -->
    <div class="btn-edit">
      <el-button type="primary" @click="handleEdit">编辑</el-button>
    </div>
    <!-- 信息展示 -->
    <ul class="detail">
      <li>
        <span class="title">渠道类型:</span>
        <span class="content">{{channelDetail.channelType}}</span>
      </li>
      <li>
        <span class="title">一级渠道:</span>
        <span class="content">{{channelDetail.firstChannelName}}</span>
      </li>
      <li>
        <span class="title">二级渠道:</span>
        <span class="content">{{channelDetail.secondChannelName}}</span>
      </li>
      <li>
        <span class="title">渠道码名称:</span>
        <span class="content">{{channelDetail.channelName}}</span>
      </li>
      <li>
        <span class="title">渠道Source:</span>
        <span class="content">{{channelDetail.fitcampLiveCodeUrl}}</span>
      </li>
      <li>
        <span class="title">渠道负责人：</span>
        <span class="content">{{channelDetail.ownerName}}</span>
      </li>
      <li>
        <span class="title">白名单用户编码：</span>
        <span class="content">{{channelDetail.whiteListUserId}}</span>
      </li>
      <li>
        <span class="title">活码链接-减脂：</span>
        <span class="content">{{channelDetail.fitcampLiveCodeUrl}}</span>
      </li>
      <li>
        <span class="title">活码链接-辣妈：</span>
        <span class="content">{{channelDetail.hotcampLiveCodeUrl}}</span>
      </li>
      <li>
        <span class="title">备注说明：</span>
        <span class="content">{{channelDetail.remark}}</span>
      </li>
    </ul>
    <div class="btn-edit bottom">
      <el-button type="primary" @click="handleEdit">编辑</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channelDetail: {}
    };
  },
  methods: {
    /* 跳转至编辑页面 */
    handleEdit() {
      this.$router.push({
        name: "EditChannelDatail",
        params: { channelDetail: this.channelDetail }
      });
    }
  },
  created() {

    if (this.$route.params.prop) {
      this.channelDetail = this.$route.params.prop;
    }else if(sessionStorage.getItem("channelDetail")){
      this.channelDetail= JSON.parse(sessionStorage.getItem('channelDetail'));
    }
    else{
      this.channelDetail={}
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("channelDetail", JSON.stringify(this.channelDetail));
    });
  }
};
</script>

<style lang="scss" scoped>
.channel-detail {
  margin: 0 auto;
  width: 580px;
  .btn-edit {
    margin-top: 30px;
    height: 64px;
    position: relative;
    .el-button {
      position: absolute;
      right: 30px;
      top: 5px;
      padding: 0 20px;
      background: #337ab7;
      line-height: 30px;
      height: 30px;
      border: none;
      font-size: 13px;
    }
    &.bottom {
      height: 30px;
      margin-top: 0px;
      .el-button {
        left: 130px;
        top: 0;
      }
    }
  }
  .detail {
    li {
      span {
        display: inline-block;
        font-size: 13px;
        height: 24px;
        line-height: 24px;
        padding: 5px;
        vertical-align: middle;
      }
      .title {
        font-weight: bold;
        width: 120px;
      }
    }
  }
}
</style> 