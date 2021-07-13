const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('🏠 H O M E P A G E 📄')
})

app.listen(5000, ()=> {
    console.log('Listening to Port 5000')
})