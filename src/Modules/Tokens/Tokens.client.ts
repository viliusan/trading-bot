import axios, { AxiosInstance, AxiosResponse } from 'axios';

import PancakeSwapClient from '../../PancakeSwap';

import { TokenData } from './types';

export default class TokensClient extends PancakeSwapClient {
  constructor() {
    super('tokens');
  }

  public async getAllTokens() {
    try {
      const { data }: AxiosResponse<TokenData[]> = await this.client.get('');

      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error while fetching tokens');
    }
  }

  public async getTokenById(id: string) {
    try {
      const { data }: AxiosResponse<TokenData> = await this.client.get(id);

      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error while fetching token by id');
    }
  }
}
