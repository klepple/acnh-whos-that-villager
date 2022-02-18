
export const fetchVillager = async (villagerID) => {
    let villager =  fetch(`https://acnhapi.com/v1/villagers/${villagerID}`)
        .then(res => res.json())
        .then((response) => {
            console.log(response);
            return response;
        });

    return villager;
}
