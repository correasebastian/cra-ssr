import React from 'react';
import './App.css';
import { BrowserRouter, StaticRouter, Route, Link } from "react-router-dom";
import Home from "./Home"
// eslint-disable-next-line import/no-extraneous-dependencies
import loadable from '@loadable/component'
debugger;
console.log("🚀 -------------------------------------")
  console.log("🚀 APP.tsx")
  console.log("🚀 -------------------------------------")

const Liam = loadable(() =>{
  console.log("🚀 -------------------------------------")
  console.log("🚀 ~ file: triggering lodable")
  console.log("🚀 -------------------------------------")
  return (import('./Liam') as any).then((x:any)=>{
    console.log("🚀 -------------------------------------")
    console.log("🚀 ~ file: lodable promise resolve", x)
    console.log("🚀 -------------------------------------")
      
      return x
    })
} ,{ssr:true})

const Category = () => (
  <div>
    <h2>Category</h2>
    <h1>under Category</h1>
    <Liam/>
  </div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);

function App(props:{location?:string}) {

  console.info('location', props.location)

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
    
      <StaticRouter location={props.location} context={{}}>
        {routes()}
      </StaticRouter>
      ):
        (<BrowserRouter>
        {routes()}
      </BrowserRouter>
      )
   ;
}

export default App;
