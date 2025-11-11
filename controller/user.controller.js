import userServices from "../services/user.services";

exports.register = async(req, res, next)=> {
    try{
       const {nome, email, dataCadastro, cpf, vinculo, placas, password } = req.body;

       const sucessRes = await userServices.createUser(nome, email, dataCadastro, cpf, vinculo, placas, password);

    res.json({status:true, sucess: "user registered successfully"});
    }catch(err){
        throw err;
    }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await userServices.deleteUserById(userId);
    res.json({ status: true, success: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
};