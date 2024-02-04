const UPDATE_SEARCH_STRING = 'app/search/UPDATE_SEARCH_STRING';

export const updateSearchString = payload => ({ type: UPDATE_SEARCH_STRING, payload });

const searchReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH_STRING:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchReducer;
