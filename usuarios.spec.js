import request from 'supertest';
import express from 'express';
import router from './src/autocare.api/routes/Usuarios.js';
import jest from 'jest-mock';
import prisma from './prisma/prisma.js';

const app = express();
app.use(express.json());
app.use('/api', router);


describe('GET /usuarios', () => {
    it('Deve retornar uma lista de usuarios com o status 200', async () => {
        const response = await request(app).get('/api/usuarios');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });


});