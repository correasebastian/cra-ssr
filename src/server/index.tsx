// import  React from 'react'
// import  {renderToString} from 'react-dom/server'
// import  App from '../App' ;



// const renderK = (extractor: any, location?: string) =>{
   
//     console.info('renderK  kykelyn')
//     const jsx = extractor.collectChunks(<App location={location}/>)

//     console.log(jsx)

//     const reactDom = renderToString(jsx)
//     console.log("🚀 ------------------------------------------------------------")
//     console.log("🚀 ~ file: index.tsx ~ line 15 ~ renderK ~ reactDom", reactDom)
//     console.log("🚀 ------------------------------------------------------------")


//         const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
//         console.log("🚀 ----------------------------------------------------------------")
//         console.log("🚀 ~ file: index.tsx ~ line 18 ~ renderK ~ scriptTags", scriptTags)
//         console.log("🚀 ----------------------------------------------------------------")
//         // You can also collect your "preload/prefetch" links
//         const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
//         console.log("🚀 ------------------------------------------------------------")
//         console.log("🚀 ~ file: index.tsx ~ line 23 ~ renderK ~ linkTags", linkTags)
//         console.log("🚀 ------------------------------------------------------------")
//         // And you can even collect your style tags (if you use "mini-css-extract-plugin")
//         const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();
//         console.log("🚀 --------------------------------------------------------------")
//         console.log("🚀 ~ file: index.tsx ~ line 28 ~ renderK ~ styleTags", styleTags)
//         console.log("🚀 --------------------------------------------------------------")

// }


// export default renderK

export { default } from '../App'

export const hello = 'hello'