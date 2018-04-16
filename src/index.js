import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';

import {tryGuess, addAural, resetStore} from './actions';

import './reset.css';
import './index.css';

import Game from './components/game';


// let  auralStatus = `Here's the status of the game right now: Cold You've made 1 guess.`;

store.dispatch(tryGuess('ICY COLD', 8));
console.log(store.getState());

store.dispatch(addAural(`Here's the status of the game right now: Cold. You've made 1 guess.`));
console.log(store.getState());

store.dispatch(resetStore());
console.log(store.getState());

ReactDOM.render(
  <Provider>
    <Game />
  </Provider>,
  document.getElementById('root')
);
