
// export const TRY_GUESS = 'TRY_GUESS';
// export const tryGuess = (feedback, guess) => ({
//     type: TRY_GUESS,
//     feedback,
//     guess
// })

// export const ADD_AURAL = 'ADD_AURAL';
// export const addAural = auralStatus => ({
//     type: ADD_AURAL,
//     auralStatus
// })

// export const RESET_STORE = 'RESET_STORE';
// export const resetStore = () => ({
//     type: RESET_STORE,
// })


export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = correctAnswer => ({
    type: RESTART_GAME,
    correctAnswer
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
});





