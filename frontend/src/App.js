import React from 'react';
import Game from './Components/Game/Game'
import {HomeScreen, NewGame} from './Components/Pages'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';
import './app.css'
function App() {
  return (
    <div className='game-container'>
      <div className='game-grid'>
        <Switch>
          <Route exact path={'/'} component={HomeScreen} />
          <Route path={'/NewGame'} component={NewGame} />
          <Route path={'/Game'} component={Game} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
