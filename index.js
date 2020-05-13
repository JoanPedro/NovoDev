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

const users = ['Joan', 'Carlos', 'Matheus']

app.get('/users', (req, res) => {
  return res.json(users)
})

app.get('/user/:index', (req, res) => {
  const { index } = req.params

  return res.json(users[index])
})

app.post('/users', (req, res) => {
  const { name } = req.body

  users.push(name)
  return res.json(users)
})

app.delete('/users/:index', (req, res) => {
  const { index } = req.params

  users.splice(index, 1)
  return res.json(users)
})

app.put('/users/:index', (req, res) => {
  const { index } = req.params
  const { name } = req.body

  users[index] = name
  return res.json(users)
})

app.listen(3000)