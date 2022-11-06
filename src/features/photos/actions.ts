import {
  GET_PHOTOS_ERROR,
  GET_PHOTOS_START,
  GET_PHOTOS_SUCCESS,
  SET_HAS_MORE,
  SET_IS_LOADED,
  RESET_IMAGES,
  SET_API_PAGE,
  SET_API_ROVER,
  SET_API_CAMERAS
} from './actionTypes'
import { Rover, RoverType, CameraType } from './types'

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

export const setApiPage = (payload: number) => {
  return {
    type: SET_API_PAGE,
    payload
  }
}

export const setApiRover = (payload: RoverType) => {
  return {
    type: SET_API_ROVER,
    payload
  }
}

export const setApiCameras = (payload: CameraType[]) => {
  return {
    type: SET_API_CAMERAS,
    payload
  }
}
