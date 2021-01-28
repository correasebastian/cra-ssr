import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
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
  return (
   <BrowserRouter>
     {routes()}
   </BrowserRouter>
  );
}

export default App;
