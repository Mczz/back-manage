import api from '../api'


export default {
    namespaced: true,

    state: {
        channelList: [
            {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }, {
            "id": 765,
            "channelCode": "xs_zhangke", //渠道编码
            "channelType": "站内", //渠道类型
            "firstChannelName": "其他", //第一渠道名称
            "secondChannelName": "销售转化", //第二渠道名称
            "status": 1, //状态
            "ownerName": null,
            "createTime": 1565229610000, //创建时间
            "remark": "", //备注
            "channelName": "张可", //渠道名称
            "fitcampLiveCodeUrl": "test", //活码链接-减脂营
            "hotcampLiveCodeUrl": "", //活码链接-辣妈营
            "whiteListUserId": "" //白名单
        }],
        pageSize: 20,
        nowPage: 1,
        total: 1000,
        Query:{}
    },

    getters: {
        subQuery(state){
            let subQuery = state.Query;
            subQuery.pageSize = state.pageSize;
            subQuery.page = state.nowPage;
            return subQuery;
          },
    },
    mutations: {
        setChannelList(state,list){
          state.list = list;
      },
      //设置查询条件
      setQuery(state,Query){
        state.Query = Query;
      },
      setNowPage(state, page) {
        state.nowPage = page
      },
      //总条数设置
      setTotal(state, size) {
        state.pageSize = size
      },
    },
    actions: {
        /* 有一个根据条件获取列表的接口 */
        getChannelList({
            commit,
            getters
          }) {
            api.getChannelList(getters.subQuery).then(res => {
              commit('setChannelList', res.data.pageList)
              commit('setTotal', res.data.paging.total)
            }).catch(
              err => {
                console.log(err)
              }
            )
          },
    }
}