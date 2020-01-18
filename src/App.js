import React, { useState } from 'react';
import PlacePlay from "./components/Display/PlacePlay"
import Border from "./components/BorderLeader/Border"
import Form from "./components/Display/Form"

import './App.css';

function App() {
  const [play, playAgain] = useState([])
  return (

    <div className="container flex_box">
      <div class="col">
        <div className="form">
          <Form />
        </div>


        <div className="place-play">
          <PlacePlay />
        </div>

      </div>

      <div className="col">
        <Border />
      </div>
    </div>





  );
}

export default App;
