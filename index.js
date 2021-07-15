const express = require('express')
const cors = require('cors')

const {getEvents, createEvent} = require('./src/events')

const app = express()
app.use(cors())

app.get('/events', getEvents)
app.get('/', (req, res) => res.send('🏠 H O M E P A G E 📄'))

app.post('/events', createEvent)

app.listen(3000, ()=> {
    console.log('Listening to Port 3000')
})