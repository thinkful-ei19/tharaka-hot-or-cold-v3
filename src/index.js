import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

import {addGuess} from './actions';

import './reset.css';
import './index.css';

import Game from './components/game';


store.dispatch(addGuess(3));
store.dispatch(addGuess(23));

console.log(store.getState());


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
