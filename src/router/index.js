import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Meals from '@/views/Meals.vue';
import Restaurants from '@/views/Restaurants.vue';
import Formula from '@/views/Formula.vue';
import CampaignSite from '@/views/CampaignSite.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meals',
    name: 'Meals',
    component: Meals
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/formula/:resultMeals',
    name: 'Formula',
    component: Formula,
    props: true
  },
  {
    path: '/campaign',
    name: 'CampaignSite',
    component: CampaignSite,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
