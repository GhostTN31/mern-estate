import User from "../models/user_model.js";
import bcryptjs from "bcryptjs";

export const signup = async(req, res, next) => {
    //destructor used for assign values
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json("USer created successfully!!!")
    } catch (error) {
        next(error);
    }
}