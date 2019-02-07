# pub-theme-gfm

[pub-server](https://github.com/jldec/pub-server) theme for previewing markdown with a style similar to
[GitHub flavored markdown](https://help.github.com/articles/github-flavored-markdown/).  
This theme was a precursor to [pub-theme-doc](https://github.com/jldec/pub-theme-doc/) and is no longer being maintained.

![](/images/largescreen.png)

### installation

``` bash
npm install --save pub-theme-gfm
```

### to preview your markdown files using this theme

``` bash
pub -t pub-theme-gfm
```


### to configure a project to use this theme

Include "pub-theme-gfm" in `pub-config.js` pkgs.

``` json
{
  "pkgs": ["pub-theme-gfm"]
}
```

### credits
- github-like markdown css thanks to https://github.com/sindresorhus/github-markdown-css
