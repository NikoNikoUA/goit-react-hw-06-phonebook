import { configureStore } from '@reduxjs/toolkit';
import { createReducer, createAction } from '@reduxjs/toolkit';
import { contactsReducer } from '../../src/redux/contactsSlice';
import { filterReducer } from '../../src/redux/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// export const add = createAction('contacts/add');
// export const remove = createAction('contacts/remove');
// export const filter = createAction('filters/filter');

// export const contactsReducer = createReducer(initialState, builder =>
//   builder
//     .addCase(add, (state, action) => {
//       state.contacts = [...state.contacts, action.payload];
//       // state.contacts = state.push(action.payload);
//     })
//     .addCase(remove, (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     })
// );

// export const filterReducer = createReducer(initialState, builder =>
//   builder.addCase(filter, (state, action) => {
//     state.filter = action.payload;
//   })
// );
