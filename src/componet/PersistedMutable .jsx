import { useRef} from "react";

const PersistedMutable  = () => {

    const number=useRef(0);
        const changeValue=()=>{
            console.log(number.current++)
        }
       
      
    return (
        <>
        <br />
        <button onClick={changeValue}>number click</button>
        </>
    );
};

export default PersistedMutable ;


