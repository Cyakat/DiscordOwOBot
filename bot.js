const Discord = require('discord.js');
const bot = new Discord.Client();
var aryChannelIDs = [];
var aryWhitelist = ['249382933054357504', '250408653830619137','1337'];
var indexChan = 0;
var indexWhite = 2;
var prefix = '!';
var masterID = '249382933054357504';
var louieID = '250408653830619137';
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
  var userID;

  console.log(channelID)

  var args = msg.content;

  if (args[0] === prefix) {
    cmd = args.substr(1, args.length-1);
    switch (cmd) {
      case 'owo':
        addChannel(user, channelID, msg, aryWhitelist)
        break;
      case 'uwu':
        removeChannel(user, channelID, msg, aryChannelIDs, aryWhitelist)
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
    /*args2 = cmd.split(' ');
    args2 = args2.replace(/<@!/g, '');
    args2 = args2.replace(/>/g, '');

      switch (args2) {
        case 'add user':
          var userID = args2[2];
          addUser(userID, msg);
          break;
        case 'remove user':
          var userID = args2[2];
          removeUser(userID, msg);
          break;
      }*/

  }
  for (i; i<aryChannelIDs.length; i++) {
    if (channelID === aryChannelIDs[i]) {
      owo(user, msg, channelID, aryChannelIDs[i]);
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

//function for adding channels to the aryWhitelist
function addChannel(user, chanID, msg, aryWhitelist) {
  for (i = 0; i < aryWhitelist.length; i++) {
    if (user === aryWhitelist[i]) {
      aryChannelIDs[indexChan] = chanID;
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
                    aryWhitelist[i] = ' ';
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
