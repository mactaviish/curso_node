import express from "express";
import db from "./cfg/dbConnect.js";
import livros from "./models/Livro.js"

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("Conexão com a base feita com sucesso!");
});

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node com Express e MongoDB');
});

app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros);
    });
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso!');
});

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.status(200).send(`Livro ${id} removido com sucesso!`);
});

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;