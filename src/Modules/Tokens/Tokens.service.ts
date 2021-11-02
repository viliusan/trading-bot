import TokensClient from './Tokens.client';

export default class CrewService {
  constructor(private readonly tokensClient: TokensClient = new TokensClient()) {}

  public async findAllTokens() {
    const { data } = await this.tokensClient.getAllTokens();

    return data;
  }

  public async findTokenById(id: string) {
    const { data } = await this.tokensClient.getTokenById(id);

    return data;
  }
}
