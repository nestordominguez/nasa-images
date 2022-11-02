import { RoverType } from "../features/photos/types"
import { URL_NASA, NASA_API_KEY } from "../constants"

export const getUrl = (rover: RoverType) => `${URL_NASA}/${rover}/photos?sol=1000&api_key=${NASA_API_KEY}`