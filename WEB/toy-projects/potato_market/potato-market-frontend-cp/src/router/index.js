import Vue from 'vue'
import VueRouter from 'vue-router'

// buyer
import BuyerMain from "../views/buyer/Main.vue"
import BuyerList from "../views/buyer/List.vue"
import BuyerDetail from "../views/buyer/Detail.vue"

// sell-item
import SellItemsMain from "../views/sell-items/Main.vue"
import SellItemsList from "../views/sell-items/List.vue"
import SellItemsRegister from "../views/sell-items/Register.vue"
import SellItemsDetail from "../views/sell-items/Detail.vue"


Vue.use(VueRouter)

const routes = [
  // buyer
  {
    path: '/',
    name: 'home',
    component: BuyerMain
  },
  {
    path: "/buyer",
    name: 'buyer',
    component: BuyerList
  },
  {
    path: '/buyer/:id',
    name: 'buyer-detail',
    component: BuyerDetail
  },

  // sell-items
  {
    path: "/sell/home",
    name: 'sell-home',
    component: SellItemsMain
  },
  {
    path: "/sell/items",
    name: "items",
    component: SellItemsList
  },
  {
    path: "/sell/items/register",
    name: 'items-register',
    component: SellItemsRegister
  },
  {
    path: "/sell/items/register/:id",
    name: 'items-update',
    component: SellItemsRegister
  },
  {
    path: "/sell/items/:id",
    name: 'items-detail',
    component: SellItemsDetail
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
