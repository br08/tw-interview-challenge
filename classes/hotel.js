class Hotel {
  #nome;
  #classificacao;
  #tabelaPrecos;

  constructor(nome, classificacao, tabelaPrecos) {
    this.#nome = nome;
    this.#classificacao = classificacao;
    this.#tabelaPrecos = tabelaPrecos;
  }

  get nome() {
    return this.#nome;
  }

  get classificacao() {
    return this.#classificacao;
  }

  getDiaria(tipoCliente, diaSemana) {
    return this.#tabelaPrecos.getValorDiaria(tipoCliente, diaSemana);
  }
}

module.exports = Hotel;
