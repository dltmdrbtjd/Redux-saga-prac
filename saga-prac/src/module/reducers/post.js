import { createReducer } from '@reduxjs/toolkit';
import * as postActions from '../actions/post';

const initialState = {
  post: [],
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
};

const postReducer = createReducer(initialState, (builder) => {
  builder.addCase(postActions.LOAD_POST_REQUEST, (state) => {
    state.loadPostLoading = true;
    state.loadPostDone = false;
    state.loadPostError = null;
  });
  builder.addCase(postActions.LOAD_POST_SUCCESS, (state, action) => {
    state.post = action.data;
    state.loadPostLoading = false;
    state.loadPostDone = true;
    state.loadPostError = null;
  });
  builder.addCase(postActions.LOAD_POST_FAILURE, (state, action) => {
    state.loadPostLoading = false;
    state.loadPostDone = false;
    state.loadPostError = action.error;
  });
});

export default postReducer;
