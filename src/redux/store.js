import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

export const getFilteredCards = ({ cards, searchString }, columnId) => 
  cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state => state.columns;

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = (state, listId) => 
  state.columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite);

export const toggleCardFavorite = id => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload: id,
});

export const addList = payload => ({
  type: 'ADD_LIST',
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { 
        ...state, 
        columns: [...state.columns, { ...action.payload, id: shortid.generate() }],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid.generate(), isFavorite: false }],
      };
    case 'UPDATE_SEARCHSTRING':
      return { 
        ...state, 
        searchString: action.payload 
      };
    case 'TOGGLE_CARD_FAVORITE':
      return { 
        ...state, 
        cards: state.cards.map(card => 
          card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card
        ) 
      };
    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, { ...action.payload, id: shortid.generate() }]
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
