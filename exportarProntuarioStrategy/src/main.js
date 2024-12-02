const ExportarJSON = require('./strategies/ExportarJSON');
const ExportarCSV = require('./strategies/ExportarCSV');
const ExportarXML = require('./strategies/ExportarXML');
const Exportador = require('./services/Exportador');
const Paciente = require('./models/Paciente');

const paciente = new Paciente('João Silva', 30, 'Hipertensão', '2024-12-02');


const estrategia = new ExportarJSON(); 

const exportador = new Exportador(estrategia);
const resultado = exportador.exportarDados(paciente);

console.log('Dados exportados:\n', resultado);
