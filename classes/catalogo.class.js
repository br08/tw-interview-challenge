module.exports = class Catalogo {
  #hoteis

  constructor(hoteis) {
    this.#hoteis = hoteis
  }

  get hoteis() {
    return this.#hoteis
  }

  getHotelMaisBarato(input) {
    const aux = []
    this.#hoteis.forEach(hotel => {
      let valorTotal = 0
      input.dias.forEach(dia => {
        valorTotal += hotel.getDiaria(input.tipoCliente, dia.getDay())
      })
      aux.push({
        nome: hotel.nome,
        classificacao: hotel.classificacao,
        valorTotal
      })
    })

    const maisBarato = aux.sort((a, b) => {
      return a.valorTotal - b.valorTotal || b.classificacao - a.classificacao
    })[0].nome
    return maisBarato
  }
}