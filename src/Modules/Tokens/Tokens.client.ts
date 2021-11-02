import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { TokenData } from './types';

export default class TokensClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.pancakeswap.info/api/v2/tokens',
    });
  }

  public async getAllTokens() {
    try {
      const tokens: AxiosResponse<TokenData[]> = await this.client.get('');

      return tokens;
    } catch (error) {
      console.error(error);
      throw new Error('Error while fetching tokens');
    }
  }

  public async getTokenById(id: string) {
    try {
      const token: AxiosResponse<TokenData> = await this.client.get(`${id}`);

      return token;
    } catch (error) {
      console.error(error);
      throw new Error('Error while fetching token by id');
    }
  }
}
