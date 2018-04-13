import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

import {addGuess, addFeedback, addAural} from './actions';

import './reset.css';
import './index.css';

import Game from './components/game';


store.dispatch(addGuess(3));
store.dispatch(addGuess(23));
store.dispatch(addFeedback('Ice Cold'));

console.log(store.getState());
store.dispatch(addGuess(27));
console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
