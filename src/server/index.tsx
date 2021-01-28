import  React from 'react'
import  {renderToString} from 'react-dom/server'
import  App from '../App' ;



const renderK = (extractor: any, location?: string) =>{
   
    console.info('renderK  kykelyn')
    const jsx = extractor.collectChunks(<App location={location}/>)

    const reactDom = renderToString(jsx)

    console.info(reactDom)
}


export default renderK