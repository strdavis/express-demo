const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.urlencoded({
    extended: true
}))

app.post('/message', (req, res) => {
    var body = req.body
    console.log(req.body.message)
    res.send(req.body.message)
})
