const Commando = require('discord.js-commando');
var auth = require('../auth.json');
const bot = new Commando.Client({
   token: auth.token,
   autorun: true
 });
//const embed = new Discord.RichEmbed();
const fs = require('fs');
var aryChannelIDs = [];
var aryWhitelist = [];
//'249382933054357504', '250408653830619137','1337'
var indexChan;
var indexWhite;
var prefix = '!';
var masterID = '249382933054357504';
var louieID = '250408653830619137';

bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('owo', 'Owo');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.login(auth.token);



bot.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});
readWhitelist();
readChannelIDs();
indexChan = aryChannelIDs.length;
indexWhite = aryWhitelist.length;
bot.on('message', msg => {

  var channel = msg.channel;
  var i = 0;
  var user = msg.author.id;
  var username = msg.author.username;
  var channelID = msg.channel.id;
  var userID;
  var args = msg.content;
  var channelRemoved = false;

  console.log(aryWhitelist);
  readWhitelist();
  console.log(aryWhitelist)

  if (args[0] === prefix) {
    cmd = args.substr(1, args.length-1);
    switch (cmd) {
      case 'owo':
        addChannel(user, channelID, msg, aryWhitelist, aryChannelIDs)
        break;
      case 'uwu':
        removeChannel(user, channelID, msg, aryChannelIDs, aryWhitelist)
        break;
      case 'link':
        sendLink(msg)
        break;
    }
    args2 = cmd.split(' ');
    if (args2[0] === 'add' && args2[1] === 'user') {
      cmd = cmd.replace(/<@!/g, '');
      cmd = cmd.replace(/<@/g, '');
      cmd = cmd.replace(/>/g, '');
      args2 = cmd.split(' ');
      userID = args2[2];
      console.log(userID);
      addUser(user, userID, msg, aryWhitelist);
    }
    if (args2[0] === 'remove' && args2[1] === 'user') {
      cmd = cmd.replace(/<@!/g, '');
      cmd = cmd.replace(/<@/g, '');
      cmd = cmd.replace(/>/g, '');
      args2 = cmd.split(' ');
      userID = args2[2];
      removeUser(user, userID, msg, aryWhitelist);
    }
    if (args2[0] === 'stream')
    {
      url = args2[1];
      fetchVideo(url);
    }
  }
  for (i; i<aryChannelIDs.length; i++) {
    if (channelID === aryChannelIDs[i]) {
      owo(user, msg, channelID, aryChannelIDs[i]);
    }
}

//just sends the message sent in the console
  if (user !== '572633339039580172' || user !== '155149108183695360'){
    console.log(username + ' sent: ');
    console.log(msg.content);
  }
});
/*
fs.readFile('../botToken.txt', (err, data) => {
  if (err) throw err;
  data = data.toString();
  data = data.replace(/\n/g, '');
  bot.login(data);
});
*/





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

//function for adding channels to the aryWhitelist
function addChannel(user, chanID, msg, aryWhitelist, aryChannelIDs) {
  for (i = 0; i < aryWhitelist.length; i++) {
    if (user === aryWhitelist[i]) {
      aryChannelIDs[indexChan] = chanID;
      writeChannelIDs();
      indexChan = indexChan + 1;
      msg.channel.send('IT HAS BEGUN')
      console.log(`added channel ${chanID}`);
    }
  }
}

function removeChannel(user, chanID, msg, aryChannelIDs, aryWhitelist) {
  var channelRemoved = false;
  var channelExists = checkForChannel(aryChannelIDs, chanID, msg);
  if (channelExists === true)
  {
    for (i = 0; i < aryWhitelist.length; i++) {
      if (user === aryWhitelist[i]) {
        for (i = 0; i < aryChannelIDs.length; i++) {
          if (chanID === aryChannelIDs[i]) {
            aryChannelIDs[i] = '';
            writeChannelIDs();
            msg.channel.send("Y'ALL HAVE BEEN WEMOVED FROM SWAVEWY!");
            console.log(`removed channel ${chanID}`);
            channelRemoved = true;
            console.log(channelRemoved)
          }
          //console.log('hi')
          if (channelRemoved === true)
          {
            break;
          }
        }
      }
      if (channelRemoved === true)
      {
        break;
      }
    }
  }
}

