import PairsClient from './Pairs.client';

export default class PairsService {
  constructor(private readonly pairsClient: PairsClient = new PairsClient()) {}

  public async findAllPairs() {
    const { data } = await this.pairsClient.getAllPairs();

    return data;
  }
}
