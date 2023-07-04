
import React,{useState} from "react";

function HideShowToggle(){
    const [show,setShow] = useState(true)
    return(
        <div>
            {
                show?
                <h1>show</h1>
                :null
            }
            <button onClick={()=>setShow(false)}>hide</button>
            <button onClick={()=>setShow(true)}>show</button>
            <button onClick={()=>setShow(!show)}>toggle</button>
        </div>
    );
}

export default HideShowToggle;