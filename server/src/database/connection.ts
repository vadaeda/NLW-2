import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host: 'motty.db.elephantsql.com',
        user: 'xszjocdm',
        password: 'PEzNmxgcQIoKRLuDmtizsQe-WsyNVtQL',
        database: 'xszjocdm'
        // host: '127.0.0.1',
        // user: 'postgres',
        // password: 'password',
        // database: 'proffy'
    },
    useNullAsDefault: true,
});

export default db;