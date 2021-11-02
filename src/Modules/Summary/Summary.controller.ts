import { Router, Response, Request } from 'express';

import SummaryService from './Summary.service';

import type { Controller } from '../types';

export default class PairsController implements Controller {
  protected summaryService: SummaryService;

  public path = '/summary';
  public router = Router();

  constructor() {
    this.summaryService = new SummaryService();
    this.initRoutes();
  }

  private async findSummary(_: Request, res: Response) {
    try {
      const summary = await this.summaryService.findSummary();

      return res.json({ summary });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Failed to fetch summary');
    }
  }

  initRoutes() {
    this.router.get(`${this.path}`, this.findSummary.bind(this));
  }
}
