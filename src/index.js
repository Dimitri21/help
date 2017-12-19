'use strict';

const Telegram = require('telegram-node-bot');
const tg = new Telegram.Telegram('469102006:AAHvLAW6B2jiuN9xxQ6p4BYG12nEbwYWSj8', {
    workers: 1
}); 

const AbsentController = require('./../controllers/absent')
    , StartController = require('./../controllers/start')
    , OtherwiseController = require('./../controllers/otherwise');

tg.router.when(new Telegram.TextCommand('/start', 'startCommand'), new StartController())
    .when(new Telegram.TextCommand('Absent', 'absentCommand'), new AbsentController())
    .otherwise(new OtherwiseController());
    