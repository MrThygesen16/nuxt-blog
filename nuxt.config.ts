const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/mrthygesen16.github.io/'
  }
} : {}


module.exports = {
  
  ...routerBase,
  env: {
    baseUrl: process.env.BASE_URL || 'https://https://mrthygesen16.github.io/'
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
