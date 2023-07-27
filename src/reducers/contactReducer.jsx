const contactReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return action.payload;
    case 'ADD_CONTACT':
      return [...state, action.payload];
    case 'EDIT_CONTACT':
      return state.map((contact) => {
        if (contact.id === action.id) {
          return {
            ...contact,
            ...action.updates
          };
        }
        return contact;
      });
    case 'REMOVE_CONTACT':
      return state.filter((contact) => contact.id !== action.id);
    default:
      return state;
  }
};

export default contactReducer;
