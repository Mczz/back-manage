<template>
  <div class="channel-control">
    <!-- 渠道类型 -->
    <div class="screen">
      <span>渠道类型</span>
      <el-select v-model="querys.channelType" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <!-- 一级 -->
    <div class="screen">
      <span>一级渠道</span>
      <el-select v-model="querys.firstChannelName" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <!-- 二级 -->
    <div class="screen">
      <span>二级渠道</span>
      <el-select v-model="querys.secondChannelName" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <!-- 渠道码名称/负责人 -->
    <el-input v-model="querys.search" placeholder="渠道码名称/负责人" class="code-name"></el-input>
    <!-- 搜索 -->
    <el-button type="primary" @click="queryList" class="search">搜索</el-button>
    <!-- 新增渠道分类 -->
    <el-button type="primary" @click="addChannelType" class="add-type">新增渠道分类</el-button>
    <!-- 新增渠道source -->
    <el-button type="primary" @click="addChannelSource" class="add-sourece">新增渠道Source</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //应通过接口获取选择列表的选择项
      options: [],
      querys: {
        channelType: "",
        firstChannelName: "",
        secondChannelName: "",
        search: ""
      },
      //防抖
      queryTimer: null
    };
  },
  methods: {
    //设置查询参数并查询
    queryList() {
      this.queryTimer = setTimeout(() => {
        clearTimeout(this.queryTimer);
        const Query = {};
        for (let prop in this.querys) {
          //设置除时间外属性
          if (this.querys[prop] !== "") {
            Query[prop] = this.querys[prop];
          }
        }
        this.$store.commit("channel/setNowPage",1);
        this.$store.commit("channel/setQuery", Query);
        this.$store.dispatch("channel/getChannelList");
      }, 100);
    },
    //跳转至增加页面
    addChannelType() {
      this.$router.push("/EditChannelDatail");
    },
    //跳转至增加页面
    addChannelSource() {
      this.$router.push("/EditChannelDatail");
    }
  }
};
</script>

<style scoped>
</style>