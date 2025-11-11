import mongoose from "mongoose";

const Schema = mongoose.Schema;
const PlacaSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  disponivel: {
    type: Boolean,
    required: true,
  },
  dono: {
    type: Schema.Types.ObjectId,
    ref: ["User", "empresa"],
    required: true,
  },
  comprador: {
    type: Schema.Types.ObjectId,
    ref: ["User", "empresa"],
    required: false,
  },
});

export default mongoose.model("Placa", PlacaSchema);
