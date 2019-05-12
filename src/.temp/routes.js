export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/kawamataryou/.ghq/github.com/kawamataryo/gridsome-wordpress-demo/src/pages/About.vue"),
    meta: { data: [1,"a780fc6e"] }
  },
  {
    path: "/contact",
    component: () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/kawamataryou/.ghq/github.com/kawamataryo/gridsome-wordpress-demo/src/pages/Contact.vue"),
    meta: { data: [1,"a780fc6e"] }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/kawamataryou/.ghq/github.com/kawamataryo/gridsome-wordpress-demo/src/pages/Index.vue"),
    meta: { data: [1,"a780fc6e"] }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/kawamataryou/.ghq/github.com/kawamataryo/gridsome-wordpress-demo/node_modules/gridsome/app/pages/404.vue"),
    meta: { data: [1,"a780fc6e"] }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/kawamataryou/.ghq/github.com/kawamataryo/gridsome-wordpress-demo/node_modules/gridsome/app/pages/404.vue"),
    meta: { data: [1,"a780fc6e"] }
  }
]

