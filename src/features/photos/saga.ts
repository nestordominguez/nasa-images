import { call, select, put, takeLatest } from 'redux-saga/effects'
import { GET_PHOTOS_START } from './actionTypes'
import { getPhotosSuccess , getPhotosError, setIsLoaded, setHasMore } from './actions'
import { getApiParams } from './selectors'
import { ApiParams, Rover, RoverRequest } from './types'
import { getUrl } from '../../utils'
import { Api } from './api'

function* fetchPhotos() {
   try {
      const api: ApiParams = yield select(getApiParams)
      const {rover, page, cameras} = api
      const url = getUrl(rover, page, cameras)
      yield put(setIsLoaded(false))
      const response: RoverRequest = yield call(Api, url)
      const photos: Rover[] = response.data.photos
      if(photos.length === 0) {
         yield put(setHasMore(false))
      }
      yield put(getPhotosSuccess(photos));
   } catch (e) {
      yield put(getPhotosError())
   } finally {
      yield put(setIsLoaded(true))
   }
}

function* sagaPhotos() {
  yield takeLatest(GET_PHOTOS_START, fetchPhotos);
}

export default sagaPhotos;
