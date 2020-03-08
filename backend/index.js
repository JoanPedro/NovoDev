const app = require('express')() // Centralizador da aplicação.
const db = require('./configurations/db')
    /*
        const a = require('express')
        const app = a()
    */
const consign = require('consign')
app.db = db // Consegue realizar as Query diretamente. 

consign()
    .then('./configurations/middlewares.js')
    .then('./api')
    .then('./configurations/routes.js')
    .into(app) // Injetar como parâmentro em App.

app.listen(3000, () => {
    console.log('Em execução: BACKEND!')
})