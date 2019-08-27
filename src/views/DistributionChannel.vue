<template>
  <div class="dis-channel">
    <!-- 筛选控制 -->
    <div class="channel-control">
      <!-- 渠道类型 -->
      <div class="screen">
        <span>渠道类型</span>
        <el-select v-model="querys.channelType" placeholder="请选择">
          <el-option
            v-for="item in options.channelType"
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
            v-for="item in options.firstChannelName"
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
            v-for="item in options.secondChannelName"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!-- 渠道码名称/负责人 -->
      <el-input v-model="querys.search" placeholder="渠道码名称/负责人" class="code-name"></el-input>
      <!-- 搜索 -->
      <el-button type="primary" @click="querySubmit" class="search">搜索</el-button>
      <!-- 新增渠道分类 -->
      <el-button type="primary" @click="addChannelType" class="add-type">新增渠道分类</el-button>
      <!-- 新增渠道source -->
      <el-button type="primary" @click="addChannelSource" class="add-sourece">新增渠道Source</el-button>
    </div>
    <!-- 数据列表 -->
    <v-table
      url="https://www.easy-mock.com/mock/5d63d4230731ed4279506eec/example/channelList"
      exportUrl
      :querys="searchQuerys"
      ref="channelList"
    >
      <template #trh>
        <tr>
          <th>渠道类型</th>
          <th>一级渠道</th>
          <th>二级渠道</th>
          <th>渠道码名称</th>
          <th>渠道source</th>
          <th>渠道负责人</th>
          <th>创建日期</th>
          <th>操作</th>
        </tr>
      </template>
      <template v-slot:trb="prop">
        <tr>
          <td>{{prop.item.channelType }}</td>
          <td>{{prop.item.firstChannelName }}</td>
          <td>{{prop.item.secondChannelName }}</td>
          <td>{{prop.item.channelName }}</td>
          <td>{{prop.item.secondChannelName }}</td>
          <td>{{prop.item.ownerName }}</td>
          <td>{{dateFormat(prop.item.createTime) }}</td>
          <td>
            <span class="edit" @click="del(prop.item)">删除</span>
            &nbsp;
            <router-link
              :to="{name:'EditChannel',params:{prop:prop.item}}"
              tag="span"
              class="edit"
            >查看</router-link>
          </td>
        </tr>
      </template>
    </v-table>
  </div>
</template>

<script>
import vTable from "../components/vTable";
import Axios from "axios";
import { dateFormat } from "../utils/dateFormat.js";
export default {
  created() {
    Axios.get(
      "https://www.easy-mock.com/mock/5d63d4230731ed4279506eec/example/channelOpitions"
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
      //查询条件
      querys: {
        channelType: "",
        firstChannelName: "",
        secondChannelName: "",
        search: ""
      }
    };
  },
  components: {
    vTable
  },

  methods: {
    /* 重交查询参数 */
    querySubmit() {
      let Query = {};
      for (let prop in this.querys) {
        if (this.querys[prop] !== "" && prop != "startAndEndTime") {
          Query[prop] = this.querys[prop];
        }
      }

      this.searchQuerys = Query;
    },
    //删除信息
    del(id) {
      //请求删除接口
      this.$refs.channelList.getDataList();
    },
    //跳转至增加页面
    addChannelType() {
      this.$router.push("/EditChannelDatail");
    },
    //跳转至增加页面
    addChannelSource() {
      this.$router.push("/EditChannelDatail");
    },
    dateFormat
  }
};
</script>
<style lang="sass">
    @import "../assets/css/DistributionChannel.scss";
</style>    