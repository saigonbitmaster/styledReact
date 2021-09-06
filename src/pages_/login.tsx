/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { NextPage } from 'next';
import MainLayout from '@/layouts/mainLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    // marginTop: theme.spacing(8),
  },
  image: {
    backgroundImage: 'url(/submit.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    paddingTop: '0%',
    paddingBottom: '5%',
  },
  paper: {
    margin: theme.spacing(2, 2),
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
}));

export default function SignInSide(): NextPage {
  const classes = useStyles();

  return (
    <MainLayout footer={true} bar={false}>
      <div className={classes.image}>
        <Grid container component="main" className={classes.root} justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={2} elevation={0} square>
            <Grid container>
              <Grid item>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography component="h1" variant="h5" style={{ marginTop: 10, marginLeft: 10 }}>
                  Sign in
                </Typography>
              </Grid>
            </Grid>

            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Username"
                label="Username"
                name="Username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                fullWidth
                variant="contained"
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  );
}
