import { connect, ConnectedProps } from 'react-redux'
import Form from './Form'
import { getPhotosStart, resetImages, setApiParams } from '../../features/photos/actions'
import { ApiParams, SystemState } from '../../features/photos/types'

const mapState = (state: SystemState) => ({
  apiParams: state.images.apiParams,
})

const mapDispatch = {
  fetchPhotos: () => getPhotosStart(),
  resetImages: () => resetImages(),
  setApiParams: (apiParams: ApiParams) => setApiParams(apiParams),
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Form)
