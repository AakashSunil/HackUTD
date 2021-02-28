import React from 'react';
import Grid from '@material-ui/core/Grid';
import Form from './Form';

export default function HomePage() {
  document.body.style = 'background: aqua;';

  const [submitted, setSubmission] = React.useState(false);
  const [subJson, setSubJson] = React.useState({
    "Goal": '',
    "Duration": '',
    "Priority": ''
  })

  const handleSubmit = (goal,duration,priority,value) => {
    setSubJson({
      "Goal": goal,
      "Duration": duration,
      "Priority": priority
  })
    value===0?setSubmission(false):setSubmission(true)
  }

  return (
    <div>
      <h1>Financial Goal Setting</h1>
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