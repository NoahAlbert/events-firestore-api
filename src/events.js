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
                let event = doc.data
                event.id = doc.id
                return event
            })
            res.send(allEvents)
        })
        .catch(err => res.send(err))
}