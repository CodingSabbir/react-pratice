
const TarnaryOparetor = () => {
    const status=false
    return (
        <>
            <div>
                {
                    status?
                    <button>click me</button>
                    :
                    <button>What?</button>
                }
            </div>
        </>
    );
};

export default TarnaryOparetor;