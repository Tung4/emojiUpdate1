import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Body from './components/Body/Body';

function App() {
  const [showIcon, setShowIcon] = useState(false)
  const changStatus =() =>{
    setShowIcon(!showIcon)
  }
  return (
    <div className="App">
      <Header changStatus={changStatus} checkStatus={showIcon}/>
      <Body checkStatus={showIcon}/>
    </div>
  );
}

export default App;
