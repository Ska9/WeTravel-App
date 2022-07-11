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
import CustomPhoneNumber from './PhoneNumber'
import submit from './submit'

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
    'email',
    'password',
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

  const renderTextFieldPhone = ({
    label,
    input,
    ...custom
  }) => (
    <PhoneInput
      label={label}
      placeholder={label}

      inputComponent={CustomPhoneNumber}
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

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, classes, is_provider } = this.props;    
        
        return (
                    <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                      <Typography component="h1" variant="h5">
                      Formulaire d'édition
                      </Typography>
                      <form className={classes.form} onSubmit={handleSubmit(submit)}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                             <Field name="firstname" component={renderTextField} label="First Name" />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                             <Field name="lastname" component={renderTextField} label="Last Name" />
                          </Grid>
                          <Grid item xs={12}>
                          </Grid>
                          <Grid item xs={12}>
                        <Field
          classes={classes}
          name="is_provider"
          component={renderSelectField}
          label="Je suis un *"
        >
          <option value={false}>E-Touriste</option>
          <option value={true}>Prestataire</option>
         
                              </Field>
                        </Grid>
                         {(is_provider === 'true' || is_provider === true) && (
                           <Grid item xs={12}>
                           <Field name="phone" component={renderTextFieldPhone} />
                          </Grid>)}
                          {(is_provider === 'true' || is_provider === true) && (
                           <Grid item xs={6}>
                          <Field name="postal_code" component={renderTextField} label="postal code" />
                          </Grid>)}
                          {(is_provider === 'true' || is_provider === true) && (
                           <Grid item xs={6}>
                          <Field name="tax_registration_number" component={renderTextField} label="tax registration number" />
                          </Grid>)}
                          {(is_provider === 'true' || is_provider === true) && (
                           <Grid item xs={6}>
                          <Field name="rate" component={renderTextField} label="rate" />
                          </Grid>)}
                          {(is_provider === 'true' || is_provider === true) && (
                           <Grid item xs={6}>
                          <Field name="activity_sector" component={renderTextField} label="activity sector" />
                          </Grid>)}
                          {is_provider === 'true' && (
                       <Grid item xs={12}>
                       <Field name="foundation_year" type="date" fullWidth component={renderTextField} label="foundation year" />
                    </Grid>
                          )}
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
const selector = formValueSelector('SignUpPage');
const reduxFormSignUp = reduxForm({
  form: 'SignUpPage', // a unique identifier for this form
  validate,
})(SignUpPage)



function mapStateToProps(state) {
  const { user } = state.common;
  const is_provider =  selector(state, 'is_provider');
  const initialValues= user;
  return {
    initialValues,
    is_provider,
  };
}

const connectedMapPage = connect(mapStateToProps)(reduxFormSignUp);

const withStyle = withSnackbar(withRouter(withStyles(styles)(connectedMapPage)));
export { withStyle as SignUpPage };