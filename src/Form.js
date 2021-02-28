import React from 'react';
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

export default function Form(props){
    const [goal, setGoal] = React.useState('');
    const [priority, setPriority] = React.useState('');
    const [duration, setDuration] = React.useState('');
    const [submissionJSON, setSubmissionJSON] = React.useState({
        "Goal": goal,
        "Duration": duration,
        "Priority": priority
    })
    const handleClear = () => {

        setPriority('')
        setGoal('')
        setDuration('')
        setSubmissionJSON({
            "Goal": goal,
            "Duration": duration,
            "Priority": priority
        })
        props.onClear(submissionJSON)
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

    const handleSubmit = () => {
        const JSONsub = {
            "Goal": goal,
            "Duration": duration,
            "Priority": priority
        }
        setSubmissionJSON(JSONsub)
        props.onSubmit(submissionJSON)

    }



    
    return(
        <Grid container>
            <Grid container>
              <Grid item xs={3}>
                <TextField
                  label="Goal"
                  id="outlined-size-normal"
                  variant="outlined"
                  value={goal}
                  helperText="Please type in your Goal"
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
              <Grid item>
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                <Button variant="contained" onClick={handleClear}>Clear</Button>
              </Grid>
            </Grid>
          </Grid>
    )
}