import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { actionTypes } from '../features/photos'
import Photos from '../components/photos'

export const Home: FC = () => {
  const dispatch = useDispatch()

  dispatch({ type: actionTypes.GET_PHOTOS_START })
  return (
    <Photos />
  )
}
