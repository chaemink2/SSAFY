import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import BoardList from '../views/Board/List'
import BoardDetail from '../views/Board/Detail'

import TodoList from "../views/todo/List.vue"
import TodoDetail from "../views/todo/Detail.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name : "main",
    component : Main
  },
  {
    path: "/board",
    name : "board-list",
    component : BoardList
  },
  {
    path: "/board/:id",
    name : "board-detail",
    component : BoardDetail
  },

  {
		path: "/todo",
		name:"todo-list",
		component: TodoList,
	},{
		path: "/todo/:id",
		name:"todo-detail",
		component: TodoDetail,
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
