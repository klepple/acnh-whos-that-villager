import { useEffect, useState } from "react";

import './App.css';
import { fetchVillager } from "./api/fetchVillager.js";
import { randomNumber } from "./utils.js";
import Header from './components/Header';
import VillagerCard from './components/VillagerCard';

function App() { 
  const [correctKey, setCorrectKey] = useState(randomNumber(0, 3));
  const [roundCount, setRoundCount] = useState(0);
  const [villagers, setVillagers] = useState([]);

  const numVillagersToGuess = 3;
  const totalVillagers = 312;

  const incrementRound = () => {
    setRoundCount(roundCount + 1);

    setVillagers([]);
    setCorrectKey(randomNumber(0, numVillagersToGuess - 1))
  }

  const checkIfCorrect = (selectedVillager) => {
    if(selectedVillager.correct) {
      alert(`You got it! ${selectedVillager.name} is the correct villager.`);
      incrementRound();
    } else {
      alert(`Wrong! You're a fake Animal Crossing fan. The correct villager is ${villagers[correctKey].name}`);
    }
  }

  const defineVillager = (index, villagerData) => {
    return { 
      'id' : index,
      'name' : villagerData['name']['name-USen'],
      'catchPhrase' : villagerData['catch-phrase'],
      'picture' : villagerData['image_uri'],
      'correct' : (correctKey === index ? true : false)
    };
  }

  const fetchVillagers = () => {
    // Fetch villager data
    const promises = [];
    for(let i = 0; i < numVillagersToGuess; i++) {
      promises.push(fetchVillager(randomNumber(1, totalVillagers)));
    }

    // Set state once data is done fetching
    Promise.all(promises).then(villagerData => {
      let newVillagers = [];

      for(let i = 0; i < numVillagersToGuess; i++) {
        newVillagers.push(defineVillager(i, villagerData[i]));
      }

      setVillagers(newVillagers);
    });
  }

  useEffect(() => {
    // Actions taken on each round
    fetchVillagers();
  }, [roundCount]);

  return (
    <div className="App">
      <Header/>
      <div>
        {villagers.length === numVillagersToGuess ? villagers.find(villager => (villager.correct)).catchPhrase : 'Loading...'}
      </div>
      <div>
        - who says this?
      </div>
      <div className="villagerOptions">
        {villagers.length === numVillagersToGuess ? villagers.map(villager => (
          <VillagerCard key={villager.id} villager={villager} check={checkIfCorrect}/>
        )): 'Loading...'}
      </div>
      <button onClick={incrementRound}>New Round</button>
    </div>
  );
}

export default App;
