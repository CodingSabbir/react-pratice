

const PropsObj = ({item}) => {
    return (
        <>
            <ul>
                <li>Name: {item.name}</li>
                <li>Age: {item.age}</li>
                <li>City: {item.city}</li>
            </ul>
        </>
    );
};

export default PropsObj;