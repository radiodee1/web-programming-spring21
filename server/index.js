/*

*/

const express = require('express')
const app = express()
const port = 3000

app
.get('/', (req, res) => {
    res.send('Hello World!')
})
.get('/purim', (req, res) => {
    res.send('Happy World!')
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})