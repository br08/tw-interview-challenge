const Catalogo = require('./classes/catalogo.class')
const Hotel = require('./classes/hotel.class')
const Input = require('./classes/input.class')

const hoteis = [
  new Hotel('Parque das flores', 3, 110, 80, 90, 80),
  new Hotel('Jardim Botânico', 4, 160, 110, 60, 50),
  new Hotel('Mar Atlântico', 5, 220, 100, 150, 40)
]
const catalogo = new Catalogo(hoteis)

console.log(catalogo.getHotelMaisBarato(new Input().format('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)')))
console.log(catalogo.getHotelMaisBarato(new Input().format('Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)')))
console.log(catalogo.getHotelMaisBarato(new Input().format('Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)')))