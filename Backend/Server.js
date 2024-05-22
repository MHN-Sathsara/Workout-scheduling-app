const express = require('express')

//expressapp
const app = express()

//listen for req
app.listen(4000, () => {
    console.log('Listening on port 4000 its working !')
})