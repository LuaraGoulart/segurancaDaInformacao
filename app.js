require('dotenv').config()
const express = require('express')
const cors = require('cors')
const userRouter = require('./src/routes')
const port = process.env.PORT

require('./src/db/db')

const app = express()
app.use(cors())

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})