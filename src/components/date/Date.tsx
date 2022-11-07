import { FC } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { FormControl, Grid, Stack, TextField } from '@mui/material'
import Days from 'dayjs'
import { PropsFromRedux } from '../form/Form.container'
import { FORMAT } from '../../constants'


const Date: FC<PropsFromRedux> = ({apiParams, fetchPhotos, resetImages, setApiParams}) => {
  const handleChange = (newValue: string | null | undefined) => {
    const newDate = newValue !== null ? newValue : undefined
    setApiParams({...apiParams, date: Days(newDate).format(FORMAT), sol: undefined})
    resetImages()
    fetchPhotos()
  }
  return (
    <Grid item lg>
      <FormControl fullWidth className="form-control">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack component="form" noValidate >
          <DatePicker
            label="Date"
            value={apiParams.date}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          </Stack>
        </LocalizationProvider>
      </FormControl>
    </Grid>
  )
}

export default Date