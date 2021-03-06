import SummaryClient from './Summary.client';

export default class SummaryService {
  constructor(private readonly summaryClient: SummaryClient = new SummaryClient()) {}

  public async findSummary() {
    const summary = await this.summaryClient.getSummary();

    return summary;
  }
}
