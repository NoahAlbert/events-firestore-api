const admin = require('firebase-admin')
const creds = require('../credentials.json')
function connectDB(){
    if (!admin.apps.length){
        admin.initializeApp({
            credential: admin.credential.cert(creds)
        })
    return admin.firestore()
    }
}

exports.getEvents = (req, res) => {
    const db = connectDB()
    db.collection('events')
        .get()
        .then(eventCollection => {
            const allEvents = eventCollection.docs.map(doc => {
                let event = doc.data()
                event.id = doc.id
                return event
            })
            res.send(allEvents)
        })
        .catch(err => res.send(err))
}

// 1. create POST request - to add new events
exports.createEvent = (req, res) => {
    const db = connectDB()
    db.collection('events')
    .add({...params.body, timestamp: admin.firestore.FieldValue.serverTimestamp()})
    .then(() => res.status(201).send('Event Created'))
    .catch(err => res.status(500).send(err))
}


// 2. create GET - ONE event request
// 3. create DELETE request - to delete one event 
// 4. create PATCH request - to update one event
// extra credit: 
// Make a SEARCH request - to find one event
// MAKE IT DYNAMIC IN POSTMAN