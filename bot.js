const Discord = require('discord.js');
const bot = new Discord.Client();
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


bot.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});
readWhitelist();
readChannelIDs();
indexChan = aryChannelIDs-1;
indexWhite = aryWhitelist-1;
bot.on('message', msg => {

  var channel = msg.channel;
  var i = 0;
  var user = msg.author.id;
  var username = msg.author.username;
  var channelID = msg.channel.id;
  var userID;
  var args = msg.content;

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
        sendLink(fs, msg)
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

fs.readFile('../botToken.txt', (err, data) => {
  if (err) throw err;

  console.log(data.toString());
  data = data.toString();
  data = data.replace(/\n/g, '');
  bot.login(data);
});





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
  for (i = 0; i < aryWhitelist.length; i++) {
    if (user === aryWhitelist[i]) {
      for (i = 0; i < aryChannelIDs.length; i++) {
        if (chanID === aryChannelIDs[i]) {
          aryChannelIDs[i] = '';
          writeChannelIDs();
          msg.channel.send("Y'ALL HAVE BEEN REMOVED FROM SLAVERY!");
          console.log(`removed channel ${chanID}`);
        }
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
        msg.channel.send("You can't add your self dummy!");
        return;
      } else {
        console.log('user already added');
        msg.channel.send('User already added siwwy UwU');
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
          msg.channel.send('Added user ' + '<@' + userID + '>' + ' OwO!');
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
                    msg.channel.send('oof I guess ' + '<@' + userID + '>' + ' is no longer cool ;w;');
                    console.log(`removed a person ${userID}`);
                  }
                }
              }
            }
          } else {
            msg.channel.send("You wouldn't want to remove your self would you OwO");
          }
        }
      }
      if (i === aryWhitelist.length && loopComplete !== true) {
        console.log('user was already removed');
        msg.channel.send('The user is already gone you baka! (。-∀-)');
      }
    } else {
      msg.channel.send('YOU CANNOT REMOVE LOUIE-CHAN ÒwÓ!');
    }
  } else {
    msg.channel.send('YOU CANNOT REMOVE MASTER ÒwÓ!');
  }
}

function sendLink(fs, msg) {

  fs.readFile('link.embed', (err, data) => {
    if (err) throw err;

    console.log(data);
    const embed = new Discord.RichEmbed(data);
  });
}



function readWhitelist(){
  fs.readFile('Whitelist.txt' , (err,data) =>{
  if (err) throw err;

  data = data.toString();
  aryWhitelist = data.split(',');

  console.log('Whitelist Loaded');
  console.log(aryWhitelist);
  return aryWhitelist;

  });
}

function writeWhitelist() {
  fs.writeFile('Whitelist.txt' , aryWhitelist, (err) => {
      if(err) throw err;

      console.log('whitelist written');
      console.log(aryWhitelist);
      readWhitelist();
      indexWhite = aryWhitelist.length-1;
  });
  return aryWhitelist, indexWhite;
}

function readChannelIDs(){
  fs.readFile('ChannelIDs.txt' , (err,data) => {
  if (err) throw err;

  data = data.toString();
  aryChannelIDs = data.split(',');

  console.log('Channels Loaded');
  console.log(aryChannelIDs);
  return aryChannelIDs;

  });
}

function writeChannelIDs() {
  fs.writeFile('ChannelIDs.txt' , aryChannelIDs, (err) => {
      if(err) throw err;
      console.log(aryChannelIDs);
      readChannelIDs();
      indexChan = aryChannelIDs.length-1;
  });
}
