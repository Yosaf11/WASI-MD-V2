//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaXTvQ7JuyAHXjJBs61T";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaXTvQ7JuyAHXjJBs61T";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fe157819027c6a7ebeaef.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923115971525";
global.owner = process.env.OWNER_NUMBER || "923115971525";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/fe157819027c6a7ebeaef.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU0wbGkxVXJMTkNlWFNQbmF1STB3RUF1RjQ3YklqbzlyK1hjWGlCcUFVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmtNWGwwejN0dEVSSVlsdTlDeW9zaCs2SGdvVndZR1BpV1pGbUFvc3praz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxR1BsMisyQ2psMmtDWmJTNTV4d2FTZ1hFb3VuTXg2bEdpbVZucGF1cDFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2b0l2VWt2NjY0VUNTZE1iMVZ2c2tzdk1LWExVd1JScXRLdXNCbTRQS2gwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndLQmpwZEtvcDJiK2hoSFl2blVUdjNiOWxGTXVkZlRnOGdaS3h6c0JhMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNNYjlYcE5LZkJ1OUQ0OWdpRXhrWlVXTC82dHljbXpIUWsvWFpVczZuVFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkowZHl6WDlLZklRTnN0KzFOdHNmWklYR1dQV29sR1FqclU5ZFlWeWlWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTY5dFZjKzAwZ0M4SzE3VUZWQTJHdkdWdCtadmREMlRiZkY4Szd1bE55TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQxajd0eDFXNDlzRTlxa0tIMGJIajZQcXVYdy9OUGNCMW9WK3FtYUhpOUwzdGp6Y1JtcjhCQkNpRjJiWmVic1J5bDdoejRMRDkxSEo3L280ekhhNkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJlR2FnYlUvd2NWSmMvaDRocWo2Q1VIK1VFV1p0ZStTSFdCd3ozd1NrVWtZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjblpwM0pwYlRJZVhQQVlXQms4VFhRIiwicGhvbmVJZCI6IjcxYzhkMGViLTRmYjgtNGIzZi04NGEwLTdmZWRhOGMxYmJmYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRK0xISlBPYU9nZmdOOTh1aVpsdnNhci9xYTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmNmZUlGem5TVURmQTBWcGxnam1JaytZMnB3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZMMjQxM1FGIiwibWUiOnsiaWQiOiI5MjMxMTU5NzE1MjU6NDJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08vWHBiMEJFTC9YeHJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijl3cHZsdHFNWVhSTFo5OVpiZ21tVkdEaDluaFpsMDBoVFBoMUZGcWovV1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZEYzkxWVNqUE5UZk5BdFFkTGYxVEpSTWQ1MFB3QUVwSVg4WGYrdm9PVU1neVU2Vm1BNHBUTU5taUUxWjFDS2dza01hcEJsNjk1NFRIWjQ3SkZ1cENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3T1JTOVh5UERuUS81bDdxSDlBbFBQb1lTcmRacytWR2Q0eGxUQ29XaWVEV1RYNTJ5UnpJS1c4b0xoQkpZNHlSRFRtNnNENGF5eERiKzJiNkE5OWJEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzExNTk3MTUyNTo0MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmY0tiNWJhakdGMFMyZmZXVzRKcGxSZzRmWjRXWmROSVV6NGRSUmFvLzFtIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyOTE5ODg0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhHSiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "YOUSAF KHAN BALOCH NO LOVE💔",
  author: process.env.PACK_AUTHER || "YOUSAF MUSA APNI PICTURE KA FREE STICKER BANWANY K LEYEA CONTACT ME 💔 03115971525,03075134110",
  packname: process.env.PACK_NAME || "YOUSAF BALOCH MUSA KHAN ♥️",
  botname: process.env.BOT_NAME || "YOUSAF KHAN BALOCH",
  ownername: process.env.OWNER_NAME || "YOUSAF BALOCH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
