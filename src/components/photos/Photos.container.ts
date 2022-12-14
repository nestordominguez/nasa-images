import { connect, ConnectedProps } from 'react-redux'
import Photos from './Photos'
import { getPhotosStart, setApiParams } from '../../features/photos/actions'
import { ApiParams, SystemState } from '../../features/photos/types'


const mapState = (state: SystemState) => ({
  images: state.images.photos,
  loaded: state.images.isLoaded,
  hasMore: state.images.hasMore,
  apiParams: state.images.apiParams,
})

const mapDispatch = {
  fetchPhotos: () => (getPhotosStart()),
  setParams: (apiParams: ApiParams) => setApiParams(apiParams),
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Photos)
