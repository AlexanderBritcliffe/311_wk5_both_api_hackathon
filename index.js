const express = require('express')
const app = express()
const employeesRouter = require('./routes/employees');
const port = process.env.PORT || 4001

app.use(employeesRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
})

app.listen(port, () => {
    console.log('Welcome to our API:', port)
  })