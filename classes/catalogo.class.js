const Hotel = require('./hotel.class')
const Diaria = require('./diaria.class')

module.exports = class Catalogo {
  #hoteis

  constructor() {
    this.#hoteis = []
  }

  get hoteis() {
    return this.#hoteis
  }
  
  add(nome, classificacao, diariaSemanaReg, diariaSemanaFid, diariaFdsReg, diariaFdsFid) {
    const hotel = new Hotel(nome, classificacao, diariaSemanaReg, diariaSemanaFid, diariaFdsReg, diariaFdsFid)
    this.#hoteis.push(hotel)
  }

  formatInput(input) {
    const arrInput = input.split(': ')
    const tipoCliente = arrInput[0].toLowerCase()

    const dias = []
    arrInput[1].split(', ').forEach(dia => {
      dias.push(new Date(dia))
    })

    return {tipoCliente: tipoCliente, dias: dias};
  }

  hotelMaisBarato(input) {
    const queryData = this.formatInput(input)

    const aux = []
    this.#hoteis.forEach(hotel => {
      let valorTotal = 0
      queryData.dias.forEach(dia => {
        valorTotal += hotel.diaria.valor(queryData.tipoCliente, dia.getDay())
      })
      aux.push({hotel: hotel.nome, classificacao: hotel.classificacao, valorTotal: valorTotal})
    })

    const ret = aux.sort((a, b) => { return a.valorTotal-b.valorTotal || b.classificacao-a.classificacao })
    return ret[0].hotel
  }
}