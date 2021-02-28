import React from 'react';
import Grid from '@material-ui/core/Grid';
import Form from './Form';

export default function HomePage() {

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
    <div>
      <h1>Financial Goal Setting</h1>
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