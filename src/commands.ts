import { Context } from 'telegraf';

export const exitChat = async (ctx: Context): Promise<void> => {
  ctx.reply('Till next time, Amigo');
  ctx.leaveChat();
};

export const photoMessage = async (ctx: Context): Promise<void> => {
  ctx.reply('You sent a photo. Lovely');
};

export const stickerMessage = async (ctx: Context): Promise<void> => {
  ctx.reply('I love stickers');
};
