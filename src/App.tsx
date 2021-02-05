import React from 'react';
import './App.css';
import { BrowserRouter, StaticRouter, Route, Link } from "react-router-dom";
import Home from "./Home"
import { ChunkExtractorManager } from '@loadable/server'
import {Helmet} from "react-helmet";


// eslint-disable-next-line import/no-extraneous-dependencies
import loadable from '@loadable/component'
const A = loadable(() =>{
  return (import('./A') as any)
} ,{ssr:true})

const Category = () => (
  <div>
    <Helmet>
        <title>Category title</title>
    </Helmet>
    <h2>Category</h2>
    <h1>under Category</h1>
    <A/>
  </div>
);

const Products = () => (
  <div>
    <Helmet>
        <title>Products title</title>
    </Helmet>
    <h2>Products</h2>
  </div>
);

function App(props:{location?:string, extractor?:any}, ) {

  function routes(){
    return (
      <>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact><Home /></Route>
      <Route path="/category"><Category /></Route>
      <Route path="/products"><Products /></Route>
      </>
    )
  }
  return props?.location ?(
      <ChunkExtractorManager extractor={props.extractor}>
        <StaticRouter location={props.location} context={{}}>
        {routes()}
      </StaticRouter>
      </ChunkExtractorManager>
      
      ):
        (<BrowserRouter>
        {routes()}
      </BrowserRouter>
      )
   ;
}

export default App;
