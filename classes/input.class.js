module.exports = class Input {
  constructor() {}

  format(input) {
    const arr = input.split(': ')
    const tipoCliente = arr[0].toLowerCase()

    const dias = []
    arr[1].split(', ').forEach(dia => {
      dias.push(new Date(dia))
    })

    return {tipoCliente, dias}
  }
}