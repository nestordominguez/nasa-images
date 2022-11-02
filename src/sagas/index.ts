import { all } from 'redux-saga/effects'
import sagaPhotos from '../features/photos/saga'

export default function* rootSaga() {
  yield all([
    sagaPhotos(),
  ])
}