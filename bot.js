const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var owoMode = false;
bot.on('message', msg => {

  var user = msg.author.id;
  console.log(user);
  var args = msg.content;


  if (owoMode == true) {
    owo(user, msg);
  }

  if (owoMode == false) {
    if (msg.content === 'uwu' && user === '249382933054357504') {
      console.log('owo mode activated boi');
      owoMode = true;
    }
  }

  if (owoMode == true) {
    if (msg.content === 'uwu stop' && user === '249382933054357504') {
      owoMode = false;
    }
  }



});

bot.login('NTcyNjMzMzM5MDM5NTgwMTcy.XMjXSQ.OgNb7ZUrIpdT3fTU-hgykZWch5Y');

function owo(user, msg) {
  if (user !== '572633339039580172') {
    msg.delete();
  }
  if (user !== '572633339039580172') {
    var msgStr = msg.content;
    //msgStr = args.substr(1, (args.length-1));
    msgStr = msgStr.replace(/r/g,"w");
    msgStr = msgStr.replace(/l/g,"w");
    msgStr = msgStr.replace(/na/g,"nya");
    msgStr = msgStr.replace(/ne/g,"nye");
    msgStr = msgStr.replace(/ni/g,"nyi");
    msgStr = msgStr.replace(/no/g,"nyo");
    msgStr = msgStr.replace(/nu/g,"nyu");
    msgStr = msgStr.replace(/oo/g,"uwu");
    console.log(msgStr);
    msg.reply(msgStr);
  }
}
