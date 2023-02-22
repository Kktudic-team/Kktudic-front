import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoticeView from '../views/NoticeView.vue'
import DetailView from '../views/DetailView.vue'
import ManualView from '../views/ManualView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/notice',
    name: 'notice',
    component: NoticeView
  },
  {
    path: '/notice/:id',
    name: 'notice-detail',
    component: DetailView
  },
  {
    path: '/manual',
    name: 'manual',
    component: ManualView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
