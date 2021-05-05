const chai = require('chai')
const expect = chai.expect
const Catalogo = require('../classes/catalogo.class')

describe('Valida a entrada fornecida pelo usuário.', () => {
  const catalogo = new Catalogo()
  const input = catalogo.formatInput('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)')
  const expectedDays = [new Date('17Mar2020(tues)'), new Date('16Mar2020(mon)'), new Date('18Mar2020(wed)')]

  it('Deve retornar o tipo correto do cliente.', () => {
    expect(input.tipoCliente).to.equals('regular')
  })

  it('Deve retornar o array de datas correto.', () => {
    expect(JSON.stringify(input.dias.sort()) === JSON.stringify(expectedDays.sort())).to.equals(true)
  })
})

describe('Retorna o hotel mais barato.', () => {
  const catalogo = new Catalogo()
  
  catalogo.add('Parque das flores', 3, 110, 80, 90, 80)
  catalogo.add('Jardim Botânico', 4, 160, 110, 60, 50)
  catalogo.add('Mar Atlântico', 5, 220, 100, 150, 40)
  
  describe('Entradas:', () => {
    it('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)', () => {
      const input = 'Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)'
      expect(catalogo.hotelMaisBarato(input)).to.equal('Parque das flores')
    })

    it('Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)', () => {
      const input = 'Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)'
      expect(catalogo.hotelMaisBarato(input)).to.equal('Jardim Botânico')
    })

    it('Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)', () => {
      const input = 'Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)'
      expect(catalogo.hotelMaisBarato(input)).to.equal('Mar Atlântico')
    })
  })
})