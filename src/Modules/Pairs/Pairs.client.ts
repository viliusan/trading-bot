import axios, { AxiosInstance, AxiosResponse } from 'axios';

import PancakeSwapClient from '../../PancakeSwap';

import { PairsData } from './types';

export default class PairsClient extends PancakeSwapClient {
  constructor() {
    super();
  }

  public async getAllPairs() {
    try {
      const { data }: AxiosResponse<PairsData[]> = await this.client.get('');

      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error while fetching pairs');
    }
  }
}
