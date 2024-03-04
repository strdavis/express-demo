const express = require('express')
const app = express()
const port = 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  const testString1 = process.env.TEST_VAR_1
  const testString2 = process.env.TEST_VAR_2
  const testString3 = process.env.TEST_VAR_3
  console.log(testString1)
  console.log(testString2)
  console.log(testString3)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
