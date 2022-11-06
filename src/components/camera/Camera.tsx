import { ChangeEvent, FC, useState } from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material'
import { CAMERAS, CAMERAS_CHECKBOX } from '../../constants'
import { CameraType } from '../../features/photos/types'
import { PropsFromRedux } from './Camera.container'

interface Props extends PropsFromRedux {}
interface CheckboxType {
  name: CameraType
  checked: boolean
}

const Camera: FC<Props> = ({
  cameras,
  fetchPhotos,
  resetImages,
  setCameras,
}) => {
  const [camera, setCamera] = useState(CAMERAS_CHECKBOX)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {checked, name} = event.target as CheckboxType
    let updatedCameras = [...cameras]
    if(checked) {
      updatedCameras.push(name)
    } else {
      updatedCameras = cameras.filter(item => item !== name)
    }
    CAMERAS_CHECKBOX[name] = checked
    setCameras(updatedCameras)
    setCamera({...camera, ...CAMERAS_CHECKBOX})
    resetImages()
    fetchPhotos()
  }

  return(
    <FormControl>
      <FormGroup>
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
      </FormGroup>
    </ FormControl>
  )
}

export default Camera
