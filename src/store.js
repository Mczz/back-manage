import Vue from 'vue'
import Vuex from 'vuex'
import questionnaireMod from './mods/questionnaireMod'
import distributionChannelMod from './mods/distributionChannelMod'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      question:questionnaireMod,
      channel:distributionChannelMod
    }
})