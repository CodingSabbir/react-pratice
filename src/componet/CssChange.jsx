import { useRef } from "react";


const CssChange = () => {
    const myClassList=useRef()
    const colorChange=()=>{
        myClassList.current.classList.remove('text-blue-900')
        myClassList.current.classList.add('text-red-500')
    }
    return (
        <>
            <h1 ref={myClassList} className="text-blue-900">Bangladesh</h1>
            <button onClick={colorChange}> click me</button>
        </>
    );
};

export default CssChange;