import Bootstrap from './Bootstrap';

import TokensController from './Modules/Tokens/Tokens.controller';
import PairsController from './Modules/Pairs/Pairs.controller';
import SummaryController from './Modules/Summary/Summary.controller';

console.log('starting node app...');

const app = new Bootstrap([new PairsController(), new TokensController(), new SummaryController()]);
app.listen();
