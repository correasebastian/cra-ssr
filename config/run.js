const lServer = require("@loadable/server")
const moduleWithfault = require('../build/server/bundle')
const path = require("path")
const statsFile = path.resolve('build/server/loadable-stats.json')
// We create an extractor from the statsFile
const extractor = new lServer.ChunkExtractor({ statsFile })
const fs = require('fs');

const express = require('express');

const PORT = 3000;
const helmetExtractorRegex = /<title data-react-helmet="true">(.+)<\/title>/

// const routes = ['/', '/page'];

/**
 * initialize the application and create the routes
 */
const app = express();

const filePath = path.resolve(__dirname, '..', 'build','client', 'index.html');
const mainStatic = path.resolve(__dirname, '../build/client')

const endHeadNode = '</head>'
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

        const [reactDom, helmet,sheets ] = moduleWithfault.default(extractor,location )

        const css = sheets.toString();
        const styleTag = `<style id="jss-server-side">${css}</style>`

        const helmetTitle= helmet.title.toString()
        const hasHelmetTitle = helmetTitle ? helmetTitle.match(helmetExtractorRegex): null 
         
        if(hasHelmetTitle){
          htmlData= htmlData
          .replace(
            /\s*<title>(.+)<\/title>\s*/,
            helmetTitle
          )
        }

        return res.end(
          htmlData
          .replace(
            '<html',
            '<html '+ helmet.htmlAttributes.toString()
          )
          .replace(
            '<body',
            '<body '+ helmet.bodyAttributes.toString()
          )
          .replace(
            endHeadNode,
            `${helmet.meta.toString()} ${helmet.link.toString()} ${helmet.style.toString()} ${helmet.script.toString()} ${styleTag}` + endHeadNode
          )
          .replace(
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