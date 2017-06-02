const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require ('cors')
const config = require('./.config')
const app = express()
const port = 3000
const profileCtrl = require('./controllers/profileCtrl')
const userCtrl = require('./controllers/userCtrl')

//middleware
app.options('*', cors ({
    origin: `http://localhost:${port}`
}))
// app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(session({
    secret: config.secret
    , resave: false
    , saveUninitialized: false
}))
app.use(cors())

//endpoints
app.post('/api/login', userCtrl.login)
app.get('/api/friend', profileCtrl.getFriendsProfiles)


app.listen(port, function(){
    console.log(`listening on ${port}`)
})