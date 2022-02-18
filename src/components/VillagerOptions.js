import VillagerCard from './VillagerCard';

function VillagerOptions({villager0, villager1, villager2}) {
    return (
        <>
            <VillagerCard name={villager0['name']['name-USen']} picture={villager0['image_uri']}/>
            <VillagerCard name={villager1['name']['name-USen']} picture={villager1['image_uri']}/>
            <VillagerCard name={villager2['name']['name-USen']} picture={villager2['image_uri']}/>
        </>
    );
}

export default VillagerOptions;