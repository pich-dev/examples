const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('TOKEN', {
  polling: true,
  baseApiUrl: 'https://pich-dev.herokuapp.com',
});

bot.onText(/\/start/, (message) => {
  bot.sendMessage(message.chat.id, "I'm a bot, please talk to me!");
});
