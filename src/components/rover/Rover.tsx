import { FC } from 'react'
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { PropsFromRedux } from '../form/Form.container'
import { RoverType } from '../../features/photos/types'
import { ROVERS } from '../../constants'
import { getCurrentDate } from '../../utils'

const Rover: FC<PropsFromRedux> = ({apiParams, fetchPhotos, resetImages, setApiParams}) => {
  const handleChange = (e: SelectChangeEvent) => {
    const rover = e.target.value as RoverType
    resetImages()
    setApiParams({...apiParams, rover, cameras: [], date: getCurrentDate(), sol: undefined})
    fetchPhotos()
  }

  return(
    <Grid item lg>
      <FormControl fullWidth className="form-control">
        <InputLabel id="demo-simple-select-label">Rover</InputLabel>
        <Select
          label={apiParams.rover}
          value={apiParams.rover}
          onChange={(e) => handleChange(e)}
        >
          {ROVERS.map((item) => (<MenuItem key={item} value={item}>{item}</MenuItem>))}
        </Select>
      </FormControl>
    </Grid>
  )
}

export default Rover