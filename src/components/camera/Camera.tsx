import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Checkbox, FormControl, FormControlLabel, Grid } from '@mui/material'
import { CAMERAS, CAMERAS_CHECKBOX } from '../../constants'
import { CameraType } from '../../features/photos/types'
import { PropsFromRedux } from '../form/Form.container'

interface CheckboxType {
  name: CameraType
  checked: boolean
}

const Camera: FC<PropsFromRedux> = ({
  apiParams,
  fetchPhotos,
  resetImages,
  setApiParams,
}) => {
  const [camera, setCamera] = useState({...CAMERAS_CHECKBOX})
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {checked, name} = event.target as CheckboxType
    let updatedCameras = [...apiParams.cameras]
    if(checked) {
      updatedCameras.push(name)
    } else {
      updatedCameras = apiParams.cameras.filter(item => item !== name)
    }
    const updatedCheckbox = {...camera}
    updatedCheckbox[name] = checked
    const sol = apiParams.sol ?? 1
    setApiParams({...apiParams, cameras: updatedCameras, date: undefined, sol })
    setCamera({...camera, ...updatedCheckbox})
    resetImages()
    fetchPhotos()
  }

  useEffect(() => {
    if(apiParams.cameras.length === 0) {
      setCamera({...CAMERAS_CHECKBOX})
    } else {
      const updated = {...CAMERAS_CHECKBOX}
      apiParams.cameras.map(item => {
        updated[item] = true
      })
      setCamera(updated)
    }
  }, [apiParams.cameras])

  return(
    <Grid item lg>
      <FormControl className="form-control">
        <h5>Select Cameras</h5>
        {CAMERAS.map((item: CameraType) => (
        <FormControlLabel
          key={item}
          label={item}
          control={
          <Checkbox
            name={item}
            checked={camera[item]}
            onChange={e => handleChange(e)}
          />}
        />))}
      </FormControl>
    </Grid>
  )
}

export default Camera
