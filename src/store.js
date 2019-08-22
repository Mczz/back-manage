import Vue from 'vue'
import Vuex from 'vuex'
import {questionList} from './Mork'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questionList,
    pageSize:10,
    nowPage:1
  },
  getters:{
    //总条数
    count(state){
      let count;
      count = state.questionList.length
      return count;
    }
  },
  mutations: {
    //页码变化设置
    setNowPage(state, page) {    
      state.nowPage = page
    },
    //每页展示数量变化设置
    setPageSize(state, size) {    
      state.pageSize = size
    }
  },
  actions: {

  }
})
