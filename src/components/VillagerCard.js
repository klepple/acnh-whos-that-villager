
function VillagerCard({villager, check}) {
    return (
        <>
            <button onClick={() => {check(villager)}}>{villager.name}</button>
            <img src={villager.picture} alt={villager.name}/>
        </>
    );
}

export default VillagerCard;