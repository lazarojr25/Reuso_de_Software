const { cursos, Curso } = require('../models/cursoModel');

   exports.listarCursos = (req, res) => {
       res.json(cursos);
   };

   exports.obterCurso = (req, res) => {
       const curso = cursos.find(c => c.id === parseInt(req.params.id));
       if (!curso) return res.status(404).json({ error: 'Curso não encontrado' });
       res.json(curso);
   };

   exports.criarCurso = (req, res) => {
       const { titulo, descricao, carga_horaria } = req.body;
       const novoCurso = new Curso(titulo, descricao, carga_horaria);
       cursos.push(novoCurso);
       res.status(201).json(novoCurso);
   };

   exports.atualizarCurso = (req, res) => {
       const { id } = req.params;
       const { titulo, descricao, carga_horaria } = req.body;
       const curso = cursos.find(c => c.id === parseInt(id));
       if (!curso) return res.status(404).json({ error: 'Curso não encontrado' });
       curso.titulo = titulo;
       curso.descricao = descricao;
       curso.carga_horaria = carga_horaria;
       res.json(curso);
   };

   exports.excluirCurso = (req, res) => {
       const { id } = req.params;
       const index = cursos.findIndex(c => c.id === parseInt(id));
       if (index === -1) return res.status(404).json({ error: 'Curso não encontrado' });
       cursos.splice(index, 1);
       res.json({ message: 'Curso removido com sucesso' });
   };