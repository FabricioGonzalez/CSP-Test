import express from 'express';
import router from '../../Controllers/Router';
import cors from 'cors';
require('dotenv').config();

class Server {
  constructor() {}

  private app = express();

  configServer(): void {
    this.app.use(express.urlencoded());
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(router);
  }

  startServer(): void {
    const server = new Server();
    server.configServer();
    const port = process.env.NODE_LOCAL_PORT || 3000;
    server.app.listen(port, () => console.log(`Running at ${port}`));
  }
}

export default Server;
