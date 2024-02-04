// Importy z Redux i własnych reducerów
import { createStore, combineReducers } from 'redux';
import cardReducer from './cardRedux';
import columnsReducer from './columnsRedux';
import listsReducer from './listsRedux';
import searchStringReducer from './searchRedux';
import initialState from './initialState';

// Import akcji
import {
  addCard,
  toggleCardFavorite,
  getFavoriteCards,
  getFilteredCards,
  removeCard,

} from './cardRedux';

import {
  addColumn,
  getColumnsByList,
} from './columnsRedux';

import {
  addList,
  getAllLists,
  getListById,
} from './listsRedux';

import {
  updateSearchString,
} from './searchRedux';

// Definicja rootReducera
const rootReducer = combineReducers({
  cards: cardReducer,
  columns: columnsReducer,
  lists: listsReducer,
  searchString: searchStringReducer,
});

// Tworzenie store
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Eksport store i akcji
export default store;
export {
  addCard,
  toggleCardFavorite,
  getFavoriteCards,
  getFilteredCards,
  addColumn,
  getColumnsByList,
  addList,
  getAllLists,
  getListById,
  updateSearchString,
  removeCard,
};
