import userServices from "../services/user.services.js";

export const register = async (req, res, next) => {
  try {
    const { nome, email, cpf, vinculo, placas, password } = req.body;
    await userServices.createUser(nome, email, cpf, vinculo, placas, password);
    res.json({ status: true, success: "User registered successfully" });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await userServices.deleteUserById(userId);
    res.json({ status: true, success: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;
    const updatedUser = await userServices.updateUserById(userId, updateData);
    res.json({ status: true, data: updatedUser });
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await userServices.getUserById(userId);
    res.json({ status: true, data: user });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userServices.loginUser(email, password);
    if (!user) {
      return res.status(401).json({ status: false, error: "Invalid credentials" });
    }
    res.json({ status: true, success: "Login successful", data: user });
  } catch (err) {
    next(err);
  }
};
