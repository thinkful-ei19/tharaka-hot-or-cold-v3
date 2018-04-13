
export const TRY_GUESS = 'TRY_GUESS';
export const tryGuess = (feedback, guess) => ({
    type: TRY_GUESS,
    feedback,
    guess
})

export const ADD_AURAL = 'ADD_AURAL';
export const addAural = auralStatus => ({
    type: ADD_AURAL,
    auralStatus
})

export const RESET_STORE = 'RESET_STORE';
export const resetStore = () => ({
    type: RESET_STORE,
})







