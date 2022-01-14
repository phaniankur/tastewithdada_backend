const express = require('express')
const app = express();
const cors = require('cors')
const daySale = require('./routes/daySale')
const port = 5000;

app.use(cors())
app.use(express.json())
app.use('/daysale', daySale)

app.get('/',(req, res)=>{
    res.send('Hello hi there I am Gunu')
    console.log('get method hit')
})
app.listen(port, (req, res) => {
    console.log("backend running on ", port)
})