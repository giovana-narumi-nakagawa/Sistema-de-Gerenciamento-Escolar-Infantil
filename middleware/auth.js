import jwt from 'jsonwebtoken';

export default (request, response, next) => {
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return response.status(401).json({ error: 'Token não fornecido' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const userDecoded = jwt.verify(token, process.env.JWT_SECRET);
        request.user = userDecoded;
        next();
    } catch (err) {
        return response.status(401).json({ error: 'Token inválido ou expirado' });
    }
};
