<template>
  <div class="screen-question">
    <div class="screen-header">
      <span class="title">筛选</span>
      <el-button type="primary" icon="el-icon-search" @click="queryQuestion">查询结果</el-button>
      <!-- 控制筛选条件展示与隐藏 -->
      <div class="collapse" @click="toggleShowScreen">
        <i :class="{'el-icon-arrow-up':true,'sss':!showScreen}"></i>
        {{showScreen?"收起筛选":"展开筛选"}}
      </div>
    </div>
    <div :class="{'screen':true,'hiden':!showScreen}">
      <!-- 投放渠道筛选 -->
      <div class="channel screen-item">
        <span>投放渠道：</span>

        <el-select v-model="querys.channelCode" placeholder="全部">
          <el-option
            v-for="item in channelOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!-- 跳转活码筛选 -->
      <div class="skip screen-item">
        <span>跳转活码渠道：</span>

        <el-select v-model="querys.redirectLiveChannelCode" placeholder="全部">
          <el-option
            v-for="item in redirectLiveChannelCodeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!-- 问卷类型筛选 -->
      <div class="question-type screen-item">
        <span>问卷类型：</span>

        <el-select v-model="querys.questionType" placeholder="全部">
          <el-option
            v-for="item in questionTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!-- 根据日期 -->
      <div class="sub-time screen-item">
        <span>提交日期：</span>
        <el-date-picker
          v-model="querys.startAndEndTime"
          type="daterange"
          range-separator="至"
          start-placeholder="年/月/日"
          end-placeholder="年/月/日"
        ></el-date-picker>
      </div>
      <!-- 用户编号 -->
      <div class="user-id screen-item">
        <el-input v-model="querys.userId" placeholder="用户编号"></el-input>
      </div>
      <el-button type="primary" icon="el-icon-delete" @click="clearScreen">清除筛选</el-button>
    </div>
  </div>
</template>

<script>
import { setTimeout, clearTimeout } from "timers";
export default {
  data() {
    return {
      //我认为需要有一个接口返还筛选的配置条件
      channelOptions: [],
      questionTypeOptions: [
        {
          label: "全部",
          value: ""
        },
        {
          label: "减脂",
          value: 1
        },
        {
          label: "辣妈",
          value: 2
        }
      ],
      redirectLiveChannelCodeOptions: [],
      querys: {
        channelCode: "",
        questionType: "",
        redirectLiveChannelCode: "",
        startAndEndTime: null,
        userId: ""
      },
      showScreen: true,
      queryTimer: null,
      clearTimer: null
    };
  },

  methods: {
    /* 切换筛选条件的显示与隐藏 */
    toggleShowScreen() {
      this.showScreen = !this.showScreen;
    },
    /* 置空 */
    clearScreen() {
      this.clearTimer = setTimeout(() => {
        this.querys.channelCode = "";
        this.querys.questionType = "";
        this.querys.redirectLiveChannelCode = "";
        this.querys.startAndEndTime = null;
        this.querys.userId = "";
        //恢复到全部问卷page=1状态
        this.$store.commit("setNowPage",1);
        this.$store.commit("setQuery", {});
        this.$store.dispatch("clueQuestionList");
      },100);
    },
    /* 重新设置查找参数 */
    queryQuestion() {
      this.queryTimer = setTimeout(() => {
        clearTimeout(this.queryTimer);
        const Query = {};
        for (let prop in this.querys) {
          //设置除时间外属性
          if (this.querys[prop] !== "" && prop != "startAndEndTime") {
            Query[prop] = this.querys[prop];
          }
          //设置时间戳
          if (prop == "startAndEndTime" && this.querys[prop]) {
            let startDateTime = this.querys[prop][0].getTime();
            let endDateTime = this.querys[prop][1].getTime();
            Query.startDateTime = startDateTime;
            Query.endDateTime = endDateTime;
          }
        }
        this.$store.commit("setQuery", Query);
        // this.$store.dispatch("clueQuestionList");
      }, 100);
    }
  }
};
</script>
