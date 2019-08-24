import api from '../api'


export default{
    namespaced: true,
    state: {
        questionList:[ 
          {
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },{
          "id": "1",   //id
              "userId": "1001", //用户编号
              "channelCode": "fitcamp", //渠道编码
              "channelName": "站内",////渠道名称
              "clueType": "1",//线索类型 1减脂 2 辣妈
              "questionType": "1",//问卷类型 1减脂 2 辣妈
              "redirectLiveChannelCode": "fitcamp",//跳转活码渠道
              "isNewClue": "1",//是否新线索 1 是 0 否【default】
              "redirectLiveChannelName": "站内",//跳转活码渠道名称
              "redirectLiveChannelUrl":"htts://" ,//跳转活码渠道链接
              "wechatAvatarUrl": "https://fop-hotcamp-resource.rjfittime.com/1566377642299047011197490423307",//头像
              "wechatNickName": "test",//名字
              "wechatGender": "1",//值为1时是男性，值为2时是女性，值为0时是未知
              "wechatCountry": "中国",//国家
              "wechatProvince": "北京",//省
              "wechatCity": "北京",//城市
              "createTime": "14/8/2019 14:50:49",//创建时间
              "createUserId": "10001",//修改时间
              "isDelete": "1",//删除状态 未删除(0) 【default】 已删除(1)
              "lastUpdateTime": "14/8/2019 14:50:33",//修改时间
              "lastUpdateUserId": "10001"//修改用户ID
        },],
        pageSize: 10,
        nowPage: 1,
        total: 2000,
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
}