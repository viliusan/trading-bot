import PairsClient from './Pairs.client';

export default class PairsService {
  constructor(private readonly pairsClient: PairsClient = new PairsClient()) {}

  public async findAllPairs() {
    const pairs = await this.pairsClient.getAllPairs();

    return pairs;
  }
}
