import React from 'react';
import './App.css';
import { BrowserRouter, StaticRouter, Route, Link } from "react-router-dom";
import Home from "./Home"



const Category = () => (
  <div>
    <h2>Category</h2>
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
