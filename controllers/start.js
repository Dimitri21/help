'use strict';

const Telegram = require('telegram-node-bot');

class StartController extends Telegram.TelegramBaseController {
    startHandler($) {
        $.runMenu({
            message: 'Welcome!',
            resizeKeyboard: true,
            'Absent': () => {

            },
        })
    }

    get routes() {
        return {
            'startCommand': 'startHandler'
       };
    }
}

module.exports = StartController;