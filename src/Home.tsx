
import React,{useEffect, useState, useMemo, useCallback} from 'react';
import logo from './logo.svg';
import Sebas from 'component-sebas'
import {Helmet} from "react-helmet";


function simulateSync(time:number){
    const s = new Date().getSeconds();

// setTimeout(function() {
//   // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
//   console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
// }, 500);

    while(true) {
      if(new Date().getSeconds() - s >= time) {
        console.log(`Good, looped for ${time} seconds`);
        break;
      }
    }

}

function simulateP(time:number){
    return new Promise<number>((resolve, reject) => {
            setTimeout(()=> {
                resolve(1)},
                 time*1000)
    })
}

const Home =() =>{

    const [number , setNumber]= useState(1)
    const [number2 , setNumber2]= useState(0)
    // const [number3 , setNumber3]= useState(0)
    const [toggle , setToggle]= useState(false)

    const myFn = useCallback((n) => {
        console.info('from usecallabck im -->', n)
    }, [])
    // const myFn = useMemo(() => ()=>{}, [])
    // const myFn = () => {}
    
    
    console.count('renderinghome')

    useEffect(()=>{
        console.count('first effect :')
        /* sync */
        // simulateSync(3)

        /*  promise */
        simulateP(5).then(()=>{
            console.info('promise resolve')
            setNumber2(number + 1)
        })

        /* async await */
        // async function papa(){
        //     await simulateP(5)
        //     console.info('promise resolve')
        //     setNumber2(number)
        // }
        // papa()
    },[number])

    useEffect(()=>{
        console.count('second effect :')
    },)


    // useEffect(()=>{
    //     if(!number2) return
    //     console.count('third effect:')
    //     setNumber3(number2 + 1)
    // }, [number2])

    const number3 = useMemo(() =>number2 ? number2 +1 : 0 , [number2] )

    useEffect(()=>{
        console.count('myFn')
    },[myFn])


    myFn(number3)

    return (
    <div className="App">
        <Helmet>
            <title>Home title</title>
        </Helmet>
        <h1>first Number :  {number}</h1>
        <h2>Second NUmber : {number2}</h2>
        <h3>third Number :  {number3}</h3>
        <button onClick={()=>setToggle(c=> !c)}>{toggle ? 'on' : 'off'}</button>
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