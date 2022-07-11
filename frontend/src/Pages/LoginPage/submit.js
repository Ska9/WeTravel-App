import { connect } from '../../api/search'
import { changeUser } from '../../_reducers/common';


function submit(values, ...props) {
  return connect(values).then((rest) => {
if(rest.data[0].id)
{
  props[1].history.push('http://localhost:8081/Home')
  props[1].dispatch(changeUser(rest.data))
  props[1].enqueueSnackbar('This is a success message!', { variant : 'success' });
} 
  })
  .catch(() => {  
    props[1].enqueueSnackbar('Failed!');
  })
}

export default submit