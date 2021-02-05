
import React from 'react';
import logo from './logo.svg';
import Sebas from 'component-sebas'
import {Helmet} from "react-helmet";


const Home =() =>{
    return (
    <div className="App">
        <Helmet>
            <title>Home title</title>
        </Helmet>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Sebas />
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
        </header>
    </div>
    )
}

export default Home