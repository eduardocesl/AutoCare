import express from 'express'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

// ROTA DE CADASTRO DE MOTORISTA
router.post('/motoristas', async (req, res) => {
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
    console.log(err)
    res.status(500).json({ message: 'Erro ao cadastrar motorista' });
  }
})

// ROTA DE BUSCA DE MOTORISTAS
router.get("/motoristas", async (req, res) => {
  try {
    const motoristas = await prisma.motoristas.findMany();
    res.status(200).json(motoristas)
  } catch (err) {
    console.error("Erro ao buscar motoristas:", err)
    res.status(500).json({ message: 'Erro ao buscar motoristas', error: err.message });
  }
});

// ROTA DE ALTERAÇÃO DE MOTORISTA
router.put('/motoristas/:id', async (req, res) => {
  try {
    const motorista = req.body;
    const id = req.params.id;
    console.log(motorista);

    if (motorista.status) {
      const statusValido = ["ATIVO", "INATIVO"].includes(motorista.status.toUpperCase());
      if (!statusValido) {
        return res.status(400).json({ message: 'Status inválido. Use "ATIVO" ou "INATIVO".' });
      }
    }

    const motoristaDB = await prisma.motoristas.update({
      where: {
        id: id
      },
      data: {
        nome: motorista.nome,
        cnh: motorista.cnh,
        telefone: motorista.telefone,
        dataNascimento: motorista.dataNascimento,
        status: motorista.status ? motorista.status.toUpperCase() : "ATIVO"
      }
    });
    res.status(200).json(motoristaDB);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Erro ao alterar motorista' });
  }
});


export default router;