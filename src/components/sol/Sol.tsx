import { FC } from 'react'
import { FormControl, Grid, Input, InputLabel } from '@mui/material'
import { PropsFromRedux } from '../form/Form.container'

const Sol: FC<PropsFromRedux> = ({apiParams, fetchPhotos, resetImages, setApiParams}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const parsedSol = parseInt(event.target.value)
    const sol = isNaN(parsedSol) ? 0 : parsedSol
    setApiParams({...apiParams, sol, date: undefined})
    resetImages()
    fetchPhotos()
  }

  return(
    <Grid item lg>
      <FormControl className="form-control">
        <InputLabel>Select Sol</InputLabel>
        <Input type='number' value={apiParams.sol} onChange={handleChange}/>
      </FormControl>
    </Grid>
  )
}

export default Sol
