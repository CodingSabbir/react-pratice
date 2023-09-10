
const From = () => {
    const postForData=(event)=>{
        event.preventDefault();
        alert('Allah Mohan')
    }
    return (
        <>
            <form onSubmit={postForData}>
                <input  placeholder="Enter your name:"/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default From;