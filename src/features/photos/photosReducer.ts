/* eslint-disable @typescript-eslint/default-param-last */
import { CURIOSITY } from '../../constants'
import {
  GET_PHOTOS_START,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR,
  SET_IS_LOADED,
  SET_HAS_MORE,
  RESET_IMAGES,
  SET_API_PARAMS,
} from './actionTypes'
import { PhotosActionTypes, PhotosState, Rover } from './types'
import { getCurrentDate } from '../../utils'

const initialState: PhotosState = {
  photos: [],
  isLoaded: false,
  hasMore: true,
  apiParams: {
    page: 1,
    rover: CURIOSITY,
    cameras: [],
    date: getCurrentDate(),
    sol: undefined,
  }
}

export default (state = initialState, action: PhotosActionTypes) => {
  switch (action.type) {
    case GET_PHOTOS_START:
    case GET_PHOTOS_SUCCESS:
      let photos: Rover[] = []
      
      if(Array.isArray(action.payload)) {
        photos =  action.payload
      }
      return { ...state, photos: [...state.photos, ...photos] }
    case GET_PHOTOS_ERROR:
      return { ...state}
    case SET_IS_LOADED:
      const isLoaded = action.payload
      return { ...state, isLoaded }
    case SET_HAS_MORE:
      const hasMore = action.payload
      return { ...state, hasMore }
    case RESET_IMAGES:
      return { ...state, photos: [], hasMore: true, apiParams: {...state.apiParams, page: 1} }
    case SET_API_PARAMS:
      const apiParams = action.payload
      return { ...state, apiParams }
    default:
      return state
  }
}
