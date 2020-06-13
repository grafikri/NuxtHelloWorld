// .vuepress/config.js
module.exports = {
  title: 'My Custom Project',
  description: 'This is a custom description',
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'http://github.com/grafikri' }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        sidebarDepth: 5,
        children: [
          {
            title: 'Introduction',
            path: '/guide/introduction'
          },
          {
            title: 'Getting Started',
            path: '/guide/getting_started'
          }
        ]
      },
    ]
  }
}