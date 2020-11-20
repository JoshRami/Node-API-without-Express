import * as http from 'http';
import * as dotenv from 'dotenv';
dotenv.config();

import connect from './config/db';
(async () => {
  try {
    await connect();
  } catch (error) {
    console.error(error);
  }
})();

const server = http.createServer(() => {});

const port = process.env.PORT || 2020;
server.listen(port, () => {
  console.info(`Blog api listening on port:${port} 🌎`);
});
