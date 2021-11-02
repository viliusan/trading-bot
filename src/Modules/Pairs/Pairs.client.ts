import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { PairsData } from './types';

export default class PairsClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.pancakeswap.info/api/v2/pairs',
    });
  }

  public async getAllPairs() {
    try {
      const pairs: AxiosResponse<PairsData[]> = await this.client.get('');

      return pairs;
    } catch (error) {
      console.error(error);
      throw new Error('Error while fetching pairs');
    }
  }
}
