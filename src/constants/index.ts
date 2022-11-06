import { CameraType } from "../features/photos/types"

export const NASA_API_KEY = "h6OSLxaN0rD8iHKMlbuJvdtRv4HkkxTOFgHkIpPJ"

export const SPIRIT = "spirit"
export const OPPORTUNITY = "opportunity"
export const CURIOSITY = "curiosity"

export const URL_NASA = "https://api.nasa.gov/mars-photos/api/v1/rovers"

export const FHAZ = "FHAZ"
export const RHAZ = "RHAZ"
export const MAST = "MAST"
export const CHEMCAM = "CHEMCAM"
export const MAHLI = "MAHLI"
export const MARDI = "MARDI"
export const NAVCAM = "NAVCAM"
export const PANCAM = "PANCAM"
export const MINITES = "MINITES"

export const CAMERAS: CameraType[] = [
  FHAZ,
  RHAZ,
  MAST,
  CHEMCAM,
  MAHLI,
  MARDI,
  NAVCAM,
  PANCAM,
  MINITES,
]

export const CAMERAS_CHECKBOX = {
  FHAZ: false,
  RHAZ: false,
  MAST: false,
  CHEMCAM: false,
  MAHLI: false,
  MARDI: false,
  NAVCAM: false,
  PANCAM: false,
  MINITES: false,
}

export const ROVERS = [SPIRIT, OPPORTUNITY, CURIOSITY]
