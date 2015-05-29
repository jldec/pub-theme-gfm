module.exports =
{
  'pub-pkg': 'pub-theme-gfm',

  sources: [
    './templates'
  ],

  staticPaths: [
    { path:'./node_modules/github-markdown-css/github-markdown.css', route:'/css', inject:true },
    { path:'./css/pub-theme-gfm.css', route:'/css', inject:true }
  ]

}