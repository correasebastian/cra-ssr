
import React from 'react';
import logo from './logo.svg';
import Sebas from 'component-sebas'
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      width:'200px'
    },
  });

const Home =() =>{
    const classes = useStyles();

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
        <Button className={classes.root}>Hook</Button>
        </header>
    </div>
    )
}

export default Home