// onClick function caalll
import Onclick from"./learn/Onclick"
//change state on click
import Statebyfunction from "./learn/Statebyfunction"
//State with class
import Statebycomponent from "./learn/Statebycomponent";
//use props 
import Propswithfunction from "./learn/Propswithfunctional";
//props with class
import Propswithclass from "./learn/Propswithclass";
//input with react
import Input from "./learn/Input";
//hide show toggle
import HideShowToggle from "./learn/HideShowToggle";
//form
import Form from "./learn/Form";
import './App.css';

function App() {
  return (
    <div className="App">
       <div>hello</div>
       {/* <Onclick/> */}
       {/* <Statebyfunction/> */}
       {/* <Statebycomponent/> */}
       {/* <Propswithfunction name={"Arpita"} email={"xyz@gmail.com"}/> */}
       {/* <Propswithclass name="Yashu"/> */}
       {/* <Input/> */}
       {/* <HideShowToggle/> */}
       <Form/>

    </div>
  );
}

export default App;
