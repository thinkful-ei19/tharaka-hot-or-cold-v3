import {ADD_GUESS, ADD_FEEDBACK, ADD_AURAL} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};


export const guessReducer = (state=initialState, action) => {
    // Add code which handles each action here
    if (action.type === ADD_GUESS) {
        return {
            ...state,
            guesses: [...state.guesses, action.guess]
        } 
    } else if(action.type === ADD_AURAL) {
        return {
            ...state,

        }
    } else if(action.type === ADD_FEEDBACK) {
        return {
            ...state,
            feedback: action.feedback
        }
    }

    return state;
};