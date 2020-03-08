// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
        database: 'basebackend',
        user: 'postgres',
        password: '123123'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }

};