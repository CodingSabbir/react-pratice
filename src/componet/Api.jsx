import { useRef } from "react";


const Api = () => {

    let ApiData=useRef()
    let showData=useRef()


    const callApi= async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/users')
    ApiData.current=await response.json()
    }

    const showApi=()=>{
        showData.current.innerHTML=JSON.stringify(ApiData)
    }

    return (
        <>
            <p ref={showData}></p>
            <br /> 
           <button onClick={callApi}>callApi</button><br /> 
           <button onClick={showApi}>showApi</button>
        </>
    );
};

export default Api;