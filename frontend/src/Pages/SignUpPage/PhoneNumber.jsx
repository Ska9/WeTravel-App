/* eslint-disable react/react-in-jsx-scope */
import { forwardRef } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  input: {
    backgroundColor: '#fff'
  }
}))

const phoneInput = (props, ref) => {
  const classes = useStyles()
  return (
    <TextField
      {...props}
      InputProps={{
        className: classes.input
      }}
      inputRef={ref}
      fullWidth
    
      label='Phone Number'
      variant='outlined'
      name='phone'
    />
  )
}
export default forwardRef(phoneInput)