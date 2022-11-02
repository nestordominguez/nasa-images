import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { getPhotosStart } from '../features/photos/actions'
import Photos from '../components/photos'

export const Home: FC = () => {
  const dispatch = useDispatch()

  dispatch(getPhotosStart())

  return (
    <Photos />
  )
}
