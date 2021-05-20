import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';
import Game from './Components/Game/Game';
import { HomeScreen, LoadGame, NewGame, RegisterQuestions } from './Components/Pages';

function App() {
  return (
    <div className='game-container'>
      <div className='game-grid'>
        <Switch>
          <Route exact path={'/'} component={HomeScreen} />
          <Route path={'/NewGame'} component={NewGame} />
          <Route path={'/Game'} component={Game} />
          <Route path={'/LoadGame'} component={LoadGame} />
          <Route path={'/RegisterQuestions'} component={RegisterQuestions} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
