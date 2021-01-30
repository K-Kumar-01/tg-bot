import { Telegraf } from 'telegraf';

import { logs, testCommand } from './utilities';
import { exitChat, photoMessage, stickerMessage, helpCommand, randomChuck } from './commands';

let BOT_TOKEN: string = '';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  BOT_TOKEN = process.env.BOT_TOKEN as string;
  console.log('hello');
}

const bot = new Telegraf(BOT_TOKEN);

bot.use(Telegraf.log());
bot.use(logs);

bot.command('test', testCommand);
bot.command('quit', exitChat);
bot.command('help', helpCommand);
bot.command('chucknorris', randomChuck);
bot.on('sticker', stickerMessage);
bot.on('photo', photoMessage);

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
