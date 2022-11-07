import { FC } from 'react'
import Photos from '../components/photos'
import { useDispatch } from 'react-redux'
import { getPhotosStart } from '../features/photos/actions'

export const Home: FC = () => {
  const dispatch = useDispatch()
  dispatch(getPhotosStart())
  return (
    <Photos />
  )
}
