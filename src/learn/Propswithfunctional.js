
function Propswithfunction(props){
    console.log(props)
    return(
        <div>
            <h1>Name : {props.name}</h1>
            <h2>email : {props.email}</h2>

        </div>
    );
}

export default Propswithfunction;