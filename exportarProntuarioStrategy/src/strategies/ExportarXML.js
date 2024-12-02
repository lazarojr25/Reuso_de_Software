class ExportarXML {
    exportar(dados) {
      let xml = '<paciente>\n';
      for (const chave in dados) {
        xml += `  <${chave}>${dados[chave]}</${chave}>\n`;
      }
      xml += '</paciente>';
      return xml; 
    }
  }

  module.exports = ExportarXML;