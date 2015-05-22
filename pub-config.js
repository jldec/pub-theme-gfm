module.exports =
{
  'pub-pkg': 'pub-theme-gfm',

  sources: [
    './templates'
  ],

  staticPaths: [
    { path:'./node_modules/github-markdown-css/github-markdown.css', route:'/css', maxAge:'1d' },
    { path:'./static' }
  ],

}