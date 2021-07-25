const express = require('express')

const app = express()
const routes = require('./routes')
const NaoEncontrado = require('./errors/NaoEncontrado')
routes(app)

//Tratamento de Erros
app.use((erro, requisicao, resposta, proximo) => {
    let status = 500
    if (erro instanceof NaoEncontrado) {
        status = 404
    }
    resposta.status(status)
    resposta.json({ mensagem: erro.message, id: erro.idErro })
})

app.listen(3000, () => {
    console.log('API rodando na porta 3000')
})

