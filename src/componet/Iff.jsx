

const Iff = () => {
    const status=false
    return (
        <>
         <div>
         <p className="text-[23px]">Login status</p>
         {(()=>{
            if(status == true){
            return   <button>Log in</button>
            }else{
            return  <button>Log out</button>
            }

        })()} 
         </div>
        </>
    );
};

export default Iff;