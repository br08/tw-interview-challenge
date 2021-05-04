const Catalogo = require('./classes/catalogo.class')

const catalogo = new Catalogo()
  
catalogo.add('Parque das flores', 3, 110, 80, 90, 80)
catalogo.add('Jardim Botânico', 4, 160, 110, 60, 50)
catalogo.add('Mar Atlântico', 5, 220, 100, 150, 40)

console.log(catalogo.hotelMaisBarato('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)'))
console.log(catalogo.hotelMaisBarato('Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)'))
console.log(catalogo.hotelMaisBarato('Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)'))