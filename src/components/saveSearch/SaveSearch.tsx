import { FC } from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { PropsFromRedux } from '../form/Form.container'

const SaveSearch: FC<PropsFromRedux> = ({apiParams, fetchPhotos, resetImages, setApiParams}) => {
  const save = () => {
    localStorage.removeItem('apiParams')
    localStorage.setItem('apiParams', JSON.stringify(apiParams))
  }

  const load = () => {
    const params = JSON.parse(localStorage.getItem('apiParams') || "")
    if(!!params) {
      setApiParams(params)
      resetImages()
      fetchPhotos()
    }
  }

  const deleteItem = () => {
    localStorage.removeItem('apiParams')
  }

  return(
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button
        variant="contained"
        onClick={save}
      >Save Search</Button>
      <Button
        variant="contained"
        onClick={load}
      >Load Search</Button>
      <Button
        variant="contained"
        onClick={deleteItem}
      >Delete Search</Button>
    </ButtonGroup>
  )
}

export default SaveSearch
