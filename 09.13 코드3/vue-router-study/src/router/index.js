import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/Home.vue"
import Board from "../views/Board.vue"
import About from "../views/About.vue"

Vue.use(VueRouter)

// router 정의법
// import로 가져온다
// router 등록을 한다 (routers 배열)
// {path : "라우터주소", name: "라우터명칭", component : "import로 가져온 컴포넌트"}

const routes = [
  {
    path: "/",
    name: "home",
    component : Main
  },
  {
    path: "/about",
    name: "about",
    component : About
  },
  {
    path: "/board",
    name: "board",
    component : Board
  }
]

// history -> 일반 웹사이트
// history가아니면 어플리케이션에서 활용(#식으로 시작)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
