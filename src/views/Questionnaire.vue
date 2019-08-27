<template>
  <div class="question-naire">
    <h1>投放问卷数据</h1>
    <!-- 筛选条件 -->
    <div class="screen-question">
      <div class="screen-header">
        <span class="title">筛选</span>
        <el-button type="primary" icon="el-icon-search" @click="querySubmit">查询结果</el-button>
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
              v-for="item in options.channelOptions"
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
              v-for="item in options.redirectLiveChannelCodeOptions"
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
              v-for="item in options.questionTypeOptions"
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
        <el-button type="primary" icon="el-icon-delete" @click="clearQuerys">清除筛选</el-button>
      </div>
    </div>
    <!-- 数据列表展示区域 -->
    <v-table
      url="https://www.easy-mock.com/mock/5d63d4230731ed4279506eec/example/test"
      exporUrl
      title="数据列表"
      :querys="searchQuerys"
    >
      <template #trh>
        <tr>
          <th>用户编号</th>
          <th>投放渠道</th>
          <th>问卷类型</th>
          <th>是否跳过问题</th>
          <th>提交时间</th>
          <th>性别</th>
          <th>是否孕中产后</th>
          <th>宝宝月龄</th>
          <th>年龄</th>
          <th>线索有效性</th>
          <th>线索分类</th>
          <th>PLAM来源分数</th>
          <th>PLAM地域分数</th>
          <th>PLAM年龄分数</th>
          <th>PLAM月龄分数</th>
          <th>PLAM总分数</th>
          <th>线索等级</th>
          <th>跳转活码渠道</th>
          <th>跳转活码链接</th>
          <th>微信头像昵称</th>
          <th>微信性别</th>
          <th>微信国家</th>
          <th>微信省市</th>
        </tr>
      </template>
      <template v-slot:trb="prop">
        <tr>
          <td>{{prop.item.userId }}</td>
          <td>{{prop.item.channelName }}</td>
          <td>{{prop.item.questionType== "1"?"减脂":"辣妈" }}</td>
          <td>{{prop.item.isSkip?"-":"-" }}</td>
          <td>{{prop.item.createTime }}</td>
          <td>{{prop.item.sex ? '女' : '男' }}</td>
          <td>{{prop.item.isInPregnancy?"-":"-"}}</td>
          <td>{{ new Date().getFullYear()-prop.item.babyBirth?"-":"-"}}</td>
          <td>{{ new Date().getFullYear()-prop.item.birth?"-":"-"}}</td>
          <td>{{prop.item.clueValidity?"-":"-"}}</td>
          <td>{{prop.item.clueType=="1"?"减脂":"辣妈"}}</td>
          <td>{{prop.item.PLAMOrigin?"-":"-"}}</td>
          <td>{{prop.item.PLAMAddress?"-":"-"}}</td>
          <td>{{prop.item.PLAMYear?"-":"-"}}</td>
          <td>{{prop.item.PLAMMonth?"-":"-" }}</td>
          <td>{{prop.item.PLAMTotal?"-":"-" }}</td>
          <td>{{prop.item.clueLevel?"-":"-" }}</td>
          <td>{{prop.item.redirectLiveChannelName }}</td>
          <td>{{prop.item.redirectLiveChannelUrl }}</td>
          <td>{{prop.item.wechatNickName?"-":"-" }}</td>
          <td>{{prop.item.wechatGender?'女':'男' }}</td>
          <td>{{prop.item.wechatCountry?"-":"-" }}</td>
          <td>{{prop.item.wechatProvince+" "+prop.item.wechatCity }}</td>
        </tr>
      </template>
    </v-table>
  </div>
</template>
    

<script>
import vTable from "../components/vTable";
import Axios from "axios";
export default {
  created() {
    Axios.get(
      "https://www.easy-mock.com/mock/5d63d4230731ed4279506eec/example/questionOptions"
    ).then(res => {
      this.options = res.data.data;
    });
  },
  data() {
    return {
      //筛选配置参数
      options: {},
      // 最终要提交的查询参数
      searchQuerys: {},
      //是否显示查询条件控制
      showScreen: true,
      querys: {
        channelCode: "",
        questionType: "",
        redirectLiveChannelCode: "",
        startAndEndTime: null,
        userId: ""
      }
    };
  },

  components: {
    vTable
  },
  methods: {
    /* 切换筛选条件的显示与隐藏 */
    toggleShowScreen() {
      this.showScreen = !this.showScreen;
    },
    /* 清空筛选条件 */
    clearQuerys() {
      for (let prop in this.querys) {
        this.querys[prop] = "";
      }
      this.startAndEndTime = null;
      this.searchQuerys = {};
    },

    /* 重交查询参数 */
    querySubmit() {
      let Query = {};
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

      this.searchQuerys = Query;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/Questionnaire.scss";
</style>
s
