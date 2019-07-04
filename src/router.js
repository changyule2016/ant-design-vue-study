import Vue from 'vue'
import Router from 'vue-router'
import A from './views/A.vue'
import Hook from './views/Hook.vue'
import B from './views/B.vue'
import Table from './views/Table.vue'
import Slot from './views/Slot.vue'
import TableBase from './views/TableBase.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'a',
    component: A
  },
  {
    path: '/Hook',
    name: 'Hook',
    component: Hook
  },
  {
    path: '/b',
    name: 'b',
    component: B
  },
  {
    path: '/table',
    component: Table,
    children: [{
      path: 'base',
      component: TableBase
    }]
  },
  {
    path: '/slot',
    name: 'Slot',
    component: Slot
  }
  ]
})
