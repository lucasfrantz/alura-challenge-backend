const videos = require('./videosRoute')
const express = require('express')
module.exports = app => {
    app.use(express.json(), videos)
}