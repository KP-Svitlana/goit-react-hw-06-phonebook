import { createSlice, nanoid } from '@reduxjs/toolkit';

const contsctsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contsctsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (state.find(el => el.name === action.payload.name)) {
          alert(`${action.payload.name} is already in contacts`);
        } else {
          return [...state, action.payload];
        }
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            id: nanoid(),
            number,
          },
        };
      },
    },

    deleteContact: {
      reducer(state, action) {
        return state.filter(item => item.id !== action.payload.id);
      },
      prepare(id) {
        return { payload: { id } };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;