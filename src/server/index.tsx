import  React from 'react'
import  {renderToString} from 'react-dom/server'
import  App from '../App' ;


const renderK = () =>{
    console.info('renderK  kykelyn')
    const reactDom = renderToString(<App/>);

    console.info(reactDom)
}


export default renderK