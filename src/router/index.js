import { createRouter, createWebHistory } from 'vue-router'
import { inject } from 'vue'

// import components used for routing
import HomeView from '../views/HomeView.vue'
import OfferView from '../views/OfferView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProfileView from '@/views/ProfileView.vue'

// create routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({
        title: route.query.title || '',
        page: parseInt(route.query.page) || 1,
        sort: route.query.sort || '',
        pricemin: Number(route.query.pricemin) || '',
        pricemax: Number(route.query.pricemax) || '',
      }),
    },
    {
      path: '/offer/:id', // use param to scope on offer
      name: 'offer',
      component: OfferView,
      props: true, // authorize props to be send
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/publish',
      name: 'publish',
      component: () => import('../views/PublishView.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      // add local navigation guard
      beforeEnter: (to, from, next) => {
        const GlobalStore = inject('GlobalStore')
        if (GlobalStore?.userInfos.value.token) {
          // if authenticated, go to next page
          next()
        } else {
          next({
            name: 'login',
            query: { redirect: to.name },
          })
        }
      },
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundView,
    },
  ],
})

// global navigation before guard

router.beforeEach((to, from) => {
  const GlobalStore = inject('GlobalStore')
  if (to.meta.requireAuth && !GlobalStore.userInfos.value.token) {
    // route requires to be auth
    return {
      name: 'login',
      query: { redirect: to.name },
    }
  }
})

export default router
