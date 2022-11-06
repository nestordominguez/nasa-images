import { connect, ConnectedProps } from 'react-redux'
import Camera from './Camera'
import { getPhotosStart, resetImages, setApiCameras } from '../../features/photos/actions'
import { CameraType, SystemState } from '../../features/photos/types'

const mapState = (state: SystemState) => ({
  cameras: state.images.api.cameras,
})

const mapDispatch = {
  fetchPhotos: () => getPhotosStart(),
  resetImages: () => resetImages(),
  setCameras: (camera: CameraType[]) => setApiCameras(camera),
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Camera)
