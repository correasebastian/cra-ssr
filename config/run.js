const lServer = require("@loadable/server")
const moduleWithfault = require('../build/static/js/bundle')
const path = require("path")
const statsFile = path.resolve('build/loadable-stats.json')
// We create an extractor from the statsFile
const extractor = new lServer.ChunkExtractor({ statsFile })

const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
// You can also collect your "preload/prefetch" links
const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
// And you can even collect your style tags (if you use "mini-css-extract-plugin")
const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();

moduleWithfault.default(extractor,'/category' )


debugger;