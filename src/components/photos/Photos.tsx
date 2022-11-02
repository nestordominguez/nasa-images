import { FC } from 'react'
import { useSelector } from 'react-redux'
// import MaterialReactTable from 'material-react-table'
import { Paper } from '@mui/material'
// import type { MRT_ColumnDef } from 'material-react-table'
import { selectors } from '../../features/photos'


const Photos: FC = () => {
  const photos = useSelector(selectors.getphotos)
  console.log({photos})

  return(
    <>
      <h1>photos</h1>
      {photos.length && <Paper variant="outlined">
        <img src={photos[0].img_src || ""} width="500" height="600" />
      </Paper>}
    </>
  )
}

export default Photos