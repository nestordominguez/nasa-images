/* eslint-disable @typescript-eslint/default-param-last */
import { SPIRIT } from '../../constants'
import {
  GET_PHOTOS_START,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR,
  SET_IS_LOADED,
  SET_HAS_MORE,
  RESET_IMAGES,
  SET_API_PAGE,
  SET_API_ROVER,
  SET_API_CAMERAS,
} from './actionTypes'
import { PhotosActionTypes, PhotosState, Rover } from './types'

const initialState: PhotosState = {
  photos: [],
  isLoaded: false,
  hasMore: true,
  api: {
    page: 1,
    rover: SPIRIT,
    cameras: [],
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
      return { ...state, photos: [], hasMore: true, api: {...state.api, page: 1} }
    case SET_API_PAGE:
      const page = action.payload
      return { ...state, api: {...state.api, page} }
    case SET_API_ROVER:
      const rover = action.payload
      return { ...state, api: {...state.api, rover} }
    case SET_API_CAMERAS:
      const cameras = action.payload
      return { ...state, api: {...state.api, cameras} }
    default:
      return state
  }
}
