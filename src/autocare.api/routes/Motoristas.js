import express from 'express'
import { PrismaClient } from '@prisma/client'
import { log } from 'console'

const prisma = new PrismaClient()
const router = express.Router()

// ROTA DE CADASTRO DE MOTORISTA
router.post('/cadastro-motoristas', async (req, res) => {
  try {
    const motorista = req.body;

    if (motorista.status) {
      const statusValido = ["ATIVO", "INATIVO"].includes(motorista.status.toUpperCase());
      if (!statusValido) {
        return res.status(400).json({ message: 'Status inválido. Use "ATIVO" ou "INATIVO".' });
      }
    }

    const motoristaDB = await prisma.motoristas.create({
      data: {
        nome: motorista.nome,
        cnh: motorista.cnh,
        telefone: motorista.telefone,
        dataNascimento: motorista.dataNascimento,
        status: motorista.status ? motorista.status.toUpperCase() : "ATIVO"
      }
    });
    res.status(201).json(motoristaDB);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Erro ao cadastrar motorista' });
  }

})


export default router;