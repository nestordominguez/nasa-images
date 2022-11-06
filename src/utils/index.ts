import { CameraType, RoverType } from "../features/photos/types"
import { URL_NASA, NASA_API_KEY } from "../constants"

export const getUrl = (rover: RoverType, page: number, cameras: CameraType[]) => {
  const url = `${URL_NASA}/${rover}/photos?sol=1000&api_key=${NASA_API_KEY}&page=${page}`
  return url + (cameras.length ? `&cameras=${cameras}` : "")
}