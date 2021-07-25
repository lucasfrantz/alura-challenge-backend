const database = require('../models')
const NaoEncontrado = require('../errors/NaoEncontrado')
class VideoController {
    static async pegarTodosVideos(req, res, next) {
        try {
            const videos = await database.Videos.findAll()
            res.status(200).json(videos)
        } catch (error) {
            next(error)
        }
    }

    static async pegarVideoPorID(req, res, next) {
        const { id } = req.params
        try {
            const video = await database.Videos.findOne({ where: { id: id } })
            if (!video) {
                throw new NaoEncontrado('Video')
            }
            res.status(200).json(video)
        } catch (error) {
            next(error)
        }
    }

    static async criarVideo(req, res, next) {
        const novoVideo = req.body
        try {
            const video = await database.Videos.create(novoVideo)
            res.status(201).json(video)
        } catch (error) {
            next(error)
        }
    }

    static async atualizarVideo(req, res, next) {
        const { id } = req.params
        const novosDados = req.body
        try {
            await database.Videos.update(novosDados, { where: { id: id } })
            res.status(204).end()
        } catch (error) {
            next(error)
        }
    }

    static async deletarVideo(req, res, next) {
        const { id } = req.params
        try {
            await database.Videos.destroy({ where: { id: id } })
            res.status(204).end()
        } catch (error) {
            next(error)
        }
    }
}

module.exports = VideoController