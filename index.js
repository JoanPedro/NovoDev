const express = require('express')
const app = express()

app.use(express.json()) // Habilitar o Body no formato JSON

/* Query Params = http://localhost:3000/teste?user=Joan
Adquirindo o Query. -> 
const user = req.query.user ou 
const { user } = req.query
*/

/* Route Params = http://localhost:3000/teste/1
Adquirindo o Params. -> a rota precisa ('/teste/:id')
const id = req.params.id ou
const { id } = req.params
*/

/* Request Body 
{
  "name": "Joan Pedro",
  "email": "joan@pedro.com.br"
}
*/

// Middleware Global. Passa por todas as requisições

app.use((req, res, next) => {
  console.log('Request')
  console.log(`Método: ${req.method}; Url: ${req.url}`)

  next()
})

// Middleware Local. Específico para rotas.

const existOrError = (req, res, next) => {

  if(!req.body.name) {
    return res.status(400).json({ error: "User name is required!"})
  }

  return next()
}

const verifyUserInArray = (req, res, next) => {
  if(!users[req.params.index]) {
    return res.status(400).json({ error: "User does not exists!"})
  }
  
  return next()
}

// --------------------------------- //

const users = ['Joan', 'Carlos', 'Matheus']

app.get('/users', (req, res) => {
  return res.json(users)
})

app.get('/user/:index', verifyUserInArray, (req, res) => {
  const { index } = req.params

  return res.json(users[index])
})

app.post('/users', existOrError, (req, res) => { // Com Middleware de Verificação
  const { name } = req.body

  users.push(name)
  return res.json(users)
})

app.delete('/users/:index', verifyUserInArray, (req, res) => {
  const { index } = req.params

  users.splice(index, 1)
  return res.json(users)
})

app.put('/users/:index', existOrError, 
  verifyUserInArray,(req, res) => { // Com Middleware de Verificação
    const { index } = req.params
    const { name } = req.body

    users[index] = name
    return res.json(users)
})

app.listen(3000)