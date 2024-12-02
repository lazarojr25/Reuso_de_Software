class ExportarCSV {
    exportar(dados) {
      const chaves = Object.keys(dados).join(',');
      const valores = Object.values(dados).join(',');
      return `${chaves}\n${valores}`; // Formata como CSV
    }
  }

  module.exports = ExportarCSV;