import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import db from './../database/connection';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';

interface iUser {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    whatsapp: string;
    bio: string;
}

export default class UsersController {

    async auth(request: Request, response: Response) {
        try {
            const { email, password } = request.body

            if (!email) { return response.status(400).json("E-mail field cannot be empty!") }
            if (!password) { return response.status(400).json("Password field cannot be empty!") }

            const user:iUser = await db('users')
                .select('users.*')
                .where('users.email', email)
                .first();

            if(!user){return response.status(400).json({ error: "Invalid email" })}
            if(!await bcrypt.compare(password, user.password)){return response.status(400).json({ error: "Invalid password" })}

            const token = jwt.sign({id: user.id}, "secret", {expiresIn: 86400})
            return response.json({
                user,
                token
            })
        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const user = await db('users')
            .select('users.*')
            .where('users.id', id)

        return response.json(user)
    }

    async index(request: Request, response: Response) {
        const users = await db('users')
            .select('users.*')
        return response.json(users)
    }

    async create(request: Request, response: Response) {
        const {
            name,
            email,
            password
        } = request.body;


        if (!name) { return response.status(400).json({ error:"Name field cannot be empty!" }) }
        if (!email) { return response.status(400).json({ error:"E-mail field cannot be empty!" }) }
        if (!password) { return response.status(400).json({ error:"Password field cannot be empty!" }) }

        await db('users').select().where('email', email)
            .then(async rows => {
                if (rows.length === 0) {
                    try {
                        const passworhhash = await bcrypt.hash(password, 8)
                        const user = await db('users').insert({
                            name,
                            email,
                            password: passworhhash
                        }).returning('id')
                        return response.status(201).send(user)
                    } catch (error) { return response.status(400).json(error) }
                } else {
                    return response.status(400).json({ error: "E-mail already exists" })
                }
            }).catch(function (error) { return response.status(400).json(error) })
    }

}
