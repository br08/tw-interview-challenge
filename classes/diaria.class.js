module.exports = class Diaria {
  #semana
  #fds

  constructor(semanaReg, semanaFid, fdsReg, fdsFid) {
    this.#semana = {
      regular: semanaReg,
      fidelidade: semanaFid
    }
    this.#fds = {
      regular: fdsReg,
      fidelidade: fdsFid
    }
  }

  get semana() {
    return this.#semana
  }

  get fds() {
    return this.#fds
  }

  valor(tipoCliente, diaSemana) {
    return (diaSemana === 0 || diaSemana === 6) ? this.#fds[tipoCliente] : this.#semana[tipoCliente]
  }
}