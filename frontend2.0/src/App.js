import React from 'react'

import Routes from './routes'

import Challenges from './components/Challenges'
import ChallengeCode from './components/ChallengeCode'

function App() {
  return (
    <div>
      <Routes />
      <Challenges />
      <ChallengeCode />
    </div>
  );
}

export default App;
