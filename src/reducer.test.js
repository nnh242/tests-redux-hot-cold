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
    describe('newGame', () => {
        it('Should start a new game', () => {
            let state = {
                guesses:[1,2,3,4],
                feedback: 'Good Guesses',
                correctAnswer: - 1
            };
            state = reducer(state, newGame());
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
            expect(state.correctAnswer).toBeLessThanOrEqual(100);
        });
    });
    describe('makeGuess', ()=>{
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 100
        };
        state = reducer(state, makeGuess(25));
        expect(state.guesses).toEqual([25]);
        expect(state.feedback).toEqual('You\'re Ice Cold...');
        
        state = reducer(state, makeGuess(70));
        expect(state.guesses).toEqual([25,70]);
        expect(state.feedback).toEqual('You\'re Cold...');

        state = reducer(state, makeGuess(90));
        expect(state.guesses).toEqual([25,70,90]);
        expect(state.feedback).toEqual('You\'re Warm');

        state = reducer(state, makeGuess(99));
        expect(state.guesses).toEqual([25,70,90,99]);
        expect(state.feedback).toEqual('You\'re Hot!');

        state = reducer(state, makeGuess(100));
        expect(state.guesses).toEqual([25,70,90,99,100]);
        expect(state.feedback).toEqual('You got it!');
    })
})