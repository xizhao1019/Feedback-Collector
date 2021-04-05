const express = require('express');
const app = express();

app.get('/', (req,res)=>{
  res.send({hello: 'kevin'})
});

// app.get('/', function(req,res){
//   res.send({hi: 'there'})
// });

const PORT = process.env.PORT || 5000; //Dynamic port
app.listen(PORT);
