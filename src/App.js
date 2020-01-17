import React, { useState } from 'react';
import PlacePlay from "./components/Display/PlacePlay"
import Border from "./components/BorderLeader/Border"
import Form from "./components/Display/Form"

import './App.css';

function App() {
  const [play, playAgain] = useState([])
  return (
    <div className="main">

      <div className="form">
        <Form />
      </div>


      <div className="flex-box">
        <PlacePlay />
      </div>



      <div className="flex-box">
        <Border />
      </div>
    </div>




  );
}

export default App;
