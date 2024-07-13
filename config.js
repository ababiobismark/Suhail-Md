const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233595652412";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_49_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MixcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDkyLFxuICAgICAgICA2LFxuICAgICAgICA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNixcbiAgICAgICAgMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDExLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ0LFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDM3LFxuICAgICAgICA4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2LFxuICAgICAgICA2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM1LFxuICAgICAgICA5LFxuICAgICAgICA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieG5rTjl1d0hScHk0eERtdTd3MC9PQWtBRFRNNm9WKzM1Y3c3T3VhczBvYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTHpQTHJiZUlRUXFUZFZPOVBTR29qd1wiLFxuICBcInBob25lSWRcIjogXCJiMGQ2ZmI5ZC01YzBlLTQzMmQtOTc2My1iNzAzNDNlNjI5OTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMTc4LFxuICAgICAgMjAxLFxuICAgICAgMTE3LFxuICAgICAgMjUzLFxuICAgICAgNjUsXG4gICAgICAxNDAsXG4gICAgICAxMzgsXG4gICAgICAxNzQsXG4gICAgICAxMzQsXG4gICAgICAxMzgsXG4gICAgICAxMzYsXG4gICAgICA1MyxcbiAgICAgIDY3LFxuICAgICAgMTIzLFxuICAgICAgNjQsXG4gICAgICAyNixcbiAgICAgIDIxOSxcbiAgICAgIDEyMSxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgMTk0LFxuICAgICAgMTYzLFxuICAgICAgMTA5LFxuICAgICAgMTcxLFxuICAgICAgMTQ3LFxuICAgICAgODUsXG4gICAgICA3NCxcbiAgICAgIDEwNixcbiAgICAgIDI1MixcbiAgICAgIDE5OSxcbiAgICAgIDE4OSxcbiAgICAgIDE1MSxcbiAgICAgIDE2NixcbiAgICAgIDIzLFxuICAgICAgMjM5LFxuICAgICAgMTc5LFxuICAgICAgMjgsXG4gICAgICAxOTUsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlZHSFFFQUNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUzODE1MjQ3OTozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzI3OTE2MDkwNTM0Mzg6MzhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWhiZW5hYeKdpO+4j/CfqbfinaPvuI9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJaWludThORUtTYnliUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9PTkVld29sR1l5MndFck9Qb0xwakVlR0lSRFVMcDFQbm4vVnZTaEVnVEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2QzNmVnMmh2ZXVaWTRtRGN6d3YvSDYyWDVCT3E5bmRlLzZkUWp4K0NJKzNndDNrZXJvRUc2eE8xTEtWbVFuMVErUm1WOUJmdU5ldjdNV2hmMi9paFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWEhjVnhJOVhzQW9Ua1YxZjNwb01GOGJTUktJbU5Gd3ExVlJkVG16Y1ZYWGtwSTQ4N3BYQmdxRFNLRkJHTEVsUEpvU05QSDJ2N2M0TXhVY3M4ang1QVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTM4MTUyNDc5OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODY0MTY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQStMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBK0wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyb25IUGsvcnBQS01nNy9CYW41WXVUM240VSs0Uk9kcDFVMGwyNVdVaUlVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM3MjI5NDA2ODAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDg2NDE2ODY0NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
