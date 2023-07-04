import React,{useState} from "react";

//one is live showing 
//other is onclick function

function Input(){
    const [data,setData] = useState('');
    const [print,setPrint] = useState(false);

    function showInp(val){
        setPrint(false)
        console.log(val.target.value)
        setData(val.target.value)

    }

    return(
        <div>
            <h1>{data}</h1>
            {
               print?
               <p>{data}</p>
               :null
            }
            <input type='text' onChange={showInp}/>
            <button onClick={()=>setPrint(true)}>send</button>
        </div>
    );
}

export default Input;