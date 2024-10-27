import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const router = express.Router();

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

});

// rota para obtenção de motoristas
router.get('/motoristas', async (req, res) => {
  try {
      const motoristas = await prisma.motoristas.findMany();
      res.status(200).json(motoristas);
  } catch (err) {
      console.error("Erro ao buscar motoristas:", err);
      res.status(500).json({ message: 'Erro no servidor', error: err.message });
  }
});

// rota para atualização de motoristas
router.put('/motoristas/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const { nome, cnh, telefone, dataNascimento, status, criadoEm, atualizadoEm, usuarioId } = req.body;

      // Verificar se o motorista com o ID fornecido existe
      const motoristaExistente = await prisma.motoristas.findUnique({
        where: { id: id }
      });

      if (!motoristaExistente) {
        return res.status(404).json({ message: 'Motorista não encontrado' });
      }

      // Validação de status
      if (status) {
        const statusValido = ["ATIVO", "INATIVO"].includes(status.toUpperCase());
        if (!statusValido) {
          return res.status(400).json({ message: 'Status inválido. Use "ATIVO" ou "INATIVO".' });
        }
      }

      const veiculo = await prisma.motoristas.update({
          where: { id: id },
          data: {
            nome,
            cnh,
            telefone,
            dataNascimento,
            status,
            criadoEm,
            atualizadoEm,
            usuarioId
          },
      });

      res.status(200).json({ message: 'Motorista atualizado com sucesso', veiculo });
  } catch (err) {
      console.error("Erro ao atualizar motorista:", err);
      res.status(500).json({ message: 'Erro no servidor', error: err.message });
  }
});

// rota para exclusão de motoristas
router.delete('/motoristas/:id', async (req, res) => {
  try {
      const { id } = req.params;

      const motorista = await prisma.motoristas.delete({
          where: { id: id },
      });

      res.status(200).json({ message: 'Motorista deletado com sucesso', motorista });
  } catch (err) {
      console.error("Erro ao deletar motorista:", err);
      res.status(500).json({ message: 'Erro no servidor', error: err.message });
  }
});

export default router;