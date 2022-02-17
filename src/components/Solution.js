import { useEffect, useState } from "react";
import { fetchVillager } from "../api/fetchVillager.js";

function Solution() {
    const [villager, setVillager] = useState(0);

    fetchVillager(1);

    useEffect(() => {
        setVillager(fetchVillager(1));
    }, [])

    return (
        <>
          <pre>{JSON.stringify(villager, null, 2)}</pre>
        </>
    )
}

export default Solution;