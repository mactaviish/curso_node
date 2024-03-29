import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true },
    colecao: { type: String },
    editora: { type: String, required: true },
    paginas: { type: Number },
  },
);

const Livro = mongoose.model('livros', livroSchema);

export default Livro;
