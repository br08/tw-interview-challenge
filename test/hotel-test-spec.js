const { describe, it } = require('mocha');
const { expect } = require('chai');

const Catalogo = require('../classes/catalogo.js');
const Input = require('../classes/input.js');
const TabelaPrecos = require('../classes/tabela-precos.js');
const Hotel = require('../classes/hotel.js');

describe('Valida a entrada fornacida pelo usuário.', () => {
  it('Valida o tipo do cliente correto.', () => {
    const input = new Input('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)')
    const { tipoCliente } = input.format()
    expect(tipoCliente).to.equals('regular')
  })

  it('Valida o array de dias fornecido.', () => {
    const entrada = 'Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)'
    const {dias} = input.format(entrada)
    const diasEsperados = [new Date('16Mar2020(mon)'), new Date('17Mar2020(tues)'), new Date('18Mar2020(wed)')]
    expect(JSON.stringify(diasEsperados) === JSON.stringify(dias)).to.equals(true)
  })
})

describe('Valida o valor da diária de um hotel.', () => {
  const tabela = new TabelaPrecos(100, 90, 80, 70)
  it('Valida dia semana regular.', () => {
    expect(tabela.getValorDiaria('regular', 5)).to.equals(100)
  })

  it('Valida dia semana fidelidade.', () => {
    expect(tabela.getValorDiaria('fidelidade', 2)).to.equals(90)
  })

  it('Valida dia fds regular.', () => {
    expect(tabela.getValorDiaria('regular', 6)).to.equals(80)
  })

  it('Valida dia fds fidelidade.', () => {
    expect(tabela.getValorDiaria('fidelidade', 0)).to.equals(70)
  })
})

describe('Retorna o hotel mais barato.', () => {
  const hoteis = [
    new Hotel('Parque das flores', 3, 110, 80, 90, 80),
    new Hotel('Jardim Botânico', 4, 160, 110, 60, 50),
    new Hotel('Mar Atlântico', 5, 220, 100, 150, 40)
  ]
  const catalogo = new Catalogo(hoteis)

  it('Deve retornar Parque das flores.', ()=> {
    const input = new Input().format('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)')
    expect(catalogo.getHotelMaisBarato(input)).to.equals('Parque das flores')
  })

  it('Deve retornar Jardim Botânico.', ()=> {
    const input = new Input().format('Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)')
    expect(catalogo.getHotelMaisBarato(input)).to.equals('Jardim Botânico')
  })
})
