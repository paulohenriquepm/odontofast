const express = require('express')

const app = express()

const port = 3333

const clients = require('./routes/clients')
const dentists = require('./routes/dentists')
const appointments = require('./routes/appointments')

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use(clients)
app.use(dentists)
app.use(appointments)

app.listen(port, () => {
  console.log(`Running on port: ` + port)
})