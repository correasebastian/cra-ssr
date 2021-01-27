import  React from 'react'
import  {renderToString} from 'react-dom/server'
import  App from '../App' ;

const reactDom = renderToString(<App/>);

console.info(reactDom)