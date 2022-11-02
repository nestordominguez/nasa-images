import { GET_PHOTOS_ERROR, GET_PHOTOS_START, GET_PHOTOS_SUCCESS } from './actionTypes'
import { Rover } from './types'

export const getPhotosStart = () => {
  return {
    type: GET_PHOTOS_START
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
