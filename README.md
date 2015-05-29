# pub-theme-gfm

pub theme for previewing markdown with a style quite similar to
[Github flavored markdown](https://help.github.com/articles/github-flavored-markdown/).

### installation

This theme is included with pub-server as the default theme

``` bash
npm install -g pub-server
```


### to preview your markdown files

Run pub-server by invoking `pub` on the command line.

This starts the pub-server server at http://localhost:3001/.
Use `-p xxxx` to use a different port.


### configuring which files to include

pub-server defaults to reading all .md files in your current directory.

With a `pub-config.json` file, you can configure which source files to include. E.g.

``` json
  {
    "sources": { "path":"./doc", "glob":"**/*.md" }
  }
```

### credits
- github-like markdown css thanks to https://github.com/sindresorhus/github-markdown-css
