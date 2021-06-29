const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/restaurant', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(db => console.log('DB CONECTED'))
  .catch(err => console.error(err))
