import { FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
  LinearProgress,
} from '@mui/material'
import UnsplashImage from '../unsplashImage/UnsplashImage'
import { PropsFromRedux } from './Photos.container'
import Form from '../form'

interface Props extends PropsFromRedux {}

const Photos: FC<Props> = ({
  hasMore,
  images,
  loaded,
  apiParams,
  fetchPhotos,
  setParams,
}) => {
  const nextFetchPhotos = () => {
    if(typeof apiParams.page !== "undefined") {
      setParams({...apiParams, page: apiParams.page +1})
      fetchPhotos()
    }
  }

  return(
    <>
      <Form/>
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
    </>
  )
}

export default Photos
