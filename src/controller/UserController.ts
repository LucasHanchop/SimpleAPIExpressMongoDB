import { Request, Response } from "express";
import User from "../database/schemas/User";

export class UserController {

    async find(req: Request, res: Response) {
        try {
            const users = await User.find()
            return res.json(users)
        }catch (err) {
            return res.status(500).send({
                err: "Something went wrong, try again",
                message: err
            })
        }

    }

    async create(req: Request, res: Response) {
        const { name, email, password } = req.body
        
        try {
            const userExists = await User.findOne({ email }) 

            if(userExists) {
                return res.status(400).json({
                    error: "Ooops",
                    message: "User already exists"
                })
            }

            const user = await User.create({
                name,
                email,
                password
            })

            return res.json(user)
        }catch (err) {
            return res.status(500).send({
                err: "Registration failed",
                message: err
            })
        }
    }
}


export default new UserController