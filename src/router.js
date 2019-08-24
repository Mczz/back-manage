import Vue from 'vue'
import Router from 'vue-router'
import Questionnaire from './views/Questionnaire.vue'
import DistributionChannel from './views/DistributionChannel.vue'
import EditChannel from './views/EditChannel.vue'
import EditChannelDatail from './views/EditChannelDatail.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'questionnaire',
      component: Questionnaire
    },
    {
      path: '/DistributionChannel',
      name: 'DistributionChannel',
      component: DistributionChannel
    },
    {
      path: '/EditChannel',
      name: 'EditChannel',
      component: EditChannel
    },
    {
      path: '/EditChannelDatail',
      name: 'EditChannelDatail',
      component: EditChannelDatail
    }
    
  ]
})
