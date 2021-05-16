import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: 'library',
    },

    {
      path: '/library',
      component: () => import("@/components/library/index")
    },

    {
      path: '/auth',
      redirect: '/auth/login',
      components: {
        auth: () => import ("@/components/auth")
      },
      children: [
        {
          path: 'login',
          component: () => import("@/components/auth/login")
        },
        {
          path: 'registration',
          component: () => import("@/components/auth/registration"),
        },
      ]
    },
    {
      path: '/anime/:id(\\d+)',
      name: 'anime',
      components: {anime: () => import("@/components/anime-card/anime-card")},
    },
    {
      path: '/anime/*',
      redirect: '/',
    }
  ]
})
