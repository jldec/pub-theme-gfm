# pub-theme-gfm

pub theme for previewing markdown with a style similar to
[GitHub flavored markdown](https://help.github.com/articles/github-flavored-markdown/).

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
  "pkgs": ["pub-theme-gfm", ...],
}
```

### credits
- github-like markdown css thanks to https://github.com/sindresorhus/github-markdown-css
