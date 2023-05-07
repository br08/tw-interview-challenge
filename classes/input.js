class Input {
  #text;

  constructor(text) {
    this.#text = text;
  }

  get text() {
    return this.#text;
  }

  format() {
    const arr = this.#text.split(': ')
    const tipoCliente = arr[0].toLowerCase();

    const dias = [];
    arr[1].split(', ').forEach((dia) => {
      dias.push(new Date(dia));
    });

    return { tipoCliente, dias };
  }
}

module.exports = Input;
