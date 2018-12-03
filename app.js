const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Parliament Bot");
});
const prefix = "&"
client.on("message", (message) => {
function react() {
  message.react("🔽");
  globalreacts = globalreacts + 1
}
if(message.author.bot) return;
if (message.content.startsWith("'")) {
  setTimeout(react,500);
  message.react("🔼");
}
});
//Test Token
client.login(process.env.BOT_TOKEN);
