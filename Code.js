const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "#"
client.on('message', message => {
  if (!message.content.startsWith(Ast)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '') return;

if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001%22);
    message.channel.sendMessage(**:white_check_mark:  : ${argresult}**)
}

});

client.login(TOKEN);