import UserModel from "../server/models/user.js";
const userServices = {
    async createUser(nome, email, cpf, vinculo, password){
        try{
            const dataCadastro = new Date()
            const createUser = new UserModel({nome, email, dataCadastro, cpf, vinculo, placas, password })
            return await createUser.save();
        }catch(err){
            throw err
        }
    },
    async deleteUserById(userId) {
    return await User.findByIdAndDelete(userId);
  }
}
export default userServices;