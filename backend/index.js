const app = require('express')() // Centralizador da aplicação.

/*
    const a = require('express')
    const app = a()
*/
const consign = require('consign')

consign()
    .then('./configurations/middlewares.js')
    .into(app) // Injetar como parâmentro em App.

app.listen(3000, () => {
    console.log('Em execução: BACKEND!')
})