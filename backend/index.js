// config inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  }),)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')

// INSERT PERSON
app.use('/person', personRoutes);

// SELECT PERSON
app.use('/', personRoutes);

// SELECT PERSON FOR ID
app.use('/person/:id', personRoutes);

// UPDATE PERSON
app.use('/person/:id', personRoutes);

// DELETE PERSON
app.use('/person/:id', personRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Oi Express!' })
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.efe9v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3001)
  })
  .catch((err) => console.log(err))
