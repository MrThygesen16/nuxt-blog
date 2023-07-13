module.exports = {
  router: {
    base: '/nuxt-blog/'
  },

  extends: 'content-wind',
  // content: {
  //   documentDriven: true
  // },
  components: true,
  // ssr: false,
  target: 'static',
  
  server: {
    port: 3000,
    host: '0.0.0.0'
  },

}
