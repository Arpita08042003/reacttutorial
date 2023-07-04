//form with validation (simple one)

import React,{useState} from "react";


function Form(){

    const [name,setName] = useState('');
    const [validName,setValidName] = useState(true);
    const [company,setCompany] = useState('select company');
    const [validCompany,setValidCompany] = useState(false)
    const [term,setterm] = useState(true);
    const [validTerm,setValidTerm] = useState(true);
     
    

    function SubmitingPage(e){
    
        e.preventDefault();

    }

    function updateName(e){
         
        let item = e.target.value
        if(item.length<2){
            setValidName(false);
        }else{
            setValidName(true);
        }
        console.log(validName) 
    }

    function updateCompany(e){
        console.log(e.target.value)
        let item = e.target.value;
        if(item==='select company'){
            setValidCompany(false)
        }else{
            setValidCompany(true)
        }
    }

    function updateTerm(e){
        let item = e.target.checked;
         
            setValidTerm(item)
        
    }

    return(
        <div>
            <form onSubmit={SubmitingPage}>
                <br/><br/>
                <input type="text" placeholder="enter your name" onChange={updateName}/>{
                    !validName?<span>enter valid name</span>:null
                }
                <br/><br/>
                <select onChange={updateCompany}>
                    <option>select company</option>
                    <option>De shaw</option>
                    <option>flipcart</option>
                    <option>sprinkr</option>
                </select>{
                    !validCompany?<span>select correct company</span>:null
                }
                <br/><br/>
                <input type='checkbox' onChange={updateTerm}/><span>accept terms and contion</span>{
                    (!validTerm )?<span>check it</span>:null
                }
                <br/><br/>
                <button type='submit'>submit</button>
            </form>
        </div>
    ); 
    
}

export default Form;