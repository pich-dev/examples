const { Bot } = require('grammy');

const bot = new Bot('TOKEN', {
  client: { apiRoot: 'https://pich-dev.herokuapp.com' },
});

bot.command('start', (ctx) => ctx.reply("I'm a bot, please talk to me!"));

bot.start();
