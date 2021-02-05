import  React from 'react'
import  {renderToString} from 'react-dom/server'
import  App from '../App' ;
import Helmet from 'react-helmet'



const renderK = (extractor: any, location?: string) =>{
   
    const reactDom = renderToString(<App extractor={extractor} location={location}/>)
    const helmet = Helmet.renderStatic();
    console.log("🚀 ------------------------------------------------------------")
    console.log("🚀 ~ file: index.tsx ~ line 10 ~ renderK ~ reactDom", reactDom)
    console.log("🚀 ------------------------------------------------------------")
        // const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();

        // // You can also collect your "preload/prefetch" links
        // const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();

        // // And you can even collect your style tags (if you use "mini-css-extract-plugin")
        // const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();

    return [reactDom, helmet]
}


export default renderK