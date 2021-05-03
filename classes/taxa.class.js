module.exports = class Taxa {
  #regular
  #fidelidade

  constructor(regular, fidelidade) {
    this.#regular = regular
    this.#fidelidade = fidelidade
  }

  get regular() {
    return this.#regular
  }

  get fidelidade() {
    return this.#fidelidade
  }
}