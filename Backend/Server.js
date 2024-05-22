const express = require('express')


//expressapp
const app = express()

app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

//listen for req
app.listen(4000, () => {
    console.log('Listeneing on port 4000 its working')
})