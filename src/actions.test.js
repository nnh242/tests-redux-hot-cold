import {NEW_GAME,newGame, MAKE_GUESS, makeGuess, TOGGLE_INFO_MODAL, toggleInfoModal} from './actions';

describe('newGame', () => {
    it('Should start a new game', () => {
        const action = newGame();
        expect(action.type).toEqual(NEW_GAME);
        expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(action.correctAnswer).toBeLessThanOrEqual(100);
    });
});

describe('toggleInfoModal', () => {
    it('Should toggle info', () => {
        const action = toggleInfoModal();
        expect(action.type).toEqual(TOGGLE_INFO_MODAL);
    });
});

describe ('makeGuess', () => {
    it('Should make guesses', () => {
        const guess = 10;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});