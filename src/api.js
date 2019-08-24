
/*
    接口
**/

import URLS from './urls'
import Axios from 'axios'

export default{
    clueQuestionList(QUERY){
        return Axios.get(URLS.clueQuestionList,{
            params:QUERY
        })
    },
    exoprtClueQuestionExcel(QUERY){
        return Axios.get(URLS.exoprtClueQuestionExcel,{
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            params:QUERY
        })
    },
    getChannelList(QUERY){
        return Axios.get(URLS.exoprtClueQuestionExcel,{
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            params:QUERY
        })
    },
    exportClueStatistics(QUERY){
        return Axios.get(URLS.exportClueStatistics,{
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            params:QUERY
        })
    }
    
}