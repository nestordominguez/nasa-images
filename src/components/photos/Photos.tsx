import { FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import UnsplashImage from '../unsplashImage/UnsplashImage'
import { PropsFromRedux } from './Photos.container'
import { LinearProgress, Select, InputLabel, MenuItem, SelectChangeEvent} from '@mui/material'
import { ROVERS } from '../../constants'
import { RoverType } from '../../features/photos/types'
import Camera from '../camera'

interface Props extends PropsFromRedux {}

const Photos: FC<Props> = ({
  hasMore,
  images,
  loaded,
  page,
  rover,
  fetchPhotos,
  setPage,
  setRover,
  resetImages,
}) => {
  const nextFetchPhotos = () => {
    setPage(page +1)
    fetchPhotos()
  }

  const handleChange = (e: SelectChangeEvent) => {
    setRover(e.target.value as RoverType)
    resetImages()
    fetchPhotos()
  }

  return(
    <div className="hero is-fullheight is-bold is-info">
      <div className="hero-body">
        <div className="container">
          <div className="header content">
            <InputLabel id="demo-simple-select-label">Choice Rover</InputLabel>
            <Select
              value={rover}
              label={rover}
              onChange={(e) => handleChange(e)}
            >
              {ROVERS.map((item) => (<MenuItem key={item} value={item}>{item}</MenuItem>))}
            </Select>
            <Camera />
          </div>

          <InfiniteScroll
            dataLength={images.length}
            next={nextFetchPhotos}
            hasMore={hasMore}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            loader={
              loaded && <LinearProgress />}
            >
            <div className="image-grid" style={{ marginTop: "30px" }}>
                {images.length ? 
                    images.map((image) => (
                        <UnsplashImage url={image.img_src} key={image.id} />
                    )): ""}
            </div>
        </InfiniteScroll>
        </div>
      </div>
    </div>
  )
}

export default Photos
