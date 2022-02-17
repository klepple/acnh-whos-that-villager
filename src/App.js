import { useEffect, useState } from "react";
import './App.css';
import { fetchVillager } from "./api/fetchVillager.js";
import Header from './components/Header';
import Solution from './components/Solution';
import VillagerCard from './components/VillagerCard';

function App() {
  const [correctVillager, setCorrectVillager] = useState(null);
  const [roundCount, setRoundCount] = useState(0);

  const incrementRound = () => setRoundCount(roundCount + 1);

  useEffect(() => {
    setCorrectVillager(fetchVillager(1));
  }, [roundCount])


  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Solution/>
      <div className="villagerContainer">
        <VillagerCard/>
        <VillagerCard/>
        <VillagerCard/>
      </div>
      <button onClick={incrementRound}>New Round</button>
    </div>
  );
}

export default App;
