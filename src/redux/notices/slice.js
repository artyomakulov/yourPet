import { createSlice } from '@reduxjs/toolkit';
import {
  addNoticeThunk,
  addPetThunk,
  deleteNoticeThunk,
  deletePetThunk,
  fetchAddToFavorite,
  fetchFavoriteNotices,
  fetchNotices,
  fetchRemoveFromFavorite,
  fetchUserNotices,
} from './operations';
import { logIn, logOut, refreshUser } from 'redux/auth/operation';
import { Notify } from 'notiflix';

const initialState = {
  items: [],
  favorite: [],
  myPets: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.favorite = action.payload.favoritePets;
        state.myPets = action.payload.myPets;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.favorite = action.payload.favoritePets;
        state.myPets = action.payload.myPets;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.favorite = [];
      })
      .addCase(fetchNotices.pending, state => {
        handlePending(state);
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        handleFulfilled(state, action);
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addPetThunk.fulfilled, (state, action) => {
        state.myPets.push(action.payload);
        state.isLoading = false;
        Notify.success('Your pet was added');
      })
      .addCase(addPetThunk.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(addPetThunk.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deletePetThunk.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deletePetThunk.fulfilled, (state, { payload }) => {
        const index = state.myPets.findIndex(item => item === payload);
        state.myPets.splice(index, 1);
        Notify.warning('Your pet was deleted');
      })
      .addCase(addNoticeThunk.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.isLoading = false;
      })
      .addCase(addNoticeThunk.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(addNoticeThunk.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deleteNoticeThunk.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deleteNoticeThunk.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(item => item._id === payload);
        state.items.splice(index, 1);
        Notify.warning('Your notice was deleted');
      })
      .addCase(fetchUserNotices.pending, state => {
        handlePending(state);
      })
      .addCase(fetchUserNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchUserNotices.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(fetchFavoriteNotices.pending, state => {
        handlePending(state);
      })
      .addCase(fetchFavoriteNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchFavoriteNotices.rejected, (state, action) => {
        handleRejected(state, action);
      })

      .addCase(fetchAddToFavorite.fulfilled, (state, { payload }) => {
        state.favorite.push(payload);
        Notify.success('Notice was added to favorites');
      })
      .addCase(fetchRemoveFromFavorite.fulfilled, (state, { payload }) => {
        const index = state.favorite.findIndex(item => item === payload);
        state.favorite.splice(index, 1);
        Notify.warning('Notice was removed from favorites');
      });
  },
});

export const noticesReducer = noticesSlice.reducer;
