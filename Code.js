const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "Mst"
client.on('message', message => {
  if (!message.content.startsWith(Ast)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== 'NDExODY2MjI0NjkyMDM1NTg0.Dt12Hg.8DR7aTFCdj65F_qhP0tIPlXA8lY') return;

if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001%22);
    message.channel.sendMessage(**:white_check_mark:  : ${argresult}**)
}

});

client.login(TOKEN);
