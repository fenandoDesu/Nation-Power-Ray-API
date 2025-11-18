import UserModel from "../server/models/user.js";

const userServices = {
  async createUser(nome, email, cpf, vinculo, placas, password) {
    try {
      const dataCadastro = new Date();
      const createUser = new UserModel({ nome, email, dataCadastro, cpf, vinculo, placas, password });
      return await createUser.save();
    } catch (err) {
      throw err;
    }
  },

  async deleteUserById(userId) {
    return await UserModel.findByIdAndDelete(userId);
  },

  async updateUserById(userId, updateData) {
    return await UserModel.findByIdAndUpdate(userId, updateData, { new: true });
  },

  async getUserById(userId) {
    return await UserModel.findById(userId);
  },

  async loginUser(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) return null;
    // ⚠️ For production, hash + compare passwords with bcrypt
    if (user.password !== password) return null;
    return user;
  }
};

export default userServices;
