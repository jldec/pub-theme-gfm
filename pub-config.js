module.exports =
{
  sources: [
    './templates'
  ],

  staticPaths: [
    { path:'./node_modules/github-markdown-css/github-markdown.css', route:'/css', maxAge:'1d' },
    { path:'./static/css', route:'/css', maxAge:'1d' },
    { path:'./static/js', route:'/js', maxAge:'30d' }
  ],

}