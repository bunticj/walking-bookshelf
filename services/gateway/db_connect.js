const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

mongoose.connect(`${uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch(error => {
    console.log('Connection failed!');
    console.log(error);
  });