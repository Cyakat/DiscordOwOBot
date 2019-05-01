const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

bot.on('message', msg => {

  var user = msg.author.id;
  console.log(user);
  var args = msg.content;
  if (user !== '572633339039580172') {
    msg.delete();
  }
  if (user !== '572633339039580172') {
    var msgStr = msg.content;
    //msgStr = args.substr(1, (args.length-1));
    msgStr = msgStr.replace(/r/g,"w");
    msgStr = msgStr.replace(/l/g,"w");
    msgStr = msgStr.replace(/na/g,"nya");
    msgStr = msgStr.replace(/oo/g,"uwu");
    console.log(msgStr);
    msg.reply(msgStr);
  }

});

bot.login('NTcyNjMzMzM5MDM5NTgwMTcy.XMjXSQ.OgNb7ZUrIpdT3fTU-hgykZWch5Y');
