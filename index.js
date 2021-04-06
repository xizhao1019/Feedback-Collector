const express = require('express');
require('./services/passport');


const app = express();

require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

app.get('/', (req,res)=>{
  res.send({hello: 'kevin'})
});

// app.get('/', function(req,res){
//   res.send({hi: 'there'})
// });

const PORT = process.env.PORT || 5000; //Dynamic port
app.listen(PORT);
