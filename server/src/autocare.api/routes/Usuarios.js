import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET

//Cadastro
router.post('/cadastro', async (req, res) => {
    try {
        const user = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.senha, salt);

        const userDB = await prisma.usuarios.create({
            data: {
                name: user.name,
                email: user.email,
                senha: hashPassword,
            },
        });

        res.status(201).json(userDB);
    } catch (err) {
        console.error("Erro no cadastro:", err);
        res.status(500).json({ message: 'Erro no servidor', error: err.message });
    }
});

// Obter todos os usuários cadastrados
router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await prisma.usuarios.findMany();
        res.status(200).json(usuarios);
    } catch (err) {
        console.error("Erro ao buscar usuários:", err);
        res.status(500).json({ message: 'Erro no servidor', error: err.message });
    }
});

// Atualizar um usuário
router.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { email, name } = req.body; 

        const user = await prisma.usuarios.update({
            where: { id: id },
            data: {
                email: email,
                name: name
            },
        });

        res.status(200).json({ message: 'Usuário atualizado com sucesso', user });
    } catch (err) {
        console.error("Erro ao atualizar usuário:", err);
        res.status(500).json({ message: 'Erro no servidor', error: err.message });
    }
});


// Deletar um usuário
router.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const user = await prisma.usuarios.delete({
            where: { id: id },
        });

        res.status(200).json({ message: 'Usuário deletado com sucesso', user });
    } catch (err) {
        console.error("Erro ao deletar usuário:", err);
        res.status(500).json({ message: 'Erro no servidor', error: err.message });
    }
});


//Login
router.post('/login', async (req, res) => {
    try {
        const userInfo = req.body

        const user = await prisma.usuarios.findUnique({
            where: { email: userInfo.email }
        })

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }

        const validPassword = await bcrypt.compare(userInfo.senha, user.senha)

        if (!validPassword) {
            return res.status(400).json({ message: 'Senha incorreta' })
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' })

        res.status(200).json({ message: 'Login bem-sucedido', token, id: user.id, email: user.email });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Erro no servidor' })
    }
})

export default router
