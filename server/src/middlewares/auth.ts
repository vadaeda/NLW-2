import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { Request, Response, NextFunction } from 'express';

module.exports = async (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).send({ error: "No token provided" });
    }

    const [scheme, token] = authHeader.split(" ");

    try {
        const decoded = await promisify(jwt.verify)(token, "secret");

        console.log(request)
        console.log(decoded.id)
        request.userId = decoded.id;

        return next();
    } catch (err) {
        return response.status(401).send({ error: "Token invalid" });
    }
};