module.exports.config = {
  name: "restart",
  version: "1.0.0",
  permssion: 3,
  prefix: true,
  premium: false,
  credits: "ALVI",
  description: "Restart the Bot",
  category: "system",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  return api.sendMessage(`╭──────────────➣
│𝗠𝗥.🅼🅰🆂🆄🅼 𝗦𝗘𝗥𝗩𝗘𝗥 is
│Trying To Restart...♻️
│━━━━•🔰•━━━━┓
│❖Restarting: in 6's
│
│
│ ╔══╦╦╗─╔╦══╗
│ ║╔╗║║╚╦╝╠║║╝
│ ║╠╣║╚╗║╔╬║║╗
│ ╚╝╚╩═╩═╝╚══╝
│	     Restarted..
│			 🄱🄾🅃
│  Bot by MASUM
│━━━━•♻️•━━━━┛
│𝗠𝗥.🅼🅰🆂🆄🅼 𝗦𝗘𝗥𝗩𝗘𝗥 is
│Successfully Restarted
╰──────────────➣`, threadID, () => process.exit(1));
}
