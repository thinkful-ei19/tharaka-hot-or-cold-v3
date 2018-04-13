import {TRY_GUESS, ADD_AURAL, RESET_STORE} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};


export const guessReducer = (state=initialState, action) => {
    // Add code which handles each action here

    if (action.type === TRY_GUESS) {
        return Object.assign({}, {
            ...state,
            feedback: action.feedback,
            guesses: [...state.guesses, action.guess]
        }) 
    } else if(action.type === ADD_AURAL) {
        return Object.assign({}, {
            ...state,
            auralStatus: action.auralStatus
        })
    } else if(action.type === RESET_STORE) {
        return Object.assign({},{
            ...state,
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: Math.round(Math.random() * 100) + 1
        })
    }


    return state;
};