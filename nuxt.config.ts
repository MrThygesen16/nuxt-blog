export default {
 
  env: {
    baseUrl: process.env.BASE_URL || 'https://mrthygesen16.github.io'
  },

  extends: 'content-wind',
  // content: {
  //   documentDriven: true
  // },
  components: true,
  // ssr: false,
  target: 'static',

  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Michael Thygesen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Michael Thygesen's personal website"
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'public/favicon.ico' }]
  },
  
  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  sitemap: {
    hostname: 'https://mrthygesen16.github.io',

    // https://briancaffey.github.io/2021/10/02/how-i-write-and-share-technical-software-development-articles-in-2021/
    // the god, the king, the legend :pray-emoji:
    routes: async () => {
      const { $content } = require('@nuxt/content')

      const posts = await $content({ deep: true })
        .only(['path', 'draft'])
        .where({ draft: { $ne: true } })
        .fetch()
      const projects = await $content('projects').only(['path']).fetch()

      return []
        .concat(
          ...posts
            .filter((x: { path: string }) => !x.path.startsWith('/projects/'))
            .map((w: { path: any }) => w.path)
        )
        .concat(...projects.map((p: { path: any }) => p.path))
    }
  },

}
