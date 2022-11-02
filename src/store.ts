import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { PhotosReducer } from './features/photos'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'


/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  images: PhotosReducer,
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)
sagaMiddleware.run(rootSaga)

export default store
