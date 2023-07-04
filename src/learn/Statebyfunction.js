
//in this we will use state in function 
//useState :: on any update in useState hook will show in component that use its state 

//example :: change alternate and show with help of props -----> updateName

//using props with state
import Propswithfunction from "./Propswithfunctional";


import React,{useState} from "react";

function Statebyfunction(){
    const [data,setData] = useState(0);
    const [Name,setName] = useState('arpita');
    const [alt,setAlt] = useState(true);

    function increase(){
        // setData("hello")
        setData( data+1)
        // alert("on click alert")
    }

    function decrease(){
        setData(data-1)
    }

    function updateName(){
        if(alt){
            
            setName('singh')
        }else{
            setName('arpita')
        }
        setAlt(!alt)
        // alert("updating name")
    }
    return(
        <div>
            <span>{data} </span>
            <button onClick={increase}>increase count</button>
            <button onClick={decrease}>decrease count</button>
            <button onClick={()=>updateName()}>update name</button>
            <Propswithfunction name={Name} email="xy@gmail.com" />
        </div> //ending 
    );
}

export default Statebyfunction;