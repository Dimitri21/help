'use strict';

const Telegram = require('telegram-node-bot');

var {sequelize, DataAbsents} = require('./../models');
var geolocation = require('geolocation');

class AbsentController extends Telegram.TelegramBaseController {
    absentHandler($) {

            var n = DataAbsents.build({
                name: $._update._message._from._firstName
             })
             n.save();
             console.log($._update._message._from._firstName,'absent')
             $.runInlineMenu({
                method: 'sendMessage',
                params: ['Absent'],
                hide_keyboard: true,
                menu: [
                    {
                     text: 'Click here to proceed',
                     url: 'http://127.0.0.1/absent/proceed',
                    }
                 ]
             })
    }
    get routes() {
        return {
            'absentCommand': 'absentHandler'
       };
    }
}

module.exports = AbsentController;