import express from 'express';
import LivroController from '../controllers/livroController.js';

const router = express.Router();

router
  .get('/livros', LivroController.listarLivros)
  .get('/livros/busca', LivroController.listarLivrosColecao)
  .get('/livros/:id', LivroController.listarLivroId)
  .post('/livros', LivroController.inserirLivro)
  .put('/livros/:id', LivroController.atualizarLivro)
  .delete('/livros/:id', LivroController.deletarLivro);

export default router;
