class TabelaPrecos {
  #semana
  #fds

  constructor(semanaReg, semanaFid, fdsReg, fdsFid) {
    this.#semana = {
      regular: semanaReg,
      fidelidade: semanaFid
    }

    this.#fds = {
      regular: fdsReg,
      fidelidade: fdsFid
    }
  }

  getValorDiaria(tipoCliente, diaSemana) {
    return diaSemana === 0 || diaSemana === 6 ? this.#fds[tipoCliente] : this.#semana[tipoCliente]
  }
}

export default TabelaPrecos
