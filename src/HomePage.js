import React from 'react';
import "./assets/HomePage.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, MenuItem } from '@material-ui/core';

const priorityValues = [
  {
    value:'High',
    label:'High'
  },
  {
    value:'Medium',
    label:'Medium'
  },
  {
    value:'Low',
    label:'Low'
  },
]
const durationValues = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '10',
    label: '10',
  },
]
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '45ch',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    // '& .MuiGrid-root': {
    //   justifyContent:"center"
    // },
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
  const [goal, setGoal] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [submitted, setSubmission] = React.useState(false);

  const handleClear = () => {
    setSubmission(false)
    setPriority('')
    setGoal('')
    setDuration('')
  }

  const handleSubmit = () => {
    setSubmission(true)
    const submissionJSON = {
      "Goal": goal,
      "Duration": duration,
      "Priority": priority
    }
    alert(JSON.stringify(submissionJSON))

  }
  const handleChange = (event) => {
    setDuration(event.target.value);
  };
  
  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleChangeGoal = (event) => {
    setGoal(event.target.value);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.center}>Financial Goal Setting</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Grid container>
            <Grid container>
              <Grid item xs={3}>
                <TextField
                  label="Goal"
                  id="outlined-size-normal"
                  variant="outlined"
                  value={goal}
                  onChange={handleChangeGoal}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Priority"
                    value={priority}
                    onChange={handleChangePriority}
                    helperText="Please select Priority of Goal"
                    variant="outlined"
                >
                {priorityValues.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Duration"
                  value={duration}
                  onChange={handleChange}
                  helperText="Please select Duration of Goal in years"
                  variant="outlined"
                  type="number"
                >
                {durationValues.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={3}>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                <Button variant="contained" onClick={handleClear}>Clear</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {submitted?<h1>submitted</h1>:<></>}
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
