// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }
import { configureStore } from '@reduxjs/toolkit';
import ContactsSlice from './ContactsSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsSlice,
  },
});
