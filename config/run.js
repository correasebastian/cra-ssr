const lServer = require("@loadable/server")
const moduleWithfault = require('../build/server/bundle')
const path = require("path")
const statsFile = path.resolve('build/server/loadable-stats.json')
// We create an extractor from the statsFile
const extractor = new lServer.ChunkExtractor({ statsFile })
const fs = require('fs');
const {Helmet} = require('react-helmet')


const express = require('express');

const PORT = 3000;

// const routes = ['/', '/page'];

/**
 * initialize the application and create the routes
 */
const app = express();

const filePath = path.resolve(__dirname, '..', 'build','client', 'index.html');
const mainStatic = path.resolve(__dirname, '../build/client')

const all = (req, res)=>{
    fs.readFile(filePath, 'utf8', (err, htmlData) => {        
        if (err) {
          console.error('err', err);
          return res.status(404).end(); // WARNING: This 404 will be handled by Express server and won't be your React 404 component.
        }
        const location = req.url;
          /**
           * Set the app's response to 200 OK (https://httpstatuses.com/200)
           */
          res.writeHead(200, { 'Content-Type': 'text/html' })
          console.log(`SSR of ${req.path}`);

        const [reactDom, helmet] = moduleWithfault.default(extractor,location )
        // const helmet = Helmet.renderStatic();
        console.info('title', helmet.title.toString())

        return res.end(
          htmlData.replace(
            '<div id="root"></div>',
            `<div id="root">${reactDom}</div>`
          )
        );
      });
}

app.get('/', all);
app.use(express.static(mainStatic))
app.get('/*', all);

/**
 * Set the location of the static assets (ie the js bundle generated by webapck)
 */

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));



debugger;