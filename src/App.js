import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card.js";

const App = () => {
  const [burgers, setBurgers] = useState(null);
  const fetchData = async () => {
    const burgerData = await axios.get("http://localhost:8000/burgers");
    console.log(burgerData);
    const data = Object.values(burgerData.data.data);
    setBurgers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(burgers);
  return (
    <div className="App">
      <h1>My Favourite Burgers</h1>
      <div className="burger-feed">
        {burgers?.map((burger) => (
          <Card key={burger.id} burger={burger} />
        ))}
      </div>
    </div>
  );
};

export default App;
