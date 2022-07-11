
import { postEstablishment } from '../../api/search';


function submit(values, ...props) {
values.city_id = Number(values.city_id)
values.longitude = parseFloat(values.longitude)
values.latitude = parseFloat(values.latitude)
  return postEstablishment(values)
  .then((rsp) => {   
    props[1].history.push('Prestataire')
    props[1].enqueueSnackbar('This is a success message!', { variant : 'success' });
  })
  .catch(() => {  
    props[1].enqueueSnackbar('Failed!');
  })
}

export default submit