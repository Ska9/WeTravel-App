
import { postAnnonce } from '../../api/search';


function submit(values, ...props) {
values.product_id = Number(values.product_id)
values.discount_rate = parseFloat(values.discount_rate)
  return postAnnonce(values)
  .then((rsp) => {   
    props[1].history.push('Prestataire')
    props[1].enqueueSnackbar('This is a success message!', { variant : 'success' });
  })
  .catch(() => {  
    props[1].enqueueSnackbar('Failed!');
  })
}

export default submit