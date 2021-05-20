import React from 'react'

import Routes from './routes'

import Challenges from './components/Challenges'
import ChallengeCode from './components/ChallengeCode'

function App() {
  localStorage.clear()
  return (
    <div className='web-container'>
      <div className='pages-container'>
        <Routes />
      </div>
        <Challenges />
        <ChallengeCode />
    </div>
  );
}

export default App;
