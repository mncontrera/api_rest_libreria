const express = require('express')
const bookController = require('../controllers/book-controllers')
const { isAuthenticated } = require('../middlewares/authentication')

const router = express.Router()

router.get("/obtener-por-id/:id", bookController.getBookById)
router.get("/obtener-todos", bookController.getAllBooks)
router.put("/editar-libro/:id", isAuthenticated, bookController.editBook)
router.delete("/eliminar/:id", isAuthenticated, bookController.deleteBook)

module.exports = router