import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactService from "../../service/contactService";


const initialContactState = {
  currentList: [],
  loading: {
    get: false,
    post: false,
    put: false,
    delete: false,
  },
  lastErrorMessage: undefined
};

export const getContacts = createAsyncThunk('contact/getContacts', async (args, {rejectWithValue}) => {
  try {
    const contacts = await contactService.get();
    console.log(contacts);
    
    return contacts;
  } catch (e) {
    console.log(e.message);
    return rejectWithValue(e.message);
  }
});

const contactSlice = createSlice({
  name: 'contact',
  initialState: initialContactState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getContacts.pending, (state) => {
      state.loading.get = true;
    });
    
    builder.addCase(getContacts.fulfilled, (state, { payload }) => {
      state.currentList = payload;
      state.loading.get = false;
    })
    
    builder.addCase(getContacts.rejected, (state, { payload }) => {
      state.loading.get = false;
      state.lastErrorMessage = `Error getting contacts. Message: ${payload}`;
    })
  }
});

export default contactSlice.reducer;
