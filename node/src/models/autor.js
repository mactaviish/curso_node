import mongoose from 'mongoose';

const autorSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
);

const Autor = mongoose.model('autores', autorSchema);

export default Autor;
