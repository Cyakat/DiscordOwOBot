const Discord = require('discord.js');
const bot = new Discord.Client();
var channelIDs = [];
var whitelist = ['249382933054357504']
var indexChan = 0;
var indexWhite = 1;
var prefix = '!';
//'572664220324200448'


bot.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
bot.on('message', msg => {

  var channel = msg.channel;
  var i = 0;
  var user = msg.author.id;
  var username = msg.author.username;
  var channelID = msg.channel.id;

  console.log(channelID)

  var args = msg.content;

  if (args[0] === prefix) {
    cmd = args.substr(1, args.length-1);
    switch (cmd) {
      case 'add channel':
        addChannel(user, channelID, msg)
        break;
      case 'remove channel':
        removeChannel(user, channelID, msg, channelIDs)
        break;
    }
    args2 = cmd.split(' ');

  }
  for (i; i<channelIDs.length; i++) {
    if (channelID === channelIDs[i]) {
      owo(user, msg, channelID, channelIDs[i]);
    }
}
/*
  if (owoMode == true) {
    if (user === '249382933054357504' || user === '250408653830619137' || user === '386434363241529354') {
      if (msg.content === 'uwu stop') {
        console.log('owo mode deactivated');
        channel.send('owo mode deactivated');
        owoMode = false;
      }
    }
  }
*/
//  if (owoMode == true) {

//  }

//just sends the message sent in the console
  if (user !== '572633339039580172' || user !== '155149108183695360'){
    console.log(username + ' sent: ');
    console.log(msg.content);
  }
});


bot.login('NTcyNjMzMzM5MDM5NTgwMTcy.XMjXSQ.OgNb7ZUrIpdT3fTU-hgykZWch5Y');




// gay boi garbage edits speech and sends it out
function owo(user, msg, channelID, chanID) {
  var channels;
//  channels[0] = channelID;
  if (chanID === channelID){
    if (user !== '572633339039580172') {
      msg.delete();
    }
    if (user !== '572633339039580172') {
      var msgStr = msg.content;
      //this is the part where the speech is translated
      msgStr = msgStr.replace(/r/g,"w");
      msgStr = msgStr.replace(/l/g,"w");
      msgStr = msgStr.replace(/na/g,"nya");
      msgStr = msgStr.replace(/ne/g,"nye");
      msgStr = msgStr.replace(/ni/g,"nyi");
      msgStr = msgStr.replace(/no/g,"nyo");
      msgStr = msgStr.replace(/nu/g,"nyu");
      msgStr = msgStr.replace(/oo/g,"uwu");
      msgStr = msgStr.replace(/R/g,"W");
      msgStr = msgStr.replace(/L/g,"W");
      msgStr = msgStr.replace(/NA/g,"NYA");
      msgStr = msgStr.replace(/NE/g,"NYE");
      msgStr = msgStr.replace(/NI/g,"NYI");
      msgStr = msgStr.replace(/NO/g,"NYO");
      msgStr = msgStr.replace(/NU/g,"NYU");
      msgStr = msgStr.replace(/OO/g,"UWU");
      msg.reply(msgStr.toLowerCase());
    }
  }
}
//just returns everything in a list
/*function list(listName) {
  for (var i = 0; i<listName.length; i++) {
    return listName[i];
  }
} */

//function for adding channels to the whitelist
function addChannel(userID, chanID, msg) {
  if (userID === '249382933054357504') {
    channelIDs[indexChan] = chanID;
    indexChan = indexChan + 1;
    msg.channel.send('IT HAS BEGUN')
    console.log(`added channel ${chanID}`);
  }else {
    msg.channel.send("Someone's an idiot!");
  }
}

function removeChannel(userID, chanID, msg, channelIDs) {
  if (userID ==='249382933054357504') {
    for (i = 0; i < channelIDs.length; i++) {
      if (chanID === channelIDs[i]) {
        channelIDs[i] = '';
        msg.channel.send("Y'ALL HAVE BEEN REMOVED FROM SLAVERY!");
        console.log(`removed channel ${chanID}`);
      }
    }
  }else {
    msg.channel.send('YOU MAY NOT STOP THE TERROR!');
  }
}

//function for adding users to whitelist
function addUser(userID, msg) {
  if (userID === whitelist[indexWhite]) {
    whitelist[indexWhite] = userID;
    indexWhite = indexWhite + 1;
    msg.channel.send('Added a user OwO!');
  }
}

function removeUser(userID, msg) {
  if (userID === whitelist[indexWhite])
  for(i = 0; i < whitlist.length; i++) {
    if (userID === whitelist[indexWhite]) {
      whitelist[i] = '';
      msg.channel.send('oof i guess a boi is no longer cool');
      console.log(`removed a person ${userID}`);
    }
  } else {
    msg.channel.send('I guess louie sucks at coding...');
  }
}
