const express = require('express')
const app = express()
const {routes} = require('./routes/index')
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json())
app.use("/", routes)
module.exports = {app}