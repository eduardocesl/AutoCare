import express from 'express'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

/* ROTA DE CADASTRO */
router.post('/cadastro', async (req, res) => {
    try {
        const user = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.senha, salt);

        const userDB = await prisma.usuarios.create({
            data: {
                email: user.email,
                name: user.name,
                senha: hashPassword,
            },
        });

        res.status(201).json(userDB);
    } catch (err) {
        console.error("Erro no cadastro:", err);
        res.status(500).json({ message: 'Erro no servidor', error: err.message });
    }
});


/* ROTA DE LOGIN */
router.post('/login', async (req, res) => {
    try {
        const userInfo = req.body

        //Busca o user no DB
        const user = await prisma.usuarios.findUnique({
            where: { email: userInfo.email }
        })

        //Verifica se o user existe
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }

        //Compara a senha
        const validPassword = await bcrypt.compare(userInfo.senha, user.senha)

        if (!validPassword) {
            return res.status(400).json({ message: 'Senha incorreta' })
        }

        res.status(200).json({ message: 'Login bem-sucedido', user })
    } catch (err) {
        res.status(500).json({ message: 'Erro no servidor' })
    }
})

export default router
