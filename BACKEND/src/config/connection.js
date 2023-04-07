import pkg from 'mysql2/promise';

const { createPool } = pkg;



const pool = createPool({
    
    host: 'aws.connect.psdb.cloud',
    user: '01kn2fbvtzdrnj5hu9ln',
    password: 'pscale_pw_IKXxLMWbS55hPAOXtVpJnsQ2zmUvh0wC9CqLdDYvdYi',
    database: 'bonpland',
    ssl: {
      rejectUnauthorized: false,
    },
  });

export default pool;