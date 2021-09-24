import { all, fork, takeLatest, call, put, delay } from 'redux-saga/effects';
import * as PostActions from '../actions/post';
import { loadPostAPI } from '../../api';

function* loadPost() {
  const response = yield call(loadPostAPI);
  try {
    yield put({
      type: PostActions.LOAD_POST_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    yield put({
      type: PostActions.LOAD_POST_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchLoadPost() {
  yield takeLatest(PostActions.LOAD_POST_REQUEST, loadPost);
}

function* postSaga() {
  yield all([fork(watchLoadPost)]);
}

export default postSaga;
