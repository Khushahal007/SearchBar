const express = require('express')
const searchModel = require('./Models/searchModel')
const dotenv=require('dotenv')
dotenv.config()
const db=require('./db')
const searchRoutes=require('./Routes/searchRoutes')

const cors = require('cors');


const app = express();

app.use(express.json())

app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api', searchRoutes)

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Port is running on" + " " + port)
})