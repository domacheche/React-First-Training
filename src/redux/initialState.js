const initialState = {
    lists: [
      {
        id: '1', // Konwersja na string
        title: 'Personal Tasks',
        description: 'Things I need to do'
      },
      {
        id: '2', // Konwersja na string
        title: 'Work Tasks',
        description: 'Tasks for work'
      }
    ],
  
    columns: [
      {
        id: '1',
        title: 'Books',
        icon: 'book',
        listId: '1',
      },
      {
        id: '2',
        title: 'Movies',
        icon: 'film',
        listId: '1',
      },
      {
        id: '3',
        title: 'Games',
        icon: 'gamepad',
        listId: '1',
      },
      {
        id: '4',
        title: 'Work Movies',
        icon: 'film',
        listId: '2',
      }
    ],
  
    cards: [
      { id: '1', columnId: '1', title: 'This is Going to Hurt' },
      { id: '2', columnId: '1', title: 'Interpreter of Maladies' },
      { id: '3', columnId: '2', title: 'Harry Potter' },
      { id: '4', columnId: '2', title: 'Star Wars' },
      { id: '5', columnId: '3', title: 'The Witcher' },
      { id: '6', columnId: '3', title: 'Skyrim' },
    ],

    searchString: ''
};

export default initialState;