const Diaria = require('./diaria.class')

module.exports = class Hotel {
  #nome
  #classificacao
  #diariaSemana
  #diariaFds

  constructor(nome, classificacao, diariaSemana, diariaFds) {
    this.#nome = nome
    this.#classificacao = classificacao
    this.#diariaSemana = diariaSemana
    this.#diariaFds = diariaFds
  }

  get nome() {
    return this.#nome
  }

  get classificacao() {
    return this.#classificacao
  }

  get diariaSemana() {
    return this.#diariaSemana
  }

  get diariaFds() {
    return this.#diariaFds
  }

  valorDiaria(tipoCliente, diaSemana) {
    return (diaSemana === 0 || diaSemana === 6) ? this.#diariaFds[tipoCliente] : this.#diariaSemana[tipoCliente]
  }
}