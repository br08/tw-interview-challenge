const Taxa = require('./taxa.class')

module.exports = class Hotel {
  #nome
  #classificacao
  #taxaSemana
  #taxaFds

  constructor(nome, classificacao, taxaSemana, taxaFds) {
    this.#nome = nome
    this.#classificacao = classificacao
    this.#taxaSemana = taxaSemana
    this.#taxaFds = taxaFds
  }

  get nome() {
    return this.#nome
  }

  get classificacao() {
    return this.#classificacao
  }

  get taxaSemana() {
    return this.#taxaSemana
  }

  get taxaFds() {
    return this.#taxaFds
  }

  valorDiaria(tipoCliente, diaSemana) {
    return (diaSemana === 0 || diaSemana === 6) ? this.#taxaFds[tipoCliente] : this.#taxaSemana[tipoCliente]
  }
}