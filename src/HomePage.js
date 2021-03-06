import React from 'react';
import Grid from '@material-ui/core/Grid';
import Form from './Form';

export default function HomePage(props) {
  document.body.style = 'background: aqua;';
  const accNumber = props.accNumber
  const [submitted, setSubmission] = React.useState(false);
  const [subJson, setSubJson] = React.useState({
    "AccountNumber": accNumber.customer_id,
    "Balance": accNumber.balance,
    "Rewards": accNumber.rewards,
    "Name":accNumber.nickname,
    "Goal": '',
    "Duration": '',
    "Priority": ''
  })

  const handleSubmit = (goal,duration,priority,value) => {
    setSubJson({
      "AccountNumber": accNumber.customer_id,
      "Name":accNumber.nickname,
      "Balance": accNumber.balance,
      "Rewards": accNumber.rewards,
      "Goal": goal,
      "Duration": duration,
      "Priority": priority
  })
    value===0?setSubmission(false):setSubmission(true)
  }

  return (
    <div>
      <div><h3>{`Welcome ${accNumber.nickname}`}</h3></div>
      <div><h3>{`Current Balance: ${accNumber.balance}`}</h3></div>
      <div><h3>{`Rewards: ${accNumber.rewards}`}</h3></div>
      
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Form onSubmit={(goal,duration,priority,value)=>handleSubmit(goal,duration,priority,value)} />
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