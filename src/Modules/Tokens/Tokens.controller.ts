import { Router, Response, Request } from 'express';

import TokensService from './Tokens.service';

import type { Controller } from '../types';

export default class PairsController implements Controller {
  protected tokensService: TokensService;

  public path = '/tokens';
  public router = Router();

  constructor() {
    this.tokensService = new TokensService();
    this.initRoutes();
  }

  private async findAllTokens(_: Request, res: Response) {
    try {
      const tokens = await this.tokensService.findAllTokens();

      return res.json({ tokens });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Failed to fetch tokens');
    }
  }

  private async findTokenById({ params: { id } }: Request<{ id: string }>, res: Response) {
    try {
      const token = await this.tokensService.findTokenById(id);

      return res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).send('Failed to fetch token by id');
    }
  }

  initRoutes() {
    this.router.get(`${this.path}`, this.findAllTokens.bind(this));
    this.router.get(`${this.path}/findById/:id`, this.findTokenById.bind(this));
  }
}
