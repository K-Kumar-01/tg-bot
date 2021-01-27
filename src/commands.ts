import { Context } from 'telegraf';

export const exitChat = async (ctx: Context): Promise<void> => {
  ctx.reply('Till next time, Amigo');
  ctx.leaveChat();
};

export const helpCommand = async (ctx: Context): Promise<void> => {
  ctx.replyWithHTML(
    `<b>Welcome to the help section.</b>
The following commands are currrently available for the bot
<b>/test:</b> Check if bot is working or not.
<b>/quit:</b> Remove the bot from chat.
<b>/help:</b> Get help from bot.
Apart from these , on sending stickers and photos the bot will reply.
    `,
  );
};

export const photoMessage = async (ctx: Context): Promise<void> => {
  ctx.reply('You sent a photo. Lovely');
};

export const stickerMessage = async (ctx: Context): Promise<void> => {
  ctx.reply('I love stickers');
};
