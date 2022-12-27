/* eslint-disable import/extensions */
import Autor from '../models/Autor.js';

class AutorController {
  static listarAutores = (req, res) => {
    Autor.find((err, authors) => {
      res.status(200).json(authors);
      return res;
    }, {});
  };

  static listarAutorId = (req, res) => {
    const { id } = req.params;

    Autor.findById(id, (err, livro) => {
      if (err) {
        res.status(400).send({ message: `Autor não encontrado: ${err.message}` });
      } else {
        res.status(200).send(livro);
      }
    });
  };

  static inserirAutor = (req, res) => {
    const autor = new Autor(req.body);

    autor.save((err) => {
      if (err) {
        res.status(500).send({ message: `Falha ao cadastrar o autor: ${err.message}` });
      } else {
        res.status(201).send(autor.toJSON());
      }
    });
  };

  static atualizarAutor = (req, res) => {
    const { id } = req.params;

    Autor.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(500).send({ message: `Falha ao atualizar o autor: ${err.message}` });
      } else {
        res.status(200).send({ message: 'Autor atualizado com sucesso!' });
      }
    });
  };

  static deletarAutor = (req, res) => {
    const { id } = req.params;

    Autor.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status().send({ message: `Falha ao deletar: ${err.message}` });
      } else {
        res.status(200).send({ message: 'Autor deletado com sucesso!' });
      }
    });
  };
}

export default AutorController;
