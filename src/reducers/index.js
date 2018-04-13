import {ADD_GUESS} from '../actions';

const initialState = {
    guesses: []
};


export const guessReducer = (state=initialState, action) => {
    // Add code which handles each action here
    if (action.type === ADD_GUESS) {
        return {
            ...state,
            guesses: [...state.guesses, action.guess]
        }
    }

    return state;
};