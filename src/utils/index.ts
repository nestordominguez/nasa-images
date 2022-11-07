import { ApiParams, CameraType } from "../features/photos/types"
import { URL_NASA, NASA_API_KEY, FORMAT } from "../constants"
import Days from "dayjs"

const getCamerasParams = (cameras: CameraType[]) => (cameras.length ? `&cameras=${cameras}` : "")
const getPageParams = (page: number | undefined) => (typeof page !== "undefined" ? `&page=${page}` : "")
const getDateParams = (date: string | undefined) => (typeof date !== "undefined" ? `&earth_date=${date}` : "")
const getSolParams = (sol: number | undefined) => (typeof sol !== "undefined" ? `&sol=${sol}` : "")

export const getCurrentDate = () => Days().format(FORMAT)

export const getUrl = ({rover, page, cameras, date, sol }: ApiParams) => {
  const camerasParams = getCamerasParams(cameras)
  const pageParams = getPageParams(page)
  const dateParams = getDateParams(date)
  const solParams = getSolParams(sol)
  const params = `api_key=${NASA_API_KEY}${pageParams}${camerasParams}${dateParams}${solParams}`
  return`${URL_NASA}/${rover}/photos?${params}`
}
