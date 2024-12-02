class ExportarJSON {
  exportar(dados) {
    return JSON.stringify(dados, null, 2); // Formata como JSON
  }
}
module.exports = ExportarJSON;