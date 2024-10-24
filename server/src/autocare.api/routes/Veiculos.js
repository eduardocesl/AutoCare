import express from 'express';
import { PrismaClient } from '@prisma/client';
import auth from '../middlewares/auth.js';


const prisma = new PrismaClient();
const router = express.Router();

// Cadastrar veículo
router.post('/veiculos', auth, async (req, res) => {
    try {
        const { placa, marca, modelo, anoFabricacao, anoModelo, cor } = req.body;

        const usuarioId = req.user.id;

        const novoVeiculo = await prisma.veiculos.create({
            data: {
                placa,
                marca,
                modelo,
                anoFabricacao,
                anoModelo,
                cor,
                usuarioId,
            },
        });

        res.status(201).json(novoVeiculo);
    } catch (err) {
        console.error("Erro no cadastro de veículo:", err);
        res.status(500).json({ message: 'Erro no servidor', error: err.message });
    }
});

// Obter todos os veículos cadastrados
router.get('/veiculos', async (req, res) => {
    try {
        const veiculos = await prisma.veiculos.findMany();
        res.status(200).json(veiculos);
    } catch (err) {
        console.error("Erro ao buscar veículos:", err);
        res.status(500).json({ message: 'Erro no servidor', error: err.message });
    }
});

// Atualizar veículo
router.put('/veiculos/:id', auth, async (req, res) => {
    try {
        const { id } = req.params;
        const { placa, marca, anoFabricacao, anoModelo, cor } = req.body;

        const veiculo = await prisma.veiculos.update({
            where: { id: id },
            data: {
                placa,
                marca,
                anoFabricacao,
                anoModelo,
                cor,
            },
        });

        res.status(200).json({ message: 'Veículo atualizado com sucesso', veiculo });
    } catch (err) {
        console.error("Erro ao atualizar veículo:", err);
        res.status(500).json({ message: 'Erro no servidor', error: err.message });
    }
});

// Deletar um veiculo
router.delete('/veiculos/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const user = await prisma.veiculos.delete({
            where: { id: id },
        });

        res.status(200).json({ message: 'Veículo deletado com sucesso', user });
    } catch (err) {
        console.error("Erro ao deletar veículo:", err);
        res.status(500).json({ message: 'Erro no servidor', error: err.message });
    }
});


export default router;
