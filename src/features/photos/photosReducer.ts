/* eslint-disable @typescript-eslint/default-param-last */

import { GET_PHOTOS_START, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR } from './actionTypes'
import { PhotosActionTypes } from './types'

const initialState = {
  photos: []
}

export default (state = initialState, action: PhotosActionTypes) => {
  switch (action.type) {
    case GET_PHOTOS_START:
    case GET_PHOTOS_SUCCESS:
      const photos = action.payload || []
      const photo = photos[0]
      return { ...state, photos, photo }
    case GET_PHOTOS_ERROR:
      return { ...state}
    default:
      return state
  }
}
