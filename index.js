const express = require('express')
const app = express()

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

app.get('/teste/:index', (req, res) => {
  const { index } = req.params

  return res.json(users[index])
})

app.listen(3000)