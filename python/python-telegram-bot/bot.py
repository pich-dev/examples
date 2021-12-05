from telegram.ext import CommandHandler
from telegram.ext import CallbackContext
from telegram import Update
from telegram.ext import Updater

updater = Updater(token='TOKEN', use_context=True,
                  base_url="https://pich-dev.herokuapp.com/bot")

dispatcher = updater.dispatcher


def start(update: Update, context: CallbackContext):
    context.bot.send_message(
        chat_id=update.effective_chat.id, text="I'm a bot, please talk to me!")


start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)

updater.start_polling()
