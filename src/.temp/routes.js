export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/kawamataryou/.ghq/github.com/kawamataryo/gridsome-wordpress-demo/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/kawamataryou/.ghq/github.com/kawamataryo/gridsome-wordpress-demo/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/kawamataryou/.ghq/github.com/kawamataryo/gridsome-wordpress-demo/src/pages/Index.vue"),
    meta: { data: true }
  },
  {
    path: "/:year/:month/:day/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--word-press-post-vue" */ "/Users/kawamataryou/.ghq/github.com/kawamataryo/gridsome-wordpress-demo/src/templates/WordPressPost.vue"),
    meta: { data: true }
  },
  {
    path: "/category/:slug/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "page--src--templates--word-press-category-vue" */ "/Users/kawamataryou/.ghq/github.com/kawamataryo/gridsome-wordpress-demo/src/templates/WordPressCategory.vue"),
    meta: { data: true }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/kawamataryou/.ghq/github.com/kawamataryo/gridsome-wordpress-demo/node_modules/gridsome/app/pages/404.vue")
  }
]

