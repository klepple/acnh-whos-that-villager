import { useEffect, useState } from "react";
import './App.css';
import { fetchVillager } from "./api/fetchVillager.js";
import { randomNumber, shuffle } from "./utils.js";
import Header from './components/Header';
import VillagerOptions from './components/VillagerOptions';
import VillagerCard from './components/VillagerCard';

function App() {
  const [correctVillager, setCorrectVillager] = useState(null);
  const [incorrectVillager1, setIncorrectVillager1] = useState(null);
  const [incorrectVillager2, setIncorrectVillager2] = useState(null);

  const [correctKey, setCorrectKey] = useState(-1);
  const [roundCount, setRoundCount] = useState(0);
  // const [villagers, setVillagers] = useState({});

  const incrementRound = () => {
    setRoundCount(roundCount + 1);
    // setVillagers({});
  }

  const checkIfCorrect = (name) => {
    if(name === correctVillager['name']['name-USen']) {
      alert(`You got it! ${name} is the correct villager.`);
    } else {
      alert("Wrong! You're a fake Animal Crossing fan.");
    }
  }

  useEffect(() => {
    setCorrectKey(randomNumber(0, 2));

    // for (let i = 0; i < 3; i++) { 
    //   fetchVillager(randomNumber(1, 312)).then((villagerData) => {
    //     if (i === correctKey){
    //       // correct villager is not always at the same index.
    //       setCorrectVillager(villagerData);
    //     }
    //     // let tempDict = {};
    //     // tempDict[i] = villagerData;
    //     setVillagers({...villagers, [i]: villagerData});
    //     console.log(villagers);
    //     console.log(i);
    //   });
    // }
    fetchVillager(randomNumber(1, 312)).then((villagerData) => {
      setCorrectVillager(villagerData);
    });
    fetchVillager(randomNumber(1, 312)).then((villagerData) => {
      setIncorrectVillager1(villagerData);
    });
    fetchVillager(randomNumber(1, 312)).then((villagerData) => {
      setIncorrectVillager2(villagerData);
    });

  }, [roundCount]);

  return (
    <div className="App">
      <Header/>
      <div>
        {correctVillager ? correctVillager['catch-phrase'] : 'Loading...'}
      </div>
      <div>
        - who says this?
      </div>
      <div className="villagerOptions">      
        {incorrectVillager1 ? <VillagerCard name={incorrectVillager1['name']['name-USen']} picture={incorrectVillager1['image_uri']} check={checkIfCorrect}/> : 'Loading...'}
        {correctVillager ? <VillagerCard name={correctVillager['name']['name-USen']} picture={correctVillager['image_uri']} check={checkIfCorrect}/> : 'Loading...'}
        {incorrectVillager2 ? <VillagerCard name={incorrectVillager2['name']['name-USen']} picture={incorrectVillager2['image_uri']} check={checkIfCorrect}/> : 'Loading...'}
        
        {/* {villagers[0] ? <VillagerCard name={villagers[0]['name']['name-USen']} picture={villagers[0]['image_uri']}/> : <div>Loading...</div>}
        {villagers[1] ? <VillagerCard name={villagers[1]['name']['name-USen']} picture={villagers[1]['image_uri']}/> : <div>Loading...</div>}
        {villagers[2] ? <VillagerCard name={villagers[2]['name']['name-USen']} picture={villagers[2]['image_uri']}/> : <div>Loading...</div>} */}
      </div>
      <button onClick={incrementRound}>New Round</button>
    </div>
  );
}

export default App;