//function for adding users to aryWhitelist
function addUser(user, userID, msg, aryWhitelist) {
  var listComplete = false;
  for (i = 0; i < aryWhitelist.length; i++) {
   // msg.channel.send(i);
    if (userID === aryWhitelist[i]){ /*aryWhitelist[i]*/ /*&& aryWhitelist[i] === '1337'){ /*|| userID === aryWhitelist[i-1]){*/ //&& aryWhitelist[i] === aryWhitelist[aryWhitelist.length-1]) {
      if (user === userID) {
        msg.channel.send("You can't add youw self dummy!");
        return;
      } else {
        console.log('user already added');
        msg.channel.send('Usew awweady added siwwy UwU');
        return;
      }
    }
    if (i === aryWhitelist.length-1) {
      listComplete = true;
    }
    if (listComplete) {
      for (i = 0; i < aryWhitelist.length; i++) {    // if (aryWhitelist[i] <= aryWhitelist.length)
        if (user === aryWhitelist[i]) {
          aryWhitelist[indexWhite] = userID;

          writeWhitelist();

          aryWhitelist [indexWhite + 1] = '1337';
          indexWhite = indexWhite + 1;
          msg.channel.send('Added usew ' + '<@' + userID + '>' + ' OwO!');
          console.log(`added a user ${userID}`);
          return;
        }
      }
    }
  }
}

function removeUser(user, userID, msg, aryWhitelist) {
  if (userID !== masterID){
    if (userID !== louieID){
      var loopComplete = false;
      for (i = 0; i < aryWhitelist.length; i++) {
        if (userID === aryWhitelist[i]) {
          loopComplete = true;
          if (user !== userID ) {
            for (i = 0; i < aryWhitelist.length; i++) {
              if (user === aryWhitelist[i]) {
                for( i = 0; i < aryWhitelist.length; i++) {
                  if (userID === aryWhitelist[i]) {
                    aryWhitelist[i] = '';

                    writeWhitelist();

                    //indexWhite = indexWhite - 1;
                    msg.channel.send('UwUf I guess ' + '<@' + userID + '>' + ' is no wonger coow ;w;');
                    console.log(`removed a person ${userID}`);
                  }
                }
              }
            }
          } else {
            msg.channel.send("You wouldn't want to wemove youw self would you OwO");
          }
        }
      }
      if (i === aryWhitelist.length && loopComplete !== true) {
        console.log('user was already removed');
        msg.channel.send('The usew is alweady gone you baka! (。-∀-)');
      }
    } else {
      msg.channel.send('YOU CANNOT REMOVE LOUIE-CHAN ÒwÓ!');
    }
  } else {
    msg.channel.send('YOU CANNOT REMOVE MASTER ÒwÓ!');
  }
}

function sendLink(msg) {

  msg.channel.send('You can invite me with this wink! https://discordapp.com/oauth2/authorize?client_id=572633339039580172&permissions=67464256&scope=bot');
//  fs.readFile('link.embed', (err, data) => {
//    if (err) throw err;

//    console.log(data);
//    const embed = new Discord.RichEmbed(data);
  //});
}

function checkForChannel(aryChannelIDs, chanID, msg)
{
  var channelInstances = 0;
  var channelExists = true;
  if (aryChannelIDs.length === 0)
  {
    msg.channel.send("There awen't even any sewverw whitewisted wetawd UwU");
    console.log('no whitelisted channels');
  }
  else
  {
    console.log('theres is at least one channel');
    for (i = 0; i<=aryChannelIDs.length-1; i++)
    {
      //console.log(i);
      if (aryChannelIDs[i] === chanID)
      {
        //console.log(aryChannelIDs[i]);
        //console.log(chanID);
        channelInstances = channelInstances + 1;
        //console.log(channelInstances);
        break;
      }
    }
  }
  if (channelInstances < 1)
  {
    channelExists = false;
    msg.channel.send("You can't stop whats nyot there siwwy");
  }
  return channelExists;
}

function readWhitelist(){
  fs.readFile('./text-files/Whitelist.txt' , (err,data) =>{
  if (err) throw err;

  data = data.toString();
  aryWhitelist = data.split(',');

  console.log('Whitelist Loaded');
  console.log(aryWhitelist);
  return aryWhitelist;

  });
}

function writeWhitelist() {
  fs.writeFile('./text-files/Whitelist.txt' , aryWhitelist, (err,data) => {
      if(err) throw err;

      console.log('whitelist written');
      console.log(aryWhitelist);
      readWhitelist();
      indexWhite = aryWhitelist.length-1;
  });
  return aryWhitelist, indexWhite;
}

function readChannelIDs(){
  fs.readFile('./text-files/ChannelIDs.txt' , (err,data) => {
  if (err) throw err;

  data = data.toString();
  data = data.replace(/\n/, '')
  data = data.replace(/\r/, '')
  aryChannelIDs = data.split(',');

  console.log('Channels Loaded');
  console.log(aryChannelIDs);
  return aryChannelIDs;

  });
}

function writeChannelIDs() {
  fs.writeFile('./text-files/ChannelIDs.txt' , aryChannelIDs, (err,data) => {
      if(err) throw err;
      console.log('Channels Written')
      console.log(aryChannelIDs);
      readChannelIDs();
      indexChan = aryChannelIDs.length-1;
  });
  return aryChannelIDs, indexChan;
}
