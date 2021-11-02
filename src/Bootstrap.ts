require('dotenv').config();

import express from 'express';

import { logger } from './Middlewares';
import type { Controller } from './Modules/types';

export default class Bootstrap {
  private app: express.Application;

  private port = process.env.API_PORT;
  private controllers: Controller[];

  constructor(controllers: Controller[]) {
    this.app = express();
    this.controllers = controllers;

    this.setExpressConfig();
    this.mount();
  }

  private setExpressConfig(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(logger);
  }

  private mount(): void {
    this.app.get('/', (_, res: express.Response) => res.send('Hello World!'));
    this.controllers.forEach(({ router }: Controller) => this.app.use(router));
  }

  listen(): void {
    this.app.listen(this.port, () => console.log(`Trading Bot App Listening at http://localhost:${this.port}`));
  }
}
