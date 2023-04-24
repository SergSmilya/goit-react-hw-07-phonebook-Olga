import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, addContacts, deleteContacts } from './Operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchAllContacts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;
