import { GET_PHOTOS_START, GET_PHOTOS_SUCCESS, GET_PHOTOS_ERROR } from './actionTypes'
import { CURIOSITY, OPPORTUNITY, SPIRIT } from '../../constants'

export interface GetPhotosStartAction {
  type: typeof GET_PHOTOS_START
  payload?: Rover[]
}

export interface GetPhotosSuccessAction {
  type: typeof GET_PHOTOS_SUCCESS
  payload: Rover[]
}

export interface GetPhotosErrorAction {
  type: typeof GET_PHOTOS_ERROR
}

export type PhotosActionTypes = GetPhotosStartAction | GetPhotosSuccessAction | GetPhotosErrorAction
export type RoverType = typeof CURIOSITY | typeof OPPORTUNITY | typeof SPIRIT

export interface Rover {
  id: number | null,
  sol: number| null,
  img_src: string | null,
  earth_date: Date | null,
  camera: {
    id: number | null,
    name: string | null,
    rover_id: number | null,
    full_name: string | null
  },
  rover: {
    id: number | null,
    name: string | null,
    landing_date: Date | null,
    launch_date: Date | null,
    status: string | null
  }
}

export interface RoverRequest {
  data: {
    photos: Rover[],
    status: number,
    statusText: string
  }
}

export interface SystemState {
  images: {
    photos: Rover[]
  }
}
