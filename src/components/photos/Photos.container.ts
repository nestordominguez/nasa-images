import { connect, ConnectedProps } from 'react-redux'
import Photos from './Photos'
import { getPhotosStart, resetImages, setApiPage, setApiRover } from '../../features/photos/actions'
import { RoverType, SystemState } from '../../features/photos/types'


const mapState = (state: SystemState) => ({
  images: state.images.photos,
  loaded: state.images.isLoaded,
  hasMore: state.images.hasMore,
  page: state.images.api.page,
  rover: state.images.api.rover
})

const mapDispatch = {
  fetchPhotos: () => (getPhotosStart()),
  resetImages: () => resetImages(),
  setPage: (page: number) => setApiPage(page),
  setRover: (rover: RoverType) => setApiRover(rover),
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Photos)
