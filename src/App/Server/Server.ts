import express from 'express';
import router from '../../Controllers/Router';
import cors from 'cors';

class Server {
  constructor() {
    
  }

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
    server.app.listen(3001, () => console.log('Running at 3001'));
  }
}

export default Server;
