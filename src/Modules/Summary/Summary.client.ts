import axios, { AxiosInstance, AxiosResponse } from 'axios';

import PancakeSwapClient from '../../PancakeSwap';

import { SummaryData } from './types';

export default class SummaryClient extends PancakeSwapClient {
  constructor() {
    super();
  }

  public async getSummary() {
    try {
      const { data }: AxiosResponse<SummaryData[]> = await this.client.get('');

      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error while fetching pairs');
    }
  }
}
