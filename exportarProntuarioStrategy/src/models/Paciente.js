class Paciente {
    constructor(nome, idade, diagnostico, dataConsulta) {
      this.nome = nome;
      this.idade = idade;
      this.diagnostico = diagnostico;
      this.dataConsulta = dataConsulta;
    }
    
    toJSON() {
        return {
          nome: this.nome,
          idade: this.idade,
          diagnostico: this.diagnostico,
          dataConsulta: this.dataConsulta,
        };
      }
    }
    
    module.exports = Paciente;