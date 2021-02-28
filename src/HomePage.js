import React from 'react';
import "./assets/HomePage.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, MenuItem } from '@material-ui/core';
import Form from './Form';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '45ch',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
      width: '22ch',
    },
  },
  text:{
    textAlign:"center"
  },
  center:{
    justifyContent:"center"
  }
}));

function HomePage() {
  const classes = useStyles();
  
  const [submitted, setSubmission] = React.useState(false);
  const [subJson, setSubJson] = React.useState({
    "Goal": '',
    "Duration": '',
    "Priority": ''
  })

  const handleSubmit = (jsonValue) => {
    setSubmission(true)
    setSubJson(jsonValue)
  }
  
  const handleClear = (jsonValue) => {
    setSubmission(false)
    setSubJson(jsonValue)
}

  return (
    <div className={classes.root}>
      <h1 className={classes.center}>Financial Goal Setting</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Form onSubmit={(json)=>handleSubmit(json)} onClear={(json)=>handleClear(json)} />
        </Grid>
        <Grid item xs={6}>
          {submitted?
            <div>
              <h1>Goal Submitted</h1>
              <div>{JSON.stringify(subJson)}</div>
            </div>
          :<></>}
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
