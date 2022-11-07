import { FC } from 'react'
import {
  FormGroup,
  Grid,
} from '@mui/material'
import Camera from '../camera'
import Date from '../date'
import Sol from '../sol'
import Rover from '../rover'
import SaveSearch from '../saveSearch/SaveSearch'
import { PropsFromRedux } from './Form.container'

interface Props extends PropsFromRedux {}

const Form: FC<Props> = (props) => {
  return(
    <FormGroup row={true} className="form-group">
      <Grid container spacing={3}>
        <Rover {...props}/>
        <Date {...props}/>
        <Sol {...props}/>
        <Camera {...props}/>
      </Grid>
      <SaveSearch
        {...props}
        />
    </FormGroup>
  )
}

export default Form
