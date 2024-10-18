import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).json({ message: "Acesso negado. Token inválido." });
    }

    next();
}

export default auth;

/* Para obter o e-mail do usuário, por exemplo, busquem pelo req.user
   EX: const email = req.user.email; */