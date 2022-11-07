import {
  GET_PHOTOS_ERROR,
  GET_PHOTOS_START,
  GET_PHOTOS_SUCCESS,
  SET_HAS_MORE,
  SET_IS_LOADED,
  RESET_IMAGES,
  SET_API_PARAMS,
} from './actionTypes'
import { Rover, ApiParams } from './types'

export const getPhotosStart = () => {
  return {
    type: GET_PHOTOS_START,
  }
}

export const getPhotosSuccess = (payload: Rover[]) => {
  return {
    type: GET_PHOTOS_SUCCESS,
    payload
  }
}

export const getPhotosError = () => {
  return {
    type: GET_PHOTOS_ERROR
  }
}

export const setIsLoaded = (payload: boolean) => {
  return {
    type: SET_IS_LOADED,
    payload
  }
}

export const setHasMore = (payload: boolean) => {
  return {
    type: SET_HAS_MORE,
    payload
  }
}

export const resetImages = () => {
  return {
    type: RESET_IMAGES,
  }
}

export const setApiParams = (payload: ApiParams) => {
  return {
    type: SET_API_PARAMS,
    payload
  }
}
