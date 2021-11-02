import axios, { AxiosInstance } from 'axios';

export default class PancakeSwapClient {
  public client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.pancakeswap.info/api/v2/pairs',
    });
  }
}
