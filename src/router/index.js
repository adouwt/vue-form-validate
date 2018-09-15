import Vue from 'vue'
import Router from 'vue-router'
import validateTestUse from '@/test/test-validate'
import validateDevUse from '@/dev/dev-validate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test-validate-use',
      name: 'validateTestUse',
      component: validateTestUse
    },
    {
      path: '/dev-validate-use',
      name: 'validateDevUse',
      component: validateDevUse
    }
  ]
})
