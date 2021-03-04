const express = require('express')
const app = express()
const port = 3000

app
  .use(express.static("./docs"))
  .get('/', (req, res) => {
    res.send('Hello World!');
    res.json({ message: "Welcome." });
  })
  .get('/awesome', (req, res) => {
    res.send('Hello Awesome!');
    res.json({ message: "Welcome." });
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

