import { FC } from 'react'

interface Props {
  url: string | null
}

const UnsplashImage: FC<Props> = ({ url }) => (
  <div className="image-item" >
    {url && <img src={url} />}
  </div>
);

export default UnsplashImage