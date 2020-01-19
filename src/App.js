import React, { useState, useEffect } from 'react';
import PlacePlay from "./components/Display/PlacePlay"
import Border from "./components/BorderLeader/Border"
import Form from "./components/Display/Form"

import './App.css';

function App() {
  let interval
  const [isStartGame, setStartGame] = useState(false)
  const [listPosition, setListPosition] = useState({})
  useEffect(() => {
    if (isStartGame) {
      interval = setInterval(() => {
        const number = Math.floor(Math.random() * Math.floor(25))
        console.log(number)
        setListPosition({ ...listPosition, [number]: true })
      }, 5000)
    }
  }, [isStartGame])
  return (

    <div className="container flex_box">
      <div className="col">
        <div className="form">
          <Form setStartGame={setStartGame} />
        </div>


        <div className="place-play">
          <PlacePlay listPosition={listPosition} />
        </div>

      </div>

      <div className="col">
        <Border users={[{ name: "тштф", date: "12.12.20" }]} />
      </div>
    </div>





  );
}

export default App;
