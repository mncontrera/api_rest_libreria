const express = require('express')
const userRoutes = require('./src/routes/user-routes')
const { errorHandlerMiddleware } = require('./src/middlewares/error-handlers')
const { initializeAuthentication } = require('./src/auth/auth')

const app = express()
const port = 3000

initializeAuthentication()

app.use(express.json())
app.use('/users', userRoutes)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
    console.log("api express corriendo en 3000, aprendiendo orm sequalize")
})