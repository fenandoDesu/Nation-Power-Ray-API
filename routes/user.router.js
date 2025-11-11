import { Router } from "express";
import UserController from "../controller/user.controller"

Router.post('registration', UserController.register);
Router.delete('/user/:id', UserController.deleteUser);

export default Router;