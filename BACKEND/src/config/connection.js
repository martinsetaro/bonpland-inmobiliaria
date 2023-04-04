import pkg from 'mysql2/promise';

const { createPool } = pkg;



const pool = createPool({
    
    host: 'aws.connect.psdb.cloud',
    user: 'mm03xhh5f10u2xgkbnhs',
    password: 'pscale_pw_tXtC879AvzvsfMFae1b4kHVGnLRmyGzQsoSrEHR4wR3',
    database: 'bonpland',
    ssl: {
      rejectUnauthorized: false,
    },
  });

export default pool;