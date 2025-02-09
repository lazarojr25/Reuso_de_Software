let cursos = [];
let cursoIdCounter = 1;

class Curso {
    constructor(titulo, descricao, carga_horaria) {
        this.id = cursoIdCounter++;
        this.titulo = titulo;
        this.descricao = descricao;
        this.carga_horaria = carga_horaria;
    }
}

module.exports = { cursos, Curso };
