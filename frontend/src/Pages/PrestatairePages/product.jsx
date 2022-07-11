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
import submit from './submitProduct'
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

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { handleSubmit, pristine, reset, submitting, classes, change , establishment } = this.props;    
        
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
                             <Field name="name" fullWidth component={renderTextField} label="Product Name" />
                          </Grid>
                          <Grid item xs={12} >
                             <Field name="description" multiline rows={4} fullWidth component={renderTextField} label="Description" />
                          </Grid>
                          <Grid item xs={12}>
                        <Field
          classes={classes}
          name="product_type"
          component={renderSelectField}
          label="product type"
        >
          <option value={'Hôtel'}>Hôtel</option>
          <option value={'Restaurant'}>Restaurant</option>
                              </Field>
                        </Grid>
                         
                        <Grid item xs={12}>
                        <Field
          classes={classes}
          name="establishment_id"
          component={renderSelectField}
          label="Establishment"
        >
          {
            establishment.map(es => (
              <option key={es.id} value={es.id}>{es.name}</option> 
            ))         }

         
                              </Field>
                        </Grid>
                         
                           <Grid item xs={6}>
                          <Field name="price" component={renderTextField} label="prix unitaire" />
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
const selector = formValueSelector('SignUpPage');
const reduxFormSignUp = reduxForm({
  form: 'SignUpPage', // a unique identifier for this form
  validate,
})(SignUpPage)



function mapStateToProps(state) {
  const { user, establishment } = state.common;
  // const initialValues= user;
  return {
    // initialValues,
    establishment,
  };
}

const connectedMapPage = connect(mapStateToProps)(reduxFormSignUp);

const withStyle = withSnackbar(withRouter(withStyles(styles)(connectedMapPage)));
export default withStyle;