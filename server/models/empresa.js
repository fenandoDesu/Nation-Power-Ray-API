import mongoose from "mongoose";

const Schema = mongoose.Schema;
const EmpresaSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  cnpj:{
    type: String,
    required: true
  },
  placas: [
    {
      type: Schema.Types.ObjectId,
      ref: "Placa",
      required: false,
    },
  ],
});

export default mongoose.model("Empresa", EmpresaSchema);
