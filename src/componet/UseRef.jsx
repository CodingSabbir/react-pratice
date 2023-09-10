import { useRef } from "react";

const UseRef = () => {

const myHeadline=useRef()
const changeFun=()=>{
    myHeadline.current.innerHTML='clicked'
     
}
    return (
        <>
            
            <h1 ref={myHeadline}>Send</h1>
            <button onClick={changeFun}>Change Button</button>
        </>
    );
};

export default UseRef;