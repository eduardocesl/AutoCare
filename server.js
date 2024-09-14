import express from 'express'
import Usuarios from './src/autocare.api/routes/Usuarios.js'

const app = express()
app.use(express.json())

app.use('/', Usuarios)


app.listen(3000, () => console.log('Servidor On'))
