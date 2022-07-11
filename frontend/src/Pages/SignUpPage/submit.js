import { postUser } from '../../api/search';
import { putProvider } from '../../api/search';
import { changeUser } from '../../_reducers/common';


function submit(values, ...props) {
   values.is_provider = values.is_provider === "true" ? true : false;
   values.is_confirmed = true;
  return putProvider(values)
  .then((rsp) => {   
    props[1].history.push('http://localhost:8081/Home')
    props[1].enqueueSnackbar('This is a success message!', { variant : 'success' });
    props[1].dispatch(changeUser(rsp.data))
  })
  .catch(() => {  
    props[1].enqueueSnackbar('Failed!');
  })
}

export default submit