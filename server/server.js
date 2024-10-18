import express from 'express'
import Usuarios from './src/autocare.api/routes/Usuarios.js'
import Motoristas from './src/autocare.api/routes/Motoristas.js'
import Veiculos from './src/autocare.api/routes/Veiculos.js'
import cors from 'cors'

import auth from './src/autocare.api/middlewares/auth.js'

const app = express()
app.use(cors())
app.use(express.json())


app.use('/', Usuarios)
app.use('/', Motoristas)
app.use('/', Veiculos)

app.listen(3000, () => console.log('Servidor On'))

export default app;