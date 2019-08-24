<template>
  <div class="question-list">
    <!-- 表格标题 -->
    <div class="question-header">
      <span class="title">数据列表</span>
      <el-button type="primary" icon="el-icon-document-copy" @click="exportExcel">导出数据</el-button>
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
            <td>{{ item.channelName }}</td>
            <td>{{ item.questionType== "1"?"减脂":"辣妈" }}</td>
            <td>{{ item.isSkip?"-":"-" }}</td>
            <td>{{ dateFormat(item.createTime) }}</td>
            <td>{{ item.sex ? '女' : '男' }}</td>
            <td>{{ item.isInPregnancy?"-":"-"}}</td>
            <td>{{ new Date().getFullYear()-item.babyBirth?"-":"-"}}</td>
            <td>{{ new Date().getFullYear()-item.birth?"-":"-"}}</td>
            <td>{{ item.clueValidity?"-":"-"}}</td>
            <td>{{ item.clueType=="1"?"减脂":"辣妈"}}</td>
            <td class="PLAM">{{ item.PLAMOrigin?"-":"-"}}</td>
            <td class="PLAM">{{ item.PLAMAddress?"-":"-"}}</td>
            <td class="PLAM">{{ item.PLAMYear?"-":"-"}}</td>
            <td class="PLAM">{{ item.PLAMMonth?"-":"-" }}</td>
            <td class="PLAM">{{ item.PLAMTotal?"-":"-" }}</td>
            <td>{{ item.clueLevel?"-":"-" }}</td>
            <td>{{ item.redirectLiveChannelName }}</td>
            <td>{{ item.redirectLiveChannelUrl }}</td>
            <td>{{ item.wechatNickName?"-":"-" }}</td>
            <td>{{ item.wechatGender?'女':'男' }}</td>
            <td>{{ item.wechatCountry?"-":"-" }}</td>
            <td>{{ item.wechatProvince+" "+item.wechatCity }}</td>
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
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { mapState} from "vuex";
import {dateFormat} from "../../utils/dateFormat"
import api from '../../api'

export default {
  computed: {
    ...mapState({
      nowPage:state => state.question.nowPage,
      pageSize:state => state.question.pageSize,
      questionList:state => state.question.questionList,
      total:state => state.question.total,
      Query:state => state.question.Query,

    }),
  },
  methods: {
    /* 切换每页数量 */
    handleSizeChange(size) {
      this.$store.commit('question/setPageSize',size);
      this.$store.commit('question/setNowPage',1);
      this.$store.dispatch('question/clueQuestionList');
    },
    /* 切换页面 */
    handleCurrentChange(page) {
      this.$store.commit('question/setNowPage',page);
      this.$store.dispatch('question/clueQuestionList');
    },
    /* 格式化日期 */
    dateFormat,
    /* 导出到Excel */
    exportExcel(){
      api.exoprtClueQuestionExcel(this.Query).then(res=>{

      }).catch(
        err => {
          console.log(err)
        }
      )
    }
  },
  created(){
    this.$store.dispatch('question/clueQuestionList');
  }
};
</script>

<style>
</style>