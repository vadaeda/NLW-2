import path from 'path';

module.exports = {
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
    migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
}