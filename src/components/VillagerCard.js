
function VillagerCard({name, picture, check}) {
    return (
        <>
            <button onClick={() => {check(name)}}>{name}</button>
            <img src={picture}/>
        </>
    );
}

export default VillagerCard;