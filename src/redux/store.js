import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COLUMN':
            return { 
                ...state, 
                columns: [
                    ...state.columns, 
                    { ...action.payload, id: shortid.generate(), cards: [] }
                ]
            };
        case 'ADD_CARD':
            const newCard = { 
                ...action.payload, 
                id: shortid.generate()
            };
            return {
                ...state,
                cards: [...state.cards, newCard]
            };
        default:
            return state;
    }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
