
export const fetchVillager = (villagerID) => {
    fetch(`https://acnhapi.com/v1/villagers/${villagerID}`)
        .then(res => res.json())
        .then((response) => {
            console.log(response);
            return response;
        })
}
