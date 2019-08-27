<template>
  <div class="channel-detail">
    <!-- 新增负责人及保存按钮 -->
    <div class="btn-edit">
      <el-button type="primary" class="add" @click="addLeader">新增负责人</el-button>
      <el-button type="primary" @click="saveEdit">保存</el-button>
    </div>
    <!-- 编辑区域 -->
    <ul class="detail">
      <li>
        <span class="title">渠道类型:</span>
        <el-select v-model="channelDetail.channelType">
          <el-option
            v-for="item in options.channelType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span class="must">*</span>
      </li>
      <li>
        <span class="title">一级渠道:</span>
        <el-select v-model="channelDetail.firstChannelName">
          <el-option
            v-for="item in options.firstChannelName"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span class="must">*</span>
      </li>
      <li>
        <span class="title">二级渠道:</span>
        <el-select v-model="channelDetail.secondChannelName">
          <el-option
            v-for="item in options.secondChannelName"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span class="must">*</span>
      </li>
      <li>
        <span class="title">渠道码名称:</span>
        <el-input v-model="channelDetail.channelName"></el-input>
        <span class="must">*</span>
      </li>
      <li>
        <span class="title">渠道Source:</span>
        <el-input :disabled="true"></el-input>
        <span class="must">*</span>
      </li>
      <li>
        <span class="title">渠道负责人：</span>
        <el-select v-model="channelDetail.ownerName">
          <el-option
            v-for="item in options.ownerName"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </li>
      <li>
        <span class="title">白名单用户编码：</span>
        <el-input v-model="channelDetail.whiteListUserId" maxlength="100"></el-input>
      </li>
      <li>
        <span class="title">活码链接-减脂：</span>
        <el-input v-model="channelDetail.fitcampLiveCodeUrl" maxlength="200"></el-input>
      </li>
      <li>
        <span class="title">活码链接-辣妈：</span>
        <el-input v-model="channelDetail.hotcampLiveCodeUrl" maxlength="200"></el-input>
      </li>
      <li>
        <span class="title">备注说明：</span>
        <el-input type="textarea" v-model="channelDetail.remark" maxlength="100" show-word-limit></el-input>
        <span class="must">*</span>
      </li>
    </ul>
    <div class="btn-edit bottom">
      <el-button type="primary" @click="saveEdit">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channelDetail: {},
      /*获取下拉菜单options的可选值 */
      options: {
        channelType: [],
        firstChannelName: [],
        secondChannelName: [],
        ownerName: []
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    if(from.path =="/DistributionChannel"){
       window.sessionStorage.removeItem("channelDetail")
    }
    next();
  },
  created() {
    if (this.$route.params.channelDetail) {
      this.channelDetail = this.$route.params.channelDetail;
    } else if(sessionStorage.getItem("channelDetail")){
      this.channelDetail = JSON.parse(sessionStorage.getItem("channelDetail"));
    }else{
      this.channelDetail={}
    }
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem(
        "channelDetail",
        JSON.stringify(this.channelDetail)
      );
    });
  },
  methods: {
    addLeader() {
      //调用新增负责人的功能,成功后刷新options
    },
    saveEdit() {
      //简单校验必填项目
      let message = [];
      if (this.channelDetail.channelType == "") {
        message.push("渠道类型");
      }
      if (this.channelDetail.firstChannelName == "") {
        message.push("一级渠道");
      }
      if (this.channelDetail.secondChannelName == "") {
        message.push("二级渠道");
      }
      if (this.channelDetail.secondChannelName == "") {
        message.push("渠道码名称");
      }
      if (this.channelDetail.remark == "") {
        message.push("备注");
      }
      if (message.length > 0) {
        let alert = message.join(",");
        this.$message({
          message: alert + " 不能为空!",
          type: "warning"
        });
        return;
      }
      //调用修改渠道信息的接口，成功关闭编辑页跳转至渠道信息列表
      if (true) {
        this.$alert("修改或创建成功", "提升", {
          confirmButtonText: "确定",
          callback: () => {
            this.$router.push("/DistributionChannel");
          }
        });
      }
    }
  }
};
</script>

<style lang="scss">
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
      background: #5cb85c;
      line-height: 30px;
      height: 30px;
      border: none;
      font-size: 13px;
      &.add {
        background: #fff;
        color: #333;
        border: 1px solid #dcdfe6;
        left: 0px;
        top: 5px;
        padding: 0 10px;
      }
    }
    &.bottom {
      height: 30px;
      margin-top: 5px;
      .el-button {
        left: 130px;
        top: 0;
      }
    }
  }
  .detail {
    li {
      vertical-align: middle;
      padding: 5px 0;
      span {
        display: inline-block;
        font-size: 13px;
        height: 24px;
        line-height: 24px;
        padding: 5px;
        vertical-align: middle;
        &.title {
          font-weight: bold;
          width: 120px;
        }
      }
      .must {
        color: red;
      }

      .el-input {
        width: 280px;

        .el-input__inner {
          line-height: 24px;
          height: 24px;
        }
      }
      .el-select {
        .el-input {
          width: 150px;
        }
        .el-input__inner {
          line-height: 24px;
          height: 24px;
        }
      }
      .el-textarea {
        width: 350px;
        vertical-align: top;
      }
    }
  }
}
</style> 