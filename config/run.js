const lServer = require("@loadable/server")
// const moduleWithfault = require('../build/static/js/bundle')
const path = require("path")
const statsFile = path.resolve('build/loadable-stats.json')
// We create an extractor from the statsFile
const React = require("react")
const extractor = new lServer.ChunkExtractor({ statsFile })

const {renderToString} = require("react-dom/server")

const {default:App} = extractor.requireEntrypoint()

const mockLocation ='/category'

const jsx = extractor.collectChunks(React.createElement(App, {location:mockLocation}, null))

const reactDom = renderToString(jsx)

console.log(reactDom)

//     console.log(jsx)

//     const reactDom = renderToString(jsx)

// import  {renderToString} from 'react-dom/server'

// moduleWithfault.default(extractor,'/category' )


debugger;