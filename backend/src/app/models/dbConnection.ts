import mysql from 'promise-mysql';

import dbConfig from './dbConfig';

const pool = mysql.createPool(dbConfig.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is Connected');
    });

export default pool;
