const lServer = require("@loadable/server")
const moduleWithfault = require('../build/bundle')
const path = require("path")
const statsFile = path.resolve('build/loadable-stats.json')
// We create an extractor from the statsFile
const extractor = new lServer.ChunkExtractor({ statsFile })

moduleWithfault.default(extractor,'/category' )


debugger;