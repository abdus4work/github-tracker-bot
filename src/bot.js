import TelegramBot from 'node-telegram-bot-api';
import {commands} from './commands/index.js'
import start from "./commands/start.js";
import track from "./commands/track.js";
import Token from "./config/env.js";


const bot = new TelegramBot(Token,{polling:true});
bot.on('message', (message) => {
  console.log(message);
})

bot.onText(/\/start/,(msg)=>{start(bot,msg);});
bot.onText(/\/track (.+)/,(msg,match)=>{track(bot,msg,match);});