import express from "express";
import { create, getAllUsers, getUserById ,update,deleteUser} from "../controller/userController.js";

const route = express.Router();

route.post("/user", create);             // Create user
route.get("/users", getAllUsers);        // Get all users
route.get("/user/:id", getUserById);     // Get user by ID
route.put("/update/user/:id",update);
route.delete("/delete/user/:id",deleteUser);

export default route;
