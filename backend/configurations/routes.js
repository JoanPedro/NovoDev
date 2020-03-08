//const users = require('./api/user') => .post (user.save)

module.exports = app => {
    app.route('/users')
        .post(app.api.user.save) // Quando o consign carregar os arquivos, ele tornará exposto.
}