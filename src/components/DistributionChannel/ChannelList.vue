<template>
  <div class="channel-list">
    <!-- 头部导出按钮 -->
    <div class="list-header">
      <el-button type="primary" @click="exportClueStatistics">导出</el-button>
    </div>
    <!-- 数据列表 -->
    <table>
      <thead>
        <tr>
          <th>渠道类型</th>
          <th>一级渠道</th>
          <th>二级渠道</th>
          <th>渠道码名称</th>
          <th>渠道Source</th>
          <th>渠道负责人</th>
          <th>创建日期</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in channelList" :key="index" :class="{'bg':index%2==0}">
          <td>{{ item.channelType }}</td>
          <td>{{ item.firstChannelName }}</td>
          <td>{{ item.secondChannelName }}</td>
          <td>{{ item.channelName }}</td>
          <td>{{ item.fitcampLiveCodeUrl }}</td>
          <td>{{ item.ownerName }}</td>
          <td>{{ dateFormat(item.createTime) }}</td>
          <td>
            <span class="edit" @click="del(item.id)">删除</span>
            &nbsp;
            <router-link
              :to="{name:'EditChannel',params:{channelDetail:item}}"
              tag="span"
              class="edit"
            >查看</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 翻页控制 -->
    <el-pagination
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="total"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
import api from "../../api";
import {dateFormat} from "../../utils/dateFormat"

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      pageSize: state => state.channel.pageSize,
      channelList: state => state.channel.channelList,
      total: state => state.channel.total,
      nowPage: state => state.channel.nowPage
    })
  },
  methods: {
      //翻页
    handleCurrentChange(page) {
      this.$store.commit('channel/setNowPage',page);
      this.$store.dispatch("channel/getChannelList");
    },
    /* 删除信息 */
    del(id) {
      this.$confirm("此操作将永久删除该渠道, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //调用删除信息接口删除,成功后提示，然后更新数据
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    /* 导出 */
    exportClueStatistics() {
      api
        .exportClueStatistics()
        .then(res => {})
        .catch(err => {
          console.log(err);
        });
    },
    /* 格式化日期 */
    dateFormat
  },
  created() {
    this.$store.dispatch("channel/getChannelList");
  }
};
</script>

<style scoped>
</style>