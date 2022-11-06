import axios from 'axios'
import { Rover } from './types'

export const Api = (url: string) => {
  return axios.get<Rover[]>(url)
}
