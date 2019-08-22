<template>
  <div class="question-list">
    <!-- 表格标题 -->
    <div class="question-header">
      <span class="title">数据列表</span>
      <el-button type="primary" icon="el-icon-document-copy">导出数据</el-button>
    </div>

    <!-- 数据列表 -->
    <div class="data-table">
      <table>
        <!-- 数据列表表头 -->
        <thead>
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
            <th class="PLAM">PLAM来源分数</th>
            <th class="PLAM">PLAM地域分数</th>
            <th class="PLAM">PLAM年龄分数</th>
            <th class="PLAM">PLAM月龄分数</th>
            <th class="PLAM">PLAM总分数</th>
            <th>线索等级</th>
            <th>跳转活码渠道</th>
            <th>跳转活码链接</th>
            <th>微信头像昵称</th>
            <th>微信性别</th>
            <th>微信国家</th>
            <th>微信省市</th>
          </tr>
        </thead>
        <!-- 数据列表内容 -->
        <tbody>
          <tr v-for="(item,index) in questionList" :key="index">
            <td>{{ item.userId }}</td>
            <td>{{ item.channel }}</td>
            <td>{{ item.questionType }}</td>
            <td>{{ item.isSkip?"-":"-" }}</td>
            <td>{{ dateFormat(item.subTime) }}</td>
            <td>{{ item.sex ? '女' : '男' }}</td>
            <td>{{ item.isInPregnancy?"-":"-"}}</td>
            <td>{{ new Date().getFullYear()-item.babyBirth?"-":"-"}}</td>
            <td>{{ new Date().getFullYear()-item.birth?"-":"-"}}</td>
            <td>{{ item.clueValidity?"-":"-"}}</td>
            <td>{{ item.clueType}}</td>
            <td class="PLAM">{{ item.PLAMOrigin?"-":"-"}}</td>
            <td class="PLAM">{{ item.PLAMAddress?"-":"-"}}</td>
            <td class="PLAM">{{ item.PLAMYear?"-":"-"}}</td>
            <td class="PLAM">{{ item.PLAMMonth?"-":"-" }}</td>
            <td class="PLAM">{{ item.PLAMTotal?"-":"-" }}</td>
            <td>{{ item.clueLevel?"-":"-" }}</td>
            <td>{{ item.skipChannel }}</td>
            <td>{{ item.skipLink }}</td>
            <td>{{ item.WChatName?"-":"-" }}</td>
            <td>{{ item.WChatSex?'女':'男' }}</td>
            <td>{{ item.WChatCountry?"-":"-" }}</td>
            <td>{{ item.WChatCity?"-":"-" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--  翻页控制 -->
    <div class="page-turning">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 50, 100]"
        :current-page="nowPage"
        :page-size="pageSize"
        :total="count"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions,mapGetters } from "vuex";
import {dateFormat} from "../../utils/dateFormat"
export default {
  computed: {
    ...mapState(["nowPage","pageSize","questionList"]),
    ...mapGetters(["count"])
  },
  methods: {
    ...mapMutations(['setNowPage','setPageSize']),
    handleSizeChange(size) {
      this.setPageSize(size)
      this.setNowPage(1)
    },
    handleCurrentChange(page) {
      this.setNowPage(page)
    },
    dateFormat
  }
};
</script>

<style>
</style>