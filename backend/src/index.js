const express = require('express');

const app = express();

app.use(express.json());

app.post('/users',(req, resp)=> {
  const body = req.body;

  console.log(body)

  return resp.json({
    response: req.name
  })
})

app.listen(3333);
