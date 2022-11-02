import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_PHOTOS_START } from './actionTypes'
import { getPhotosSuccess , getPhotosError } from './actions'
import { Rover, RoverRequest } from './types'
import Api from './api'

function* fetchPhotos() {
   try {
      const response: RoverRequest = yield call(Api);
      const photos: Rover[] = response.data.photos
      yield put(getPhotosSuccess(photos));
   } catch (e) {
      yield put(getPhotosError());
   }
}

function* sagaPhotos() {
  yield takeLatest(GET_PHOTOS_START, fetchPhotos);
}

export default sagaPhotos;
