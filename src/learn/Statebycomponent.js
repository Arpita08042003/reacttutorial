//state with component
import React,{Component} from "react";

class Statebycomponent extends React.Component{

    constructor(){
        super(); //so that it can use main constructer also
        this.state={
            data : "arpita"
        }
    }
    apple(){
        alert(this.state.data)
    }

   

    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>State with class</button>
                
            </div>
        );
    }
}

export default Statebycomponent;