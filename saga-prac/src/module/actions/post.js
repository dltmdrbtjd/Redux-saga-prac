import { createAction } from '@reduxjs/toolkit';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const requestPostAction = createAction(LOAD_POST_REQUEST);
