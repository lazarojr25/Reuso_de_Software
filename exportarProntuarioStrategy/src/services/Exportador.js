class Exportador {
    constructor(estrategia) {
      this.estrategia = estrategia;
    }
  
    exportarDados(dados) {
      return this.estrategia.exportar(dados);
    }
  }

  module.exports = Exportador;