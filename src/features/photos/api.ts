import axios from 'axios'
import { getUrl } from '../../utils';
import { Rover } from './types';

export default () => {
  const url = getUrl("curiosity")
  return axios.get<Rover[]>(url)
}
