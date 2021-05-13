/* eslint-disable no-console */
/* eslint-disable max-len */
import Catalogo from './classes/catalogo.class.mjs'
import Hotel from './classes/hotel.class.mjs'
import TabelaPrecos from './classes/tabela-precos.class.mjs'
import Input from './classes/input.class.mjs'

const hoteis = [
  new Hotel('Parque das flores', 3, new TabelaPrecos(110, 80, 90, 80)),
  new Hotel('Jardim Botânico', 4, new TabelaPrecos(160, 110, 60, 50)),
  new Hotel('Mar Atlântico', 5, new TabelaPrecos(220, 100, 150, 40))
]
const catalogo = new Catalogo(hoteis)

console.log(catalogo.getHotelMaisBarato(new Input('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)').format()))
console.log(catalogo.getHotelMaisBarato(new Input('Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)').format()))
console.log(catalogo.getHotelMaisBarato(new Input('Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)').format()))
