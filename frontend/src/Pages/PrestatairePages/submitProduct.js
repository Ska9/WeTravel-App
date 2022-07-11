
import { postProduct } from '../../api/search';


function submit(values, ...props) {
values.establishment_id = Number(values.establishment_id)
values.price = parseFloat(values.price)
  return postProduct(values)
  .then((rsp) => {   
    props[1].history.push('Prestataire')
    props[1].enqueueSnackbar('This is a success message!', { variant : 'success' });
  })
  .catch(() => {  
    props[1].enqueueSnackbar('Failed!');
  })
}

export default submit