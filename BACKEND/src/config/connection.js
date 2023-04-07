import pkg from 'mysql2/promise';

const { createPool } = pkg;



const pool = createPool({
    
    host: 'aws.connect.psdb.cloud',
    user: 'n5ldnyrq930flldj2hob',
    password: 'pscale_pw_3xsxSxU9pAtcoK129y2faCVVYCJpOZct10asYqYCGc2',
    database: 'bonpland',
    ssl: {
      rejectUnauthorized: false,
    },
  });

export default pool;