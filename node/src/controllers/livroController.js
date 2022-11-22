import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros);
            });
    }

    static listarLivrosColecao = (req, res) => {
        const colecao = req.query.colecao;

        livros.find({'colecao': colecao}, {}, (err, livros) => {
            if (err) {
                res.status(400).send({message: `Livros não encontrados: ${err.message}`});
            } else {
                res.status(200).send(livros);
            }
        });
    }

    static listarLivroId = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livro) => {
            if (err) {
                res.status(400).send({message: `Livro não encontrado: ${err.message}`});
            } else {
                res.status(200).send(livro);
            }
        })
    }

    static inserirLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).send({message: `Falha ao cadastrar o livro: ${err.message}`});
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: `Falha ao atualizar o livro: ${err.message}`})
            } else {
                res.status(200).send({message: 'Livro tualizado com sucesso!'});
            }
        });
    }

    static deletarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `Falha ao deletar: ${err.message}`})
            } else {
                res.status(200).send({message: 'Deletado com sucesso!'});
            }
        });
    }
}

export default LivroController;