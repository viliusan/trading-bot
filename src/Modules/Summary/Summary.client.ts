import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { SummaryData } from './types';

export default class SummaryClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.pancakeswap.info/api/v2/summary',
    });
  }

  public async getSummary() {
    try {
      const summary: AxiosResponse<SummaryData[]> = await this.client.get('');

      return summary;
    } catch (error) {
      console.error(error);
      throw new Error('Error while fetching pairs');
    }
  }
}
