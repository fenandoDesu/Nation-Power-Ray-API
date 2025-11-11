import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UsuarioSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dataCadastro: {
    type: Date,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  vinculo: {
    type: Schema.Types.ObjectId,
    ref: "Empresa",
    required: true,
  },
  placas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Placa",
      required: false,
    },
  ],
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Usuario", UsuarioSchema);
