import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login'
import Index from '@/views/Index'
import Home from '@/views/Home'
import Manage from '@/views/Manage'
import AddManage from '@/views/AddManage'
import UpdateManage from '@/views/UpdateManage'
import Role from '@/views/Role'
import AddRole from '@/views/AddRole'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home,
          meta: [],
        },
        {
          path: '/manage',
          name: 'Manage',
          component: Manage,
          meta: ['系统管理','管理员'],
        },
        {
          path: '/manage/add',
          name: 'AddManage',
          component: AddManage,
          meta: ['系统管理','管理员'],
        },
        {
          path: '/manage/update/:id',
          name: 'UpdateManage',
          component: UpdateManage,
          meta: ['系统管理','管理员'],
        },
        {
          path: '/role',
          name: 'Role',
          component: Role,
          meta: ['系统管理','角色'],
        },
        {
          path: '/role/add',
          name: 'AddRole',
          component: AddRole,
          meta: ['系统管理','角色'],
        },
      ]
    }
  ]
})
