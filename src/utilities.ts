import { Context } from 'telegraf';

export const logs = async (ctx: Context, next): Promise<void> => {
  const start = new Date();
  await next();
  const sent = new Date();
  const ms = sent.getTime() - start.getTime();
  console.log('Response time: %sms', ms);
};

export const testCommand = async (ctx: Context): Promise<void> => {
  ctx.reply('Rand Bot at your service');
};
