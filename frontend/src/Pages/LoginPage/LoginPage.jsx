import React from 'react';
import { Field, reduxForm } from 'redux-form'
// Material UI 
import { withSnackbar } from 'notistack';
import { withStyles } from '@material-ui/core/styles';
import { Avatar , Button , CssBaseline , TextField , FormControlLabel , Checkbox , Link , Paper , Box , Grid , Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import submit from './submit'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://localhost:8081/Home">
          We Travel
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://besthqwallpapers.com/Uploads/18-5-2019/92582/4k-flag-of-tunisia-geometric-art-african-countries-tunisian-flag.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      variant="outlined"
      {...input}
      {...custom}
    />
  )

  const validate = values => {
    const errors = {}
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'password',
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    return errors
  }

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
        };
    }

    render() {
      const { handleSubmit, pristine, reset, submitting, classes } = this.props
        return (
          <Grid container component="main" className={classes.root}>

          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Connexion
              </Typography>
              <form onSubmit={handleSubmit(submit)} className={classes.form}>
              <Field name="email" fullWidth component={renderTextField} label="Adresse Email" />
              <Field name="password"
                          fullWidth
                          autoComplete="current-password"
                          type="password" component={renderTextField} label="Mot de passe" />
                           
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Me rappeller"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={pristine || submitting}
                >
                  Se connecter
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                    Mot de passe oublié ?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="http://localhost:8081/SignUp" variant="body2">
                      {"Créer un compte ? S'inscrire"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
        );
    }
    
}

const reduxFormSignUp = reduxForm({
  form: 'LoginPage', // a unique identifier for this form
  validate,
})(LoginPage)
const withStyle = withSnackbar(withStyles(styles)(reduxFormSignUp));
export { withStyle as LoginPage };