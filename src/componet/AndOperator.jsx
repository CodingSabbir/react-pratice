

const AndOperator = () => {
    const status=true
    return (
        <>
            {
               status && <button>Login</button> 
            }
        </>
    );
};

export default AndOperator;