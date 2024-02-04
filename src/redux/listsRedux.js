import shortid from 'shortid';


const listsReducer = (statePart = [], action) => {
   switch(action.type) {
     case 'ADD_LIST':
       return [...statePart, { ...action.payload, id: shortid() }];
     default:
       return statePart;
   }
 }


export const addList = payload => ({ type: 'ADD_LIST', payload });
export const getAllLists = state => state.lists;
export const getListById = (state, listId) => state.lists.find(list => list.id === listId);


  export default listsReducer;

