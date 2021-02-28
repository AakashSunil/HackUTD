import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {

        '& .MuiOutlinedInput-input': {
            background: 'aliceblue'
        },
        
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

export default function Login(props) {
    const classes = useStyles();
    const [accNumber,setAccNumber] = React.useState('')
    const [password,setPassword] = React.useState('')
    const handleAccount = (event) => {
        setAccNumber(event.target.value);
    } 
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = () =>{
        props.login(accNumber)
    }

    const handleClear = () =>{
        setAccNumber('')
        setPassword('')
    }
    return(
        <div className={classes.root}>
        <Grid container>
            <Grid container>
              <Grid item xs={3}>
                <TextField
                  label="Account Number"
                  id="outlined-size-normal"
                  variant="outlined"
                  value={accNumber}
                  onChange={handleAccount}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}>
                <TextField
                    id="outlined-select-currency"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handlePassword}
                    variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Button variant="contained" onClick={handleSubmit} disabled={accNumber===""||password===""}>Submit</Button>
                <Button variant="contained" onClick={handleClear} disabled={accNumber===""&&password===""}>Clear</Button>
              </Grid>
            </Grid>
          </Grid>
          </div>)
}