import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_PHOTOS_START, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR} from './actionTypes'
import { Rover, RoverRequest } from './types'
import Api from './api'

function* fetchPhotos() {
   try {
      const response: RoverRequest = yield call(Api);
      console.log({response})
      const photos: Rover[] = response.data.photos
      yield put({type: GET_PHOTOS_SUCCESS, payload: photos});
   } catch (e) {
      yield put({type: GET_PHOTOS_ERROR});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* sagaPhotos() {
//   yield takeEvery(GET_PHOTOS_START, fetchPhotos);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If GET_PHOTOS_START gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* sagaPhotos() {
  yield takeLatest(GET_PHOTOS_START, fetchPhotos);
}

export default sagaPhotos;