const { Router } = require('express')
const VideoController = require('../controllers/VideoController')

const router = Router()

router
    .get('/videos', VideoController.pegarTodosVideos)
    .get('/videos/:id', VideoController.pegarVideoPorID)
    .post('/videos', VideoController.criarVideo)
    .patch('/videos/:id', VideoController.atualizarVideo)
    .delete('/videos/:id', VideoController.deletarVideo)

module.exports = router