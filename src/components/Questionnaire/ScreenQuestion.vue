<template>
  <div class="screen-question">
    <div class="screen-header">
      <span class="title">筛选</span>
      <el-button type="primary" icon="el-icon-search">查询结果</el-button>
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

        <el-select v-model="value" placeholder="全部">
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

        <el-select v-model="value" placeholder="全部">
          <el-option
            v-for="item in channelOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!-- 问卷类型筛选 -->
      <div class="question-type screen-item">
        <span>问卷类型：</span>

        <el-select v-model="value" placeholder="全部">
          <el-option
            v-for="item in channelOptions"
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
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="年/月/日"
          end-placeholder="年/月/日"
        ></el-date-picker>
      </div>
      <!-- 用户编号 -->
      <div class="user-id screen-item">
        <el-input v-model="input" placeholder="用户编号"></el-input>

      </div>
      <el-button type="primary" icon="el-icon-delete">清除筛选</el-button>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      channelOptions: [
        { label: "全部", value: -1 },
        { label: "渠道名称1", value: 0 },
        { label: "渠道名称2", value: 1 },
        { label: "...", value: -2 }
      ],
      value: -1,
      value1: -1,
      input:"",
      showScreen:true
    };
  },
  methods:{
      //切换筛选条件的显示与隐藏
      toggleShowScreen(){
          this.showScreen=!this.showScreen
      }
  }
};
</script>

<style scoped>
</style>