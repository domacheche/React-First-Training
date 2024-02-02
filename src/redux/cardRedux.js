import shortid from 'shortid';

const ADD_CARD = 'app/card/ADD_CARD';
const TOGGLE_CARD_FAVORITE = 'app/card/TOGGLE_CARD_FAVORITE';
const REMOVE_CARD = 'app/cards/REMOVE_CARD';

export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavorite = id => ({ type: TOGGLE_CARD_FAVORITE, payload: id });

export const getFavoriteCards = state => state.card.filter(card => card.isFavorite);
export const getFilteredCards = ({cards}, columnId, searchString = '') => {
  return cards.filter(card => 
    card.title.toLowerCase().includes(searchString.toLowerCase()) && card.columnId === columnId
  );
};


export const removeCard = id => ({ type: REMOVE_CARD, payload: id });



const cardReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid.generate(), isFavorite: false }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      case REMOVE_CARD:
        return statePart.filter(card => card.id !== action.payload);
      default:
        return statePart;
    
  }
};

export default cardReducer;
