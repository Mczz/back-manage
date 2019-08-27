<template>
  <div class="question-list">
    <!-- 表格标题 -->
    <div class="question-header">
      <span v-if="title" class="title">{{title}}</span>
      <el-button type="primary" icon="el-icon-document-copy" @click="exportTo">导出数据</el-button>
    </div>
    <!-- 数据列表 -->
    <div class="data-table">
      <table>
        <!-- 数据列表表头 -->
        <thead>
          <slot name="trh"></slot>
        </thead>
        <!-- 数据列表内容 -->
        <tbody>
          <slot name="trb" v-for="item in pageList" :item="item"></slot>
        </tbody>
      </table>
    </div>
    <!--  翻页控制 -->
    <div class="page-turning">
      <el-pagination
        @current-change="handleChange(paginationOpitons.nowPage)"
        @size-change="handleChange(1)"
        :page-sizes="[10, 20, 50, 100]"
        :current-page="paginationOpitons.nowPage"
        :page-size="paginationOpitons.pageSize"
        :total="paginationOpitons.total"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  props: {
    //请求的URL
    url: {
      type: String,
      default: ""
    },
    exportUrl:{
      type: String,
      default: ""
    },
    // Query参数
    querys: {
      type: Object,
      default: function() {
        return { params: {} };
      }
    },
    //表格标题
    title:{
        type:String,
        default:""
    }
  },
  data() {
    return {
      pageList: [],
      paginationOpitons: {
        nowPage: 1,
        total: 0,
        pageSize: 10
      }
    };
  },
  methods: {
    //组件内请求数据的方法
    getDataList(page) {
      this.querys.page = page ? page : this.nowPage;
      this.querys.pageSize = this.paginationOpitons.pageSize;
      Axios.get(this.url, {
        params: this.querys
      }).then(res => {
        this.pageList = res.data.object.pageList;
        this.paginationOpitons.total = res.data.object.paging.total;
      });
    },
    exportTo(){
       Axios.get(this.exportUrl).catch((e)=>{
         console.log(e)
       })
    },
    handleChange(page) {
      this.getDataList(page);
    }
  },
  watch:{
    querys(){
      this.getDataList(1)
    }
  },

  created() {
    this.getDataList(this.nowPage);
  }
};
</script>

