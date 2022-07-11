import React from 'react';
import { Field, reduxForm } from 'redux-form'
import PhoneInput from 'react-phone-number-input'
import { formValueSelector } from 'redux-form' 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import { Avatar , Box , Button , Container , CssBaseline , FormControl , TextField , InputLabel , Select  , Link , Grid , Typography } from '@material-ui/core'; 
import FormHelperText from '@material-ui/core/FormHelperText'
import 'react-phone-number-input/style.css'
import submit from './submitEstablishment'
import CloudinaryWidget from './cloudinaryWidget';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://http://localhost:8081/Home">
        We Travel
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
  
const validate = values => {
  const errors = {}
  const requiredFields = [
    'name',
    'city_id',
    'longitude',
    'latitude',
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}
const styles = theme => ({
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  phone: {
    width: '60%',
    marginRight: '5%',
    alignSelf: 'center',
  },
  });
  
  const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      label={label}
      error={touched && invalid}
      helperText={touched && error}
      variant="outlined"
      {...input}
      {...custom}
    />
  )



  const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>
    }
  }
  
  const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    classes,
    ...custom
  }) => (
    <FormControl error={touched && error} className={classes.formControl}>
      <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: input.name,
          id: 'color-native-simplee'
        }}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  )

class Establishment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, classes, is_provider, change } = this.props;    
        return (
                    <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                      <Typography component="h1" variant="h5">
                      Formulaire d'ajout
                      </Typography>
                      <form className={classes.form} onSubmit={handleSubmit(submit)}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                             <Field name="name" fullWidth component={renderTextField} label="Establishment Name" />
                          </Grid>
                          <Grid item xs={12} >
                             <Field name="description" multiline rows={4} fullWidth component={renderTextField} label="Description" />
                          </Grid>           
                           <Grid item xs={6}>
                          <Field name="longitude" component={renderTextField} label="longitude" />
                          </Grid>
                          <Grid item xs={6}>
                          <Field name="latitude" component={renderTextField} label="latitude" />
                          </Grid>  
                          <Grid item xs={12}>
                        <Field
          classes={classes}
          name="city_id"
          component={renderSelectField}
          label="city"
        >
          <option value={1}>Sousse</option>
          <option value={2}>Mahdia</option>
          <option value={3}>Monastir</option>
          <option value={4}>Sfax</option>
          <option value={5}>Tunis</option>
          <option value={6}>Kairouan</option>
          <option value={7}>Tunis</option>
          <option value={8}>Hammamat</option>
          <option value={9}>Tunis</option>
          <option value={10}>Bizerte</option>
          <option value={11}>Gafsa</option>
          <option value={12}>Nabeul</option>
          <option value={13}>Ariana</option>
          <option value={14}>Béja</option>
          <option value={15}>Tataouine</option>
          <option value={16}>Le Kef</option>
          <option value={17}>Tabarka</option>
          <option value={18}>Sidi Bouzid</option>
          <option value={19}>Tozeur</option>
          <option value={20}>Kasserine</option>
          <option value={21}>Zarzis</option>
          <option value={22}>Zaghouan</option>
          <option value={23}>Médenine</option>
          <option value={24}>Jendouba</option>
            
             
         
                              </Field>
                        </Grid>
                        <Grid item xs={12}>
                        <CloudinaryWidget change={change}/>      
                        </Grid>
                          
                          </Grid>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          disabled={pristine || submitting}
                        >
                          submit
                        </Button>
                        <Grid container justify="flex-end">
                          <Grid item>
                          </Grid>
                        </Grid>
                      </form>
                    </div>
                    <Box mt={5}>
                      <Copyright />
                    </Box>
                  </Container>
                  );
      }
      
}
const reduxFormSignUp = reduxForm({
  form: 'Establishment', // a unique identifier for this form
  validate,
})(Establishment)



function mapStateToProps(state) {
  const { user } = state.common;
  const initialValues= { provider_id : user.id};
  return {
    initialValues,
  };
}

const connectedMapPage = connect(mapStateToProps)(reduxFormSignUp);

const withStyle = withSnackbar(withRouter(withStyles(styles)(connectedMapPage)));
export default withStyle;