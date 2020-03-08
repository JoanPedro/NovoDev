const bodyParser = require('body-parser')
const cors = require('cors')

// Utilizando o Consign para não ficar utilizando 'require'.


module.exports = app => { // Responsável por colocar todas ferramentas futuras dentro de 'app', o centralizador da aplicação.
    app.use(bodyParser.json())
    app.use(cors())
}