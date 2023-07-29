var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
    port: 4000,
    user: '3UC9L1aR6JSKWDL.root',//use process.env.user
    password: 'eoU5TPER7pSzJzJw', //use process.env.password
    database: 'test', //use your database name using process.env.db
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true
    }
  });

  module.exports = connection