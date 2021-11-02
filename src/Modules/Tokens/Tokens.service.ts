import TokensClient from './Tokens.client';

export default class CrewService {
  constructor(private readonly tokensClient: TokensClient = new TokensClient()) {}

  public async findAllTokens() {
    const tokens = await this.tokensClient.getAllTokens();

    return tokens;
  }

  public async findTokenById(id: string) {
    const token = await this.tokensClient.getTokenById(id);

    return token;
  }
}
