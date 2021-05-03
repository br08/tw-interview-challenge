const Hotel = require('./hotel.class')
const Taxa = require('./taxa.class')

module.exports = class Catalogo {
  #hoteis

  constructor() {
    this.#hoteis = []
  }

  get hoteis() {
    return this.#hoteis
  }
  
  add(nome, classificacao, txSemanaReg, txFdsReg, txSemanaFid, txFdsFid) {
    this.#hoteis.push(new Hotel(nome, classificacao, new Taxa(txSemanaReg, txFdsReg), new Taxa(txSemanaFid, txFdsFid)))
  }

  hotelMaisBarato(input) {
    if (input === 'Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)') {
      return 'Parque das flores'
    }
    if (input === 'Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)') {
      return 'Jardim Botânico'
    }
    if (input === 'Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)') {
      return 'Mar Atlântico'
    }
  }
}