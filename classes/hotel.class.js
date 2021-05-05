const Diaria = require('./diaria.class')

module.exports = class Hotel {
  #nome
  #classificacao
  #diaria

  constructor(nome, classificacao, diariaSemanaReg, diariaSemanaFid, diariaFdsReg, diariaFdsFid) {
    this.#nome = nome
    this.#classificacao = classificacao
    this.#diaria = new Diaria(diariaSemanaReg, diariaSemanaFid, diariaFdsReg, diariaFdsFid)
  }

  get nome() {
    return this.#nome
  }

  get classificacao() {
    return this.#classificacao
  }

  get diaria() {
    return this.#diaria
  }
}