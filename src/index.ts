import { Telegraf } from 'telegraf';

import { logs } from './utilities';

const bot = new Telegraf('bot');

bot.use(Telegraf.log());
bot.use(logs);

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
