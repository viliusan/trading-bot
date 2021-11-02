import { Router, Response, Request } from 'express';

import PairsService from './Pairs.service';

import type { Controller } from '../types';

export default class PairsController implements Controller {
  protected pairsService: PairsService;

  public path = '/pairs';
  public router = Router();

  constructor() {
    this.pairsService = new PairsService();
    this.initRoutes();
  }

  private async findAllPairs(_: Request, res: Response) {
    try {
      const pairs = await this.pairsService.findAllPairs();

      return res.json({ pairs });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Failed to fetch pairs');
    }
  }

  initRoutes() {
    this.router.get(`${this.path}`, this.findAllPairs.bind(this));
  }
}
