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
      path: '/anime/:id(\\d+)',
      component: () => import("@/components/anime-page/index")
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
      path: '/anime/*',
      redirect: '/',
    }
  ]
})
