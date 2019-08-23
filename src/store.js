import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questionList:[],
    pageSize: 10,
    nowPage: 1,
    total: 1000,
    Query:{}
  },
  getters:{
    subQuery(state){
      let subQuery = state.Query;
      subQuery.pageSize = state.pageSize;
      subQuery.page = state.nowPage;
      return subQuery;
    },
  },
  mutations: {
    //页码变化设置
    setNowPage(state, page) {
      state.nowPage = page
    },
    //每页展示数量变化设置
    setPageSize(state, size) {
      state.pageSize = size
    },
    //总条数设置
    setTotal(state, size) {
      state.pageSize = size
    },
    //设置展示列表
    setQuestionList(state, total) {
      state.total = total;
    },
    //设置查询条件
    setQuery(state,Query){
      state.Query = Query;
    }
  },
  actions: {
    //请求问卷列表
    clueQuestionList({
      commit,
      getters
    }) {
      api.clueQuestionList(getters.subQuery).then(res => {
        commit('setQuestionList', res.data.pageList)
        commit('setTotal', res.data.paging.total)
      }).catch(
        err => {
          console.log(err)
        }
      )
    },
  }
})