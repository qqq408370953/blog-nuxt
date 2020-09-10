
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '欢迎访问我的个人主页 - ITemsblog',
    titleTemplate: '%s - ITemsblog的个人主页',
    meta: [
      { charset: 'utf-8' },
      {
        name: "baidu-site-verification",
        content: "mlfObnRJpw"
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'ITemsblog的个人博客，ITemsblog的生活记录，ITemsblog的前端学习' },
      { hid: 'keywords', name: 'keywords', content: 'ITemsblog，vue，node，react，nuxt，blog，首页，JavaScript，js，css，html，web前端，前端开发' },
      { hid: 'author', name: 'author', content: 'ITemsblog' },
      { hid: 'renderer', name: 'renderer', content: 'webkit|ie-comp|ie-stand' },
      { hid: 'http-equiv', 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "https://hm.baidu.com/hm.js?9e90d4ef7ecbccf604aa53e2b60a2736", ssr: false }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css',
    '@/assets/css/github-markdown.css',
    '@/assets/css/tomorrow-night.css',
    // '@/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    '@/plugins/baiduGa.js', /*百度统计*/
    { src:"~plugins/vue-particles",ssr:false},
    {src:'~plugins/routeLoading', ssr:false }
    // ,
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: { allChunks: true },
    extend(config, ctx) {
    },
    vendor: ['axios']
  },
  server: {
    port: 3000,
    host: "127.0.0.1"
  }
}
