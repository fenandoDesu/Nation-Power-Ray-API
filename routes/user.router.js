import { Router } from "express";
import UserController from "../controller/user.controller"

const router = Router();

router.post('registration', UserController.register);
router.delete('/user/:id', UserController.deleteUser);
router.put('/user/:id', UserController.updateUser);   // update
router.get('/user/:id', UserController.getUserById);  // get user
router.post('/login', UserController.login);          // login

export default Router;