import {
  GET_PHOTOS_START,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR,
  SET_IS_LOADED,
  SET_HAS_MORE,
  RESET_IMAGES,
  SET_API_PARAMS,
} from './actionTypes'
import {
  CURIOSITY,
  OPPORTUNITY,
  SPIRIT,
  FHAZ,
  RHAZ,
  MAST,
  CHEMCAM,
  MAHLI,
  MARDI,
  NAVCAM,
  PANCAM,
  MINITES,
} from '../../constants'

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
  payload?: Rover[]
}

export interface SetIsLoaded {
  type: typeof SET_IS_LOADED
  payload: boolean
}

export interface SetHasMore {
  type: typeof SET_HAS_MORE
  payload: boolean
}

export interface ResetImages {
  type: typeof RESET_IMAGES
}

export interface SetApiParams {
  type: typeof SET_API_PARAMS
  payload: ApiParams
}

export type PhotosActionTypes = GetPhotosStartAction
  | GetPhotosSuccessAction
  | GetPhotosErrorAction
  | SetIsLoaded
  | SetHasMore
  | ResetImages
  | SetApiParams

export type RoverType = typeof CURIOSITY | typeof OPPORTUNITY | typeof SPIRIT

export interface Rover {
  id: number | null
  sol: number| null
  img_src: string | null
  earth_date: Date | null
  camera: {
    id: number | null
    name: string | null
    rover_id: number | null
    full_name: string | null
  },
  rover: {
    id: number | null
    name: string | null
    landing_date: Date | null
    launch_date: Date | null
    status: string | null
  }
}

export interface RoverRequest {
  data: {
    photos: Rover[]
    status: number
    statusText: string
  }
}

export interface ApiParams {
  page: number | undefined
  rover: RoverType
  cameras: CameraType[]
  date: string | undefined
  sol: number | undefined
}

export interface PhotosState {
  photos: Rover[]
  isLoaded: boolean
  hasMore: boolean
  apiParams: ApiParams
}

export interface SystemState {
  images: PhotosState
}

export type CameraType = typeof FHAZ
| typeof RHAZ
| typeof MAST
| typeof CHEMCAM
| typeof MAHLI
| typeof MARDI
| typeof NAVCAM
| typeof PANCAM
| typeof MINITES
