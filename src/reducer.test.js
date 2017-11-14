import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';
describe ('Reducer', () => {
    it('Should set initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type:'__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.showInfoModal).toEqual(false)
    });
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
    
})