require('./database')
const app = require('./app')

app.listen(app.get('port'))
console.log('SERVE CONECTED', app.get('port'))
