import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ContratoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  vendedor: {
    type: Schema.Types.ObjectId,
    ref: ["User", "empresa"],
    required: true,
  },
  comprador: {
    type: Schema.Types.ObjectId,
    ref: ["User", "empresa"],
    required: false,
  },
  valorMensal: {
    type: Number,
    required: true
  },
  duracao: {
    type: Number,
    required: true
  },
  quantidadeWats: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Contrato", ContratoSchema);
