import EmpresaModel from "../server/models/empresa.js";

const empresaServices = {
  async createEmpresa(nome, cnpj, placas) {
    try {
      const createEmpresa = new EmpresaModel({ nome, cnpj, placas });
      return await createEmpresa.save();
    } catch (err) {
      throw err;
    }
  },

  async deleteEmpresaById(empresaId) {
    return await EmpresaModel.findByIdAndDelete(empresaId);
  },

  async updateEmpresaById(empresaId) {
    return await EmpresaModel.findByIdAndUpdate(empresaId);
  },

  async getEmpresaById(empresaId) {
    return await EmpresaModel.findById(empresaId);
  }
};

export default empresaServices;