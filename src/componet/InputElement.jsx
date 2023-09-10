import { useRef } from "react";


const InputElement = () => {
    let firstName,lastName=useRef()
    const changeInput=()=>{
        const fName=firstName.value
        const lName=lastName.value
        console.log(fName+" "+lName)
    }
    
    return (
        <>
           <input ref={(a)=>firstName=a} placeholder="first Name:" /> <br/>
           <input ref={(b)=>lastName=b} placeholder="first Name:" />
           <button onClick={changeInput}>click</button>
        </>
    );
};

export default InputElement;