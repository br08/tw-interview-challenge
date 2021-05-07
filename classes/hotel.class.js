const TabelaPrecos = require('./tabela-precos.class')

module.exports = class Hotel {
  #nome
  #classificacao
  #tabelaPrecos

  constructor(nome, classificacao, semanaReg, semanaFid, fdsReg, fdsFid) {
    this.#nome = nome
    this.#classificacao = classificacao
    this.#tabelaPrecos = new TabelaPrecos(semanaReg, semanaFid, fdsReg, fdsFid)
  }

  get nome() {
    return this.#nome
  }

  get classificacao() {
    return this.#classificacao
  }

  getDiaria(tipoCliente, diaSemana) {
    return this.#tabelaPrecos.getValorDiaria(tipoCliente, diaSemana)
  }
}