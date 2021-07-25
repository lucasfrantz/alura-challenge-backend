class NaoEncontrado extends Error {
    constructor(titulo) {
        super(`${titulo} nao encontrado`)
        this.name = 'NaoEncontrado'
        this.idErro = 0
    }
}

module.exports = NaoEncontrado