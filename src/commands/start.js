const message= `Welcome to GitHub!
Commands
--------
1. /start
2. /track username -> fetch details of that username.`;

const start = async (bot,msg) => {
  bot.sendMessage(msg.chat.id,message);
  console.log("message Received");
}

export default start;