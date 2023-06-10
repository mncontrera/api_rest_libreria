const express = require('express')
const userRoutes = require('./src/routes/user-routes')
const libraryRoutes = require('./src/routes/library-routes')
const bookRoutes = require('./src/routes/book-routes')
const { errorHandlerMiddleware } = require('./src/middlewares/error-handlers')
const { initializeAuthentication } = require('./src/auth/auth')
const { User } = require('./src/models/user-models')

const app = express()
const port = 3000

initializeAuthentication()

app.use(express.json())
app.use('/user', userRoutes)
app.use('/library', libraryRoutes)
app.use('/book', bookRoutes)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
    console.log("api express corriendo en 3000, aprendiendo orm sequalize")
})

const user = new User();
user.name = "admin";
user.password = "admin";

user.save()